const AIHelper = {
    // 2026 Meta Tier List Data (from PvZH Vault, Aug 2026)
    tierList: {
        lastUpdated: '2026-08-06',
        topCardsOverall: [
            { name: 'Berry Blast', class: 'Kabloom', tier: 'S', score: 198.03, usage: '20.44%' },
            { name: 'Bungee Plumber', class: 'Crazy', tier: 'S', score: 184.43, usage: '20.44%' },
            { name: 'Forget-Me-Nuts', class: 'Guardian', tier: 'S', score: 173.24, usage: '17.13%' },
            { name: 'Clique Peas', class: 'Mega-Grow', tier: 'S', score: 170.86, usage: '15.47%' },
            { name: 'Bonk Choy', class: 'Mega-Grow', tier: 'S', score: 170.21, usage: '16.02%' },
            { name: 'Teleport', class: 'Brainy', tier: 'S', score: 157.66, usage: '14.36%' },
            { name: 'Rolling Stone', class: 'Hearty', tier: 'S', score: 150.23, usage: '17.68%' },
            { name: 'Cheese Cutter', class: 'Beastly', tier: 'S', score: 145.80, usage: '11.05%' },
            { name: 'Quazard', class: 'Crazy', tier: 'S', score: 145.28, usage: '11.60%' },
            { name: 'Lima Pleurodon', class: 'Smarty', tier: 'S', score: 139.81, usage: '9.94%' },
            { name: 'Fig', class: 'Kabloom', tier: 'S', score: 139.47, usage: '9.94%' },
            { name: 'Going Viral', class: 'Hearty', tier: 'S', score: 132.53, usage: '14.92%' },
            { name: 'Black Hole', class: 'Hearty', tier: 'S', score: 131.19, usage: '11.60%' },
            { name: 'Area 22', class: 'Beastly', tier: 'S', score: 127.23, usage: '9.39%' },
            { name: 'Galacta-Cactus', class: 'Guardian', tier: 'S', score: 125.84, usage: '9.94%' },
            { name: 'Teleportation Zombie', class: 'Brainy', tier: 'S', score: 125.64, usage: '10.50%' },
            { name: 'Brainana', class: 'Smarty', tier: 'S', score: 125.58, usage: '12.15%' },
            { name: 'Starch Lord', class: 'Guardian', tier: 'S', score: 120.90, usage: '8.29%' }
        ],
        topByClass: {
            guardian: { top: 'Forget-Me-Nuts', cards: ['Forget-Me-Nuts', 'Galacta-Cactus', 'Starch Lord', 'Shamrocket', 'Photosynthesizer'] },
            kabloom: { top: 'Berry Blast', cards: ['Berry Blast', 'Fig', 'Imitater', 'Wild Berry', 'Veloci-Radish Packmate'] },
            megaGrow: { top: 'Clique Peas', cards: ['Clique Peas', 'Bonk Choy', 'Gatling Pea', 'Espresso Fiesta', 'Fertilizer'] },
            smarty: { top: 'Lima Pleurodon', cards: ['Lima Pleurodon', 'Brainana', 'Primal Peashooter', 'Jelly Bean', 'Rotobaga'] },
            solar: { top: 'Li\'l Buddy', cards: ['Li\'l Buddy', 'Sun Shroom', 'Ketchup Mechanic', 'Pepper M.D.', 'Water Balloons'] },
            beastly: { top: 'Cheese Cutter', cards: ['Cheese Cutter', 'Area 22', 'Extinction Event', 'Dog Walker', 'Cryo-Yeti'] },
            brainy: { top: 'Teleport', cards: ['Teleport', 'Teleportation Zombie', 'Beam Me Up', 'Mustache Waxer', 'Fun-Dead Raiser'] },
            crazy: { top: 'Bungee Plumber', cards: ['Bungee Plumber', 'Quazard', 'Quickdraw Con Man', 'Line Dancing Zombie'] },
            hearty: { top: 'Rolling Stone', cards: ['Rolling Stone', 'Going Viral', 'Black Hole', 'Sumo Wrestler'] },
            sneaky: { top: 'Cryo-Yeti', cards: ['Cryo-Yeti', 'Dr. Spacetime', 'Line Dancing Zombie', 'Laser Base Alpha'] }
        },
        archetypes: {
            aggro: {
                name: 'Aggro',
                description: 'Fast, low-cost decks that aim to win by turn 5-6. Prioritize 1-2 cost cards with high attack.',
                keyTraits: ['high attack', 'low cost', 'charge block'],
                plantTips: 'Focus on Berries, Peas, and Mushrooms. Berry Blast is #1 overall for a reason.',
                zombieTips: 'Crazy and Beastly excel at aggro. Bungee Plumber + Quazard is the #2 combo in the meta.'
            },
            control: {
                name: 'Control',
                description: 'Survive the early game, clear the board, win with late-game bombs. Heavy removal and healing.',
                keyTraits: ['removal', 'healing', 'late-game'],
                plantTips: 'Guardian + Solar is the control shell. Forget-Me-Nuts slows Zombie tricks while you build.',
                zombieTips: 'Hearty has the best removal. Rolling Stone + Black Hole + Going Viral dominates.'
            },
            combo: {
                name: 'Combo',
                description: 'Set up specific card interactions for explosive turns. Requires planning and card draw.',
                keyTraits: ['synergy', 'card draw', 'finisher'],
                plantTips: 'Starch Lord roots + Fig transform combos. Brainana strips brains for huge tempo.',
                zombieTips: 'Teleport + Teleportation Zombie lets you play zombies during tricks. The #6 and #16 cards.'
            },
            midrange: {
                name: 'Midrange',
                description: 'Flexible decks that can switch between aggro and control based on matchup.',
                keyTraits: ['efficient stats', 'versatile', 'tempo'],
                plantTips: 'Mega-Grow excels here with Clique Peas (#4) and Bonk Choy (#5) as efficient threats.',
                zombieTips: 'Beastly area buffs (Area 22) and Sneaky gravestones provide strong mid-game.'
            }
        },
        heroTips: {
            green_shadow: 'Bean/Pea hybrid. Admiral Navy Bean draws cards; The Podfather buffs Peas. Brainana (#17) is your late-game finisher.',
            solar_flare: 'Fig Lottery deck uses Fig (#11) to transform damaged plants. Li\'l Buddy and Sun Shroom generate tempo.',
            chompzilla: 'Mega-Grow removal + Solar healing. Clique Peas (#4) gives scaling power throughout the game.',
            grass_knuckles: 'Nut control. Forget-Me-Nuts (#3) + Starch Lord (#18) for root synergy. Galacta-Cactus (#15) punishes clears.',
            spudow: 'Kabloom tricks + Guardian defense. Berry Blast (#1) is your best removal. Fig (#11) transforms into threats.',
            nightcap: 'Mushroom swarm or Bean aggro. Lima Pleurodon (#10) generates Beanstalks for late-game.',
            captain_combustible: 'Bonus Attack combos. Gatling Pea (A-tier) + Espresso Fiesta (A-tier) for burst damage.',
            citron: 'Bean control with Smarty. Brainana (#17) strips brains. Lima Pleurodon (#10) provides value.',
            super_brainz: 'Teleport trickster. Teleport (#6) + Teleportation Zombie (#16) lets you play zombies during tricks.',
            the_smash: 'Pet midrange. Cheese Cutter (#8) conjures Gourmet cards. Area 22 (#14) buffs your board.',
            impfinity: 'Crazy aggro. Bungee Plumber (#2) + Quazard (#9) for early pressure and superpowers.',
            brain_freeze: 'Beastly freeze. Cheese Cutter (#8) + Area 22 (#14) for strong trades and board control.',
            professor_brainstorm: 'Trickster combo. Teleport (#6) + Teleportation Zombie (#16) for free trickster plays.',
            electric_boogaloo: 'Dancing midrange. Line Dancing Zombie (A-tier) + Quazard (#9) for tempo and value.',
            rustbolt: 'Hearty control. Rolling Stone (#7) + Going Viral (#12) + Black Hole (#13) for board dominance.',
            immorticia: 'Beastly brain. Cheese Cutter (#8) + Teleportation Zombie (#16) for card advantage.',
            neptuna: 'Gravestone midrange. Dr. Spacetime (A-tier) + Laser Base Alpha (A-tier) for gravestone synergy.',
            z_mech: 'Sports aggro. Going Viral (#12) buffs your entire board. Rolling Stone (#7) removes early threats.',
            huge_gigantacus: 'Brainy combo. Teleport (#6) + Quazard (#9) for superpower generation and big plays.'
        }
    },

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

    // Deck suggestions per hero (updated with 2026 meta data)
    heroDecks: {
        green_shadow: {
            name: 'BPL (Bean Pea Lane)',
            strategy: 'Aggressive bean/pea deck. Admiral Navy Bean draws; The Podfather buffs Peas. Brainana (#17) strips brains late-game.',
            archetype: 'aggressive',
            keyCards: ['peashooter','torchwood','the_podfather','admiral_navy_bean','repeater','brainana'],
            metaNotes: 'Clique Peas (#4) and Bonk Choy (#5) from Mega-Grow are excellent additions. Forget-Me-Nuts (#3) slows zombie tricks.'
        },
        solar_flare: {
            name: 'Fig Lottery',
            strategy: 'Control deck using Fig (#11) to transform damaged plants. Sun Shroom and Li\'l Buddy generate tempo.',
            archetype: 'control',
            keyCards: ['sunflower','twin_sunflower','bloomerang','power_flower','briar_rose','fig'],
            metaNotes: 'Fig is #11 overall. Imitater (A-tier) copies your best plants. Berry Blast (#1) is your best removal.'
        },
        chompzilla: {
            name: 'Solar Mega',
            strategy: 'Mega-Grow threats with Solar removal. Clique Peas (#4) scales throughout the game.',
            archetype: 'midrange',
            keyCards: ['chomper','three_headed_chomper','fertilize','plant_food','clique_peas','bonk_choy'],
            metaNotes: 'Clique Peas and Bonk Choy are both S-tier. Espresso Fiesta (A-tier) enables bonus attack combos.'
        },
        grass_knuckles: {
            name: 'Redundancy',
            strategy: 'Nut/Root control. Forget-Me-Nuts (#3) slows tricks; Starch Lord (#18) generates roots.',
            archetype: 'control',
            keyCards: ['wall_nut','mirror_nut','forget_me_nuts','starch_lord','galacta_cactus','shamrocket'],
            metaNotes: 'Forget-Me-Nuts is #3 overall. Galacta-Cactus (#15) punishes board clears. Shamrocket (A-tier) removes big threats.'
        },
        spudow: {
            name: 'Soteria',
            strategy: 'Kabloom tricks + Guardian defense. Berry Blast (#1) and Fig (#11) are your stars.',
            archetype: 'combo',
            keyCards: ['wall_nut','cherry_bomb','berry_blast','fig','imitater','galacta_cactus'],
            metaNotes: 'Berry Blast is #1 overall. Fig transforms damaged plants into random threats. Imitater copies your best plants.'
        },
        nightcap: {
            name: 'Mushroom Madness',
            strategy: 'Mushroom swarm or Bean aggro. Lima Pleurodon (#10) generates Beanstalks.',
            archetype: 'aggressive',
            keyCards: ['button_mushroom','shroom_for_two','buff_shroom','lima_pleurodon','brainana','punish_shroom'],
            metaNotes: 'Lima Pleurodon is #10 overall and generates value. Brainana (#17) strips brains for huge tempo swings.'
        },
        captain_combustible: {
            name: 'Reflourished',
            strategy: 'Bonus Attack combos. Gatling Pea (A-tier) + Espresso Fiesta (A-tier) for burst.',
            archetype: 'combo',
            keyCards: ['repeater','the_podfather','plant_food','gatling_pea','espresso_fiesta','bonk_choy'],
            metaNotes: 'Gatling Pea has Double Strike and Pea Evolution. Bonk Choy (#5) is a great 1-drop for early pressure.'
        },
        citron: {
            name: 'Bean Control',
            strategy: 'Bean control with Smarty. Brainana (#17) strips brains; Lima Pleurodon (#10) generates value.',
            archetype: 'control',
            keyCards: ['admiral_navy_bean','lima_pleurodon','brainana','primal_peashooter','jelly_bean','rotobaga'],
            metaNotes: 'Brainana is #17 overall. Lima Pleurodon generates Beanstalks for late-game. Jelly Bean (A-tier) bounces threats.'
        },
        super_brainz: {
            name: 'Teleport Trickster',
            strategy: 'Teleport (#6) + Teleportation Zombie (#16) lets you play zombies during tricks.',
            archetype: 'combo',
            keyCards: ['trickster','teleportation_zombie','teleport','beam_me_up','mustache_waxer','fun_dead_raiser'],
            metaNotes: 'Teleport is #6 overall; Teleportation Zombie is #16. Mustache Waxer (A-tier) discounts Mustache zombies.'
        },
        the_smash: {
            name: 'Smash Pet',
            strategy: 'Beastly midrange. Cheese Cutter (#8) conjures Gourmet; Area 22 (#14) buffs your board.',
            archetype: 'midrange',
            keyCards: ['cheese_cutter','area_22','cat_lady','ancient_vimpire','going_viral','extinction_event'],
            metaNotes: 'Cheese Cutter is #8 overall. Area 22 is #14. Going Viral (#12) buffs your entire board with Frenzy.'
        },
        impfinity: {
            name: 'Crazy Rush',
            strategy: 'Crazy aggro. Bungee Plumber (#2) + Quazard (#9) for early pressure and superpowers.',
            archetype: 'aggressive',
            keyCards: ['bungee_plumber','quazard','quickdraw_con_man','line_dancing_zombie','valkyrie','disco_tron_3000'],
            metaNotes: 'Bungee Plumber is #2 overall. Quazard is #9. Quickdraw Con Man (A-tier) punishes card draw.'
        },
        brain_freeze: {
            name: 'Freeze & Squeeze',
            strategy: 'Beastly control. Cheese Cutter (#8) + Area 22 (#14) for strong trades.',
            archetype: 'midrange',
            keyCards: ['cheese_cutter','area_22','cryo_yeti','dog_walker','going_viral','extinction_event'],
            metaNotes: 'Cheese Cutter is #8. Area 22 is #14. Cryo-Yeti (A-tier) freezes and has good stats.'
        },
        professor_brainstorm: {
            name: 'Trickster Engine',
            strategy: 'Teleport (#6) + Teleportation Zombie (#16) for free trickster plays.',
            archetype: 'combo',
            keyCards: ['trickster','teleport','teleportation_zombie','beam_me_up','mustache_waxer','mad_scientist'],
            metaNotes: 'Teleport is #6. Teleportation Zombie is #16. Beam Me Up (A-tier) summons a 2/1 Imp.'
        },
        electric_boogaloo: {
            name: 'Dance Floor',
            strategy: 'Dancing midrange. Quazard (#9) + Line Dancing Zombie (A-tier) for tempo.',
            archetype: 'midrange',
            keyCards: ['quazard','line_dancing_zombie','disco_zombie','backup_dancer','valkyrie','disco_tron_3000'],
            metaNotes: 'Quazard is #9 overall. Line Dancing Zombie (A-tier) has Gravestone and does bonus damage.'
        },
        rustbolt: {
            name: 'Control Rust',
            strategy: 'Hearty control. Rolling Stone (#7) + Going Viral (#12) + Black Hole (#13).',
            archetype: 'control',
            keyCards: ['rolling_stone','going_viral','black_hole','sumo_wrestler','weed_spray','team_mascot'],
            metaNotes: 'Rolling Stone is #7. Going Viral is #12. Black Hole is #13. This is the strongest control shell in the meta.'
        },
        immorticia: {
            name: 'Beastly Brain',
            strategy: 'Beastly + Brainy. Cheese Cutter (#8) + Teleportation Zombie (#16) for value.',
            archetype: 'midrange',
            keyCards: ['cheese_cutter','teleportation_zombie','area_22','cat_lady','mad_scientist','trickster'],
            metaNotes: 'Cheese Cutter (#8) and Area 22 (#14) are both S-tier. Teleportation Zombie enables trick-time plays.'
        },
        neptuna: {
            name: 'Gravestone Grind',
            strategy: 'Gravestone midrange. Dr. Spacetime (A-tier) + Laser Base Alpha (A-tier).',
            archetype: 'midrange',
            keyCards: ['dr_spacetime','laser_base_alpha','line_dancing_zombie','cryo_yeti','headstone_carver','space_ninja'],
            metaNotes: 'Dr. Spacetime and Laser Base Alpha are A-tier. Cryo-Yeti (A-tier) freezes and has good stats.'
        },
        z_mech: {
            name: 'Sports Z-Mech',
            strategy: 'Sports aggro. Going Viral (#12) buffs your board; Rolling Stone (#7) removes threats.',
            archetype: 'aggressive',
            keyCards: ['going_viral','rolling_stone','team_mascot','zombie_coach','all_star_zombie','black_hole'],
            metaNotes: 'Going Viral is #12 overall. Rolling Stone is #7. Black Hole (#13) disrupts plant positioning.'
        },
        huge_gigantacus: {
            name: 'Gargantuan Rush',
            strategy: 'Brainy combo. Teleport (#6) + Quazard (#9) for superpower generation.',
            archetype: 'combo',
            keyCards: ['teleport','quazard','teleportation_zombie','beam_me_up','interdimensional_zombie','trickster'],
            metaNotes: 'Teleport is #6. Quazard is #9. Teleportation Zombie (#16) enables trick-time zombie plays.'
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
