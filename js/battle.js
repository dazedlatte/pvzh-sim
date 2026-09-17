const Battle = {
    state: null,
    aiDifficulty: 'medium',
    selectedPlayerHero: null,
    selectedEnemyHero: null,

    init() {
        document.getElementById('start-battle').addEventListener('click', () => this.startBattle());
        document.getElementById('end-turn').addEventListener('click', () => this.endTurn());
        document.getElementById('battle-menu').addEventListener('click', () => this.showMenu());
        document.getElementById('play-again').addEventListener('click', () => this.showSetup());
        document.getElementById('back-to-menu').addEventListener('click', () => this.showSetup());
    },

    showSetup() {
        document.getElementById('battle-setup').style.display = 'block';
        document.getElementById('battlefield').style.display = 'none';
        document.getElementById('battle-log').style.display = 'none';
        document.getElementById('game-over').style.display = 'none';
    },

    isPlantHero(heroId) {
        const hero = CARD_DATA.heroes.find(h => h.id === heroId);
        if (!hero) return false;
        return hero.classes.some(c => ['kabloom','guardian','mega-grow','solar','smarty'].includes(c));
    },

    isZombieHero(heroId) {
        const hero = CARD_DATA.heroes.find(h => h.id === heroId);
        if (!hero) return false;
        return hero.classes.some(c => ['beastly','brainy','crazy','hearty','sneaky'].includes(c));
    },

    startBattle() {
        const playerHeroEl = document.querySelector('#player-hero-select .card.selected');
        const enemyHeroEl = document.querySelector('#enemy-hero-select .card.selected');
        if (!playerHeroEl || !enemyHeroEl) {
            DeckBuilder.showToast('Select both heroes!', 'error');
            return;
        }

        this.selectedPlayerHero = playerHeroEl.dataset.heroId;
        this.selectedEnemyHero = enemyHeroEl.dataset.heroId;
        this.aiDifficulty = document.getElementById('ai-difficulty').value;

        // Enforce plant vs zombie
        const playerIsPlant = this.isPlantHero(this.selectedPlayerHero);
        const playerIsZombie = this.isZombieHero(this.selectedPlayerHero);
        const enemyIsPlant = this.isPlantHero(this.selectedEnemyHero);
        const enemyIsZombie = this.isZombieHero(this.selectedEnemyHero);

        if (playerIsPlant && enemyIsPlant) {
            DeckBuilder.showToast('Plant vs Plant is not allowed! Pick a Zombie hero for the enemy.', 'error');
            return;
        }
        if (playerIsZombie && enemyIsZombie) {
            DeckBuilder.showToast('Zombie vs Zombie is not allowed! Pick a Plant hero for the enemy.', 'error');
            return;
        }

        const playerHero = CARD_DATA.heroes.find(h => h.id === this.selectedPlayerHero);
        const enemyHero = CARD_DATA.heroes.find(h => h.id === this.selectedEnemyHero);

        // Build decks from hero's classes
        const playerDeckCards = getHeroCards(this.selectedPlayerHero)
            .filter(c => c.type !== 'hero')
            .sort(() => Math.random() - 0.5)
            .slice(0, 40);
        const enemyDeckCards = getHeroCards(this.selectedEnemyHero)
            .filter(c => c.type !== 'hero')
            .sort(() => Math.random() - 0.5)
            .slice(0, 40);

        this.state = {
            turn: 1,
            phase: 'zombies_play', // zombies_play, plants_play, zombie_tricks, fight
            player: {
                hero: { ...playerHero, currentHP: playerHero.hp },
                deck: playerDeckCards.map(c => ({ ...c, uid: this.uid() })),
                hand: [],
                sun: 1,
                maxSun: 1,
                superpowers: [...playerHero.superpowers]
            },
            enemy: {
                hero: { ...enemyHero, currentHP: enemyHero.hp },
                deck: enemyDeckCards.map(c => ({ ...c, uid: this.uid() })),
                hand: [],
                brains: 1,
                maxBrains: 1,
                superpowers: [...enemyHero.superpowers]
            },
            board: Array(5).fill(null).map((_, i) => ({
                lane: i,
                plant: null,
                zombie: null,
                environment: null
            })),
            log: [],
            gameOver: false,
            winner: null
        };

        // Draw starting hands (4 cards each)
        for (let i = 0; i < 4; i++) {
            this.drawCard('player');
            this.drawCard('enemy');
        }

        document.getElementById('battle-setup').style.display = 'none';
        document.getElementById('battlefield').style.display = 'flex';
        document.getElementById('battle-log').style.display = 'block';
        document.getElementById('game-over').style.display = 'none';

        this.updateUI();
        this.log(`${playerHero.icon} ${playerHero.name} vs ${enemyHero.icon} ${enemyHero.name}!`);
        this.log('Zombies play first!');
    },

    uid() {
        return Math.random().toString(36).substr(2, 9);
    },

    drawCard(who) {
        const p = this.state[who];
        if (p.deck.length === 0 || p.hand.length >= 10) return false;
        const card = p.deck.shift();
        p.hand.push(card);
        return true;
    },

    playCard(who, handIndex, lane) {
        const p = this.state[who];
        const card = p.hand[handIndex];
        if (!card) return false;

        const cost = card.cost || 0;
        const resources = who === 'player' ? p.sun : p.brains;
        if (cost > resources) {
            this.log(`Not enough ${who === 'player' ? 'Sun' : 'Brains'}!`, 'error');
            return false;
        }

        const boardSlot = this.state.board[lane];
        if (!boardSlot) return false;

        // Check if slot is occupied
        if (card.type === 'plant' && boardSlot.plant) {
            this.log('Lane already occupied!', 'error');
            return false;
        }
        if (card.type === 'zombie' && boardSlot.zombie) {
            this.log('Lane already occupied!', 'error');
            return false;
        }

        // Deduct cost
        if (who === 'player') p.sun -= cost;
        else p.brains -= cost;

        // Remove from hand
        p.hand.splice(handIndex, 1);

        // Place on board
        const boardCard = {
            ...card,
            currentAttack: card.attack || 0,
            currentHealth: card.health || 0,
            owner: who,
            hasAttacked: false,
            frozen: false,
            shield: 0
        };

        if (card.type === 'plant') {
            boardSlot.plant = boardCard;
        } else if (card.type === 'zombie') {
            boardSlot.zombie = boardCard;
        } else if (card.type === 'trick') {
            this.resolveTrick(card, who, lane);
        }

        this.log(`${p.hero.icon} ${p.hero.name} played ${card.icon} ${card.name}`, 'play');
        this.processOnPlayAbilities(card, who, lane);
        this.updateUI();
        return true;
    },

    resolveTrick(card, who, lane) {
        const target = who === 'player' ? 'enemy' : 'player';
        const abilities = card.abilities || [];

        abilities.forEach(ability => {
            if (ability === 'damage_2') {
                // Bungee Plumber - 2 damage to a zombie
                const targetSlot = this.findBestTarget(target);
                if (targetSlot) {
                    this.dealDamageToUnit(targetSlot, target === 'enemy' ? 'zombie' : 'plant', 2);
                }
            } else if (ability === 'heal_4_draw') {
                this.state[who].hero.currentHP = Math.min(this.state[who].hero.hp, this.state[who].hero.currentHP + 4);
                this.drawCard(who);
                this.log(`Healed 4 and drew a card!`, 'heal');
            } else if (ability === 'bounce_zombie') {
                const slot = this.findBestTarget(target);
                if (slot && slot.zombie) {
                    this.state[who].hand.push(slot.zombie);
                    slot.zombie = null;
                    this.log(`Bounced ${slot.zombie?.name || 'zombie'}!`);
                }
            } else if (ability === 'all_plants_plus_2_str') {
                this.state.board.forEach(slot => {
                    if (slot.plant && slot.plant.owner === who) {
                        slot.plant.currentAttack += 2;
                    }
                });
                this.log(`All your Plants got +2 Strength!`);
            } else if (ability === 'all_zombies_plus_1_frenzy') {
                this.state.board.forEach(slot => {
                    if (slot.zombie && slot.zombie.owner === who) {
                        slot.zombie.currentAttack += 1;
                        slot.zombie.currentHealth += 1;
                        if (!slot.zombie.traits) slot.zombie.traits = [];
                        if (!slot.zombie.traits.includes('frenzy')) slot.zombie.traits.push('frenzy');
                    }
                });
                this.log(`All your Zombies got +1/+1 and Frenzy!`);
            }
        });
    },

    processOnPlayAbilities(card, who, lane) {
        const abilities = card.abilities || [];
        const target = who === 'player' ? 'enemy' : 'player';

        abilities.forEach(ability => {
            if (ability === 'on_play_damage_3' || ability === 'damage_3') {
                const slot = this.findBestTarget(target);
                if (slot) this.dealDamageToUnit(target === 'enemy' ? 'zombie' : 'plant', 3, lane);
            } else if (ability === 'on_play_freeze_zombie') {
                const slot = this.state.board[lane];
                if (slot && slot.zombie && slot.zombie.owner === target) {
                    slot.zombie.frozen = true;
                    this.log(`Froze ${slot.zombie.name}!`);
                }
            } else if (ability === 'on_play_bounce') {
                const slot = this.state.board[lane];
                if (slot && slot.zombie && slot.zombie.owner === target) {
                    const owner = slot.zombie.owner;
                    this.state[owner === 'player' ? 'player' : 'enemy'].hand.push(slot.zombie);
                    slot.zombie = null;
                }
            } else if (ability === 'on_play_destroy_gravestone') {
                const slot = this.state.board[lane];
                if (slot && slot.zombie && slot.zombie.owner === target && slot.zombie.traits?.includes('gravestone')) {
                    slot.zombie.currentHealth = 0;
                }
            } else if (ability === 'on_play_draw_2') {
                this.drawCard(who);
                this.drawCard(who);
            } else if (ability === 'on_play_plant_plus_3') {
                const slot = this.state.board[lane];
                if (slot && slot.plant && slot.plant.owner === who) {
                    slot.plant.currentAttack += 3;
                    slot.plant.currentHealth += 3;
                }
            } else if (ability === 'on_play_buff_mushrooms') {
                this.state.board.forEach(s => {
                    if (s.plant && s.plant.owner === who && s.plant.tribe === 'Mushroom') {
                        s.plant.currentAttack += 1;
                        s.plant.currentHealth += 1;
                    }
                });
            } else if (ability === 'on_play_buff_ally_2') {
                const slot = this.state.board[lane];
                if (slot && slot.plant && slot.plant.owner === who && slot.plant.uid !== card.uid) {
                    slot.plant.currentAttack += 2;
                    slot.plant.currentHealth += 2;
                }
            } else if (ability === 'on_play_plus_1_str_this_turn') {
                const slot = this.state.board[lane];
                if (slot && slot.plant) {
                    slot.plant.currentAttack += 1;
                }
            } else if (ability === 'on_play_destroy_all_4_str') {
                this.state.board.forEach(slot => {
                    if (slot.plant && slot.plant.currentAttack >= 4) slot.plant.currentHealth = 0;
                    if (slot.zombie && slot.zombie.currentAttack >= 4) slot.zombie.currentHealth = 0;
                });
                this.log('Destroyed all units with 4+ Strength!');
            } else if (ability === 'on_play_destroy_plant_3') {
                const slot = this.state.board[lane];
                if (slot && slot.plant && slot.plant.currentAttack <= 3) {
                    slot.plant.currentHealth = 0;
                }
            } else if (ability === 'on_play_destroy_any_zombie') {
                const slot = this.state.board[lane];
                if (slot && slot.zombie) {
                    slot.zombie.currentHealth = 0;
                }
            } else if (ability === 'on_play_damage_all_zombies_4') {
                this.state.board.forEach(slot => {
                    if (slot.zombie) {
                        slot.zombie.currentHealth -= 4;
                    }
                });
                this.log('Kernel Corn dealt 4 damage to all Zombies!');
            } else if (ability === 'on_play_make_puff') {
                const slot = this.state.board[lane];
                if (slot && !slot.plant) {
                    slot.plant = {
                        name: 'Puff-Shroom', icon: '🍄', type: 'plant', tribe: 'Mushroom',
                        currentAttack: 1, currentHealth: 1, owner: who, traits: ['team-up'],
                        uid: this.uid()
                    };
                }
            } else if (ability === 'on_play_make_pear') {
                const slot = this.state.board[lane];
                if (slot && !slot.plant) {
                    slot.plant = {
                        name: 'Pear Pal', icon: '🍐', type: 'plant', tribe: 'Fruit',
                        currentAttack: 2, currentHealth: 2, owner: who, traits: ['team-up'],
                        uid: this.uid()
                    };
                }
            } else if (ability === 'on_play_move_random') {
                const emptyLanes = this.state.board.filter((s, i) => !s.plant && i !== lane);
                if (emptyLanes.length > 0) {
                    const newLane = emptyLanes[Math.floor(Math.random() * emptyLanes.length)];
                    const slot = this.state.board[lane];
                    if (slot.plant && slot.plant.owner === who) {
                        newLane.plant = slot.plant;
                        slot.plant = null;
                    }
                }
            } else if (ability === 'on_play_move_zombie_here') {
                const targetSlot = this.findBestTarget(target);
                if (targetSlot && targetSlot.zombie && targetSlot.zombie.owner === target) {
                    const slot = this.state.board[lane];
                    if (!slot.zombie) {
                        slot.zombie = targetSlot.zombie;
                        targetSlot.zombie = null;
                    }
                }
            } else if (ability === 'on_play_damage_2') {
                const slot = this.findBestTarget(target);
                if (slot) this.dealDamageToUnit(target, 2, lane);
            } else if (ability === 'on_play_damage_zombie_5') {
                const slot = this.state.board[lane];
                if (slot && slot.zombie) {
                    slot.zombie.currentHealth -= 5;
                }
            } else if (ability === 'on_play_bomb_here_adjacent') {
                const slot = this.state.board[lane];
                if (slot?.zombie) slot.zombie.currentHealth -= 4;
                if (lane > 0 && this.state.board[lane-1]?.zombie) this.state.board[lane-1].zombie.currentHealth -= 4;
                if (lane < 4 && this.state.board[lane+1]?.zombie) this.state.board[lane+1].zombie.currentHealth -= 4;
            } else if (ability === 'on_play_halve_enemy_hp') {
                this.state[target].hero.currentHP = Math.ceil(this.state[target].hero.currentHP / 2);
                this.log(`Halved ${this.state[target].hero.name}'s HP!`);
            } else if (ability === 'on_play_wall_nut_bowling') {
                this.state.board.forEach((slot, i) => {
                    if (!slot.plant) {
                        slot.plant = {
                            name: 'Wall-Nut', icon: '🥜', type: 'plant', tribe: 'Nut',
                            currentAttack: 6, currentHealth: 6, owner: who, traits: ['team-up'],
                            uid: this.uid()
                        };
                    }
                });
            } else if (ability === 'on_play_make_lil_buddies') {
                const dirs = [lane-1, lane, lane+1].filter(i => i >= 0 && i < 5);
                dirs.forEach(i => {
                    const slot = this.state.board[i];
                    if (slot && !slot.plant) {
                        slot.plant = {
                            name: 'Lil\' Buddy', icon: '🌸', type: 'plant', tribe: 'Flower',
                            currentAttack: 1, currentHealth: 1, owner: who, traits: ['team-up'],
                            uid: this.uid()
                        };
                    }
                });
            } else if (ability === 'on_play_drain_all_brains') {
                this.state.enemy.brains = 0;
                this.state.enemy.maxBrains = 0;
                this.log('Brainana drained all Brains!');
            } else if (ability === 'on_play_make_dancers') {
                const dirs = [lane-1, lane+1].filter(i => i >= 0 && i < 5);
                dirs.forEach(i => {
                    const slot = this.state.board[i];
                    if (slot && !slot.zombie) {
                        slot.zombie = {
                            name: 'Backup Dancer', icon: '🕺', type: 'zombie', tribe: 'Dancing',
                            currentAttack: 1, currentHealth: 1, owner: who,
                            uid: this.uid()
                        };
                    }
                });
            } else if (ability === 'on_play_make_2_dancers') {
                const emptyLanes = this.state.board.filter(s => !s.zombie);
                emptyLanes.slice(0, 2).forEach(slot => {
                    slot.zombie = {
                        name: 'Backup Dancer', icon: '🕺', type: 'zombie', tribe: 'Dancing',
                        currentAttack: 1, currentHealth: 1, owner: who,
                        uid: this.uid()
                    };
                });
            } else if (ability === 'on_play_damage_hero_3') {
                this.state[target].hero.currentHP -= 3;
                this.log(`Trickster dealt 3 damage to ${this.state[target].hero.name}!`, 'damage');
            } else if (ability === 'on_play_conjure') {
                const allCards = CARD_DATA.cards;
                const conjured = allCards[Math.floor(Math.random() * allCards.length)];
                this.state[who].hand.push({ ...conjured, uid: this.uid() });
                this.log(`Conjured ${conjured.name}!`);
            } else if (ability === 'on_play_conjure_gourmet') {
                const gourmet = CARD_DATA.cards.filter(c => c.tribe === 'Gourmet');
                if (gourmet.length) {
                    const c = gourmet[Math.floor(Math.random() * gourmet.length)];
                    this.state[who].hand.push({ ...c, uid: this.uid() });
                }
            } else if (ability === 'on_play_conjure_superpower') {
                this.log('Conjured a Superpower!');
            } else if (ability === 'on_play_plant_plus_1_bonus') {
                const slot = this.state.board[lane];
                if (slot?.plant && slot.plant.owner === who) {
                    slot.plant.currentAttack += 1;
                    slot.plant.currentHealth += 1;
                    this.doBonusAttack(slot.plant, lane);
                }
            } else if (ability === 'on_play_triple_bonus_attack') {
                const slot = this.state.board[lane];
                if (slot?.plant && slot.plant.owner === who) {
                    for (let i = 0; i < 3; i++) {
                        this.doBonusAttack(slot.plant, lane);
                    }
                }
            } else if (ability === 'on_play_transform_all_pineclones') {
                this.state.board.forEach(slot => {
                    if (slot.plant && slot.plant.owner === who) {
                        slot.plant = {
                            name: 'Pineclone', icon: '🌲', type: 'plant', tribe: 'Pinecone',
                            currentAttack: 3, currentHealth: 3, owner: who,
                            uid: this.uid()
                        };
                    }
                });
            } else if (ability === 'on_play_damage_all_zombies_1') {
                this.state.board.forEach(slot => {
                    if (slot.zombie) slot.zombie.currentHealth -= 1;
                });
            } else if (ability === 'on_play_bounce_plant') {
                const slot = this.state.board[lane];
                if (slot?.plant && slot.plant.owner === target) {
                    this.state[target].hand.push(slot.plant);
                    slot.plant = null;
                }
            } else if (ability === 'on_play_destroy_plant_2') {
                const slot = this.state.board[lane];
                if (slot?.plant && slot.plant.currentAttack <= 2) {
                    slot.plant.currentHealth = 0;
                }
            } else if (ability === 'on_play_destroy_plant_4') {
                const slot = this.state.board[lane];
                if (slot?.plant && slot.plant.currentAttack >= 4) {
                    slot.plant.currentHealth = 0;
                }
            } else if (ability === 'all_zombies_plus_1') {
                this.state.board.forEach(slot => {
                    if (slot.zombie && slot.zombie.owner === who) {
                        slot.zombie.currentAttack += 1;
                        slot.zombie.currentHealth += 1;
                    }
                });
            } else if (ability === 'on_play_reduce_next_cost') {
                // Reduce cost of next zombie in hand by 1
                const zombieInHand = this.state[who].hand.find(c => c.type === 'zombie');
                if (zombieInHand) zombieInHand.cost = Math.max(0, zombieInHand.cost - 1);
            } else if (ability === 'on_play_damage_all_1') {
                this.state.board.forEach(slot => {
                    if (slot.plant) slot.plant.currentHealth -= 1;
                    if (slot.zombie) slot.zombie.currentHealth -= 1;
                });
            } else if (ability === 'on_play_move_plant') {
                const plantSlot = this.findBestTarget(target);
                if (plantSlot?.plant) {
                    const empty = this.state.board.find(s => !s.plant && !s.zombie);
                    if (empty) {
                        empty.plant = plantSlot.plant;
                        plantSlot.plant = null;
                    }
                }
            } else if (ability === 'on_play_move_plant_random') {
                const plantSlot = this.findBestTarget(target);
                if (plantSlot?.plant) {
                    const emptyLanes = this.state.board.filter(s => !s.plant && !s.zombie);
                    if (emptyLanes.length) {
                        const newLane = emptyLanes[Math.floor(Math.random() * emptyLanes.length)];
                        newLane.plant = plantSlot.plant;
                        plantSlot.plant = null;
                    }
                }
            } else if (ability === 'on_play_bounce_all_zombies') {
                this.state.board.forEach(slot => {
                    if (slot.zombie && slot.zombie.owner === target) {
                        this.state[target === 'player' ? 'player' : 'enemy'].hand.push(slot.zombie);
                        slot.zombie = null;
                    }
                });
            } else if (ability === 'on_play_damage_adjacent_zombies') {
                if (lane > 0 && this.state.board[lane-1]?.zombie) this.state.board[lane-1].zombie.currentHealth -= 2;
                if (lane < 4 && this.state.board[lane+1]?.zombie) this.state.board[lane+1].zombie.currentHealth -= 2;
            } else if (ability === 'superpower_precision_blast') {
                this.state.enemy.hero.currentHP -= 6;
                this.log('Precision Blast dealt 6 damage to enemy hero!', 'damage');
            } else if (ability === 'on_play_freeze_adjacent') {
                if (lane > 0 && this.state.board[lane-1]?.zombie) {
                    this.state.board[lane-1].zombie.frozen = true;
                    this.state.board[lane-1].zombie.currentHealth -= 2;
                }
                if (lane < 4 && this.state.board[lane+1]?.zombie) {
                    this.state.board[lane+1].zombie.frozen = true;
                    this.state.board[lane+1].zombie.currentHealth -= 2;
                }
            }
        });
    },

    findBestTarget(forWho) {
        // Find the best target lane for an effect
        for (const slot of this.state.board) {
            if (forWho === 'enemy' && slot.zombie && slot.zombie.owner === 'enemy') return slot;
            if (forWho === 'player' && slot.plant && slot.plant.owner === 'player') return slot;
        }
        // Fallback to any lane with a unit
        for (const slot of this.state.board) {
            if (forWho === 'enemy' && slot.zombie) return slot;
            if (forWho === 'player' && slot.plant) return slot;
        }
        return null;
    },

    dealDamageToUnit(target, damage, lane) {
        const slot = this.state.board[lane];
        if (!slot) return;
        if (target === 'zombie' && slot.zombie) {
            slot.zombie.currentHealth -= damage;
        } else if (target === 'plant' && slot.plant) {
            slot.plant.currentHealth -= damage;
        }
    },

    doBonusAttack(attacker, lane) {
        if (attacker.currentAttack <= 0) return;
        const slot = this.state.board[lane];
        if (!slot) return;

        const defender = attacker.owner === 'player' ? slot.zombie : slot.plant;
        if (defender) {
            defender.currentHealth -= attacker.currentAttack;
            attacker.currentHealth -= defender.currentAttack || 0;
            this.log(`${attacker.name} bonus attacked ${defender.name} for ${attacker.currentAttack}!`, 'damage');
        } else {
            // Attack hero
            const heroTarget = attacker.owner === 'player' ? 'enemy' : 'player';
            this.state[heroTarget].hero.currentHP -= attacker.currentAttack;
            this.log(`${attacker.name} bonus attacked ${this.state[heroTarget].hero.name} for ${attacker.currentAttack}!`, 'damage');
        }
    },

    fightPhase() {
        this.log('--- Fight Phase ---');
        for (let i = 0; i < 5; i++) {
            const slot = this.state.board[i];
            if (!slot) continue;

            const plant = slot.plant;
            const zombie = slot.zombie;

            if (plant && zombie) {
                // They fight each other
                zombie.currentHealth -= plant.currentAttack;
                plant.currentHealth -= zombie.currentAttack;
                this.log(`${plant.name} (⚔${plant.currentAttack}) vs ${zombie.name} (⚔${zombie.currentAttack})`, 'damage');

                // Check for abilities
                if (plant.traits?.includes('strikethrough') && zombie.currentHealth <= 0) {
                    this.state.enemy.hero.currentHP -= plant.currentAttack;
                    this.log(`${plant.name} Strikethrough hit hero!`, 'damage');
                }
                if (zombie.traits?.includes('strikethrough') && plant.currentHealth <= 0) {
                    this.state.player.hero.currentHP -= zombie.currentAttack;
                    this.log(`${zombie.name} Strikethrough hit hero!`, 'damage');
                }
                if (zombie.traits?.includes('frenzy') && plant.currentHealth <= 0) {
                    this.state.enemy.hero.currentHP -= zombie.currentAttack;
                    this.log(`${zombie.name} Frenzy hit hero!`, 'damage');
                }
                if (plant.traits?.includes('frenzy') && zombie.currentHealth <= 0) {
                    this.state.player.hero.currentHP -= plant.currentAttack;
                    this.log(`${plant.name} Frenzy hit hero!`, 'damage');
                }
            } else if (plant && !zombie) {
                // Plant attacks hero
                this.state.enemy.hero.currentHP -= plant.currentAttack;
                if (plant.currentAttack > 0) {
                    this.log(`${plant.name} dealt ${plant.currentAttack} to ${this.state.enemy.hero.name}`, 'damage');
                }
                if (plant.abilities?.includes('on_hit_hero_plus_1_str')) {
                    plant.currentAttack += 1;
                }
                if (plant.abilities?.includes('on_damage_heal_hero')) {
                    this.state.player.hero.currentHP = Math.min(this.state.player.hero.hp, this.state.player.hero.currentHP + plant.currentAttack);
                }
            } else if (!plant && zombie) {
                // Zombie attacks hero
                this.state.player.hero.currentHP -= zombie.currentAttack;
                if (zombie.currentAttack > 0) {
                    this.log(`${zombie.name} dealt ${zombie.currentAttack} to ${this.state.player.hero.name}`, 'damage');
                }
            }
        }
    },

    startOfTurnEffects(who) {
        const p = this.state[who];
        this.state.board.forEach((slot, i) => {
            const unit = who === 'player' ? slot.plant : slot.zombie;
            if (unit && unit.owner === who) {
                if (unit.abilities?.includes('start_of_turn_sun_1') && who === 'player') {
                    this.state.player.sun += 1;
                }
                if (unit.abilities?.includes('start_of_turn_sun_2') && who === 'player') {
                    this.state.player.sun += 2;
                }
                if (unit.abilities?.includes('start_of_turn_brain_1') && who === 'enemy') {
                    this.state.enemy.brains += 1;
                }
                if (unit.abilities?.includes('start_of_turn_self_plus_1')) {
                    unit.currentAttack += 1;
                    unit.currentHealth += 1;
                }
                if (unit.abilities?.includes('start_of_turn_double_self')) {
                    unit.currentAttack *= 2;
                    unit.currentHealth *= 2;
                }
            }
        });
    },

    endOfTurnEffects(who) {
        this.state.board.forEach((slot, i) => {
            const unit = who === 'player' ? slot.plant : slot.zombie;
            if (unit && unit.owner === who) {
                if (unit.abilities?.includes('end_of_turn_destroy_adjacent')) {
                    // Three-Headed Chomper
                    [i-1, i, i+1].forEach(lane => {
                        if (lane >= 0 && lane < 5) {
                            if (this.state.board[lane].zombie && this.state.board[lane].zombie.owner !== who) {
                                this.state.board[lane].zombie.currentHealth = 0;
                            }
                            if (lane > 0 && this.state.board[lane-1]?.zombie) {
                                this.state.board[lane-1].zombie.currentHealth = 0;
                            }
                            if (lane < 4 && this.state.board[lane+1]?.zombie) {
                                this.state.board[lane+1].zombie.currentHealth = 0;
                            }
                        }
                    });
                    this.log('Three-Headed Chomper destroyed zombies!');
                }
            }
        });

        // Remove dead units
        this.cleanBoard();
    },

    cleanBoard() {
        this.state.board.forEach(slot => {
            if (slot.plant && slot.plant.currentHealth <= 0) {
                this.log(`${slot.plant.icon} ${slot.plant.name} was destroyed!`);
                if (slot.plant.abilities?.includes('on_destroy_damage_here_2')) {
                    if (slot.zombie) slot.zombie.currentHealth -= 2;
                }
                if (slot.plant.abilities?.includes('on_destroy_damage_here_4')) {
                    if (slot.zombie) slot.zombie.currentHealth -= 4;
                }
                if (slot.plant.abilities?.includes('on_destroy_damage_hero_6')) {
                    this.state.enemy.hero.currentHP -= 6;
                    this.log('Grapes of Wrath dealt 6 to enemy hero!', 'damage');
                }
                slot.plant = null;
            }
            if (slot.zombie && slot.zombie.currentHealth <= 0) {
                this.log(`${slot.zombie.icon} ${slot.zombie.name} was destroyed!`);
                if (slot.zombie.abilities?.includes('on_destroy_damage_hero_2')) {
                    this.state.player.hero.currentHP -= 2;
                    this.log('Exploding Imp dealt 2 to hero!', 'damage');
                }
                // Valkyrie trigger
                if (slot.zombie.owner === 'enemy') {
                    this.state.board.forEach(s => {
                        if (s.zombie && s.zombie.owner === 'enemy' && s.zombie.abilities?.includes('on_any_zombie_death_plus_2')) {
                            s.zombie.currentAttack += 2;
                            s.zombie.currentHealth += 2;
                        }
                    });
                }
                slot.zombie = null;
            }
        });

        // Check for game over
        if (this.state.player.hero.currentHP <= 0) {
            this.state.gameOver = true;
            this.state.winner = 'enemy';
            this.showGameOver(false);
        } else if (this.state.enemy.hero.currentHP <= 0) {
            this.state.gameOver = true;
            this.state.winner = 'player';
            this.showGameOver(true);
        }
    },

    endTurn() {
        if (this.state.gameOver) return;

        // End of turn effects for player
        this.endOfTurnEffects('player');

        // Enemy turn (AI)
        this.state.turn++;
        this.state.enemy.maxBrains = Math.min(10, this.state.enemy.maxBrains + 1);
        this.state.enemy.brains = this.state.enemy.maxBrains;

        this.startOfTurnEffects('enemy');
        this.drawCard('enemy');

        this.log(`--- Turn ${this.state.turn}: Enemy Turn ---`);

        // AI plays cards
        this.aiPlayCards();

        // Enemy fight
        this.enemyFight();

        this.endOfTurnEffects('enemy');

        // Back to player
        this.state.player.maxSun = Math.min(10, this.state.player.maxSun + 1);
        this.state.player.sun = this.state.player.maxSun;
        this.startOfTurnEffects('player');
        this.drawCard('player');

        this.log(`--- Turn ${this.state.turn}: Your Turn --- (☀${this.state.player.sun})`);
        this.updateUI();
    },

    aiPlayCards() {
        const enemy = this.state.enemy;
        const diff = this.aiDifficulty;
        const maxPlays = diff === 'easy' ? 1 : diff === 'medium' ? 2 : 3;

        let plays = 0;
        // Sort hand by cost descending for harder AI
        const sortedHand = [...enemy.hand].sort((a, b) => {
            if (diff === 'hard') return (b.cost || 0) - (a.cost || 0);
            return Math.random() - 0.5;
        });

        for (const card of sortedHand) {
            if (plays >= maxPlays) break;
            if ((card.cost || 0) > enemy.brains) continue;

            // Find empty lane or best lane
            let targetLane = -1;
            if (card.type === 'zombie') {
                const emptyLanes = this.state.board
                    .map((s, i) => ({ s, i }))
                    .filter(({ s }) => !s.zombie)
                    .map(({ i }) => i);
                if (emptyLanes.length > 0) {
                    targetLane = emptyLanes[Math.floor(Math.random() * emptyLanes.length)];
                }
            } else if (card.type === 'trick') {
                targetLane = Math.floor(Math.random() * 5);
            }

            if (targetLane >= 0) {
                const handIndex = enemy.hand.indexOf(card);
                if (handIndex >= 0) {
                    this.playCard('enemy', handIndex, targetLane);
                    plays++;
                }
            }
        }
    },

    enemyFight() {
        for (let i = 0; i < 5; i++) {
            const slot = this.state.board[i];
            if (!slot || !slot.zombie || slot.zombie.owner !== 'enemy') continue;
            if (slot.zombie.frozen) {
                slot.zombie.frozen = false;
                this.log(`${slot.zombie.name} is frozen!`);
                continue;
            }

            const zombie = slot.zombie;
            if (slot.plant) {
                slot.plant.currentHealth -= zombie.currentAttack;
                zombie.currentHealth -= slot.plant.currentAttack;
                this.log(`${zombie.name} attacked ${slot.plant.name} for ${zombie.currentAttack}`, 'damage');
            } else {
                this.state.player.hero.currentHP -= zombie.currentAttack;
                if (zombie.currentAttack > 0) {
                    this.log(`${zombie.name} hit ${this.state.player.hero.name} for ${zombie.currentAttack}!`, 'damage');
                }
            }
        }
    },

    showGameOver(playerWon) {
        document.getElementById('battlefield').style.display = 'none';
        document.getElementById('game-over').style.display = 'block';
        document.getElementById('game-result').textContent = playerWon ? '🎉 VICTORY! 🎉' : '💀 DEFEAT 💀';
        document.getElementById('game-result').style.color = playerWon ? 'var(--accent-green)' : 'var(--accent-red)';
        document.getElementById('game-stats').innerHTML = `
            <p>Turns: ${this.state.turn}</p>
            <p>Your HP: ${Math.max(0, this.state.player.hero.currentHP)} / ${this.state.player.hero.hp}</p>
            <p>Enemy HP: ${Math.max(0, this.state.enemy.hero.currentHP)} / ${this.state.enemy.hero.hp}</p>
        `;
    },

    showMenu() {
        if (confirm('Return to menu? Current game will be lost.')) {
            this.showSetup();
        }
    },

    log(message, type = 'info') {
        const entry = { message, type, turn: this.state?.turn || 0 };
        if (this.state) this.state.log.push(entry);
        const container = document.getElementById('log-entries');
        if (container) {
            const el = document.createElement('div');
            el.className = `log-entry ${type}`;
            el.textContent = message;
            container.appendChild(el);
            container.scrollTop = container.scrollHeight;
        }
    },

    updateUI() {
        if (!this.state) return;
        const s = this.state;

        // Hero info
        document.getElementById('player-hero-portrait').innerHTML = `<img src="${s.player.hero.img || ''}" alt="" style="width:100%;height:100%;object-fit:contain;border-radius:50%" onerror="this.parentElement.textContent='${s.player.hero.icon||'?'}'">`;
        document.getElementById('player-hero-name').textContent = s.player.hero.name;
        document.getElementById('player-hero-hp').textContent = `${Math.max(0, s.player.hero.currentHP)}/${s.player.hero.hp}`;
        document.getElementById('player-sun').textContent = `Sun: ${s.player.sun}/${s.player.maxSun}`;

        document.getElementById('enemy-hero-portrait').innerHTML = `<img src="${s.enemy.hero.img || ''}" alt="" style="width:100%;height:100%;object-fit:contain;border-radius:50%" onerror="this.parentElement.textContent='${s.enemy.hero.icon||'?'}'">`;
        document.getElementById('enemy-hero-name').textContent = s.enemy.hero.name;
        document.getElementById('enemy-hero-hp').textContent = `${Math.max(0, s.enemy.hero.currentHP)}/${s.enemy.hero.hp}`;
        document.getElementById('enemy-brains').textContent = `Brains: ${s.enemy.brains}/${s.enemy.maxBrains}`;

        document.getElementById('turn-counter').textContent = `Turn ${s.turn}`;
        document.getElementById('phase-indicator').textContent = `Your Turn`;

        // Board
        s.board.forEach((slot, i) => {
            const plantSlot = document.querySelector(`.plant-slot[data-lane="${i}"]`);
            const zombieSlot = document.querySelector(`.zombie-slot[data-lane="${i}"]`);

            if (plantSlot) {
                plantSlot.innerHTML = '';
                if (slot.plant) {
                    plantSlot.innerHTML = this.renderBoardCard(slot.plant);
                } else {
                    plantSlot.className = 'plant-slot valid-target';
                }
            }
            if (zombieSlot) {
                zombieSlot.innerHTML = '';
                if (slot.zombie) {
                    zombieSlot.innerHTML = this.renderBoardCard(slot.zombie);
                }
            }
        });

        // Player hand
        const handContainer = document.getElementById('player-hand');
        handContainer.innerHTML = '';
        s.player.hand.forEach((card, i) => {
            const el = document.createElement('div');
            const canPlay = card.cost <= s.player.sun && ((card.type === 'plant' && this.state.board.some(sl => !sl.plant)) ||
                (card.type === 'zombie' && false) ||
                (card.type === 'trick'));
            el.className = `card card-${card.type} ${canPlay ? 'playable' : ''}`;
            el.innerHTML = `
                <div class="card-cost" style="background:${CARD_DATA.classColors[card.class] || '#666'}">${card.cost}</div>
                <div class="card-img-wrap" style="height:40px">
                    <img src="${card.img || ''}" alt="${card.name}" class="card-img" onerror="this.style.display='none'">
                </div>
                <div class="card-name">${card.name}</div>
                ${renderTraits(card.traits)}
                ${card.attack !== undefined ? `<div class="card-stats">
                    <span class="card-attack">⚔${card.attack}</span>
                    <span class="card-health">❤${card.health}</span>
                </div>` : ''}
            `;
            if (canPlay && card.type === 'plant') {
                el.addEventListener('click', () => this.promptPlayPlant(i));
            } else if (canPlay && card.type === 'trick') {
                el.addEventListener('click', () => this.promptPlayTrick(i));
            }
            handContainer.appendChild(el);
        });

        // Enemy hand (face down)
        const enemyHandContainer = document.getElementById('enemy-hand');
        enemyHandContainer.innerHTML = '';
        s.enemy.hand.forEach(() => {
            const el = document.createElement('div');
            el.className = 'card';
            el.innerHTML = '<div class="card-back">🂠</div>';
            enemyHandContainer.appendChild(el);
        });

        // Setup click handlers on board slots
        document.querySelectorAll('.plant-slot.valid-target').forEach(slot => {
            slot.onclick = () => {
                if (this._pendingPlay !== undefined) {
                    const lane = parseInt(slot.dataset.lane);
                    this.playCard('player', this._pendingPlay, lane);
                    this._pendingPlay = undefined;
                    this.updateUI();
                }
            };
        });
    },

    renderBoardCard(unit) {
        const healthColor = unit.currentHealth < (unit.health || 1) ? 'var(--accent-red)' : '';
        return `<div class="board-card ${unit.owner === 'enemy' ? 'enemy' : ''}">
            <div class="bc-img"><img src="${unit.img || ''}" alt="${unit.name}" style="width:100%;height:100%;object-fit:contain;border-radius:4px" onerror="this.style.display='none';this.parentElement.innerHTML+='${unit.icon || '🃏'}'"></div>
            <div class="bc-name">${unit.name}</div>
            ${renderTraits(unit.traits)}
            <div class="bc-stats">
                <span class="card-attack">⚔${unit.currentAttack}</span>
                <span class="card-health" style="color:${healthColor}">❤${unit.currentHealth}</span>
            </div>
            ${unit.frozen ? '<div style="color:var(--accent-blue);font-size:0.6rem">❄ Frozen</div>' : ''}
        </div>`;
    },

    promptPlayPlant(handIndex) {
        this._pendingPlay = handIndex;
        DeckBuilder.showToast('Click an empty plant slot on the board', 'info');
    },

    promptPlayTrick(handIndex) {
        // For tricks, play immediately targeting a lane
        const card = this.state.player.hand[handIndex];
        this.playCard('player', handIndex, Math.floor(Math.random() * 5));
        this.updateUI();
    }
};
