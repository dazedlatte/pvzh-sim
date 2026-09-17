const CARD_DATA = {
    heroes: [
        // PLANT HEROES
        { id: 'green_shadow', name: 'Green Shadow', type: 'hero', hp: 20, classes: ['mega-grow','smarty'], icon: '🌿', superpowers: ['Precision Blast','Brainana','Time to Shine','Super Peashooter'], desc: 'The pea-shooting hero.' },
        { id: 'solar_flare', name: 'Solar Flare', type: 'hero', hp: 20, classes: ['kabloom','solar'], icon: '☀️', superpowers: ['Sunburn','Meteor Strike','Holo-Flora','Solar Wind'], desc: 'Fiery solar power.' },
        { id: 'chompzilla', name: 'Chompzilla', type: 'hero', hp: 20, classes: ['solar','mega-grow'], icon: '🦖', superpowers: ['Devour','Sunburn','Growth Gas','Ka-Boom!'], desc: 'The mighty chomper.' },
        { id: 'grass_knuckles', name: 'Grass Knuckles', type: 'hero', hp: 20, classes: ['guardian','mega-grow'], icon: '👊', superpowers: ['Power Pummel','Grass Knuckles Superpower','Time to Shine','Peel Shield'], desc: 'Punches first, asks questions later.' },
        { id: 'spudow', name: 'Spudow', type: 'hero', hp: 20, classes: ['guardian','kabloom'], icon: '🥔', superpowers: ['Wall-Nut Bowling','Terror-Former 10000','Spudow Superpower','Rock Wall'], desc: 'Explosive tuber.' },
        { id: 'nightcap', name: 'Night Cap', type: 'hero', hp: 20, classes: ['kabloom','smarty'], icon: '🍄', superpowers: ['Mush-Boom','Iceberg Lettuce','More Spore','Night Cap Superpower'], desc: 'Sneaky mushroom.' },
        { id: 'captain_combustible', name: 'Captain Combustible', type: 'hero', hp: 20, classes: ['kabloom','mega-grow'], icon: '💥', superpowers: ['Flame Strike','Berry Blast','Time to Shine','Super Peashooter'], desc: 'Explosive doublestrike.' },
        { id: 'citron', name: 'Citron', type: 'hero', hp: 20, classes: ['guardian','smarty'], icon: '🍊', superpowers: ['Peel Shield','Whirlwind','Citron Superpower','Transmogrify'], desc: 'Space citron warrior.' },
        { id: 'beta_carrotina', name: 'Beta-Carrotina', type: 'hero', hp: 20, classes: ['guardian','smarty'], icon: '🥕', superpowers: ['Precision Blast','Flick-a-Zombie','Root Wall','Carrot-beard'], desc: 'Carrot commander.' },
        { id: 'rose', name: 'Rose', type: 'hero', hp: 20, classes: ['solar','smarty'], icon: '🌹', superpowers: ['Goatify','Rose Superpower','Weed Whack','Aqua Viter'], desc: 'Graceful but deadly.' },
        // ZOMBIE HEROES
        { id: 'super_brainz', name: 'Super Brainz', type: 'hero', hp: 20, classes: ['brainy','sneaky'], icon: '🦹', superpowers: ['Telepathy','Beam Me Up','Super Stench','Zombie Superpower'], desc: 'Super zombie villain.' },
        { id: 'the_smash', name: 'The Smash', type: 'hero', hp: 20, classes: ['beastly','hearty'], icon: '💪', superpowers: ['Maniacal Laugh','Smash Superpower','Possessed','Landscaper'], desc: 'Smashes everything.' },
        { id: 'impfinity', name: 'Impfinity', type: 'hero', hp: 20, classes: ['crazy','sneaky'], icon: '👿', superpowers: ['Impfinity Superpower','Rocket Science','Barrel of Barrels','Triple Threat'], desc: 'Tiny but crazy.' },
        { id: 'brain_freeze', name: 'Brain Freeze', type: 'hero', hp: 20, classes: ['beastly','sneaky'], icon: '🧊', superpowers: ['Frostbite','Nibble','Rolling Stone','Freeze Ray'], desc: 'Freezing pet monster.' },
        { id: 'professor_brainstorm', name: 'Prof. Brainstorm', type: 'hero', hp: 20, classes: ['brainy','crazy'], icon: '🧠', superpowers: ['Triplication','Main Brain','Portal Combat','Eureka'], desc: 'Mad scientist zombie.' },
        { id: 'electric_boogaloo', name: 'Electric Boogaloo', type: 'hero', hp: 20, classes: ['beastly','crazy'], icon: '⚡', superpowers: ['Electrify','Super Stench','Dance Off','Disco Dance'], desc: 'Disco dancing zombie.' },
        { id: 'rustbolt', name: 'Rustbolt', type: 'hero', hp: 20, classes: ['brainy','hearty'], icon: '🤖', superpowers: ['Shrink Ray','Genetic Amplification','Rock Wall','Rustbolt Superpower'], desc: 'Rusty robot villain.' },
        { id: 'immorticia', name: 'Immorticia', type: 'hero', hp: 20, classes: ['beastly','brainy'], icon: '🧛', superpowers: ['Bat Spin','Final Mission','Weird Bounce','Immorticia Superpower'], desc: 'Vampire villain.' },
        { id: 'neptuna', name: 'Neptuna', type: 'hero', hp: 20, classes: ['hearty','sneaky'], icon: '🐙', superpowers: ['Possessed','Gravitron','Neptuna Superpower','Moonbase Z'], desc: 'Tentacled terror.' },
        { id: 'z_mech', name: 'Z-Mech', type: 'hero', hp: 20, classes: ['crazy','hearty'], icon: '🦾', superpowers: ['Z-Mech Superpower','Missile Madness','Robo-Zomboss','Missile Madness'], desc: 'Mech suit mayhem.' },
        { id: 'huge_gigantacus', name: 'Huge-Gigantacus', type: 'hero', hp: 20, classes: ['brainy','sneaky'], icon: '👹', superpowers: ['Bad Moon Rising','Huge-Gigantacus Superpower','Teleportation Zombie','Stupid Cupid'], desc: 'Massive zombie threat.' }
    ],

    cards: [
        // === PLANT CARDS ===
        // SOLAR CLASS
        { id: 'bellflower', name: 'Bellflower', type: 'plant', class: 'solar', cost: 1, attack: 1, health: 1, rarity: 'common', icon: '🔔', tribe: 'Flower', desc: 'A cheerful little flower.', abilities: [] },
        { id: 'morning_glory', name: 'Morning Glory', type: 'plant', class: 'solar', cost: 1, attack: 2, health: 2, rarity: 'uncommon', icon: '🌅', tribe: 'Flower', desc: '+1/+1 if you made 6+ Sun.', abilities: ['on_play_bonus_if_6sun'] },
        { id: 'sunflower', name: 'Sunflower', type: 'plant', class: 'solar', cost: 1, attack: 0, health: 1, rarity: 'common', icon: '🌻', tribe: 'Flower', desc: 'Start of Turn: +1 Sun.', traits: ['team-up'], abilities: ['start_of_turn_sun_1'] },
        { id: 'fume_shroom', name: 'Fume-Shroom', type: 'plant', class: 'solar', cost: 2, attack: 2, health: 1, rarity: 'uncommon', icon: '🍄', tribe: 'Mushroom', desc: 'Strikethrough.', traits: ['strikethrough'], abilities: [] },
        { id: 'pepper_md', name: 'Pepper M.D.', type: 'plant', class: 'solar', cost: 2, attack: 2, health: 2, rarity: 'common', icon: '🌶️', tribe: 'Pepper', desc: '+2/+2 when healed.', abilities: ['on_heal_grow'] },
        { id: 'sage_sage', name: 'Sage Sage', type: 'plant', class: 'solar', cost: 2, attack: 2, health: 1, rarity: 'uncommon', icon: '🧙', tribe: 'Leafy', desc: 'Draw if 6+ Sun made.', abilities: ['on_play_draw_if_6sun'] },
        { id: 'jack_o_lantern', name: 'Jack O\'Lantern', type: 'plant', class: 'solar', cost: 3, attack: 2, health: 3, rarity: 'super_rare', icon: '🎃', tribe: 'Squash', desc: 'Strikethrough. +1 Str when hurts hero.', traits: ['strikethrough'], abilities: ['on_hit_hero_plus_1str'] },
        { id: 'mixed_nuts', name: 'Mixed Nuts', type: 'plant', class: 'solar', cost: 3, attack: 2, health: 2, rarity: 'common', icon: '🥜', tribe: 'Nut', desc: '+2/+2 if Team-Up here.', abilities: ['on_play_bonus_if_teamup'] },
        { id: 'twin_sunflower', name: 'Twin Sunflower', type: 'plant', class: 'solar', cost: 3, attack: 0, health: 2, rarity: 'super_rare', icon: '🌻', tribe: 'Flower', desc: 'Start of Turn: +2 Sun. Team-Up.', traits: ['team-up'], abilities: ['start_of_turn_sun_2'] },
        { id: 'venus_flytrap', name: 'Venus Flytrap', type: 'plant', class: 'solar', cost: 3, attack: 2, health: 2, rarity: 'common', icon: '🪴', tribe: 'Flytrap', desc: 'Heals hero on damage.', abilities: ['on_damage_heal_hero'] },
        { id: 'bloomerang', name: 'Bloomerang', type: 'plant', class: 'solar', cost: 4, attack: 3, health: 3, rarity: 'common', icon: '🌸', tribe: 'Flower', desc: 'Strikethrough.', traits: ['strikethrough'], abilities: [] },
        { id: 'chomper', name: 'Chomper', type: 'plant', class: 'solar', cost: 4, attack: 2, health: 1, rarity: 'super_rare', icon: '🦖', tribe: 'Flytrap', desc: 'Destroy a zombie here (3 or less).', abilities: ['on_play_destroy_zombie_3'] },
        { id: 'magnifying_grass', name: 'Magnifying Grass', type: 'plant', class: 'solar', cost: 4, attack: 0, health: 1, rarity: 'rare', icon: '🔍', tribe: 'Leafy', desc: '+1 Str per Sun made.', abilities: ['on_play_plus_per_sun'] },
        { id: 'metal_petal_sunflower', name: 'Metal Petal Sunflower', type: 'plant', class: 'solar', cost: 4, attack: 3, health: 4, rarity: 'uncommon', icon: '🌻', tribe: 'Flower', desc: '+1 Sun each turn.', abilities: ['start_of_turn_sun_1'] },
        { id: 'power_flower', name: 'Power Flower', type: 'plant', class: 'solar', cost: 5, attack: 3, health: 5, rarity: 'common', icon: '💐', tribe: 'Flower', desc: 'Strikethrough. Heal 1 per Flower.', traits: ['strikethrough'], abilities: ['heal_per_flower'] },
        { id: 'squash', name: 'Squash', type: 'plant', class: 'solar', cost: 5, attack: 0, health: 0, rarity: 'common', icon: '🎃', tribe: 'Squash', desc: 'Destroy a zombie.', abilities: ['on_play_destroy_any_zombie'] },
        { id: 'briar_rose', name: 'Briar Rose', type: 'plant', class: 'solar', cost: 6, attack: 3, health: 4, rarity: 'super_rare', icon: '🌹', tribe: 'Flower', desc: 'Destroy zombie that hurts a Flower.', abilities: ['on_flower_hurt_destroy_attacker'] },
        { id: 'laser_bean', name: 'Laser Bean', type: 'plant', class: 'solar', cost: 6, attack: 4, health: 6, rarity: 'rare', icon: '🫘', tribe: 'Bean', desc: 'Strikethrough.', traits: ['strikethrough'], abilities: [] },
        { id: 'three_headed_chomper', name: 'Three-Headed Chomper', type: 'plant', class: 'solar', cost: 6, attack: 6, health: 5, rarity: 'legendary', icon: '🐉', tribe: 'Flytrap', desc: 'EOT: Destroy zombies here & next door.', abilities: ['end_of_turn_destroy_adjacent'] },
        { id: 'cornucopia', name: 'Cornucopia', type: 'plant', class: 'solar', cost: 10, attack: 6, health: 6, rarity: 'legendary', icon: '🌽', tribe: 'Corn', desc: 'Make random Plant in each lane.', abilities: ['on_play_make_random_plants'] },

        // KABLOOM CLASS
        { id: 'button_mushroom', name: 'Button Mushroom', type: 'plant', class: 'kabloom', cost: 1, attack: 1, health: 1, rarity: 'common', icon: '🍄', tribe: 'Mushroom', desc: '', abilities: [] },
        { id: 'poison_mushroom', name: 'Poison Mushroom', type: 'plant', class: 'kabloom', cost: 1, attack: 1, health: 1, rarity: 'uncommon', icon: '🍄', tribe: 'Mushroom', desc: 'Anti-Hero 2.', traits: ['anti_hero_2'], abilities: [] },
        { id: 'shroom_for_two', name: 'Shroom for Two', type: 'plant', class: 'kabloom', cost: 1, attack: 1, health: 1, rarity: 'common', icon: '🍄', tribe: 'Mushroom', desc: 'Make a 1/1 Puff-Shroom.', abilities: ['on_play_make_puff'] },
        { id: 'berry_blast', name: 'Berry Blast', type: 'plant', class: 'kabloom', cost: 2, attack: 0, health: 0, rarity: 'common', icon: '🫐', tribe: 'Berry', desc: 'Do 3 damage.', abilities: ['on_play_damage_3'] },
        { id: 'buff_shroom', name: 'Buff-Shroom', type: 'plant', class: 'kabloom', cost: 2, attack: 1, health: 1, rarity: 'common', icon: '🍄', tribe: 'Mushroom', desc: 'All Mushrooms +1/+1.', abilities: ['on_play_buff_mushrooms'] },
        { id: 'seedling', name: 'Seedling', type: 'plant', class: 'kabloom', cost: 2, attack: 0, health: 1, rarity: 'common', icon: '🌱', tribe: 'Seed', desc: 'Transforms into random 6-cost plant.', abilities: ['transform_next_turn'] },
        { id: 'wild_berry', name: 'Wild Berry', type: 'plant', class: 'kabloom', cost: 2, attack: 4, health: 1, rarity: 'uncommon', icon: '🫐', tribe: 'Berry', desc: 'Moves to random lane.', abilities: ['on_play_move_random'] },
        { id: 'berry_angry', name: 'Berry Angry', type: 'plant', class: 'kabloom', cost: 3, attack: 0, health: 0, rarity: 'common', icon: '🫐', tribe: 'Berry', desc: 'All Plants +2 Str.', abilities: ['all_plants_plus_2_str'] },
        { id: 'mushroom_ringleader', name: 'Mushroom Ringleader', type: 'plant', class: 'kabloom', cost: 3, attack: 0, health: 1, rarity: 'uncommon', icon: '🍄', tribe: 'Mushroom', desc: '+2 Str per other Plant.', abilities: ['on_play_plus_per_plant'] },
        { id: 'poison_ivy', name: 'Poison Ivy', type: 'plant', class: 'kabloom', cost: 3, attack: 1, health: 3, rarity: 'common', icon: '🌿', tribe: 'Leafy', desc: 'Anti-Hero 4.', traits: ['anti_hero_4'], abilities: [] },
        { id: 'punish_shroom', name: 'Punish-Shroom', type: 'plant', class: 'kabloom', cost: 3, attack: 2, health: 2, rarity: 'rare', icon: '🍄', tribe: 'Mushroom', desc: 'When Mushroom dies, 2 damage.', abilities: ['on_mushroom_death_damage'] },
        { id: 'zapricot', name: 'Zapricot', type: 'plant', class: 'kabloom', cost: 3, attack: 4, health: 2, rarity: 'common', icon: '⚡', tribe: 'Fruit', desc: '', abilities: [] },
        { id: 'pair_of_pears', name: 'Pair of Pears', type: 'plant', class: 'kabloom', cost: 4, attack: 2, health: 2, rarity: 'common', icon: '🍐', tribe: 'Fruit', desc: 'Make a 2/2 Pear Pal.', abilities: ['on_play_make_pear'] },
        { id: 'pineclone', name: 'Pineclone', type: 'plant', class: 'kabloom', cost: 4, attack: 3, health: 3, rarity: 'super_rare', icon: '🌲', tribe: 'Pinecone', desc: 'All Plants become 3/3 Pineclones.', abilities: ['on_play_transform_all_pineclones'] },
        { id: 'sergeant_strongberry', name: 'Sgt. Strongberry', type: 'plant', class: 'kabloom', cost: 4, attack: 4, health: 3, rarity: 'super_rare', icon: '🫐', tribe: 'Berry', desc: 'Berries do +2 extra damage.', abilities: ['berry_extra_damage_2'] },
        { id: 'sour_grapes', name: 'Sour Grapes', type: 'plant', class: 'kabloom', cost: 4, attack: 2, health: 2, rarity: 'common', icon: '🍇', tribe: 'Berry', desc: 'Do 1 damage to each Zombie.', abilities: ['on_play_damage_all_zombies_1'] },
        { id: 'bluesberry', name: 'Bluesberry', type: 'plant', class: 'kabloom', cost: 5, attack: 3, health: 3, rarity: 'uncommon', icon: '🫐', tribe: 'Berry', desc: 'Do 2 damage.', abilities: ['on_play_damage_2'] },
        { id: 'sizzle', name: 'Sizzle', type: 'plant', class: 'kabloom', cost: 5, attack: 0, health: 0, rarity: 'uncommon', icon: '🔥', tribe: 'Trick', desc: 'Do 5 damage to a Zombie.', abilities: ['on_play_damage_zombie_5'] },
        { id: 'cherry_bomb', name: 'Cherry Bomb', type: 'plant', class: 'kabloom', cost: 6, attack: 0, health: 0, rarity: 'rare', icon: '🍒', tribe: 'Berry', desc: '4 damage here and next door.', abilities: ['on_play_bomb_here_adjacent'] },
        { id: 'dandy_lion_king', name: 'Dandy Lion King', type: 'plant', class: 'kabloom', cost: 6, attack: 4, health: 4, rarity: 'legendary', icon: '🦁', tribe: 'Flower', desc: 'Halve enemy hero HP.', abilities: ['on_play_halve_enemy_hp'] },
        { id: 'grapes_of_wrath', name: 'Grapes of Wrath', type: 'plant', class: 'kabloom', cost: 7, attack: 6, health: 6, rarity: 'super_rare', icon: '🍇', tribe: 'Berry', desc: 'When destroyed: 6 damage to hero.', abilities: ['on_destroy_damage_hero_6'] },
        { id: 'kernel_corn', name: 'Kernel Corn', type: 'plant', class: 'kabloom', cost: 8, attack: 5, health: 5, rarity: 'legendary', icon: '🌽', tribe: 'Corn', desc: 'Do 4 damage to all Zombies.', abilities: ['on_play_damage_all_zombies_4'] },

        // GUARDIAN CLASS
        { id: 'potato_mine', name: 'Potato Mine', type: 'plant', class: 'guardian', cost: 1, attack: 0, health: 1, rarity: 'common', icon: '🥔', tribe: 'Root', desc: 'When destroyed: 2 damage here.', traits: ['team-up'], abilities: ['on_destroy_damage_here_2'] },
        { id: 'small_nut', name: 'Small-Nut', type: 'plant', class: 'guardian', cost: 1, attack: 1, health: 1, rarity: 'common', icon: '🥜', tribe: 'Nut', desc: '', abilities: [] },
        { id: 'sting_bean', name: 'Sting Bean', type: 'plant', class: 'guardian', cost: 1, attack: 1, health: 2, rarity: 'common', icon: '🫘', tribe: 'Bean', desc: 'Amphibious, Bullseye.', traits: ['amphibious','bullseye'], abilities: [] },
        { id: 'wall_nut', name: 'Wall-Nut', type: 'plant', class: 'guardian', cost: 1, attack: 0, health: 6, rarity: 'common', icon: '🥜', tribe: 'Nut', desc: 'Team-Up.', traits: ['team-up'], abilities: [] },
        { id: 'cactus', name: 'Cactus', type: 'plant', class: 'guardian', cost: 2, attack: 1, health: 5, rarity: 'common', icon: '🌵', tribe: 'Cactus', desc: 'Bullseye.', traits: ['bullseye'], abilities: [] },
        { id: 'grave_buster', name: 'Grave Buster', type: 'plant', class: 'guardian', cost: 2, attack: 0, health: 0, rarity: 'common', icon: '⚰️', tribe: 'Vine', desc: 'Destroy a gravestone.', abilities: ['on_play_destroy_gravestone'] },
        { id: 'jugger_nut', name: 'Jugger-Nut', type: 'plant', class: 'guardian', cost: 2, attack: 2, health: 2, rarity: 'rare', icon: '🥜', tribe: 'Nut', desc: 'Armored 1, Bullseye.', traits: ['armored_1','bullseye'], abilities: [] },
        { id: 'pismashio', name: 'Pismashio', type: 'plant', class: 'guardian', cost: 2, attack: 2, health: 3, rarity: 'common', icon: '🥜', tribe: 'Nut', desc: '', abilities: [] },
        { id: 'sea_shroom', name: 'Sea-Shroom', type: 'plant', class: 'guardian', cost: 2, attack: 2, health: 2, rarity: 'uncommon', icon: '🍄', tribe: 'Mushroom', desc: 'Amphibious.', traits: ['amphibious'], abilities: [] },
        { id: 'water_chestnut', name: 'Water Chestnut', type: 'plant', class: 'guardian', cost: 2, attack: 0, health: 8, rarity: 'uncommon', icon: '🌰', tribe: 'Nut', desc: 'Amphibious, Team-Up.', traits: ['amphibious','team-up'], abilities: [] },
        { id: 'hibernating_beary', name: 'Hibernating Beary', type: 'plant', class: 'guardian', cost: 3, attack: 0, health: 8, rarity: 'rare', icon: '🐻', tribe: 'Berry', desc: 'When hurt: +4 Str.', abilities: ['on_hurt_plus_4_str'] },
        { id: 'pea_nut', name: 'Pea-Nut', type: 'plant', class: 'guardian', cost: 3, attack: 2, health: 4, rarity: 'common', icon: '🥜', tribe: 'Nut', desc: 'Team-Up.', traits: ['team-up'], abilities: [] },
        { id: 'spineapple', name: 'Spineapple', type: 'plant', class: 'guardian', cost: 3, attack: 0, health: 3, rarity: 'common', icon: '🍍', tribe: 'Fruit', desc: '0-Str Plants get +2 Str.', abilities: ['on_play_buff_zero_attack'] },
        { id: 'steel_magnolia', name: 'Steel Magnolia', type: 'plant', class: 'guardian', cost: 3, attack: 2, health: 2, rarity: 'uncommon', icon: '🌸', tribe: 'Flower', desc: 'Plants here & next door +2 HP.', abilities: ['on_play_buff_health_adjacent'] },
        { id: 'guacodile', name: 'Guacodile', type: 'plant', class: 'guardian', cost: 4, attack: 4, health: 3, rarity: 'uncommon', icon: '🥑', tribe: 'Fruit', desc: 'Amphibious. On destroy: 4 damage here.', traits: ['amphibious'], abilities: ['on_destroy_damage_here_4'] },
        { id: 'mirror_nut', name: 'Mirror-Nut', type: 'plant', class: 'guardian', cost: 4, attack: 0, health: 7, rarity: 'super_rare', icon: '🥜', tribe: 'Nut', desc: 'When Nuts hurt: 2 damage to hero.', traits: ['team-up'], abilities: ['on_nut_hurt_damage_hero'] },
        { id: 'prickly_pear', name: 'Prickly Pear', type: 'plant', class: 'guardian', cost: 4, attack: 0, health: 4, rarity: 'rare', icon: '🌵', tribe: 'Cactus', desc: 'When hurt: 4 damage here.', traits: ['team-up'], abilities: ['on_hurt_damage_here_4'] },
        { id: 'doom_shroom', name: 'Doom-Shroom', type: 'plant', class: 'guardian', cost: 5, attack: 0, health: 0, rarity: 'super_rare', icon: '💣', tribe: 'Mushroom', desc: 'Destroy all 4+ Str units.', abilities: ['on_play_destroy_all_4_str'] },
        { id: 'smackadamia', name: 'Smackadamia', type: 'plant', class: 'guardian', cost: 5, attack: 4, health: 4, rarity: 'common', icon: '🥜', tribe: 'Nut', desc: 'Amphibious. Nuts +2 HP.', traits: ['amphibious'], abilities: ['on_play_buff_nuts_health'] },
        { id: 'tough_beets', name: 'Tough Beets', type: 'plant', class: 'guardian', cost: 5, attack: 6, health: 1, rarity: 'rare', icon: '🫘', tribe: 'Root', desc: 'Armored 1. +1 HP per unit.', traits: ['armored_1'], abilities: ['on_play_plus_per_unit'] },
        { id: 'poppin_poppies', name: 'Poppin\' Poppies', type: 'plant', class: 'guardian', cost: 6, attack: 4, health: 4, rarity: 'super_rare', icon: '🌺', tribe: 'Flower', desc: 'Make 1/1 Lil\' Buddies here & next door.', abilities: ['on_play_make_lil_buddies'] },
        { id: 'soul_patch', name: 'Soul Patch', type: 'plant', class: 'guardian', cost: 7, attack: 5, health: 10, rarity: 'legendary', icon: '🛡️', tribe: 'Vine', desc: 'Takes damage for hero.', traits: ['armored_1'], abilities: ['taunt_for_hero'] },
        { id: 'wall_nut_bowling', name: 'Wall-Nut Bowling', type: 'plant', class: 'guardian', cost: 10, attack: 0, health: 0, rarity: 'legendary', icon: '🎳', tribe: 'Nut', desc: 'Wall-Nuts in all ground lanes, deal 6.', abilities: ['on_play_wall_nut_bowling'] },

        // MEGA-GROW CLASS
        { id: 'peashooter', name: 'Peashooter', type: 'plant', class: 'mega-grow', cost: 1, attack: 1, health: 1, rarity: 'common', icon: '🌱', tribe: 'Pea', desc: '', abilities: [] },
        { id: 'torchwood', name: 'Torchwood', type: 'plant', class: 'mega-grow', cost: 1, attack: 0, health: 3, rarity: 'common', icon: '🌳', tribe: 'Tree', desc: 'Peas behind +2 Str.', traits: ['team-up'], abilities: ['peas_behind_plus_2'] },
        { id: 'cabbage_pult', name: 'Cabbage-Pult', type: 'plant', class: 'mega-grow', cost: 2, attack: 1, health: 3, rarity: 'common', icon: '🥬', tribe: 'Leafy', desc: '+1/+1 on Heights.', abilities: ['on_play_heights_bonus'] },
        { id: 'fertilize', name: 'Fertilize', type: 'plant', class: 'mega-grow', cost: 3, attack: 0, health: 0, rarity: 'common', icon: '💧', tribe: 'Trick', desc: 'A Plant gets +3/+3.', abilities: ['on_play_plant_plus_3'] },
        { id: 'flourish', name: 'Flourish', type: 'plant', class: 'mega-grow', cost: 3, attack: 0, health: 0, rarity: 'common', icon: '🌿', tribe: 'Flower', desc: 'Draw two cards.', abilities: ['on_play_draw_2'] },
        { id: 'grow_shroom', name: 'Grow-Shroom', type: 'plant', class: 'mega-grow', cost: 3, attack: 2, health: 1, rarity: 'common', icon: '🍄', tribe: 'Mushroom', desc: 'Another Plant gets +2/+2.', abilities: ['on_play_buff_ally_2'] },
        { id: 'repeater', name: 'Repeater', type: 'plant', class: 'mega-grow', cost: 3, attack: 2, health: 2, rarity: 'common', icon: '🌱', tribe: 'Pea', desc: 'Bonus attack after combat.', abilities: ['bonus_attack_after_combat'] },
        { id: 'bonk_choy', name: 'Bonk Choy', type: 'plant', class: 'mega-grow', cost: 1, attack: 2, health: 1, rarity: 'uncommon', icon: '🥬', tribe: 'Leafy', desc: '+1 Str this turn.', abilities: ['on_play_plus_1_str_this_turn'] },
        { id: 'party_thyme', name: 'Party Thyme', type: 'plant', class: 'mega-grow', cost: 1, attack: 2, health: 1, rarity: 'uncommon', icon: '🌿', tribe: 'Leafy', desc: 'Draw on bonus attack.', abilities: ['on_bonus_attack_draw'] },
        { id: 'pea_pod', name: 'Pea Pod', type: 'plant', class: 'mega-grow', cost: 1, attack: 1, health: 1, rarity: 'common', icon: '🌱', tribe: 'Pea', desc: '+1/+1 each turn.', abilities: ['start_of_turn_self_plus_1'] },
        { id: 'sweet_potato', name: 'Sweet Potato', type: 'plant', class: 'mega-grow', cost: 1, attack: 0, health: 3, rarity: 'uncommon', icon: '🍠', tribe: 'Root', desc: 'Move a Zombie here.', traits: ['team-up'], abilities: ['on_play_move_zombie_here'] },
        { id: 'black_eye_pea', name: 'Black-Eye Pea', type: 'plant', class: 'mega-grow', cost: 2, attack: 2, health: 3, rarity: 'rare', icon: '🫛', tribe: 'Bean', desc: '+1/+1 on Zombie Trick.', abilities: ['on_zombie_trick_plus_1'] },
        { id: 'doubled_mint', name: 'Doubled Mint', type: 'plant', class: 'mega-grow', cost: 2, attack: 1, health: 2, rarity: 'legendary', icon: '🌿', tribe: 'Leafy', desc: 'Double stats each turn.', abilities: ['start_of_turn_double_self'] },
        { id: 'fire_peashooter', name: 'Fire Peashooter', type: 'plant', class: 'mega-grow', cost: 2, attack: 3, health: 2, rarity: 'common', icon: '🔥', tribe: 'Pea', desc: '', abilities: [] },
        { id: 'muscle_sprout', name: 'Muscle Sprout', type: 'plant', class: 'mega-grow', cost: 3, attack: 3, health: 2, rarity: 'super_rare', icon: '💪', tribe: 'Leafy', desc: '+1/+1 per Plant played.', abilities: ['on_plant_played_plus_1'] },
        { id: 'the_podfather', name: 'The Podfather', type: 'plant', class: 'mega-grow', cost: 3, attack: 2, health: 2, rarity: 'rare', icon: '🌱', tribe: 'Pea', desc: 'Peas played get +2/+2.', abilities: ['on_pea_played_buff_2'] },
        { id: 'plant_food', name: 'Plant Food', type: 'plant', class: 'mega-grow', cost: 4, attack: 0, health: 0, rarity: 'rare', icon: '🥗', tribe: 'Trick', desc: 'A Plant gets +1/+1 and Bonus Attack.', abilities: ['on_play_plant_plus_1_bonus'] },
        { id: 're_peat_moss', name: 'Re-Peat Moss', type: 'plant', class: 'mega-grow', cost: 4, attack: 2, health: 3, rarity: 'common', icon: '🌿', tribe: 'Moss', desc: 'Bonus Attack on Trick.', abilities: ['on_trick_bonus_attack'] },
        { id: 'skyshooter', name: 'Skyshooter', type: 'plant', class: 'mega-grow', cost: 4, attack: 3, health: 2, rarity: 'uncommon', icon: '🚀', tribe: 'Pea', desc: '+2/+2 on Heights.', abilities: ['on_play_heights_bonus_2'] },
        { id: 'whipvine', name: 'Whipvine', type: 'plant', class: 'mega-grow', cost: 5, attack: 5, health: 5, rarity: 'uncommon', icon: '🌿', tribe: 'Vine', desc: 'Move a Zombie.', abilities: ['on_play_move_zombie'] },
        { id: 'potted_powerhouse', name: 'Potted Powerhouse', type: 'plant', class: 'mega-grow', cost: 5, attack: 3, health: 2, rarity: 'super_rare', icon: '🪴', tribe: 'Leafy', desc: '+1/+1 in hand when Plant buffed.', abilities: ['in_hand_on_ally_buff'] },
        { id: 'espresso_fiesta', name: 'Espresso Fiesta', type: 'plant', class: 'mega-grow', cost: 8, attack: 0, health: 0, rarity: 'super_rare', icon: '☕', tribe: 'Bean', desc: 'A Plant does 3 Bonus Attacks.', abilities: ['on_play_triple_bonus_attack'] },
        { id: 'bananasaurus_rex', name: 'Bananasaurus Rex', type: 'plant', class: 'mega-grow', cost: 4, attack: 3, health: 3, rarity: 'legendary', icon: '🍌', tribe: 'Banana', desc: '+1/+1 on draw. Bonus attack.', abilities: ['on_draw_plus_1','bonus_attack_after_combat'] },
        { id: 'super_phat_beets', name: 'Super-Phat Beets', type: 'plant', class: 'mega-grow', cost: 6, attack: 3, health: 3, rarity: 'rare', icon: '🫘', tribe: 'Root', desc: '+1/+1 per other unit.', abilities: ['on_play_plus_per_unit'] },

        // SMARTY CLASS
        { id: 'iceberg_lettuce', name: 'Iceberg Lettuce', type: 'plant', class: 'smarty', cost: 1, attack: 0, health: 1, rarity: 'common', icon: '🥬', tribe: 'Leafy', desc: 'Freeze a Zombie.', abilities: ['on_play_freeze_zombie'] },
        { id: 'bikkuri_bon', name: 'Bikkuri Bon', type: 'plant', class: 'smarty', cost: 1, attack: 1, health: 1, rarity: 'common', icon: '❓', tribe: 'Root', desc: 'Conjure a card.', abilities: ['on_play_conjure'] },
        { id: 'spring_beans', name: 'Spring Beans', type: 'plant', class: 'smarty', cost: 2, attack: 1, health: 1, rarity: 'common', icon: '🫘', tribe: 'Bean', desc: 'Move a Zombie to a random lane.', abilities: ['on_play_bounce_random'] },
        { id: 'admiral_navy_bean', name: 'Admiral Navy Bean', type: 'plant', class: 'smarty', cost: 2, attack: 2, health: 2, rarity: 'uncommon', icon: '🫘', tribe: 'Bean', desc: 'Draw when Beans played.', abilities: ['on_bean_draw'] },
        { id: 'frost_bean', name: 'Frost Bean', type: 'plant', class: 'smarty', cost: 2, attack: 2, health: 2, rarity: 'uncommon', icon: '🫘', tribe: 'Bean', desc: 'Freeze a Zombie.', abilities: ['on_play_freeze_zombie'] },
        { id: 'brainana', name: 'Brainana', type: 'plant', class: 'smarty', cost: 4, attack: 3, health: 3, rarity: 'legendary', icon: '🧠', tribe: 'Bean', desc: 'Enemy loses all Brains.', abilities: ['on_play_drain_all_brains'] },
        { id: 'jumping_bean', name: 'Jumping Bean', type: 'plant', class: 'smarty', cost: 2, attack: 1, health: 2, rarity: 'common', icon: '🫘', tribe: 'Bean', desc: 'Bounce a Zombie.', abilities: ['on_play_bounce'] },
        { id: 'gravebuster', name: 'Grave Buster (Smarty)', type: 'plant', class: 'smarty', cost: 2, attack: 0, health: 0, rarity: 'common', icon: '⚰️', tribe: 'Vine', desc: 'Destroy a Gravestone.', abilities: ['on_play_destroy_gravestone'] },
        { id: 'shell_shock', name: 'Shell Shock', type: 'plant', class: 'smarty', cost: 3, attack: 2, health: 2, rarity: 'common', icon: '🐚', tribe: 'Seal', desc: '', abilities: [] },
        { id: 'jugger_nut_smarty', name: 'Jugger-Nut', type: 'plant', class: 'smarty', cost: 3, attack: 2, health: 2, rarity: 'rare', icon: '🥜', tribe: 'Nut', desc: 'Armored 1, Bullseye.', traits: ['armored_1','bullseye'], abilities: [] },
        { id: 'witchs_familiar', name: 'Witch\'s Familiar', type: 'plant', class: 'smarty', cost: 3, attack: 2, health: 2, rarity: 'common', icon: '🦅', tribe: 'Bird', desc: 'Amphibious.', traits: ['amphibious'], abilities: [] },
        { id: 'sapping_sinew', name: 'Sapping Sinew', type: 'plant', class: 'smarty', cost: 4, attack: 3, health: 3, rarity: 'common', icon: '🌿', tribe: 'Vine', desc: 'Bounce a Zombie.', abilities: ['on_play_bounce'] },
        { id: 'snapdragon', name: 'Snapdragon', type: 'plant', class: 'smarty', cost: 4, attack: 3, health: 2, rarity: 'uncommon', icon: '🐉', tribe: 'Flower', desc: 'Do 2 damage to each adjacent Zombie.', abilities: ['on_play_damage_adjacent_zombies'] },
        { id: 'starfruit', name: 'Starfruit', type: 'plant', class: 'smarty', cost: 5, attack: 2, health: 2, rarity: 'rare', icon: '⭐', tribe: 'Fruit', desc: 'Attacks each enemy in a different lane.', abilities: ['attack_all_lanes'] },
        { id: 'winter_melon', name: 'Winter Melon', type: 'plant', class: 'smarty', cost: 6, attack: 4, health: 4, rarity: 'super_rare', icon: '🍈', tribe: 'Fruit', desc: 'Freeze and do 2 to adjacent.', abilities: ['on_play_freeze_adjacent'] },
        { id: 'the_big_gigantic', name: 'The Big Gigantic', type: 'plant', class: 'smarty', cost: 8, attack: 6, health: 6, rarity: 'legendary', icon: '🎸', tribe: 'Flower', desc: 'Bounce all enemy Zombies.', abilities: ['on_play_bounce_all_zombies'] },

        // === ZOMBIE CARDS ===
        // BEASTLY CLASS
        { id: 'zombie_chimp', name: 'Zombie Chimp', type: 'zombie', class: 'beastly', cost: 1, attack: 1, health: 1, rarity: 'common', icon: '🐵', tribe: 'Pet', desc: '', abilities: [] },
        { id: 'cat_lady', name: 'Cat Lady', type: 'zombie', class: 'beastly', cost: 1, attack: 2, health: 1, rarity: 'common', icon: '🐱', tribe: 'Pet', desc: '+2/+2 when you play a Pet.', abilities: ['on_pet_played_plus_2'] },
        { id: 'chocolate_zombie', name: 'Chocolate Zombie', type: 'zombie', class: 'beastly', cost: 1, attack: 1, health: 1, rarity: 'uncommon', icon: '🍫', tribe: 'Gourmet', desc: 'Hunt.', traits: ['hunt'], abilities: [] },
        { id: 'zombot_dark_engine', name: 'Zombot Dark Engine', type: 'zombie', class: 'beastly', cost: 2, attack: 2, health: 1, rarity: 'common', icon: '🤖', tribe: 'Science', desc: '', abilities: [] },
        { id: 'vimpire', name: 'Vimpire', type: 'zombie', class: 'beastly', cost: 2, attack: 2, health: 2, rarity: 'common', icon: '🧛', tribe: 'Pet', desc: 'Frenzy.', traits: ['frenzy'], abilities: [] },
        { id: 'cheese_cutter', name: 'Cheese Cutter', type: 'zombie', class: 'beastly', cost: 1, attack: 2, health: 2, rarity: 'super_rare', icon: '🧀', tribe: 'Gourmet', desc: 'When played: Conjure a Gourmet card.', abilities: ['on_play_conjure_gourmet'] },
        { id: 'penguin_zombie', name: 'Penguin Zombie', type: 'zombie', class: 'beastly', cost: 1, attack: 1, health: 1, rarity: 'common', icon: '🐧', tribe: 'Pet', desc: 'Freeze a Plant when played.', abilities: ['on_play_freeze'] },
        { id: 'quasar_zombie', name: 'Quasar Zombie', type: 'zombie', class: 'beastly', cost: 2, attack: 2, health: 1, rarity: 'common', icon: '🌀', tribe: 'Science', desc: '', abilities: [] },
        { id: 'ocean_archaeologist', name: 'Ocean Archaeologist', type: 'zombie', class: 'beastly', cost: 2, attack: 2, health: 2, rarity: 'uncommon', icon: '🐙', tribe: 'Pirate', desc: 'Amphibious.', traits: ['amphibious'], abilities: [] },
        { id: 'yeti_lunchbox', name: 'Yeti Lunchbox', type: 'zombie', class: 'beastly', cost: 2, attack: 3, health: 2, rarity: 'common', icon: '🧊', tribe: 'Gourmet', desc: '', abilities: [] },
        { id: 'ancient_vimpire', name: 'Ancient Vimpire', type: 'zombie', class: 'beastly', cost: 4, attack: 3, health: 3, rarity: 'super_rare', icon: '🧛', tribe: 'Pet', desc: 'Vampires get +1/+1 on destroy.', abilities: ['on_vampire_destroy_grow'] },
        { id: 'zombot_plankWalker', name: 'Zombot Plank Walker', type: 'zombie', class: 'beastly', cost: 5, attack: 5, health: 5, rarity: 'legendary', icon: '🤖', tribe: 'Science', desc: 'Make a random Zombie in each lane.', abilities: ['on_play_make_random_zombies'] },

        // BRAINY CLASS
        { id: 'telepath_zombie', name: 'Telepath Zombie', type: 'zombie', class: 'brainy', cost: 1, attack: 1, health: 2, rarity: 'common', icon: '🧠', tribe: 'Science', desc: '', abilities: [] },
        { id: 'beam_me_up', name: 'Beam Me Up', type: 'zombie', class: 'brainy', cost: 2, attack: 2, health: 2, rarity: 'uncommon', icon: '🛸', tribe: 'Science', desc: 'Make a 2/2 Zombie.', abilities: ['on_play_make_zombie'] },
        { id: 'portal_crew', name: 'Portal Crew', type: 'zombie', class: 'brainy', cost: 2, attack: 2, health: 2, rarity: 'common', icon: '🌀', tribe: 'Science', desc: '', abilities: [] },
        { id: 'cellphone_zombie', name: 'Cellphone Zombie', type: 'zombie', class: 'brainy', cost: 2, attack: 2, health: 3, rarity: 'common', icon: '📱', tribe: 'Science', desc: '', abilities: [] },
        { id: 'gentleman_zombie', name: 'Gentleman Zombie', type: 'zombie', class: 'brainy', cost: 2, attack: 1, health: 1, rarity: 'uncommon', icon: '🎩', tribe: 'Gourmet', desc: 'Start of Turn: +1 Brain.', abilities: ['start_of_turn_brain_1'] },
        { id: 'drone_engineer', name: 'Drone Engineer', type: 'zombie', class: 'brainy', cost: 2, attack: 2, health: 2, rarity: 'common', icon: '🤖', tribe: 'Science', desc: '', abilities: [] },
        { id: 'mad_scientist', name: 'Mad Scientist', type: 'zombie', class: 'brainy', cost: 3, attack: 2, health: 2, rarity: 'uncommon', icon: '🔬', tribe: 'Science', desc: 'When you play a Trick: Draw a card.', abilities: ['on_trick_draw'] },
        { id: 'rocket_science', name: 'Rocket Science', type: 'zombie', class: 'brainy', cost: 3, attack: 0, health: 0, rarity: 'super_rare', icon: '🚀', tribe: 'Science', desc: 'Destroy a Plant with 4+ Str.', abilities: ['on_play_destroy_plant_4'] },
        { id: 'interdimensional_zombie', name: 'Interdimensional Zombie', type: 'zombie', class: 'brainy', cost: 3, attack: 3, health: 2, rarity: 'super_rare', icon: '🌀', tribe: 'Science', desc: 'When played: Conjure a card, cost -1.', abilities: ['on_play_conjure_cost_1'] },
        { id: 'zombot_stasis', name: 'Zombot Stasis', type: 'zombie', class: 'brainy', cost: 4, attack: 3, health: 4, rarity: 'rare', icon: '🤖', tribe: 'Science', desc: '', abilities: [] },
        { id: 'teleportation_zombie', name: 'Teleportation Zombie', type: 'zombie', class: 'brainy', cost: 4, attack: 3, health: 4, rarity: 'super_rare', icon: '🌀', tribe: 'Science', desc: 'Play Zombies as Tricks.', abilities: ['zombies_as_tricks'] },
        { id: 'zombot_war_bot', name: 'Zombot War Bot', type: 'zombie', class: 'brainy', cost: 5, attack: 4, health: 4, rarity: 'rare', icon: '🤖', tribe: 'Science', desc: '', abilities: [] },
        { id: 'trickster', name: 'Trickster', type: 'zombie', class: 'brainy', cost: 5, attack: 5, health: 5, rarity: 'legendary', icon: '🃏', tribe: 'Science', desc: 'Cost -1 per Trick played. When played: 3 damage to hero.', abilities: ['cost_reduce_per_trick','on_play_damage_hero_3'] },
        { id: 'teacher_zombie', name: 'Teacher Zombie', type: 'zombie', class: 'brainy', cost: 3, attack: 2, health: 3, rarity: 'super_rare', icon: '📚', tribe: 'Gourmet', desc: 'Tricks cost -1.', abilities: ['tricks_cost_1_less'] },

        // CRAZY CLASS
        { id: 'backup_dancer', name: 'Backup Dancer', type: 'zombie', class: 'crazy', cost: 1, attack: 1, health: 1, rarity: 'common', icon: '🕺', tribe: 'Dancing', desc: '', abilities: [] },
        { id: 'bungee_plumber', name: 'Bungee Plumber', type: 'zombie', class: 'crazy', cost: 1, attack: 0, health: 0, rarity: 'common', icon: '🪢', tribe: 'Trick', desc: 'Do 2 damage.', abilities: ['on_play_damage_2'] },
        { id: 'disco_zombie', name: 'Disco Zombie', type: 'zombie', class: 'crazy', cost: 2, attack: 1, health: 1, rarity: 'common', icon: '🕺', tribe: 'Dancing', desc: 'Make two 1/1 Backup Dancers.', abilities: ['on_play_make_dancers'] },
        { id: 'exploding_imp', name: 'Exploding Imp', type: 'zombie', class: 'crazy', cost: 2, attack: 3, health: 1, rarity: 'uncommon', icon: '💣', tribe: 'Pirate', desc: 'When destroyed: 2 damage to hero.', abilities: ['on_destroy_damage_hero_2'] },
        { id: 'headstone_carver', name: 'Headstone Carver', type: 'zombie', class: 'crazy', cost: 2, attack: 2, health: 2, rarity: 'uncommon', icon: '⛏️', tribe: 'Gravestone', desc: 'Gravestones get +1/+1.', abilities: ['graves_plus_1'] },
        { id: 'mime_imp', name: 'Mime Imp', type: 'zombie', class: 'crazy', cost: 2, attack: 2, health: 1, rarity: 'uncommon', icon: '🤡', tribe: 'Pirate', desc: 'When played next to a Gravestone: Bullseye.', abilities: ['on_play_bullseye_if_grave'] },
        { id: 'paparazzi_zombie', name: 'Paparazzi Zombie', type: 'zombie', class: 'crazy', cost: 1, attack: 1, health: 1, rarity: 'common', icon: '📷', tribe: 'Pirate', desc: '+1/+1 each time a Trick is played.', abilities: ['on_trick_played_plus_1'] },
        { id: 'fireworks_zombie', name: 'Fireworks Zombie', type: 'zombie', class: 'crazy', cost: 3, attack: 2, health: 2, rarity: 'uncommon', icon: '🎆', tribe: 'Party', desc: 'When played: 1 damage to all.', abilities: ['on_play_damage_all_1'] },
        { id: 'loud_mouth', name: 'Loud Mouth', type: 'zombie', class: 'crazy', cost: 3, attack: 2, health: 3, rarity: 'common', icon: '📢', tribe: 'Party', desc: '', abilities: [] },
        { id: 'arm_wrestler', name: 'Arm Wrestler', type: 'zombie', class: 'crazy', cost: 3, attack: 3, health: 3, rarity: 'common', icon: '💪', tribe: 'Sports', desc: '', abilities: [] },
        { id: 'zombie_king', name: 'Zombie King', type: 'zombie', class: 'crazy', cost: 3, attack: 2, health: 2, rarity: 'uncommon', icon: '👑', tribe: 'Party', desc: 'Other Dancing Zombies +1/+1.', abilities: ['dancers_plus_1'] },
        { id: 'quazard', name: 'Quazard', type: 'zombie', class: 'crazy', cost: 2, attack: 2, health: 1, rarity: 'legendary', icon: '🌀', tribe: 'Science', desc: 'When played next to a Zombie: Conjure a Superpower.', abilities: ['on_play_conjure_superpower'] },
        { id: 'disco_tron_3000', name: 'Disco-Tron 3000', type: 'zombie', class: 'crazy', cost: 5, attack: 5, health: 5, rarity: 'legendary', icon: '🤖', tribe: 'Dancing', desc: 'Make two 1/1 Backup Dancers.', abilities: ['on_play_make_2_dancers'] },
        { id: 'valkyrie', name: 'Valkyrie', type: 'zombie', class: 'crazy', cost: 3, attack: 3, health: 3, rarity: 'super_rare', icon: '⚔️', tribe: 'Party', desc: '+2/+2 when any Zombie is destroyed.', abilities: ['on_any_zombie_death_plus_2'] },

        // HEARTY CLASS
        { id: 'backup_dancer_hearty', name: 'Backup Dancer', type: 'zombie', class: 'hearty', cost: 1, attack: 1, health: 1, rarity: 'common', icon: '🕺', tribe: 'Dancing', desc: '', abilities: [] },
        { id: 'flag_zombie', name: 'Flag Zombie', type: 'zombie', class: 'hearty', cost: 1, attack: 1, health: 1, rarity: 'common', icon: '🚩', tribe: 'Sports', desc: 'Your next Zombie costs -1.', abilities: ['on_play_reduce_next_cost'] },
        { id: 'zombie_coach', name: 'Zombie Coach', type: 'zombie', class: 'hearty', cost: 2, attack: 2, health: 2, rarity: 'uncommon', icon: '🏈', tribe: 'Sports', desc: 'Sports Zombies can\'t be hurt this turn.', abilities: ['sports_protect_this_turn'] },
        { id: 'team_mascot', name: 'Team Mascot', type: 'zombie', class: 'hearty', cost: 2, attack: 2, health: 3, rarity: 'uncommon', icon: '🏆', tribe: 'Sports', desc: 'Sports Zombies +1/+1.', abilities: ['sports_plus_1'] },
        { id: 'cuckoo_zombie', name: 'Cuckoo Zombie', type: 'zombie', class: 'hearty', cost: 2, attack: 2, health: 2, rarity: 'common', icon: '🐦', tribe: 'Bird', desc: 'Amphibious.', traits: ['amphibious'], abilities: [] },
        { id: 'defensive_end', name: 'Defensive End', type: 'zombie', class: 'hearty', cost: 4, attack: 3, health: 5, rarity: 'super_rare', icon: '🛡️', tribe: 'Sports', desc: 'Tricks cost +1. Armored 1.', traits: ['armored_1'], abilities: ['tricks_cost_1_more'] },
        { id: 'rolling_stone', name: 'Rolling Stone', type: 'zombie', class: 'hearty', cost: 2, attack: 0, health: 0, rarity: 'common', icon: '🪨', tribe: 'Trick', desc: 'Destroy a Plant with 2 Str or less.', abilities: ['on_play_destroy_plant_2'] },
        { id: 'armored_zombie', name: 'Armored Zombie', type: 'zombie', class: 'hearty', cost: 3, attack: 2, health: 3, rarity: 'common', icon: '🛡️', tribe: 'Sports', desc: 'Armored 1.', traits: ['armored_1'], abilities: [] },
        { id: 'sports_zombie', name: 'Sports Zombie', type: 'zombie', class: 'hearty', cost: 3, attack: 3, health: 3, rarity: 'common', icon: '🏈', tribe: 'Sports', desc: '', abilities: [] },
        { id: 'coffee_zombie', name: 'Coffee Zombie', type: 'zombie', class: 'hearty', cost: 3, attack: 2, health: 2, rarity: 'uncommon', icon: '☕', tribe: 'Gourmet', desc: 'All Zombies get +1/+1.', abilities: ['all_zombies_plus_1'] },
        { id: 'all_star_zombie', name: 'All-Star Zombie', type: 'zombie', class: 'hearty', cost: 5, attack: 4, health: 6, rarity: 'super_rare', icon: '⭐', tribe: 'Sports', desc: 'Armored 1, Frenzy, Untrickable.', traits: ['armored_1','frenzy','untrickable'], abilities: [] },
        { id: 'going_viral', name: 'Going Viral', type: 'zombie', class: 'hearty', cost: 3, attack: 0, health: 0, rarity: 'event', icon: '🦠', tribe: 'Trick', desc: 'All Zombies get +1/+1 and Frenzy. Shuffle into deck.', abilities: ['all_zombies_plus_1_frenzy'] },
        { id: 'sumo_zombie', name: 'Sumo Zombie', type: 'zombie', class: 'hearty', cost: 4, attack: 3, health: 3, rarity: 'uncommon', icon: '🤼', tribe: 'Sports', desc: 'Move a Plant.', abilities: ['on_play_move_plant'] },
        { id: 'zombot_blast_bot', name: 'Zombot Blast Bot', type: 'zombie', class: 'hearty', cost: 5, attack: 5, health: 5, rarity: 'legendary', icon: '🤖', tribe: 'Science', desc: '', abilities: [] },
        { id: 'gargantuar', name: 'Gargantuar', type: 'zombie', class: 'hearty', cost: 5, attack: 5, health: 5, rarity: 'rare', icon: '🦾', tribe: 'Gargantuar', desc: '', abilities: [] },

        // SNEAKY CLASS
        { id: 'mini_ninja', name: 'Mini Ninja', type: 'zombie', class: 'sneaky', cost: 1, attack: 2, health: 1, rarity: 'common', icon: '🥷', tribe: 'Pirate', desc: '', abilities: [] },
        { id: 'smelly_zombie', name: 'Smelly Zombie', type: 'zombie', class: 'sneaky', cost: 1, attack: 1, health: 1, rarity: 'common', icon: '🤢', tribe: 'Pirate', desc: '', abilities: [] },
        { id: 'flying_zombie', name: 'Flying Zombie', type: 'zombie', class: 'sneaky', cost: 2, attack: 2, health: 1, rarity: 'common', icon: '🦇', tribe: 'Pirate', desc: 'Amphibious.', traits: ['amphibious'], abilities: [] },
        { id: 'pogo_zombie', name: 'Pogo Zombie', type: 'zombie', class: 'sneaky', cost: 2, attack: 2, health: 2, rarity: 'super_rare', icon: '🦘', tribe: 'Pirate', desc: 'Bounce a Plant when played.', abilities: ['on_play_bounce'] },
        { id: 'backyard_bounce', name: 'Backyard Bounce', type: 'zombie', class: 'sneaky', cost: 2, attack: 0, health: 0, rarity: 'common', icon: '🏋️', tribe: 'Trick', desc: 'Bounce a Plant.', abilities: ['on_play_bounce_plant'] },
        { id: 'space_ninja', name: 'Space Ninja', type: 'zombie', class: 'sneaky', cost: 3, attack: 3, health: 2, rarity: 'uncommon', icon: '🥷', tribe: 'Pirate', desc: 'Untrickable.', traits: ['untrickable'], abilities: [] },
        { id: 'ambush', name: 'Ambush', type: 'zombie', class: 'sneaky', cost: 2, attack: 0, health: 0, rarity: 'common', icon: '🌑', tribe: 'Trick', desc: 'A Zombie gets +2/+2 and Gravestone.', abilities: ['on_play_grave_plus_2'] },
        { id: 'zombie_ninja', name: 'Zombie Ninja', type: 'zombie', class: 'sneaky', cost: 3, attack: 3, health: 2, rarity: 'common', icon: '🥷', tribe: 'Pirate', desc: '', abilities: [] },
        { id: 'unearthly_zombie', name: 'Unearthly Zombie', type: 'zombie', class: 'sneaky', cost: 3, attack: 3, health: 3, rarity: 'common', icon: '🧟', tribe: 'Gargantuar', desc: '', abilities: [] },
        { id: 'zombot_drone', name: 'Zombot Drone', type: 'zombie', class: 'sneaky', cost: 3, attack: 2, health: 2, rarity: 'common', icon: '🤖', tribe: 'Science', desc: '', abilities: [] },
        { id: 'cursed_gargantuar', name: 'Cursed Gargantuar', type: 'zombie', class: 'sneaky', cost: 4, attack: 4, health: 4, rarity: 'rare', icon: '💀', tribe: 'Gargantuar', desc: '', abilities: [] },
        { id: 'line_dancer', name: 'Line Dancer', type: 'zombie', class: 'sneaky', cost: 4, attack: 3, health: 3, rarity: 'uncommon', icon: '💃', tribe: 'Dancing', desc: 'Move to a random lane.', abilities: ['on_play_move_random'] },
        { id: 'stupid_cupid', name: 'Stupid Cupid', type: 'zombie', class: 'sneaky', cost: 4, attack: 3, health: 3, rarity: 'legendary', icon: '💘', tribe: 'Pirate', desc: 'Move a Plant to a random lane.', abilities: ['on_play_move_plant_random'] },
        { id: 'zombot_aerostatic_gondola', name: 'Zombot Aerostatic Gondola', type: 'zombie', class: 'sneaky', cost: 5, attack: 5, health: 5, rarity: 'legendary', icon: '🎈', tribe: 'Science', desc: '', abilities: [] },

        // === TRICK CARDS ===
        // Plant Tricks
        { id: 'water_balloons', name: 'Water Balloons', type: 'trick', class: 'solar', cost: 2, rarity: 'common', icon: '🎈', desc: 'A Zombie gets -1/-1. (-2/-2 if 6+ Sun).', abilities: ['debuff_zombie'] },
        { id: 'second_best_taco', name: '2nd-Best Taco', type: 'trick', class: 'solar', cost: 3, rarity: 'rare', icon: '🌮', desc: 'Heal 4. Draw a card.', abilities: ['heal_4_draw'] },
        { id: 'whack_a_zombie', name: 'Whack-a-Zombie', type: 'trick', class: 'solar', cost: 3, rarity: 'uncommon', icon: '🔨', desc: 'Destroy a Zombie with 3 or less Str.', abilities: ['destroy_zombie_3'] },
        { id: 'lawnmower', name: 'Lawnmower', type: 'trick', class: 'solar', cost: 4, rarity: 'rare', icon: '🚜', desc: 'Destroy a Ground Zombie.', abilities: ['destroy_ground_zombie'] },
        { id: 'precision_blast', name: 'Precision Blast', type: 'trick', class: 'solar', cost: 0, rarity: 'legendary', icon: '🎯', desc: 'Do 6 damage to the Zombie Hero in the middle lane.', abilities: ['superpower_precision_blast'] },

        { id: 'cherry_bomb_trick', name: 'Cherry Bomb', type: 'trick', class: 'kabloom', cost: 6, rarity: 'rare', icon: '🍒', desc: 'Do 4 damage here and next door.', abilities: ['bomb_here_adjacent'] },

        { id: 'flick_a_zombie', name: 'Flick-a-Zombie', type: 'trick', class: 'smarty', cost: 1, rarity: 'common', icon: '👉', desc: 'Move a Zombie to another lane.', abilities: ['move_zombie'] },
        { id: 'transmogrify', name: 'Transmogrify', type: 'trick', class: 'smarty', cost: 3, rarity: 'uncommon', icon: '🧪', desc: 'Transform a Zombie into a random 1-Cost Zombie.', abilities: ['transform_zombie_1'] },
        { id: 'whirlwind', name: 'Whirlwind', type: 'trick', class: 'smarty', cost: 2, rarity: 'common', icon: '🌪️', desc: 'Bounce a Zombie.', abilities: ['bounce_zombie'] },
        { id: 'time_to_shine', name: 'Time to Shine', type: 'trick', class: 'mega-grow', cost: 1, rarity: 'legendary', icon: '✨', desc: 'A Plant gets +1/+1 and Bonus Attack.', abilities: ['plant_plus_1_bonus'] },

        { id: 'rocket_science_z', name: 'Rocket Science', type: 'trick', class: 'brainy', cost: 4, rarity: 'super_rare', icon: '🚀', desc: 'Destroy a Plant with 4+ Str.', abilities: ['destroy_plant_4'] },
        { id: 'teleport', name: 'Teleport', type: 'trick', class: 'brainy', cost: 2, rarity: 'super_rare', icon: '🌀', desc: 'Draw a card. Next Zombie costs -2.', abilities: ['draw_reduce_next'] },

        { id: 'the_zombot_stomp', name: 'Zombot Stomp', type: 'trick', class: 'crazy', cost: 5, rarity: 'rare', icon: '🤖', desc: 'Do 3 damage to all Plants.', abilities: ['damage_all_plants_3'] },

        { id: 'weed_spray', name: 'Weed Spray', type: 'trick', class: 'hearty', cost: 3, rarity: 'uncommon', icon: '🌿', desc: 'Destroy all Plants with 2 or less Str.', abilities: ['destroy_plants_2'] },
        { id: 'shrink_ray', name: 'Shrink Ray', type: 'trick', class: 'hearty', cost: 3, rarity: 'uncommon', icon: 'Ray', desc: 'A Plant becomes 1/1.', abilities: ['shrink_plant'] },
        { id: 'knockout', name: 'Knockout', type: 'trick', class: 'hearty', cost: 3, rarity: 'uncommon', icon: '🥊', desc: 'Do 3 damage to a Plant.', abilities: ['damage_plant_3'] },

        { id: 'beam_me_up_z', name: 'Beam Me Up', type: 'trick', class: 'brainy', cost: 2, rarity: 'uncommon', icon: '🛸', desc: 'Make a 2/2 Zombie.', abilities: ['make_zombie_2_2'] },
        { id: 'nibble', name: 'Nibble', type: 'trick', class: 'beastly', cost: 1, rarity: 'common', icon: '👄', desc: 'Do 2 damage. Heal 2.', abilities: ['damage_2_heal_2'] },
    ],

    // Class color mapping for display
    classColors: {
        'solar': '#f59e0b',
        'kabloom': '#ef4444',
        'guardian': '#22c55e',
        'mega-grow': '#3b82f6',
        'smarty': '#06b6d4',
        'beastly': '#a855f7',
        'brainy': '#3b82f6',
        'crazy': '#f97316',
        'hearty': '#ef4444',
        'sneaky': '#64748b'
    },

    classEmoji: {
        'solar': '☀️',
        'kabloom': '💥',
        'guardian': '🛡️',
        'mega-grow': '📈',
        'smarty': '🧠',
        'beastly': '🐾',
        'brainy': '🎓',
        'crazy': '🤪',
        'hearty': '❤️',
        'sneaky': '🌑'
    },

    rarityColors: {
        'common': '#9ca3af',
        'uncommon': '#22c55e',
        'rare': '#3b82f6',
        'super_rare': '#a855f7',
        'legendary': '#f59e0b',
        'event': '#f97316'
    }
};

// Helper to get hero's class cards
function getHeroCards(heroId) {
    const hero = CARD_DATA.heroes.find(h => h.id === heroId);
    if (!hero || hero.type !== 'hero') return [];
    return CARD_DATA.cards.filter(c => hero.classes.includes(c.class));
}

// Get all cards for a class
function getClassCards(className) {
    return CARD_DATA.cards.filter(c => c.class === className);
}

// Get card by ID
function getCard(id) {
    return CARD_DATA.cards.find(c => c.id === id) || CARD_DATA.heroes.find(h => h.id === id);
}
