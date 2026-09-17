const AIHelper = {
    // Synergy definitions for deck building
    synergies: {
        mushroom: {
            name: 'Mushroom Swarm',
            cards: ['button_mushroom','poison_mushroom','shroom_for_two','buff_shroom','punish_shroom','mushroom_ringleader'],
            description: 'Mushroom cards buff each other. Buff-Shroom gives all mushrooms +1/+1, and Punish-Shroom deals damage when mushrooms die.',
            tip: 'Play Buff-Shroom early to buff your mushroom army. Punish-Shroom punishes the opponent for clearing your board.'
        },
        berry: {
            name: 'Berry Burst',
            cards: ['wild_berry','berry_angry','sergeant_strongberry','sour_grapes','bluesberry','berry_blast','grapes_of_wrath'],
            description: 'Berry cards synergize with Sergeant Strongberry for extra burst damage.',
            tip: 'Sgt. Strongberry + Berry Angry = massive damage. Berry Blast is great for removing threats.'
        },
        flower: {
            name: 'Flower Power',
            cards: ['bellflower','sunflower','morning_glory','fume_shroom','twin_sunflower','bloomerang','power_flower','briar_rose','laser_bean','metal_petal_sunflower'],
            description: 'Flower cards generate Sun and have Strikethrough to bypass blockers.',
            tip: 'Twin Sunflower gives +2 Sun per turn. Briar Rose destroys zombies that attack your flowers.'
        },
        nut: {
            name: 'Nut Wall',
            cards: ['small_nut','wall_nut','pismashio','jugger_nut','mixed_nuts','pea_nut','mirror_nut','smackadamia','prickly_pear'],
            description: 'Nut cards are tanky defenders that synergize with Mirror-Nut for hero damage.',
            tip: 'Wall-Nut + Mirror-Nut is a classic combo. Jugger-Nut has Armored and Bullseye for efficient trades.'
        },
        pea: {
            name: 'Pea Shooter',
            cards: ['peashooter','torchwood','repeater','the_podfather','black_eye_pea','fire_peashooter','skyshooter'],
            description: 'Pea cards get massive buffs from The Podfather and Torchwood.',
            tip: 'Torchwood gives Peas behind it +2 Str. The Podfather gives +2/+2 to Peas you play.'
        },
        bean: {
            name: 'Bean Combo',
            cards: ['sting_bean','admiral_navy_bean','frost_bean','jumping_bean','sapping_sinew','brainana','laser_bean'],
            description: 'Bean cards have Amphibious and bounce effects. Admiral Navy Bean draws on Bean plays.',
            tip: 'Admiral Navy Bean draws cards when you play Beans. Brainana strips enemy Brains for a huge tempo swing.'
        },
        sports: {
            name: 'Sports Team',
            cards: ['flag_zombie','zombie_coach','team_mascot','sports_zombie','armored_zombie','all_star_zombie','sumo_zombie'],
            description: 'Sports Zombies get buffs from Team Mascot and protection from Zombie Coach.',
            tip: 'Team Mascot buffs all Sports Zombies. Zombie Coach makes them invulnerable for a turn.'
        },
        dancing: {
            name: 'Dance Party',
            cards: ['backup_dancer','disco_zombie','line_dancer','disco_tron_3000','zombie_king'],
            description: 'Dancing Zombies are summoned in groups and buffed by Zombie King.',
            tip: 'Disco-Tron 3000 summons Backup Dancers. Zombie King buffs all Dancing Zombies.'
        },
        pet: {
            name: 'Pet Menagerie',
            cards: ['zombie_chimp','cat_lady','vimpire','penguin_zombie','ancient_vimpire'],
            description: 'Pet cards buff each other. Cat Lady gets +2/+2 per Pet played.',
            tip: 'Cat Lady grows fast with Pet plays. Ancient Vimpire buffs Pet Zombies when they destroy Plants.'
        },
        gravestone: {
            name: 'Gravestone Ghouls',
            cards: ['headstone_carver','ambush','space_ninja','cursed_gargantuar'],
            description: 'Gravestone zombies are hidden and revealed when they attack. Headstone Carver buffs them.',
            tip: 'Headstone Carver gives all Gravestones +1/+1. Space Ninja has Untrickable for guaranteed damage.'
        },
        science: {
            name: 'Science Lab',
            cards: ['zombie_chimp','quasar_zombie','zombot_stasis','mad_scientist','interdimensional_zombie','teleportation_zombie','zombot_war_bot'],
            description: 'Science zombies synergize with Mad Scientist for card draw and Teleportation Zombie for tempo.',
            tip: 'Mad Scientist draws cards when you play Tricks. Interdimensional Zombie conjures discounted cards.'
        },
        gargantuar: {
            name: 'Gargantuar Smash',
            cards: ['cursed_gargantuar','gargantuar','zombot_plankWalker','zombot_blast_bot'],
            description: 'Big beefy Gargantuars that dominate the board.',
            tip: 'Gargantuars are high-stat threats. Use removal tricks to clear the way for them.'
        }
    },

    // Deck suggestions per hero
    heroDecks: {
        green_shadow: {
            name: 'BPL (Bean Pea Lane)',
            strategy: 'Aggressive bean/pea deck that uses Admiral Navy Bean for draw and The Podfather to buff Peas.',
            archetype: 'aggressive',
            keyCards: ['peashooter','torchwood','the_podfather','admiral_navy_bean','repeater','brainana']
        },
        solar_flare: {
            name: 'Fig Lottery',
            strategy: 'Control deck using Solar class removal and strong late-game flowers.',
            archetype: 'control',
            keyCards: ['sunflower','twin_sunflower','bloomerang','power_flower','briar_rose','squash']
        },
        chompzilla: {
            name: 'Solar Mega',
            strategy: 'Uses Solar removal with Mega-Grow buffs for big Chomper finishes.',
            archetype: 'midrange',
            keyCards: ['chomper','three_headed_chomper','fertilize','plant_food','squash','cornucopia']
        },
        grass_knuckles: {
            name: 'Redundancy',
            strategy: 'Nut-based defensive deck that chips with Bullseye and Mirror-Nut.',
            archetype: 'control',
            keyCards: ['wall_nut','mirror_nut','pismashio','pea_nut','fertilize','plant_food']
        },
        spudow: {
            name: 'Soteria',
            strategy: 'Explosive Kabloom tricks with Guardian defense.',
            archetype: 'combo',
            keyCards: ['wall_nut','cherry_bomb','berry_blast','punish_shroom','doom_shroom','kernel_corn']
        },
        nightcap: {
            name: 'Mushroom Madness',
            strategy: 'Swarm with mushrooms and buff with Buff-Shroom.',
            archetype: 'aggressive',
            keyCards: ['button_mushroom','shroom_for_two','buff_shroom','punish_shroom','mushroom_ringleader','pineclone']
        },
        captain_combustible: {
            name: 'Reflourished',
            strategy: 'Bonus Attack combos with Repeater and Plant Food.',
            archetype: 'combo',
            keyCards: ['repeater','the_podfather','plant_food','re_peat_moss','party_thyme','espresso_fiesta']
        },
        citron: {
            name: 'Bean Control',
            strategy: 'Bounce everything with Smarty while building a bean army.',
            archetype: 'control',
            keyCards: ['admiral_navy_bean','jumping_bean','sapping_sinew','brainana','winter_melon','the_big_gigantic']
        },
        super_brainz: {
            name: 'Teleport Trickster',
            strategy: 'Play Trickster for cheap with Teleportation Zombie and Brainy tricks.',
            archetype: 'combo',
            keyCards: ['trickster','teleportation_zombie','mad_scientist','beam_me_up','interdimensional_zombie']
        },
        the_smash: {
            name: 'Smash Pet',
            strategy: 'Pet synergy with Cat Lady and Ancient Vimpire for big stats.',
            archetype: 'midrange',
            keyCards: ['cat_lady','vimpire','ancient_vimpire','zombie_chimp','the_smash','all_star_zombie']
        },
        impfinity: {
            name: 'Crazy Rush',
            strategy: 'Overwhelm with cheap Crazy zombies and Imps.',
            archetype: 'aggressive',
            keyCards: ['backup_dancer','exploding_imp','disco_zombie','valkyrie','quazard','disco_tron_3000']
        },
        brain_freeze: {
            name: 'Freeze & Squeeze',
            strategy: 'Freeze plants with Beastly zombies and burst with Frenzy.',
            archetype: 'midrange',
            keyCards: ['penguin_zombie','vimpire','cheese_cutter','all_star_zombie','going_viral']
        },
        professor_brainstorm: {
            name: 'Trickster Engine',
            strategy: 'Reduce Trickster cost with Brainy tricks and play it for free.',
            archetype: 'combo',
            keyCards: ['trickster','mad_scientist','teleport','beam_me_up','teacher_zombie']
        },
        electric_boogaloo: {
            name: 'Dance Floor',
            strategy: 'Summon Dancing zombies and buff with Zombie King.',
            archetype: 'midrange',
            keyCards: ['disco_zombie','backup_dancer','zombie_king','disco_tron_3000','valkyrie']
        },
        rustbolt: {
            name: 'Control Rust',
            strategy: 'Remove everything with Hearty tricks and slam big zombies.',
            archetype: 'control',
            keyCards: ['rolling_stone','weed_spray','team_mascot','all_star_zombie','zombot_blast_bot']
        },
        immorticia: {
            name: 'Beastly Brain',
            strategy: 'Pet synergy with Brainy card draw for a strong midrange game.',
            archetype: 'midrange',
            keyCards: ['cat_lady','ancient_vimpire','mad_scientist','trickster','interdimensional_zombie']
        },
        neptuna: {
            name: 'Gravestone Grind',
            strategy: 'Gravestone zombies with Headstone Carver buffs.',
            archetype: 'midrange',
            keyCards: ['headstone_carver','ambush','space_ninja','cursed_gargantuar','all_star_zombie']
        },
        z_mech: {
            name: 'Sports Z-Mech',
            strategy: 'Sports Zombie synergy with team-wide buffs.',
            archetype: 'aggressive',
            keyCards: ['team_mascot','zombie_coach','sports_zombie','all_star_zombie','going_viral']
        },
        huge_gigantacus: {
            name: 'Gargantuan Rush',
            strategy: 'Brainy ramp into huge threats and Bad Moon Rising.',
            archetype: 'combo',
            keyCards: ['trickster','teleportation_zombie','interdimensional_zombie','beam_me_up','quazard']
        }
    },

    // Suggest a deck for a hero
    suggestDeck(heroId, playstyle) {
        const hero = CARD_DATA.heroes.find(h => h.id === heroId);
        if (!hero) return null;

        const deckInfo = this.heroDecks[heroId];
        const heroCards = getHeroCards(heroId);

        // Get cards matching playstyle
        let suggestedCards = [];
        const maxCards = 40;

        // Start with key cards
        if (deckInfo && deckInfo.keyCards) {
            deckInfo.keyCards.forEach(cardId => {
                const card = getCard(cardId);
                if (card) suggestedCards.push({ ...card, count: 3 });
            });
        }

        // Add synergistic cards based on playstyle
        const synergyGroups = Object.values(this.synergies);
        if (playstyle === 'aggressive') {
            // Prioritize low-cost, high-attack cards
            heroCards.filter(c => c.type !== 'hero' && c.cost <= 3 && (c.attack || 0) >= 2)
                .forEach(c => { if (suggestedCards.length < maxCards && !suggestedCards.find(s => s.id === c.id)) suggestedCards.push({ ...c, count: 3 }); });
        } else if (playstyle === 'control') {
            // Prioritize removal and healing
            heroCards.filter(c => c.type !== 'hero' && c.abilities && (c.abilities.some(a => a.includes('destroy') || a.includes('heal') || a.includes('bounce'))))
                .forEach(c => { if (suggestedCards.length < maxCards && !suggestedCards.find(s => s.id === c.id)) suggestedCards.push({ ...c, count: 3 }); });
        } else if (playstyle === 'tempo') {
            // Good stats for cost
            heroCards.filter(c => c.type !== 'hero' && c.attack && c.health && (c.attack + c.health) >= c.cost + 2)
                .forEach(c => { if (suggestedCards.length < maxCards && !suggestedCards.find(s => s.id === c.id)) suggestedCards.push({ ...c, count: 3 }); });
        } else if (playstyle === 'combo') {
            // Synergy-heavy cards
            heroCards.filter(c => c.type !== 'hero' && c.abilities && c.abilities.length > 0)
                .forEach(c => { if (suggestedCards.length < maxCards && !suggestedCards.find(s => s.id === c.id)) suggestedCards.push({ ...c, count: 2 }); });
        }

        // Fill remaining slots with good general cards
        if (suggestedCards.length < maxCards) {
            heroCards.filter(c => c.type !== 'hero' && !suggestedCards.find(s => s.id === c.id))
                .sort((a, b) => (a.cost || 0) - (b.cost || 0))
                .forEach(c => {
                    const remaining = maxCards - suggestedCards.reduce((sum, s) => sum + s.count, 0);
                    if (remaining > 0) {
                        const count = Math.min(3, remaining);
                        suggestedCards.push({ ...c, count });
                    }
                });
        }

        return {
            hero,
            deckName: deckInfo ? deckInfo.name : `${hero.name} Deck`,
            strategy: deckInfo ? deckInfo.description : 'A balanced deck for this hero.',
            archetype: playstyle,
            cards: suggestedCards.slice(0, 30),
            totalCards: Math.min(maxCards, suggestedCards.reduce((sum, s) => sum + s.count, 0))
        };
    },

    // Suggest plays given a board state
    suggestPlay(state) {
        const { playerHP, enemyHP, resources, handSize, board, hand } = state;
        const suggestions = [];

        // Evaluate game state
        const isLosing = playerHP < enemyHP - 5;
        const isWinning = enemyHP < playerHP - 5;
        const isEarly = resources <= 3;
        const isLate = resources >= 7;

        // General play suggestions
        if (isLosing) {
            suggestions.push({
                priority: 'high',
                title: 'Defensive Play Needed',
                text: `You're behind on HP (${playerHP} vs ${enemyHP}). Prioritize board clear and healing. Consider using removal tricks to stabilize.`
            });
        }

        if (isWinning) {
            suggestions.push({
                priority: 'low',
                title: 'Keep Pressure',
                text: `You're ahead (${playerHP} vs ${enemyHP}). Continue developing your board and protect your lead. Don't overextend into board clears.`
            });
        }

        if (isEarly) {
            suggestions.push({
                priority: 'medium',
                title: 'Early Game',
                text: `With ${resources} resources, focus on establishing board presence. Play 1-2 cost minions to build tempo. Sun/Brain generation cards are valuable now.`
            });
        }

        if (isLate) {
            suggestions.push({
                priority: 'high',
                title: 'Late Game',
                text: `With ${resources} resources, play your finishers. Big threats like Gargantuars or Legendary cards can close out games.`
            });
        }

        if (handSize <= 2) {
            suggestions.push({
                priority: 'high',
                title: 'Low Cards!',
                text: 'You\'re running out of cards. Prioritize card draw effects like Flourish, Mad Scientist, or Admiral Navy Bean to replenish your hand.'
            });
        }

        if (handSize >= 7) {
            suggestions.push({
                priority: 'medium',
                title: 'Full Hand',
                text: 'You have many cards. Start playing to avoid burning your next draw. Focus on the strongest plays for your available resources.'
            });
        }

        // Board-specific advice
        if (board) {
            const occupiedLanes = board.filter(b => b.plant || b.zombie).length;
            if (occupiedLanes === 0) {
                suggestions.push({
                    priority: 'medium',
                    title: 'Empty Board',
                    text: 'No units on board. This is a good time to develop your board presence with efficient minions.'
                });
            }
        }

        // Default suggestion
        if (suggestions.length === 0) {
            suggestions.push({
                priority: 'medium',
                title: 'General Advice',
                text: 'Look for the most efficient play for your resources. Consider: 1) Removing threats, 2) Developing board, 3) Setting up combos.'
            });
        }

        return suggestions;
    },

    // Analyze a deck
    analyzeDeck(deckCards) {
        if (!deckCards || deckCards.length === 0) return null;

        const analysis = {
            totalCards: deckCards.length,
            avgCost: 0,
            costCurve: {},
            classBreakdown: {},
            typeBreakdown: { plant: 0, zombie: 0, trick: 0 },
            rarityBreakdown: {},
            traitCount: {},
            strengths: [],
            weaknesses: []
        };

        let totalCost = 0;
        let costCount = 0;

        deckCards.forEach(card => {
            // Cost curve
            const cost = card.cost || 0;
            analysis.costCurve[cost] = (analysis.costCurve[cost] || 0) + (card.count || 1);
            totalCost += cost * (card.count || 1);
            costCount += card.count || 1;

            // Class breakdown
            analysis.classBreakdown[card.class] = (analysis.classBreakdown[card.class] || 0) + (card.count || 1);

            // Type breakdown
            if (card.type === 'plant') analysis.typeBreakdown.plant += card.count || 1;
            else if (card.type === 'zombie') analysis.typeBreakdown.zombie += card.count || 1;
            else if (card.type === 'trick') analysis.typeBreakdown.trick += card.count || 1;

            // Rarity
            analysis.rarityBreakdown[card.rarity] = (analysis.rarityBreakdown[card.rarity] || 0) + (card.count || 1);

            // Traits
            if (card.traits) {
                card.traits.forEach(t => {
                    analysis.traitCount[t] = (analysis.traitCount[t] || 0) + (card.count || 1);
                });
            }
        });

        analysis.avgCost = costCount > 0 ? (totalCost / costCount).toFixed(1) : 0;

        // Strengths
        if (analysis.avgCost <= 2.5) analysis.strengths.push('Low curve - fast aggression');
        if (analysis.traitCount.strikethrough > 3) analysis.strengths.push('Strikethrough - goes face');
        if (analysis.traitCount.team_up > 3) analysis.strengths.push('Team-Up - board width');
        if (analysis.traitCount.frenzy > 3) analysis.strengths.push('Frenzy - chain kills');
        if (analysis.traitCount.bullseye > 3) analysis.strengths.push('Bullseye - doesn\'t charge block');
        if (analysis.typeBreakdown.trick > 8) analysis.strengths.push('Trick-heavy - flexible answers');

        // Weaknesses
        if (analysis.avgCost >= 4) analysis.weaknesses.push('Expensive curve - may be too slow');
        if (analysis.totalCards < 35) analysis.weaknesses.push('Low card count - may run out of steam');
        if (analysis.typeBreakdown.plant + analysis.typeBreakdown.zombie < 15) analysis.weaknesses.push('Few units - vulnerable to board clears');

        return analysis;
    },

    // Look up a card
    lookupCard(query) {
        if (!query) return null;
        const q = query.toLowerCase();
        return CARD_DATA.cards.find(c => c.name.toLowerCase().includes(q)) ||
               CARD_DATA.heroes.find(h => h.name.toLowerCase().includes(q));
    },

    // Get synergy info for a card
    getCardSynergies(cardId) {
        const card = getCard(cardId);
        if (!card) return [];
        const synergies = [];
        Object.values(this.synergies).forEach(syn => {
            if (syn.cards.includes(cardId)) {
                synergies.push(syn);
            }
        });
        return synergies;
    }
};
