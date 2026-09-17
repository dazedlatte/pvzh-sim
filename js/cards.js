const WIKI_IMG = 'https://plantsvszombies.wiki.gg/images/thumb';

function wikiImg(name, size = 96) {
    return `${WIKI_IMG}/${name}H.png/${size}px-${name}H.png`;
}

const CARD_DATA = {
    heroes: [
        // PLANT HEROES
        { id: 'green_shadow', name: 'Green Shadow', type: 'hero', hp: 20, classes: ['mega-grow','smarty'], img: wikiImg('Green_Shadow'), desc: 'The pea-shooting hero.' },
        { id: 'solar_flare', name: 'Solar Flare', type: 'hero', hp: 20, classes: ['kabloom','solar'], img: wikiImg('Solar_Flare'), desc: 'Fiery solar power.' },
        { id: 'chompzilla', name: 'Chompzilla', type: 'hero', hp: 20, classes: ['solar','mega-grow'], img: wikiImg('Chompzilla'), desc: 'The mighty chomper.' },
        { id: 'grass_knuckles', name: 'Grass Knuckles', type: 'hero', hp: 20, classes: ['guardian','mega-grow'], img: wikiImg('Grass_Knuckles'), desc: 'Punches first, asks questions later.' },
        { id: 'spudow', name: 'Spudow', type: 'hero', hp: 20, classes: ['guardian','kabloom'], img: wikiImg('Spudow'), desc: 'Explosive tuber.' },
        { id: 'nightcap', name: 'Night Cap', type: 'hero', hp: 20, classes: ['kabloom','smarty'], img: wikiImg('Nightcap'), desc: 'Sneaky mushroom.' },
        { id: 'captain_combustible', name: 'Captain Combustible', type: 'hero', hp: 20, classes: ['kabloom','mega-grow'], img: wikiImg('Captain_Combustible'), desc: 'Explosive doublestrike.' },
        { id: 'citron', name: 'Citron', type: 'hero', hp: 20, classes: ['guardian','smarty'], img: wikiImg('Citron'), desc: 'Space citron warrior.' },
        { id: 'beta_carrotina', name: 'Beta-Carrotina', type: 'hero', hp: 20, classes: ['guardian','smarty'], img: wikiImg('Beta-Carrotina'), desc: 'Carrot commander.' },
        { id: 'rose', name: 'Rose', type: 'hero', hp: 20, classes: ['solar','smarty'], img: wikiImg('Rose'), desc: 'Graceful but deadly.' },
        // ZOMBIE HEROES
        { id: 'super_brainz', name: 'Super Brainz', type: 'hero', hp: 20, classes: ['brainy','sneaky'], img: wikiImg('Super_Brainz'), desc: 'Super zombie villain.' },
        { id: 'the_smash', name: 'The Smash', type: 'hero', hp: 20, classes: ['beastly','hearty'], img: wikiImg('The_Smash'), desc: 'Smashes everything.' },
        { id: 'impfinity', name: 'Impfinity', type: 'hero', hp: 20, classes: ['crazy','sneaky'], img: wikiImg('Impfinity'), desc: 'Tiny but crazy.' },
        { id: 'brain_freeze', name: 'Brain Freeze', type: 'hero', hp: 20, classes: ['beastly','sneaky'], img: wikiImg('Brain_Freeze'), desc: 'Freezing pet monster.' },
        { id: 'professor_brainstorm', name: 'Prof. Brainstorm', type: 'hero', hp: 20, classes: ['brainy','crazy'], img: wikiImg('Professor_Brainstorm'), desc: 'Mad scientist zombie.' },
        { id: 'electric_boogaloo', name: 'Electric Boogaloo', type: 'hero', hp: 20, classes: ['beastly','crazy'], img: wikiImg('Electric_Boogaloo'), desc: 'Disco dancing zombie.' },
        { id: 'rustbolt', name: 'Rustbolt', type: 'hero', hp: 20, classes: ['brainy','hearty'], img: wikiImg('Rustbolt'), desc: 'Rusty robot villain.' },
        { id: 'immorticia', name: 'Immorticia', type: 'hero', hp: 20, classes: ['beastly','brainy'], img: wikiImg('Immorticia'), desc: 'Vampire villain.' },
        { id: 'neptuna', name: 'Neptuna', type: 'hero', hp: 20, classes: ['hearty','sneaky'], img: wikiImg('Neptuna'), desc: 'Tentacled terror.' },
        { id: 'z_mech', name: 'Z-Mech', type: 'hero', hp: 20, classes: ['crazy','hearty'], img: wikiImg('Z-Mech'), desc: 'Mech suit mayhem.' },
        { id: 'huge_gigantacus', name: 'Huge-Gigantacus', type: 'hero', hp: 20, classes: ['brainy','sneaky'], img: wikiImg('Huge-Gigantacus'), desc: 'Massive zombie threat.' }
    ],

    cards: [
        // === PLANT CARDS ===
        // SOLAR CLASS
        { id: 'bellflower', name: 'Bellflower', type: 'plant', class: 'solar', cost: 1, attack: 1, health: 1, rarity: 'common', img: wikiImg('Bellflower'), tribe: 'Flower', desc: '', traits: [], abilities: [] },
        { id: 'morning_glory', name: 'Morning Glory', type: 'plant', class: 'solar', cost: 1, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Morning_Glory'), tribe: 'Flower', desc: 'When played: This gets +1 Strength / +1 Health if you made at least 6 Sunlight this turn.', traits: [], abilities: ['on_play_bonus_if_6sun'] },
        { id: 'sunflower', name: 'Sunflower', type: 'plant', class: 'solar', cost: 1, attack: 0, health: 1, rarity: 'common', img: wikiImg('Sunflower'), tribe: 'Flower', desc: 'Start of Turn: You get +1 Sunlight this turn.', traits: ['team-up'], abilities: ['start_of_turn_sun_1'] },
        { id: 'fume_shroom', name: 'Fume-Shroom', type: 'plant', class: 'solar', cost: 2, attack: 2, health: 1, rarity: 'uncommon', img: wikiImg('Fume-Shroom'), tribe: 'Mushroom', desc: 'Strikethrough.', traits: ['strikethrough'], abilities: [] },
        { id: 'pepper_md', name: 'Pepper M.D.', type: 'plant', class: 'solar', cost: 2, attack: 2, health: 2, rarity: 'common', img: wikiImg('Pepper_M.D.'), tribe: 'Pepper', desc: 'This gets +2 Strength / +2 Health when a Plant or your Hero is healed.', traits: [], abilities: ['on_heal_grow'] },
        { id: 'sage_sage', name: 'Sage Sage', type: 'plant', class: 'solar', cost: 2, attack: 2, health: 1, rarity: 'uncommon', img: wikiImg('Sage_Sage'), tribe: 'Leafy', desc: 'When played: If you made at least 6 Sunlight this turn, draw a card.', traits: [], abilities: ['on_play_draw_if_6sun'] },
        { id: 'jack_o_lantern', name: "Jack O'Lantern", type: 'plant', class: 'solar', cost: 3, attack: 2, health: 3, rarity: 'super_rare', img: wikiImg('Jack_O%27_Lantern'), tribe: 'Squash', desc: 'Strikethrough. When this hurts the Zombie Hero, it gets +1 Strength.', traits: ['strikethrough'], abilities: ['on_hit_hero_plus_1str'] },
        { id: 'mixed_nuts', name: 'Mixed Nuts', type: 'plant', class: 'solar', cost: 3, attack: 2, health: 2, rarity: 'common', img: wikiImg('Mixed_Nuts'), tribe: 'Nut', desc: 'When played: This gets +2 Strength / +2 Health if there\'s a Plant with Team-Up here.', traits: [], abilities: ['on_play_bonus_if_teamup'] },
        { id: 'twin_sunflower', name: 'Twin Sunflower', type: 'plant', class: 'solar', cost: 3, attack: 0, health: 2, rarity: 'super_rare', img: wikiImg('Twin_Sunflower'), tribe: 'Flower', desc: 'Start of Turn: You get +2 Sunlight this turn.', traits: ['team-up'], abilities: ['start_of_turn_sun_2'] },
        { id: 'venus_flytrap', name: 'Venus Flytrap', type: 'plant', class: 'solar', cost: 3, attack: 2, health: 2, rarity: 'common', img: wikiImg('Venus_Flytrap'), tribe: 'Flytrap', desc: 'When this does damage, heal your Hero for that much.', traits: [], abilities: ['on_damage_heal_hero'] },
        { id: 'bloomerang', name: 'Bloomerang', type: 'plant', class: 'solar', cost: 4, attack: 3, health: 3, rarity: 'common', img: wikiImg('Bloomerang'), tribe: 'Flower', desc: 'Strikethrough.', traits: ['strikethrough'], abilities: [] },
        { id: 'chomper', name: 'Chomper', type: 'plant', class: 'solar', cost: 4, attack: 2, health: 1, rarity: 'super_rare', img: wikiImg('Chomper'), tribe: 'Flytrap', desc: 'When played: Destroy a Zombie here with 3 Strength or less.', traits: [], abilities: ['on_play_destroy_zombie_3'] },
        { id: 'magnifying_grass', name: 'Magnifying Grass', type: 'plant', class: 'solar', cost: 4, attack: 0, health: 1, rarity: 'rare', img: wikiImg('Magnifying_Grass'), tribe: 'Leafy', desc: 'When played: This gets +1 Strength for each Sun you made this turn.', traits: [], abilities: ['on_play_plus_per_sun'] },
        { id: 'metal_petal_sunflower', name: 'Metal Petal Sunflower', type: 'plant', class: 'solar', cost: 4, attack: 3, health: 4, rarity: 'uncommon', img: wikiImg('Metal_Petal_Sunflower'), tribe: 'Flower', desc: 'Start of Turn: You get +1 Sunlight this turn.', traits: [], abilities: ['start_of_turn_sun_1'] },
        { id: 'power_flower', name: 'Power Flower', type: 'plant', class: 'solar', cost: 5, attack: 3, health: 5, rarity: 'common', img: wikiImg('Power_Flower'), tribe: 'Flower', desc: 'Strikethrough. Start of turn: Heal your Hero for 1 for each Flower.', traits: ['strikethrough'], abilities: ['heal_per_flower'] },
        { id: 'squash', name: 'Squash', type: 'plant', class: 'solar', cost: 5, attack: 0, health: 0, rarity: 'common', img: wikiImg('Squash'), tribe: 'Squash', desc: 'When played: Destroy a Zombie.', traits: [], abilities: ['on_play_destroy_any_zombie'] },
        { id: 'briar_rose', name: 'Briar Rose', type: 'plant', class: 'solar', cost: 6, attack: 3, health: 4, rarity: 'super_rare', img: wikiImg('Briar_Rose'), tribe: 'Flower', desc: 'When a Zombie hurts a Flower, destroy that Zombie.', traits: [], abilities: ['on_flower_hurt_destroy_attacker'] },
        { id: 'laser_bean', name: 'Laser Bean', type: 'plant', class: 'solar', cost: 6, attack: 4, health: 6, rarity: 'rare', img: wikiImg('Laser_Bean'), tribe: 'Bean', desc: 'Strikethrough.', traits: ['strikethrough'], abilities: [] },
        { id: 'three_headed_chomper', name: 'Three-Headed Chomper', type: 'plant', class: 'solar', cost: 6, attack: 6, health: 5, rarity: 'legendary', img: wikiImg('Three-Headed_Chomper'), tribe: 'Flytrap', desc: 'End of Turn: Destroy all Zombies here and next door.', traits: [], abilities: ['end_of_turn_destroy_adjacent'] },
        { id: 'cornucopia', name: 'Cornucopia', type: 'plant', class: 'solar', cost: 10, attack: 6, health: 6, rarity: 'legendary', img: wikiImg('Cornucopia'), tribe: 'Corn', desc: 'When played: Make a random Plant in each other lane.', traits: [], abilities: ['on_play_make_random_plants'] },

        // KABLOOM CLASS
        { id: 'button_mushroom', name: 'Button Mushroom', type: 'plant', class: 'kabloom', cost: 1, attack: 1, health: 1, rarity: 'common', img: wikiImg('Button_Mushroom'), tribe: 'Mushroom', desc: '', traits: [], abilities: [] },
        { id: 'poison_mushroom', name: 'Poison Mushroom', type: 'plant', class: 'kabloom', cost: 1, attack: 1, health: 1, rarity: 'uncommon', img: wikiImg('Poison_Mushroom'), tribe: 'Mushroom', desc: 'Anti-Hero 2.', traits: ['anti_hero_2'], abilities: [] },
        { id: 'shroom_for_two', name: 'Shroom for Two', type: 'plant', class: 'kabloom', cost: 1, attack: 1, health: 1, rarity: 'common', img: wikiImg('Shroom_for_Two'), tribe: 'Mushroom', desc: 'When played: Make a 1 Strength / 1 Health Puff-Shroom with Team-Up here.', traits: [], abilities: ['on_play_make_puff'] },
        { id: 'berry_blast', name: 'Berry Blast', type: 'plant', class: 'kabloom', cost: 2, attack: 0, health: 0, rarity: 'common', img: wikiImg('Berry_Blast'), tribe: 'Berry', desc: 'Do 3 damage.', traits: [], abilities: ['on_play_damage_3'] },
        { id: 'buff_shroom', name: 'Buff-Shroom', type: 'plant', class: 'kabloom', cost: 2, attack: 1, health: 1, rarity: 'common', img: wikiImg('Buff-Shroom'), tribe: 'Mushroom', desc: 'When played: All Mushrooms get +1 Strength / +1 Health.', traits: [], abilities: ['on_play_buff_mushrooms'] },
        { id: 'seedling', name: 'Seedling', type: 'plant', class: 'kabloom', cost: 2, attack: 0, health: 1, rarity: 'common', img: wikiImg('Seedling'), tribe: 'Seed', desc: 'At the start of the next turn: This transforms into a random Plant that costs 6 sunlight or less.', traits: [], abilities: ['transform_next_turn'] },
        { id: 'wild_berry', name: 'Wild Berry', type: 'plant', class: 'kabloom', cost: 2, attack: 4, health: 1, rarity: 'uncommon', img: wikiImg('Wild_Berry'), tribe: 'Berry', desc: 'When played: This moves to a random lane.', traits: [], abilities: ['on_play_move_random'] },
        { id: 'berry_angry', name: 'Berry Angry', type: 'plant', class: 'kabloom', cost: 3, attack: 0, health: 0, rarity: 'common', img: wikiImg('Berry_Angry'), tribe: 'Berry', desc: 'All Plants get +2 Strength.', traits: [], abilities: ['all_plants_plus_2_str'] },
        { id: 'mushroom_ringleader', name: 'Mushroom Ringleader', type: 'plant', class: 'kabloom', cost: 3, attack: 0, health: 1, rarity: 'uncommon', img: wikiImg('Mushroom_Ringleader'), tribe: 'Mushroom', desc: 'When played: This gets +2 Strength for each other Plant.', traits: [], abilities: ['on_play_plus_per_plant'] },
        { id: 'poison_ivy', name: 'Poison Ivy', type: 'plant', class: 'kabloom', cost: 3, attack: 1, health: 3, rarity: 'common', img: wikiImg('Poison_Ivy'), tribe: 'Leafy', desc: 'Anti-Hero 4.', traits: ['anti_hero_4'], abilities: [] },
        { id: 'punish_shroom', name: 'Punish-Shroom', type: 'plant', class: 'kabloom', cost: 3, attack: 2, health: 2, rarity: 'rare', img: wikiImg('Punish-Shroom'), tribe: 'Mushroom', desc: 'When a Mushroom is destroyed, do 2 damage to a random Zombie or Zombie Hero.', traits: [], abilities: ['on_mushroom_death_damage'] },
        { id: 'zapricot', name: 'Zapricot', type: 'plant', class: 'kabloom', cost: 3, attack: 4, health: 2, rarity: 'common', img: wikiImg('Zapricot'), tribe: 'Fruit', desc: '', traits: [], abilities: [] },
        { id: 'pair_of_pears', name: 'Pair of Pears', type: 'plant', class: 'kabloom', cost: 4, attack: 2, health: 2, rarity: 'common', img: wikiImg('Pair_of_Pears'), tribe: 'Fruit', desc: 'When played: Make a 2 Strength / 2 Health Pear Pal with Team-Up here.', traits: [], abilities: ['on_play_make_pear'] },
        { id: 'pineclone', name: 'Pineclone', type: 'plant', class: 'kabloom', cost: 4, attack: 3, health: 3, rarity: 'super_rare', img: wikiImg('Pineclone'), tribe: 'Pinecone', desc: 'When played: Transform all Plants in 3 Strength / 3 Health Pineclones.', traits: [], abilities: ['on_play_transform_all_pineclones'] },
        { id: 'sergeant_strongberry', name: 'Sgt. Strongberry', type: 'plant', class: 'kabloom', cost: 4, attack: 4, health: 3, rarity: 'super_rare', img: wikiImg('Sergeant_Strongberry'), tribe: 'Berry', desc: 'When another Berry does damage, do 2 extra damage.', traits: [], abilities: ['berry_extra_damage_2'] },
        { id: 'sour_grapes', name: 'Sour Grapes', type: 'plant', class: 'kabloom', cost: 4, attack: 2, health: 2, rarity: 'common', img: wikiImg('Sour_Grapes'), tribe: 'Berry', desc: 'When played: Do 1 damage to each Zombie.', traits: [], abilities: ['on_play_damage_all_zombies_1'] },
        { id: 'bluesberry', name: 'Bluesberry', type: 'plant', class: 'kabloom', cost: 5, attack: 3, health: 3, rarity: 'uncommon', img: wikiImg('Bluesberry'), tribe: 'Berry', desc: 'When played: Do 2 damage.', traits: [], abilities: ['on_play_damage_2'] },
        { id: 'sizzle', name: 'Sizzle', type: 'plant', class: 'kabloom', cost: 5, attack: 0, health: 0, rarity: 'uncommon', img: wikiImg('Sizzle'), tribe: 'Trick', desc: 'Do 5 damage to a Zombie.', traits: [], abilities: ['on_play_damage_zombie_5'] },
        { id: 'cherry_bomb', name: 'Cherry Bomb', type: 'plant', class: 'kabloom', cost: 6, attack: 0, health: 0, rarity: 'rare', img: wikiImg('Cherry_Bomb'), tribe: 'Berry', desc: 'Do 4 damage to each Zombie here and next door.', traits: [], abilities: ['on_play_bomb_here_adjacent'] },
        { id: 'dandy_lion_king', name: 'Dandy Lion King', type: 'plant', class: 'kabloom', cost: 6, attack: 4, health: 4, rarity: 'legendary', img: wikiImg('Dandy_Lion_King'), tribe: 'Flower', desc: 'When played: Damage the Zombie Hero for half their Health.', traits: [], abilities: ['on_play_halve_enemy_hp'] },
        { id: 'grapes_of_wrath', name: 'Grapes of Wrath', type: 'plant', class: 'kabloom', cost: 7, attack: 6, health: 6, rarity: 'super_rare', img: wikiImg('Grapes_of_Wrath'), tribe: 'Berry', desc: 'When destroyed: Do 6 damage to the Zombie Hero.', traits: [], abilities: ['on_destroy_damage_hero_6'] },
        { id: 'kernel_corn', name: 'Kernel Corn', type: 'plant', class: 'kabloom', cost: 8, attack: 5, health: 5, rarity: 'legendary', img: wikiImg('Kernel_Corn'), tribe: 'Corn', desc: 'When played: Do 4 damage to each Zombie.', traits: [], abilities: ['on_play_damage_all_zombies_4'] },

        // GUARDIAN CLASS
        { id: 'potato_mine', name: 'Potato Mine', type: 'plant', class: 'guardian', cost: 1, attack: 0, health: 1, rarity: 'common', img: wikiImg('Potato_Mine'), tribe: 'Root', desc: 'When destroyed: do 2 damage to a Zombie here.', traits: ['team-up'], abilities: ['on_destroy_damage_here_2'] },
        { id: 'small_nut', name: 'Small-Nut', type: 'plant', class: 'guardian', cost: 1, attack: 1, health: 1, rarity: 'common', img: wikiImg('Small-Nut'), tribe: 'Nut', desc: '', traits: [], abilities: [] },
        { id: 'sting_bean', name: 'Sting Bean', type: 'plant', class: 'guardian', cost: 1, attack: 1, health: 2, rarity: 'common', img: wikiImg('Sting_Bean'), tribe: 'Bean', desc: 'Amphibious, Bullseye.', traits: ['amphibious','bullseye'], abilities: [] },
        { id: 'wall_nut', name: 'Wall-Nut', type: 'plant', class: 'guardian', cost: 1, attack: 0, health: 6, rarity: 'common', img: wikiImg('Wall-Nut'), tribe: 'Nut', desc: 'Team-Up.', traits: ['team-up'], abilities: [] },
        { id: 'cactus', name: 'Cactus', type: 'plant', class: 'guardian', cost: 2, attack: 1, health: 5, rarity: 'common', img: wikiImg('Cactus'), tribe: 'Cactus', desc: 'Bullseye.', traits: ['bullseye'], abilities: [] },
        { id: 'grave_buster', name: 'Grave Buster', type: 'plant', class: 'guardian', cost: 2, attack: 0, health: 0, rarity: 'common', img: wikiImg('Grave_Buster'), tribe: 'Vine', desc: 'When played: Destroy a gravestone.', traits: [], abilities: ['on_play_destroy_gravestone'] },
        { id: 'jugger_nut', name: 'Jugger-Nut', type: 'plant', class: 'guardian', cost: 2, attack: 2, health: 2, rarity: 'rare', img: wikiImg('Jugger-Nut'), tribe: 'Nut', desc: 'Armored 1, Bullseye.', traits: ['armored_1','bullseye'], abilities: [] },
        { id: 'pismashio', name: 'Pismashio', type: 'plant', class: 'guardian', cost: 2, attack: 2, health: 3, rarity: 'common', img: wikiImg('Pismashio'), tribe: 'Nut', desc: '', traits: [], abilities: [] },
        { id: 'sea_shroom', name: 'Sea-Shroom', type: 'plant', class: 'guardian', cost: 2, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Sea-Shroom'), tribe: 'Mushroom', desc: 'Amphibious.', traits: ['amphibious'], abilities: [] },
        { id: 'water_chestnut', name: 'Water Chestnut', type: 'plant', class: 'guardian', cost: 2, attack: 0, health: 8, rarity: 'uncommon', img: wikiImg('Water_Chestnut'), tribe: 'Nut', desc: 'Amphibious, Team-Up.', traits: ['amphibious','team-up'], abilities: [] },
        { id: 'hibernating_beary', name: 'Hibernating Beary', type: 'plant', class: 'guardian', cost: 3, attack: 0, health: 8, rarity: 'rare', img: wikiImg('Hibernating_Beary'), tribe: 'Berry', desc: 'When hurt: This gets +4 Strength.', traits: [], abilities: ['on_hurt_plus_4_str'] },
        { id: 'pea_nut', name: 'Pea-Nut', type: 'plant', class: 'guardian', cost: 3, attack: 2, health: 4, rarity: 'common', img: wikiImg('Pea-Nut'), tribe: 'Nut', desc: 'Team-Up.', traits: ['team-up'], abilities: [] },
        { id: 'spineapple', name: 'Spineapple', type: 'plant', class: 'guardian', cost: 3, attack: 0, health: 3, rarity: 'common', img: wikiImg('Spineapple'), tribe: 'Fruit', desc: 'When played: Plants with no Strength get +2 Strength.', traits: [], abilities: ['on_play_buff_zero_attack'] },
        { id: 'steel_magnolia', name: 'Steel Magnolia', type: 'plant', class: 'guardian', cost: 3, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Steel_Magnolia'), tribe: 'Flower', desc: 'When played: Plants here and next door get +2 Health.', traits: [], abilities: ['on_play_buff_health_adjacent'] },
        { id: 'guacodile', name: 'Guacodile', type: 'plant', class: 'guardian', cost: 4, attack: 4, health: 3, rarity: 'uncommon', img: wikiImg('Guacodile'), tribe: 'Fruit', desc: 'Amphibious. When destroyed: do 4 damage to a Zombie here.', traits: ['amphibious'], abilities: ['on_destroy_damage_here_4'] },
        { id: 'mirror_nut', name: 'Mirror-Nut', type: 'plant', class: 'guardian', cost: 4, attack: 0, health: 7, rarity: 'super_rare', img: wikiImg('Mirror-Nut'), tribe: 'Nut', desc: 'When your Nuts get hurt, do 2 damage to the Zombie Hero.', traits: ['team-up'], abilities: ['on_nut_hurt_damage_hero'] },
        { id: 'prickly_pear', name: 'Prickly Pear', type: 'plant', class: 'guardian', cost: 4, attack: 0, health: 4, rarity: 'rare', img: wikiImg('Prickly_Pear'), tribe: 'Cactus', desc: 'When hurt: Do 4 damage to a Zombie here.', traits: ['team-up'], abilities: ['on_hurt_damage_here_4'] },
        { id: 'doom_shroom', name: 'Doom-Shroom', type: 'plant', class: 'guardian', cost: 5, attack: 0, health: 0, rarity: 'super_rare', img: wikiImg('Doom-Shroom'), tribe: 'Mushroom', desc: 'Destroy all Plants and Zombies with 4 Strength or more.', traits: [], abilities: ['on_play_destroy_all_4_str'] },
        { id: 'smackadamia', name: 'Smackadamia', type: 'plant', class: 'guardian', cost: 5, attack: 4, health: 4, rarity: 'common', img: wikiImg('Smackadamia'), tribe: 'Nut', desc: 'Amphibious. When played: Your Nuts get +2 Health.', traits: ['amphibious'], abilities: ['on_play_buff_nuts_health'] },
        { id: 'tough_beets', name: 'Tough Beets', type: 'plant', class: 'guardian', cost: 5, attack: 6, health: 1, rarity: 'rare', img: wikiImg('Tough_Beets'), tribe: 'Root', desc: 'Armored 1. When played: This gets +1 Health for each Plant and Zombie.', traits: ['armored_1'], abilities: ['on_play_plus_per_unit'] },
        { id: 'poppin_poppies', name: "Poppin' Poppies", type: 'plant', class: 'guardian', cost: 6, attack: 4, health: 4, rarity: 'super_rare', img: wikiImg('Poppin%27_Poppies'), tribe: 'Flower', desc: 'When played: Make 1 Health Lil\' Buddies with Team-Up here and next door.', traits: [], abilities: ['on_play_make_lil_buddies'] },
        { id: 'soul_patch', name: 'Soul Patch', type: 'plant', class: 'guardian', cost: 7, attack: 5, health: 10, rarity: 'legendary', img: wikiImg('Soul_Patch'), tribe: 'Vine', desc: 'If your Hero would get hurt, this gets hurt instead.', traits: ['armored_1'], abilities: ['taunt_for_hero'] },
        { id: 'wall_nut_bowling', name: 'Wall-Nut Bowling', type: 'plant', class: 'guardian', cost: 10, attack: 0, health: 0, rarity: 'legendary', img: wikiImg('Wall-Nut_Bowling'), tribe: 'Nut', desc: 'Make a 6 Health Wall-Nut with Team-Up in each Ground lane. Attack for 6 damage in those lanes.', traits: [], abilities: ['on_play_wall_nut_bowling'] },

        // MEGA-GROW CLASS
        { id: 'peashooter', name: 'Peashooter', type: 'plant', class: 'mega-grow', cost: 1, attack: 1, health: 1, rarity: 'common', img: wikiImg('Peashooter'), tribe: 'Pea', desc: 'Started fighting Zombies in 2009... and never stopped.', traits: [], abilities: [] },
        { id: 'torchwood', name: 'Torchwood', type: 'plant', class: 'mega-grow', cost: 1, attack: 0, health: 3, rarity: 'common', img: wikiImg('Torchwood'), tribe: 'Tree', desc: 'Peas behind this get +2 Strength.', traits: ['team-up'], abilities: ['peas_behind_plus_2'] },
        { id: 'cabbage_pult', name: 'Cabbage-Pult', type: 'plant', class: 'mega-grow', cost: 2, attack: 1, health: 3, rarity: 'common', img: wikiImg('Cabbage-Pult'), tribe: 'Leafy', desc: 'When played on Heights: This gets +1 Strength / +1 Health.', traits: [], abilities: ['on_play_heights_bonus'] },
        { id: 'fertilize', name: 'Fertilize', type: 'plant', class: 'mega-grow', cost: 3, attack: 0, health: 0, rarity: 'common', img: wikiImg('Fertilize'), tribe: 'Trick', desc: 'A Plant gets +3 Strength / +3 Health.', traits: [], abilities: ['on_play_plant_plus_3'] },
        { id: 'flourish', name: 'Flourish', type: 'plant', class: 'mega-grow', cost: 3, attack: 0, health: 0, rarity: 'common', img: wikiImg('Flourish'), tribe: 'Flower', desc: 'Draw two cards.', traits: [], abilities: ['on_play_draw_2'] },
        { id: 'grow_shroom', name: 'Grow-Shroom', type: 'plant', class: 'mega-grow', cost: 3, attack: 2, health: 1, rarity: 'common', img: wikiImg('Grow-Shroom'), tribe: 'Mushroom', desc: 'When played: Another Plant gets +2 Strength / +2 Health.', traits: [], abilities: ['on_play_buff_ally_2'] },
        { id: 'repeater', name: 'Repeater', type: 'plant', class: 'mega-grow', cost: 3, attack: 2, health: 2, rarity: 'common', img: wikiImg('Repeater'), tribe: 'Pea', desc: 'After combat here, this does a Bonus Attack.', traits: [], abilities: ['bonus_attack_after_combat'] },
        { id: 'bonk_choy', name: 'Bonk Choy', type: 'plant', class: 'mega-grow', cost: 1, attack: 2, health: 1, rarity: 'uncommon', img: wikiImg('Bonk_Choy'), tribe: 'Leafy', desc: 'When played: This gets +1 Strength this turn.', traits: [], abilities: ['on_play_plus_1_str_this_turn'] },
        { id: 'party_thyme', name: 'Party Thyme', type: 'plant', class: 'mega-grow', cost: 1, attack: 2, health: 1, rarity: 'uncommon', img: wikiImg('Party_Thyme'), tribe: 'Leafy', desc: 'When a Plant does a Bonus Attack, draw a card.', traits: [], abilities: ['on_bonus_attack_draw'] },
        { id: 'pea_pod', name: 'Pea Pod', type: 'plant', class: 'mega-grow', cost: 1, attack: 1, health: 1, rarity: 'common', img: wikiImg('Pea_Pod'), tribe: 'Pea', desc: 'Start of each turn: This gets +1 Strength / +1 Health.', traits: [], abilities: ['start_of_turn_self_plus_1'] },
        { id: 'sweet_potato', name: 'Sweet Potato', type: 'plant', class: 'mega-grow', cost: 1, attack: 0, health: 3, rarity: 'uncommon', img: wikiImg('Sweet_Potato'), tribe: 'Root', desc: 'When played: Move a Zombie from another lane to here.', traits: ['team-up'], abilities: ['on_play_move_zombie_here'] },
        { id: 'black_eye_pea', name: 'Black-Eyed Pea', type: 'plant', class: 'mega-grow', cost: 2, attack: 2, health: 3, rarity: 'rare', img: wikiImg('Black-Eyed_Pea'), tribe: 'Bean', desc: 'This gets +1 Strength / +1 Health when a Zombie Trick is played.', traits: [], abilities: ['on_zombie_trick_plus_1'] },
        { id: 'doubled_mint', name: 'Doubled Mint', type: 'plant', class: 'mega-grow', cost: 2, attack: 1, health: 2, rarity: 'legendary', img: wikiImg('Doubled_Mint'), tribe: 'Leafy', desc: 'Start of Turn: Double this Plant\'s Strength and Health.', traits: [], abilities: ['start_of_turn_double_self'] },
        { id: 'fire_peashooter', name: 'Fire Peashooter', type: 'plant', class: 'mega-grow', cost: 2, attack: 3, health: 2, rarity: 'common', img: wikiImg('Fire_Peashooter'), tribe: 'Pea', desc: '', traits: [], abilities: [] },
        { id: 'muscle_sprout', name: 'Muscle Sprout', type: 'plant', class: 'mega-grow', cost: 3, attack: 3, health: 2, rarity: 'super_rare', img: wikiImg('Muscle_Sprout'), tribe: 'Leafy', desc: 'This gets +1 Strength / +1 Health when you play another Plant.', traits: [], abilities: ['on_plant_played_plus_1'] },
        { id: 'the_podfather', name: 'The Podfather', type: 'plant', class: 'mega-grow', cost: 3, attack: 2, health: 2, rarity: 'rare', img: wikiImg('The_Podfather'), tribe: 'Pea', desc: 'When you play another Pea, that Pea gets +2 Strength / +2 Health.', traits: [], abilities: ['on_pea_played_buff_2'] },
        { id: 'plant_food', name: 'Plant Food', type: 'plant', class: 'mega-grow', cost: 4, attack: 0, health: 0, rarity: 'rare', img: wikiImg('Plant_Food'), tribe: 'Trick', desc: 'A Plant gets +1 Strength / +1 Health then does a Bonus Attack.', traits: [], abilities: ['on_play_plant_plus_1_bonus'] },
        { id: 're_peat_moss', name: 'Re-Peat Moss', type: 'plant', class: 'mega-grow', cost: 4, attack: 2, health: 3, rarity: 'common', img: wikiImg('Re-Peat_Moss'), tribe: 'Moss', desc: 'When you play a Trick, this does a Bonus Attack.', traits: [], abilities: ['on_trick_bonus_attack'] },
        { id: 'skyshooter', name: 'Skyshooter', type: 'plant', class: 'mega-grow', cost: 4, attack: 3, health: 2, rarity: 'uncommon', img: wikiImg('Skyshooter'), tribe: 'Pea', desc: 'When played on Heights: This gets +2 Strength / +2 Health.', traits: [], abilities: ['on_play_heights_bonus_2'] },
        { id: 'whipvine', name: 'Whipvine', type: 'plant', class: 'mega-grow', cost: 5, attack: 5, health: 5, rarity: 'uncommon', img: wikiImg('Whipvine'), tribe: 'Vine', desc: 'When played: Move a Zombie.', traits: [], abilities: ['on_play_move_zombie'] },
        { id: 'potted_powerhouse', name: 'Potted Powerhouse', type: 'plant', class: 'mega-grow', cost: 5, attack: 3, health: 2, rarity: 'super_rare', img: wikiImg('Potted_Powerhouse'), tribe: 'Leafy', desc: 'While in your hand: This gets +1 Strength / +1 Health when a Plant gains Strength or Health.', traits: [], abilities: ['in_hand_on_ally_buff'] },
        { id: 'espresso_fiesta', name: 'Espresso Fiesta', type: 'plant', class: 'mega-grow', cost: 8, attack: 0, health: 0, rarity: 'super_rare', img: wikiImg('Espresso_Fiesta'), tribe: 'Bean', desc: 'A Plant does three Bonus Attacks.', traits: [], abilities: ['on_play_triple_bonus_attack'] },
        { id: 'bananasaurus_rex', name: 'Bananasaurus Rex', type: 'plant', class: 'mega-grow', cost: 4, attack: 3, health: 3, rarity: 'legendary', img: wikiImg('Bananasaurus_Rex'), tribe: 'Banana', desc: 'This gets +1 Strength / +1 Health when you draw a card. After combat here, this does a Bonus Attack.', traits: [], abilities: ['on_draw_plus_1','bonus_attack_after_combat'] },
        { id: 'super_phat_beets', name: 'Super-Phat Beets', type: 'plant', class: 'mega-grow', cost: 6, attack: 3, health: 3, rarity: 'rare', img: wikiImg('Super-Phat_Beets'), tribe: 'Root', desc: 'When played: This gets +1 Strength / +1 Health for each other Plant and Zombie.', traits: [], abilities: ['on_play_plus_per_unit'] },

        // SMARTY CLASS
        { id: 'iceberg_lettuce', name: 'Iceberg Lettuce', type: 'plant', class: 'smarty', cost: 1, attack: 0, health: 1, rarity: 'common', img: wikiImg('Iceberg_Lettuce'), tribe: 'Leafy', desc: 'When played: Freeze a Zombie.', traits: [], abilities: ['on_play_freeze_zombie'] },
        { id: 'bikkuri_bon', name: 'Bikkuri Bon', type: 'plant', class: 'smarty', cost: 1, attack: 1, health: 1, rarity: 'common', img: wikiImg('Bikkuri_Bon'), tribe: 'Root', desc: 'When played: Conjure a card.', traits: [], abilities: ['on_play_conjure'] },
        { id: 'spring_bean', name: 'Spring Bean', type: 'plant', class: 'smarty', cost: 2, attack: 1, health: 1, rarity: 'common', img: wikiImg('Spring_Bean'), tribe: 'Bean', desc: 'When played: Bounce a Zombie.', traits: [], abilities: ['on_play_bounce'] },
        { id: 'admiral_navy_bean', name: 'Admiral Navy Bean', type: 'plant', class: 'smarty', cost: 2, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Admiral_Navy_Bean'), tribe: 'Bean', desc: 'When you play another Bean, draw a card.', traits: [], abilities: ['on_bean_draw'] },
        { id: 'frost_bean', name: 'Frost Bean', type: 'plant', class: 'smarty', cost: 2, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Frost_Bean'), tribe: 'Bean', desc: 'When played: Freeze a Zombie.', traits: [], abilities: ['on_play_freeze_zombie'] },
        { id: 'brainana', name: 'Brainana', type: 'plant', class: 'smarty', cost: 4, attack: 3, health: 3, rarity: 'legendary', img: wikiImg('Brainana'), tribe: 'Bean', desc: 'When played: The Zombie Hero loses their Brains.', traits: [], abilities: ['on_play_drain_all_brains'] },
        { id: 'jumping_bean', name: 'Jumping Bean', type: 'plant', class: 'smarty', cost: 2, attack: 1, health: 2, rarity: 'common', img: wikiImg('Jumping_Bean'), tribe: 'Bean', desc: 'When played: Bounce a Zombie.', traits: [], abilities: ['on_play_bounce'] },
        { id: 'sapping_sinew', name: 'Sapping Sinew', type: 'plant', class: 'smarty', cost: 4, attack: 3, health: 3, rarity: 'common', img: wikiImg('Sapping_Sinew'), tribe: 'Vine', desc: 'When played: Bounce a Zombie.', traits: [], abilities: ['on_play_bounce'] },
        { id: 'snapdragon', name: 'Snapdragon', type: 'plant', class: 'smarty', cost: 4, attack: 3, health: 2, rarity: 'uncommon', img: wikiImg('Snapdragon'), tribe: 'Flower', desc: 'When played: Do 2 damage to each adjacent Zombie.', traits: [], abilities: ['on_play_damage_adjacent_zombies'] },
        { id: 'winter_melon', name: 'Winter Melon', type: 'plant', class: 'smarty', cost: 6, attack: 4, health: 4, rarity: 'super_rare', img: wikiImg('Winter_Melon'), tribe: 'Fruit', desc: 'When played: Freeze a Zombie and do 2 damage to adjacent Zombies.', traits: [], abilities: ['on_play_freeze_adjacent'] },

        // === ZOMBIE CARDS ===
        // BEASTLY CLASS
        { id: 'cat_lady', name: 'Cat Lady', type: 'zombie', class: 'beastly', cost: 1, attack: 2, health: 1, rarity: 'common', img: wikiImg('Cat_Lady'), tribe: 'Pet', desc: 'When you play a Pet, this gets +2 Strength / +2 Health.', traits: [], abilities: ['on_pet_played_plus_2'] },
        { id: 'cheese_cutter', name: 'Cheese Cutter', type: 'zombie', class: 'beastly', cost: 1, attack: 2, health: 2, rarity: 'super_rare', img: wikiImg('Cheese_Cutter'), tribe: 'Gourmet', desc: 'When played: Conjure a Gourmet card, and it costs 1 less.', traits: [], abilities: ['on_play_conjure_gourmet'] },
        { id: 'vimpire', name: 'Vimpire', type: 'zombie', class: 'beastly', cost: 2, attack: 2, health: 2, rarity: 'common', img: wikiImg('Vimpire'), tribe: 'Pet', desc: 'Frenzy.', traits: ['frenzy'], abilities: [] },
        { id: 'yeti_lunchbox', name: 'Yeti Lunchbox', type: 'zombie', class: 'beastly', cost: 2, attack: 3, health: 2, rarity: 'common', img: wikiImg('Yeti_Lunchbox'), tribe: 'Gourmet', desc: '', traits: [], abilities: [] },
        { id: 'ancient_vimpire', name: 'Ancient Vimpire', type: 'zombie', class: 'beastly', cost: 4, attack: 3, health: 3, rarity: 'super_rare', img: wikiImg('Ancient_Vimpire'), tribe: 'Pet', desc: 'When a Zombie destroys a Plant, it gets +1 Strength / +1 Health.', traits: [], abilities: ['on_vampire_destroy_grow'] },
        { id: 'nibble', name: 'Nibble', type: 'zombie', class: 'beastly', cost: 1, attack: 0, health: 0, rarity: 'common', img: wikiImg('Nibble'), tribe: 'Trick', desc: 'Do 2 damage. Heal your Hero for 2.', traits: [], abilities: ['damage_2_heal_2'] },

        // BRAINY CLASS
        { id: 'telepath_zombie', name: 'Telepath Zombie', type: 'zombie', class: 'brainy', cost: 1, attack: 1, health: 2, rarity: 'common', img: wikiImg('Telepath_Zombie'), tribe: 'Science', desc: '', traits: [], abilities: [] },
        { id: 'beam_me_up', name: 'Beam Me Up', type: 'zombie', class: 'brainy', cost: 2, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Beam_Me_Up'), tribe: 'Science', desc: 'When played: Make a 2 / 2 Mission Zombie.', traits: [], abilities: ['on_play_make_zombie'] },
        { id: 'gentleman_zombie', name: 'Gentleman Zombie', type: 'zombie', class: 'brainy', cost: 2, attack: 1, health: 1, rarity: 'uncommon', img: wikiImg('Gentleman_Zombie'), tribe: 'Gourmet', desc: 'Start of Turn: You get +1 Brain this turn.', traits: [], abilities: ['start_of_turn_brain_1'] },
        { id: 'mad_scientist', name: 'Mad Scientist', type: 'zombie', class: 'brainy', cost: 2, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Mad_Chemist'), tribe: 'Science', desc: 'When you play a Trick, draw a card.', traits: [], abilities: ['on_trick_draw'] },
        { id: 'interdimensional_zombie', name: 'Interdimensional Zombie', type: 'zombie', class: 'brainy', cost: 3, attack: 3, health: 2, rarity: 'super_rare', img: wikiImg('Interdimensional_Zombie'), tribe: 'Science', desc: 'When played: Conjure a card. It costs 1 less.', traits: [], abilities: ['on_play_conjure_cost_1'] },
        { id: 'rocket_science', name: 'Rocket Science', type: 'zombie', class: 'brainy', cost: 4, attack: 0, health: 0, rarity: 'super_rare', img: wikiImg('Rocket_Science'), tribe: 'Science', desc: 'Destroy a Plant with 4 Strength or more.', traits: [], abilities: ['on_play_destroy_plant_4'] },
        { id: 'teleportation_zombie', name: 'Teleportation Zombie', type: 'zombie', class: 'brainy', cost: 4, attack: 3, health: 4, rarity: 'super_rare', img: wikiImg('Teleportation_Zombie'), tribe: 'Science', desc: 'You can play Zombies during Tricks.', traits: [], abilities: ['zombies_as_tricks'] },
        { id: 'trickster', name: 'Trickster', type: 'zombie', class: 'brainy', cost: 5, attack: 5, health: 5, rarity: 'legendary', img: wikiImg('Trickster'), tribe: 'Science', desc: 'This costs 1 less when you play a Trick. When played: Do 3 damage to the Plant Hero.', traits: [], abilities: ['cost_reduce_per_trick','on_play_damage_hero_3'] },
        { id: 'teacher_zombie', name: 'Teacher Zombie', type: 'zombie', class: 'brainy', cost: 3, attack: 2, health: 3, rarity: 'super_rare', img: wikiImg('Teacher_Zombie'), tribe: 'Gourmet', desc: 'Your Tricks cost 1 less.', traits: [], abilities: ['tricks_cost_1_less'] },

        // CRAZY CLASS
        { id: 'backup_dancer', name: 'Backup Dancer', type: 'zombie', class: 'crazy', cost: 1, attack: 1, health: 1, rarity: 'common', img: wikiImg('Backup_Dancer'), tribe: 'Dancing', desc: '', traits: [], abilities: [] },
        { id: 'bungee_plumber', name: 'Bungee Plumber', type: 'zombie', class: 'crazy', cost: 1, attack: 0, health: 0, rarity: 'common', img: wikiImg('Bungee_Plumber'), tribe: 'Trick', desc: 'Do 2 damage.', traits: [], abilities: ['on_play_damage_2'] },
        { id: 'disco_zombie', name: 'Disco Zombie', type: 'zombie', class: 'crazy', cost: 2, attack: 1, health: 1, rarity: 'common', img: wikiImg('Disco_Zombie'), tribe: 'Dancing', desc: 'When played: Make two 1 / 1 Backup Dancers.', traits: [], abilities: ['on_play_make_dancers'] },
        { id: 'exploding_imp', name: 'Exploding Imp', type: 'zombie', class: 'crazy', cost: 2, attack: 3, health: 1, rarity: 'uncommon', img: wikiImg('Exploding_Imp'), tribe: 'Pirate', desc: 'When destroyed: Do 2 damage to the Plant Hero.', traits: [], abilities: ['on_destroy_damage_hero_2'] },
        { id: 'headstone_carver', name: 'Headstone Carver', type: 'zombie', class: 'crazy', cost: 2, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Headstone_Carver'), tribe: 'Gravestone', desc: 'When played: All Gravestones get +1 Strength / +1 Health.', traits: [], abilities: ['graves_plus_1'] },
        { id: 'fireworks_zombie', name: 'Fireworks Zombie', type: 'zombie', class: 'crazy', cost: 3, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Fireworks_Zombie'), tribe: 'Party', desc: 'When played: Do 1 damage to all other fighters.', traits: [], abilities: ['on_play_damage_all_1'] },
        { id: 'quazard', name: 'Quazard', type: 'zombie', class: 'crazy', cost: 2, attack: 2, health: 1, rarity: 'legendary', img: wikiImg('Quazard'), tribe: 'Science', desc: 'When played next to a Zombie: Conjure a Superpower.', traits: [], abilities: ['on_play_conjure_superpower'] },
        { id: 'disco_tron_3000', name: 'Disco-Tron 3000', type: 'zombie', class: 'crazy', cost: 5, attack: 5, health: 5, rarity: 'legendary', img: wikiImg('Disco-Tron_3000'), tribe: 'Dancing', desc: 'When played: Make two 1 / 1 Backup Dancers.', traits: [], abilities: ['on_play_make_2_dancers'] },
        { id: 'valkyrie', name: 'Valkyrie', type: 'zombie', class: 'crazy', cost: 3, attack: 3, health: 3, rarity: 'super_rare', img: wikiImg('Valkyrie'), tribe: 'Party', desc: 'When any Zombie is destroyed, this gets +2 Strength / +2 Health.', traits: [], abilities: ['on_any_zombie_death_plus_2'] },
        { id: 'paparazzi_zombie', name: 'Paparazzi Zombie', type: 'zombie', class: 'crazy', cost: 1, attack: 1, health: 1, rarity: 'common', img: wikiImg('Paparazzi_Zombie'), tribe: 'Science', desc: 'When a Trick is played, this gets +1 Strength / +1 Health.', traits: [], abilities: ['on_trick_played_plus_1'] },

        // HEARTY CLASS
        { id: 'flag_zombie', name: 'Flag Zombie', type: 'zombie', class: 'hearty', cost: 1, attack: 1, health: 1, rarity: 'common', img: wikiImg('Flag_Zombie'), tribe: 'Sports', desc: 'When played: Your next Zombie costs 1 less.', traits: [], abilities: ['on_play_reduce_next_cost'] },
        { id: 'zombie_coach', name: 'Zombie Coach', type: 'zombie', class: 'hearty', cost: 2, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Zombie_Coach'), tribe: 'Sports', desc: 'When played: Sports Zombies can\'t be hurt this turn.', traits: [], abilities: ['sports_protect_this_turn'] },
        { id: 'team_mascot', name: 'Team Mascot', type: 'zombie', class: 'hearty', cost: 2, attack: 2, health: 3, rarity: 'uncommon', img: wikiImg('Team_Mascot'), tribe: 'Sports', desc: 'When played: All Sports Zombies get +1 Strength / +1 Health.', traits: [], abilities: ['sports_plus_1'] },
        { id: 'rolling_stone', name: 'Rolling Stone', type: 'zombie', class: 'hearty', cost: 2, attack: 0, health: 0, rarity: 'common', img: wikiImg('Rolling_Stone'), tribe: 'Trick', desc: 'Destroy a Plant with 2 Strength or less.', traits: [], abilities: ['on_play_destroy_plant_2'] },
        { id: 'defensive_end', name: 'Defensive End', type: 'zombie', class: 'hearty', cost: 4, attack: 3, health: 5, rarity: 'super_rare', img: wikiImg('Defensive_End'), tribe: 'Sports', desc: 'Plant Tricks cost 1 more. Armored 1.', traits: ['armored_1'], abilities: ['tricks_cost_1_more'] },
        { id: 'all_star_zombie', name: 'All-Star Zombie', type: 'zombie', class: 'hearty', cost: 5, attack: 4, health: 6, rarity: 'super_rare', img: wikiImg('All-Star_Zombie'), tribe: 'Sports', desc: 'Armored 1, Frenzy, Untrickable.', traits: ['armored_1','frenzy','untrickable'], abilities: [] },
        { id: 'going_viral', name: 'Going Viral', type: 'zombie', class: 'hearty', cost: 3, attack: 0, health: 0, rarity: 'event', img: wikiImg('Going_Viral'), tribe: 'Trick', desc: 'All Zombies get +1 Strength / +1 Health and Frenzy. Shuffle this into your deck.', traits: [], abilities: ['all_zombies_plus_1_frenzy'] },
        { id: 'weed_spray', name: 'Weed Spray', type: 'zombie', class: 'hearty', cost: 3, attack: 0, health: 0, rarity: 'uncommon', img: wikiImg('Weed_Spray'), tribe: 'Trick', desc: 'Destroy all Plants with 2 Strength or less.', traits: [], abilities: ['destroy_plants_2'] },
        { id: 'knockout', name: 'Knockout', type: 'zombie', class: 'hearty', cost: 3, attack: 0, health: 0, rarity: 'uncommon', img: wikiImg('Knockout'), tribe: 'Trick', desc: 'Do 3 damage to a Plant.', traits: [], abilities: ['damage_plant_3'] },
        { id: 'gargantuar', name: 'Gargantuar', type: 'zombie', class: 'hearty', cost: 5, attack: 5, health: 5, rarity: 'rare', img: wikiImg('Gargantuar'), tribe: 'Gargantuar', desc: '', traits: [], abilities: [] },

        // SNEAKY CLASS
        { id: 'mini_ninja', name: 'Mini Ninja', type: 'zombie', class: 'sneaky', cost: 1, attack: 2, health: 1, rarity: 'common', img: wikiImg('Mini_Ninja'), tribe: 'Pirate', desc: '', traits: [], abilities: [] },
        { id: 'flying_zombie', name: 'Flying Zombie', type: 'zombie', class: 'sneaky', cost: 2, attack: 2, health: 1, rarity: 'common', img: wikiImg('Flying_Zombie'), tribe: 'Pirate', desc: 'Amphibious.', traits: ['amphibious'], abilities: [] },
        { id: 'pogo_zombie', name: 'Pogo Zombie', type: 'zombie', class: 'sneaky', cost: 2, attack: 2, health: 2, rarity: 'super_rare', img: wikiImg('Pogo_Zombie'), tribe: 'Pirate', desc: 'When played: Bounce a Plant.', traits: [], abilities: ['on_play_bounce'] },
        { id: 'space_ninja', name: 'Space Ninja', type: 'zombie', class: 'sneaky', cost: 3, attack: 3, health: 2, rarity: 'uncommon', img: wikiImg('Space_Ninja'), tribe: 'Pirate', desc: 'Untrickable.', traits: ['untrickable'], abilities: [] },
        { id: 'ambush', name: 'Ambush', type: 'zombie', class: 'sneaky', cost: 2, attack: 0, health: 0, rarity: 'common', img: wikiImg('Ambush'), tribe: 'Trick', desc: 'A Zombie gets +2 Strength / +2 Health and Gravestone.', traits: [], abilities: ['on_play_grave_plus_2'] },
        { id: 'line_dancer', name: 'Line Dancer', type: 'zombie', class: 'sneaky', cost: 4, attack: 3, health: 3, rarity: 'uncommon', img: wikiImg('Line_Dancer'), tribe: 'Dancing', desc: 'When played: Move to a random lane.', traits: [], abilities: ['on_play_move_random'] },
        { id: 'backyard_bounce', name: 'Backyard Bounce', type: 'zombie', class: 'sneaky', cost: 2, attack: 0, health: 0, rarity: 'common', img: wikiImg('Backyard_Bounce'), tribe: 'Trick', desc: 'Bounce a Plant.', traits: [], abilities: ['on_play_bounce_plant'] },
        { id: 'stupid_cupid', name: 'Stupid Cupid', type: 'zombie', class: 'sneaky', cost: 4, attack: 3, health: 3, rarity: 'legendary', img: wikiImg('Stupid_Cupid'), tribe: 'Pirate', desc: 'When played: Move a Plant to a random lane.', traits: [], abilities: ['on_play_move_plant_random'] },

        // === TRICK CARDS ===
        { id: 'water_balloons', name: 'Water Balloons', type: 'trick', class: 'solar', cost: 2, rarity: 'common', img: wikiImg('Water_Balloons'), desc: 'A Zombie gets -1 Strength / -1 Health. If you made at least 6 Sunlight this turn, it gets -2 Strength / -2 Health instead.', abilities: ['debuff_zombie'] },
        { id: 'second_best_taco', name: "2nd-Best Taco of All Time", type: 'trick', class: 'solar', cost: 3, rarity: 'rare', img: wikiImg('2nd-Best_Taco_of_All_Time'), desc: 'Heal your Hero for 4. Draw a card.', abilities: ['heal_4_draw'] },
        { id: 'whack_a_zombie', name: 'Whack-a-Zombie', type: 'trick', class: 'solar', cost: 3, rarity: 'uncommon', img: wikiImg('Whack-a-Zombie'), desc: 'Destroy a Zombie with 3 Strength or less.', abilities: ['destroy_zombie_3'] },
        { id: 'lawnmower', name: 'Lawnmower', type: 'trick', class: 'solar', cost: 4, rarity: 'rare', img: wikiImg('Lawnmower'), desc: 'Destroy a Zombie on the Ground.', abilities: ['destroy_ground_zombie'] },
        { id: 'precision_blast', name: 'Precision Blast', type: 'trick', class: 'solar', cost: 0, rarity: 'legendary', img: wikiImg('Precision_Blast'), desc: 'Do 6 damage to the Zombie Hero in the center lane.', abilities: ['superpower_precision_blast'] },
        { id: 'transmogrify', name: 'Transmogrify', type: 'trick', class: 'smarty', cost: 3, rarity: 'uncommon', img: wikiImg('Transmogrify'), desc: 'Transform a Zombie into a random 1 Strength / 1 Health Zombie.', abilities: ['transform_zombie_1'] },
        { id: 'whirlwind', name: 'Whirlwind', type: 'trick', class: 'smarty', cost: 2, rarity: 'common', img: wikiImg('Whirlwind'), desc: 'Bounce a Zombie.', abilities: ['bounce_zombie'] },
        { id: 'time_to_shine', name: 'Time to Shine', type: 'trick', class: 'mega-grow', cost: 1, rarity: 'legendary', img: wikiImg('Time_to_Shine'), desc: 'A Plant gets +1 Strength / +1 Health and does a Bonus Attack.', abilities: ['plant_plus_1_bonus'] },
        { id: 'flick_a_zombie', name: 'Flick-a-Zombie', type: 'trick', class: 'smarty', cost: 1, rarity: 'common', img: wikiImg('Flick-a-Zombie'), desc: 'Move a Zombie to another lane.', abilities: ['move_zombie'] },

        // === MISSING PLANT CARDS ===

        // GUARDIAN - Galactic
        { id: 'cosmic_nut', name: 'Cosmic Nut', type: 'plant', class: 'guardian', cost: 4, attack: 4, health: 3, rarity: 'rare', img: wikiImg('Cosmic_Nut'), tribe: 'Nut', desc: 'When played: Conjure a Nut, and its Strength becomes 4.', traits: [], abilities: ['on_play_conjure_nut'] },
        { id: 'starch_lord', name: 'Starch-Lord', type: 'plant', class: 'guardian', cost: 4, attack: 2, health: 4, rarity: 'rare', img: wikiImg('Starch-Lord'), tribe: 'Root', desc: 'When you play another Root, both Roots get +1/+1. Start of turn: Conjure a Root.', traits: [], abilities: ['on_root_played_grow', 'start_of_turn_conjure_root'] },
        { id: 'gravitree', name: 'Gravitree', type: 'plant', class: 'guardian', cost: 6, attack: 7, health: 7, rarity: 'super_rare', img: wikiImg('Gravitree'), tribe: 'Tree', desc: 'Armored 1. Untrickable. When a Zombie is played, move it here.', traits: ['armored_1', 'untrickable'], abilities: ['on_zombie_played_move_here'] },
        { id: 'body_gourd', name: 'Body-Gourd', type: 'plant', class: 'guardian', cost: 5, attack: 4, health: 6, rarity: 'super_rare', img: wikiImg('Body-Gourd'), tribe: 'Squash', desc: 'Team-Up. Amphibious. When played: Fill your Super-Block Meter to full.', traits: ['team-up', 'amphibious'], abilities: ['on_play_fill_block'] },
        { id: 'pecanolith', name: 'Pecanolith', type: 'plant', class: 'guardian', cost: 5, attack: 0, health: 7, rarity: 'legendary', img: wikiImg('Pecanolith'), tribe: 'Nut', desc: 'All Plants and Zombies attack using their Health instead of their Strength.', traits: [], abilities: ['attack_uses_health'] },
        { id: 'tricarrotops', name: 'Tricarrotops', type: 'plant', class: 'guardian', cost: 2, attack: 1, health: 2, rarity: 'legendary', img: wikiImg('Tricarrotops'), tribe: 'Root', desc: 'Bullseye. Dino-Roar: This gets +1/+1.', traits: ['bullseye'], abilities: ['dino_roar_plus_1'] },

        // GUARDIAN - Colossal
        { id: 'blockbuster', name: 'Blockbuster', type: 'plant', class: 'guardian', cost: 4, attack: 3, health: 3, rarity: 'rare', img: wikiImg('Blockbuster'), tribe: 'Root', desc: 'Bullseye. Plant Evolution: Destroy all Gravestones here and next door.', traits: ['bullseye'], abilities: ['plant_evo_destroy_graves'] },

        // GUARDIAN - Triassic
        { id: 'pumpkin_shell', name: 'Pumpkin Shell', type: 'plant', class: 'guardian', cost: 3, attack: 2, health: 4, rarity: 'rare', img: wikiImg('Pumpkin_Shell'), tribe: 'Squash', desc: 'Fusion: A Plant played on this gets +2/+4.', traits: [], abilities: ['fusion_plus_2_4'] },
        { id: 'three_nut', name: 'Three-Nut', type: 'plant', class: 'guardian', cost: 3, attack: 3, health: 2, rarity: 'super_rare', img: wikiImg('Three-Nut'), tribe: 'Nut', desc: 'When a Plant is played: That Plant\'s Strength becomes 3.', traits: [], abilities: ['on_plant_played_set_3_str'] },
        { id: 'primal_wall_nut', name: 'Primal Wall-Nut', type: 'plant', class: 'guardian', cost: 3, attack: 0, health: 8, rarity: 'rare', img: wikiImg('Primal_Wall-Nut'), tribe: 'Nut', desc: 'Team-Up. Untrickable. When played: Conjure a card that costs 4 or more.', traits: ['team-up', 'untrickable'], abilities: ['on_play_conjure_cost_4'] },
        { id: 'loco_coco', name: 'Loco Coco', type: 'plant', class: 'guardian', cost: 6, attack: 3, health: 4, rarity: 'legendary', img: wikiImg('Loco_Coco'), tribe: 'Fruit', desc: 'When played: Make Wall-Nuts next door. Nut Evolution: All Plants with no Strength get +3 Strength.', traits: [], abilities: ['on_play_make_walls', 'nut_evolution_buff_zero'] },

        // GUARDIAN - Event
        { id: 'forget_me_nuts', name: 'Forget-Me-Nuts', type: 'plant', class: 'guardian', cost: 1, attack: 2, health: 1, rarity: 'event', img: wikiImg('Forget-Me-Nuts'), tribe: 'Nut', desc: 'Zombie Tricks cost 1 more.', traits: [], abilities: ['zombie_tricks_cost_1_more'] },
        { id: 'garlic', name: 'Garlic', type: 'plant', class: 'guardian', cost: 1, attack: 1, health: 5, rarity: 'event', img: wikiImg('Garlic'), tribe: 'Root', desc: 'Team-Up. When a Zombie hurts this, move that Zombie to the left. If it\'s a Vimpire, destroy it.', traits: ['team-up'], abilities: ['on_hurt_move_left_destroy_vimpire'] },

        // KABLOOM - Galactic
        { id: 'cosmic_mushroom', name: 'Cosmic Mushroom', type: 'plant', class: 'kabloom', cost: 3, attack: 2, health: 2, rarity: 'rare', img: wikiImg('Cosmic_Mushroom'), tribe: 'Mushroom', desc: 'When played: Conjure a Mushroom, and it gets +2 Strength.', traits: [], abilities: ['on_play_conjure_mushroom'] },
        { id: 'banana_bomb', name: 'Banana Bomb', type: 'trick', class: 'kabloom', cost: 1, rarity: 'uncommon', img: wikiImg('Banana_Bomb'), tribe: 'Fruit', desc: 'Do 2 damage to a Zombie.', abilities: ['damage_zombie_2'] },
        { id: 'banana_launcher', name: 'Banana Launcher', type: 'plant', class: 'kabloom', cost: 2, attack: 0, health: 3, rarity: 'rare', img: wikiImg('Banana_Launcher'), tribe: 'Fruit', desc: 'Start of turn: Gain a Banana Bomb.', traits: [], abilities: ['start_of_turn_gain_banana_bomb'] },
        { id: 'astro_shroom', name: 'Astro-Shroom', type: 'plant', class: 'kabloom', cost: 1, attack: 1, health: 1, rarity: 'super_rare', img: wikiImg('Astro-Shroom'), tribe: 'Mushroom', desc: 'Bullseye. When you play another Plant, do 1 damage to the Zombie Hero.', traits: ['bullseye'], abilities: ['on_plant_played_damage_hero_1'] },
        { id: 'pair_pearadise', name: 'Pair Pearadise', type: 'environment', class: 'kabloom', cost: 4, rarity: 'super_rare', img: wikiImg('Pair_Pearadise'), tribe: 'Fruit', desc: 'When you play a Plant here, make a copy of that Plant with Team-Up here.', abilities: ['env_make_copy_teamup'] },

        // KABLOOM - Colossal
        { id: 'lava_guava', name: 'Lava Guava', type: 'trick', class: 'kabloom', cost: 4, rarity: 'rare', img: wikiImg('Lava_Guava'), tribe: 'Fruit', desc: 'Do 2 damage to each Zombie here and next door. If played on the Ground, make Hot Lava here.', abilities: ['damage_adjacent_2_make_lava'] },
        { id: 'fireweed', name: 'Fireweed', type: 'plant', class: 'kabloom', cost: 2, attack: 3, health: 2, rarity: 'uncommon', img: wikiImg('Fireweed'), tribe: 'Flower', desc: 'When played on the Ground: Make Hot Lava here.', traits: [], abilities: ['on_play_ground_make_lava'] },
        { id: 'shelf_mushroom', name: 'Shelf Mushroom', type: 'plant', class: 'kabloom', cost: 2, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Shelf_Mushroom'), tribe: 'Mushroom', desc: 'Fusion: Do 2 damage.', traits: [], abilities: ['fusion_damage_2'] },

        // KABLOOM - Triassic
        { id: 'strawberrian', name: 'Strawberrian', type: 'plant', class: 'kabloom', cost: 3, attack: 3, health: 2, rarity: 'super_rare', img: wikiImg('Strawberrian'), tribe: 'Berry', desc: 'When you play a Berry, do 1 damage to Zombies next door. Berry Evolution: Gain a Berry Blast.', traits: [], abilities: ['on_berry_played_damage_adjacent', 'berry_evolution_gain_blast'] },
        { id: 'immitater', name: 'Imitater', type: 'plant', class: 'kabloom', cost: 3, attack: 1, health: 4, rarity: 'super_rare', img: wikiImg('Imitater'), tribe: 'Root', desc: 'When you play a Plant, this transforms into a copy of that Plant.', traits: [], abilities: ['on_plant_played_copy'] },

        // KABLOOM - Event
        { id: 'blooming_heart', name: 'Blooming Heart', type: 'plant', class: 'kabloom', cost: 1, attack: 2, health: 1, rarity: 'event', img: wikiImg('Blooming_Heart'), tribe: 'Flower', desc: 'When this does damage, it gets +1 Strength.', traits: [], abilities: ['on_damage_grow_1'] },
        { id: 'high_voltage_currant', name: 'High-Voltage Currant', type: 'plant', class: 'kabloom', cost: 1, attack: 1, health: 1, rarity: 'event', img: wikiImg('High-Voltage_Currant'), tribe: 'Berry', desc: 'This gets +1 Strength when another Berry does damage. When played: Conjure a Berry.', traits: [], abilities: ['on_berry_damage_grow', 'on_play_conjure_berry'] },
        { id: 'haunted_pumpking', name: 'Haunted Pumpking', type: 'plant', class: 'kabloom', cost: 1, attack: 2, health: 2, rarity: 'event', img: wikiImg('Haunted_Pumpking'), tribe: 'Fruit', desc: 'Anti-Hero 2. When played: The Zombie Hero draws a card.', traits: ['anti_hero_2'], abilities: ['on_play_enemy_draws'] },

        // KABLOOM - Legendary
        { id: 'poison_oak', name: 'Poison Oak', type: 'plant', class: 'kabloom', cost: 6, attack: 5, health: 6, rarity: 'legendary', img: wikiImg('Poison_Oak'), tribe: 'Tree', desc: 'Anti-Hero 5.', traits: ['anti_hero_5'], abilities: [] },
        { id: 'molekale', name: 'Molekale', type: 'plant', class: 'kabloom', cost: 4, attack: 3, health: 2, rarity: 'legendary', img: wikiImg('Molekale'), tribe: 'Leafy', desc: 'When played: Each other Plant transforms into a random Plant that costs 1 more.', traits: [], abilities: ['on_play_transform_all_up_1'] },
        { id: 'gloom_shroom', name: 'Gloom-Shroom', type: 'plant', class: 'kabloom', cost: 5, attack: 5, health: 5, rarity: 'legendary', img: wikiImg('Gloom-Shroom'), tribe: 'Mushroom', desc: 'Bullseye. Mushroom Evolution: Do 3 damage to Zombies here and next door.', traits: ['bullseye'], abilities: ['mushroom_evo_damage_3'] },
        { id: 'atomic_bombegranate', name: 'Atomic Bombegranate', type: 'plant', class: 'kabloom', cost: 5, attack: 4, health: 4, rarity: 'legendary', img: wikiImg('Atomic_Bombegranate'), tribe: 'Fruit', desc: 'When destroyed: Make Seedlings here and next door.', traits: [], abilities: ['on_destroy_make_seedlings'] },

        // MEGA-GROW - Galactic
        { id: 'cosmic_pea', name: 'Cosmic Pea', type: 'plant', class: 'mega-grow', cost: 3, attack: 2, health: 2, rarity: 'rare', img: wikiImg('Cosmic_Pea'), tribe: 'Pea', desc: 'When played: Conjure a Pea, and it gets Bullseye.', traits: [], abilities: ['on_play_conjure_pea_bullseye'] },

        // MEGA-GROW - Colossal
        { id: 'split_pea', name: 'Split Pea', type: 'plant', class: 'mega-grow', cost: 3, attack: 1, health: 3, rarity: 'uncommon', img: wikiImg('Split_Pea'), tribe: 'Pea', desc: 'Doublestrike.', traits: ['doublestrike'], abilities: [] },
        { id: 'lima_pleurodon', name: 'Lima-Pleurodon', type: 'plant', class: 'mega-grow', cost: 2, attack: 2, health: 3, rarity: 'uncommon', img: wikiImg('Lima-Pleurodon'), tribe: 'Bean', desc: 'Amphibious. When played: If there\'s another Amphibious Plant, draw a card.', traits: ['amphibious'], abilities: ['on_play_draw_if_amphibious'] },

        // MEGA-GROW - Triassic
        { id: 'veloci_radish_hatchling', name: 'Veloci-Radish Hatchling', type: 'plant', class: 'mega-grow', cost: 1, attack: 1, health: 2, rarity: 'uncommon', img: wikiImg('Veloci-Radish_Hatchling'), tribe: 'Root', desc: 'Dino-Roar: This gets +1 Strength.', traits: [], abilities: ['dino_roar_plus_1'] },
        { id: 'veloci_radish_packmate', name: 'Veloci-Radish Packmate', type: 'plant', class: 'mega-grow', cost: 3, attack: 1, health: 3, rarity: 'legendary', img: wikiImg('Veloci-Radish_Packmate'), tribe: 'Root', desc: 'When played: Make a copy of this with Team-Up here. Dino-Roar: This gets +1 Strength.', traits: [], abilities: ['on_play_make_copy_teamup', 'dino_roar_plus_1'] },

        // MEGA-GROW - Event
        { id: 'sportacus', name: 'Sportacus', type: 'plant', class: 'mega-grow', cost: 3, attack: 3, health: 2, rarity: 'event', img: wikiImg('Sportacus'), tribe: 'Berry', desc: 'When you play a Trick, this does a Bonus Attack.', traits: [], abilities: ['on_trick_bonus_attack'] },
        { id: 'clone_ninja', name: 'Clone Ninja', type: 'plant', class: 'mega-grow', cost: 4, attack: 3, health: 3, rarity: 'event', img: wikiImg('Clone_Ninja'), tribe: 'Leafy', desc: 'When played: Make two copies of this with 1 Health.', traits: [], abilities: ['on_play_make_2_clones'] },

        // MEGA-GROW - Rare/Legendary
        { id: 'gatling_pea', name: 'Gatling Pea', type: 'plant', class: 'mega-grow', cost: 4, attack: 3, health: 2, rarity: 'super_rare', img: wikiImg('Gatling_Pea'), tribe: 'Pea', desc: 'Doublestrike.', traits: ['doublestrike'], abilities: [] },
        { id: 'threepeater', name: 'Threepeater', type: 'plant', class: 'mega-grow', cost: 5, attack: 3, health: 3, rarity: 'rare', img: wikiImg('Threepeater'), tribe: 'Pea', desc: 'When played: This does a Bonus Attack in the lane to the left and the lane to the right.', traits: [], abilities: ['on_play_bonus_attack_adjacent'] },
        { id: 'the_great_zucchini', name: 'The Great Zucchini', type: 'plant', class: 'mega-grow', cost: 7, attack: 5, health: 5, rarity: 'legendary', img: wikiImg('The_Great_Zucchini'), tribe: 'Leafy', desc: 'When played: Transform all Zombies into random 1 Strength / 1 Health Zombies.', traits: [], abilities: ['on_play_transform_all_zombies_1'] },
        { id: 'starfruit', name: 'Starfruit', type: 'plant', class: 'mega-grow', cost: 4, attack: 2, health: 2, rarity: 'rare', img: wikiImg('Starfruit'), tribe: 'Fruit', desc: 'When this attacks, it also does 1 damage to each Zombie on the Heights and in the Water.', traits: [], abilities: ['on_attack_damage_heights_water'] },
        { id: 'cob_cannon', name: 'Cob Cannon', type: 'plant', class: 'mega-grow', cost: 8, attack: 6, health: 6, rarity: 'legendary', img: wikiImg('Cob_Cannon'), tribe: 'Corn', desc: 'When played: You may choose a lane. Do 4 damage to each Zombie in that lane.', traits: [], abilities: ['on_play_choose_lane_damage_4'] },

        // SMARTY - Galactic
        { id: 'cool_bean', name: 'Cool Bean', type: 'plant', class: 'smarty', cost: 2, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Cool_Bean'), tribe: 'Bean', desc: 'Amphibious. When played: Freeze a Zombie.', traits: ['amphibious'], abilities: ['on_play_freeze'] },
        { id: 'cosmic_bean', name: 'Cosmic Bean', type: 'plant', class: 'smarty', cost: 2, attack: 1, health: 2, rarity: 'rare', img: wikiImg('Cosmic_Bean'), tribe: 'Bean', desc: 'When played: Conjure a Bean, and it gets +1 Strength.', traits: [], abilities: ['on_play_conjure_bean'] },

        // SMARTY - Colossal
        { id: 'lightning_reed', name: 'Lightning Reed', type: 'plant', class: 'smarty', cost: 3, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Lightning_Reed'), tribe: 'Flower', desc: 'When played: Do 1 damage to a random Zombie and each Zombie next door.', traits: [], abilities: ['on_play_damage_random_adjacent'] },
        { id: 'spyris', name: 'Spyris', type: 'plant', class: 'smarty', cost: 2, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Spyris'), tribe: 'Leafy', desc: 'Amphibious. When played: You may move a Zombie.', traits: ['amphibious'], abilities: ['on_play_may_move_zombie'] },
        { id: 'shrinking_violet', name: 'Shrinking Violet', type: 'plant', class: 'smarty', cost: 4, attack: 3, health: 3, rarity: 'super_rare', img: wikiImg('Shrinking_Violet'), tribe: 'Leafy', desc: 'When played: All Zombies get -2 Strength.', traits: [], abilities: ['on_play_all_zombies_minus_2'] },

        // SMARTY - Triassic
        { id: 'tricorn', name: 'Tricorn', type: 'plant', class: 'smarty', cost: 5, attack: 3, health: 4, rarity: 'super_rare', img: wikiImg('Tricorn'), tribe: 'Flower', desc: 'Strikethrough. When played: Do 2 damage to each Zombie on the Heights.', traits: ['strikethrough'], abilities: ['on_play_damage_heights_2'] },

        // SMARTY - Event
        { id: 'cattail', name: 'Cattail', type: 'plant', class: 'smarty', cost: 2, attack: 2, health: 2, rarity: 'event', img: wikiImg('Cattail'), tribe: 'Animal', desc: 'Amphibious. When played: Bounce a Zombie.', traits: ['amphibious'], abilities: ['on_play_bounce'] },
        { id: 'toadstool', name: 'Toadstool', type: 'plant', class: 'smarty', cost: 5, attack: 3, health: 5, rarity: 'legendary', img: wikiImg('Toadstool'), tribe: 'Mushroom', desc: 'Amphibious. When played: Destroy a Zombie. You gain 2 Sunlight.', traits: ['amphibious'], abilities: ['on_play_destroy_zombie_gain_sun'] },
        { id: 'jelly_bean', name: 'Jelly Bean', type: 'plant', class: 'smarty', cost: 4, attack: 3, health: 3, rarity: 'super_rare', img: wikiImg('Jelly_Bean'), tribe: 'Bean', desc: 'When played: Bounce a Zombie. Draw a card.', traits: [], abilities: ['on_play_bounce_draw'] },

        // SOLAR - Galactic
        { id: 'cosmic_flower', name: 'Cosmic Flower', type: 'plant', class: 'solar', cost: 2, attack: 1, health: 2, rarity: 'rare', img: wikiImg('Cosmic_Flower'), tribe: 'Flower', desc: 'When played: Conjure a Flower, and it gets Strikethrough.', traits: [], abilities: ['on_play_conjure_flower_strikethrough'] },

        // SOLAR - Colossal
        { id: 'primal_sunflower', name: 'Primal Sunflower', type: 'plant', class: 'solar', cost: 1, attack: 1, health: 1, rarity: 'uncommon', img: wikiImg('Primal_Sunflower'), tribe: 'Flower', desc: 'Start of Turn: You get +2 Sunlight this turn.', traits: [], abilities: ['start_of_turn_sun_2'] },

        // SOLAR - Triassic
        { id: 'sun_flower_seed', name: 'Sunflower Seed', type: 'plant', class: 'solar', cost: 2, attack: 1, health: 3, rarity: 'super_rare', img: wikiImg('Sunflower_Seed'), tribe: 'Flower', desc: 'When this is hurt, make a 1/1 Sunflower with Team-Up here.', traits: [], abilities: ['on_hurt_make_sunflower'] },

        // SOLAR - Legendary
        { id: 'dark_matter_dragonfruit', name: 'Dark Matter Dragonfruit', type: 'plant', class: 'solar', cost: 9, attack: 7, health: 7, rarity: 'legendary', img: wikiImg('Dark_Matter_Dragonfruit'), tribe: 'Fruit', desc: 'When played: Transform all Zombies into 1 Strength / 1 Health Zombies.', traits: [], abilities: ['on_play_transform_all_zombies_1'] },
        { id: 'astro_vera', name: 'Astro Vera', type: 'plant', class: 'solar', cost: 7, attack: 5, health: 5, rarity: 'legendary', img: wikiImg('Astro_Vera'), tribe: 'Flower', desc: 'When played: Heal your Hero for 5. Draw a card.', traits: [], abilities: ['on_play_heal_5_draw'] },
        { id: 'bird_of_paradise', name: 'Bird of Paradise', type: 'plant', class: 'solar', cost: 6, attack: 4, health: 4, rarity: 'legendary', img: wikiImg('Bird_of_Paradise'), tribe: 'Flower', desc: 'Amphibious. Start of Turn: You get +3 Sunlight this turn.', traits: ['amphibious'], abilities: ['start_of_turn_sun_3'] },

        // === MISSING ZOMBIE CARDS ===

        // BEASTLY - Premium
        { id: 'dog_walker', name: 'Dog Walker', type: 'zombie', class: 'beastly', cost: 1, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Dog_Walker'), tribe: 'Pet', desc: 'Hunt.', traits: ['hunt'], abilities: [] },
        { id: 'snorkel_zombie', name: 'Snorkel Zombie', type: 'zombie', class: 'beastly', cost: 1, attack: 2, health: 1, rarity: 'uncommon', img: wikiImg('Snorkel_Zombie'), tribe: 'Party', desc: 'Amphibious.', traits: ['amphibious'], abilities: [] },
        { id: 'dolphin_rider', name: 'Dolphin Rider', type: 'zombie', class: 'beastly', cost: 3, attack: 3, health: 2, rarity: 'uncommon', img: wikiImg('Dolphin_Rider'), tribe: 'Pet', desc: 'Amphibious.', traits: ['amphibious'], abilities: [] },

        // BEASTLY - Galactic
        { id: 'cosmic_yeti', name: 'Cosmic Yeti', type: 'zombie', class: 'beastly', cost: 4, attack: 3, health: 3, rarity: 'rare', img: wikiImg('Cosmic_Yeti'), tribe: 'Pet', desc: 'When played: Conjure a Pet, and it gets +1/+1. End of turn: Bounce this Yeti.', traits: [], abilities: ['on_play_conjure_pet', 'end_of_turn_bounce_self'] },
        { id: 'biodome_botanist', name: 'Biodome Botanist', type: 'zombie', class: 'beastly', cost: 2, attack: 2, health: 3, rarity: 'rare', img: wikiImg('Biodome_Botanist'), tribe: 'Mustache', desc: 'When played: Make a 1/1 Plant with no abilities.', traits: [], abilities: ['on_play_make_plant'] },

        // BEASTLY - Colossal
        { id: 'primordial_cheese_shover', name: 'Primordial Cheese Shover', type: 'zombie', class: 'beastly', cost: 4, attack: 4, health: 4, rarity: 'rare', img: wikiImg('Primordial_Cheese_Shover'), tribe: 'Gourmet', desc: 'Zombie Evolution: Destroy a Plant.', traits: [], abilities: ['zombie_evo_destroy_plant'] },
        { id: 'surfer_zombie', name: 'Surfer Zombie', type: 'zombie', class: 'beastly', cost: 4, attack: 4, health: 3, rarity: 'uncommon', img: wikiImg('Surfer_Zombie'), tribe: 'Party', desc: 'Amphibious. Frenzy.', traits: ['amphibious', 'frenzy'], abilities: [] },

        // BEASTLY - Triassic
        { id: 'killer_whale', name: 'Killer Whale', type: 'zombie', class: 'beastly', cost: 2, attack: 2, health: 1, rarity: 'uncommon', img: wikiImg('Killer_Whale'), tribe: 'Pet', desc: 'Amphibious. Fusion: A Zombie played on this gets +2/+1 and Amphibious.', traits: ['amphibious'], abilities: ['fusion_zombie_plus_2_1_amphibious'] },
        { id: 'haunting_ghost', name: 'Haunting Ghost', type: 'zombie', class: 'beastly', cost: 2, attack: 2, health: 1, rarity: 'uncommon', img: wikiImg('Haunting_Ghost'), tribe: 'Monster', desc: 'Amphibious. When played: A Plant gets -1/-1.', traits: ['amphibious'], abilities: ['on_play_debuff_plant_1'] },

        // BEASTLY - Super-Rare
        { id: 'zombie_yeti', name: 'Zombie Yeti', type: 'zombie', class: 'beastly', cost: 3, attack: 3, health: 3, rarity: 'super_rare', img: wikiImg('Zombie_Yeti'), tribe: 'Pet', desc: 'When played: Gain a Yeti Lunchbox. End of Turn: Bounce this Yeti.', traits: [], abilities: ['on_play_gain_lunchbox', 'end_of_turn_bounce_self'] },
        { id: 'deep_sea_gargantuar', name: 'Deep Sea Gargantuar', type: 'zombie', class: 'beastly', cost: 6, attack: 6, health: 6, rarity: 'super_rare', img: wikiImg('Deep_Sea_Gargantuar'), tribe: 'Gargantuar', desc: 'Amphibious. Hunt. When any Zombie enters any lane, that Zombie gets +1/+1.', traits: ['amphibious', 'hunt'], abilities: ['on_any_zombie_entered_buff_1'] },

        // BEASTLY - Legendary
        { id: 'nurse_gargantuar', name: 'Nurse Gargantuar', type: 'zombie', class: 'beastly', cost: 5, attack: 5, health: 5, rarity: 'legendary', img: wikiImg('Nurse_Gargantuar'), tribe: 'Gargantuar', desc: 'Frenzy. When this does damage, heal your Hero for that much.', traits: ['frenzy'], abilities: ['on_damage_heal_hero'] },
        { id: 'supernova_gargantuar', name: 'Supernova Gargantuar', type: 'zombie', class: 'beastly', cost: 5, attack: 5, health: 5, rarity: 'legendary', img: wikiImg('Supernova_Gargantuar'), tribe: 'Gargantuar', desc: 'When this destroys a Plant, all other Zombies get +1 Strength.', traits: [], abilities: ['on_destroy_plant_all_zombies_plus_1'] },

        // BRAINY - Premium
        { id: 'brain_vendor', name: 'Brain Vendor', type: 'zombie', class: 'brainy', cost: 3, attack: 3, health: 3, rarity: 'uncommon', img: wikiImg('Brain_Vendor'), tribe: 'Professional', desc: 'When played: You may spend 3 Brains to gain 3 Brains.', traits: [], abilities: ['on_play_spend_3_gain_3'] },

        // BRAINY - Galactic
        { id: 'cryo_brain', name: 'Cryo-Brain', type: 'trick', class: 'brainy', cost: 2, rarity: 'uncommon', img: wikiImg('Cryo-Brain'), tribe: 'Science', desc: 'You get +2 Brains this turn and next turn.', abilities: ['gain_2_brains_this_and_next'] },
        { id: 'dr_spacetime', name: 'Dr. Spacetime', type: 'zombie', class: 'brainy', cost: 3, attack: 3, health: 3, rarity: 'super_rare', img: wikiImg('Dr._Spacetime'), tribe: 'Science', desc: 'When you play a card that costs 1, it gets Conjure a card.', traits: [], abilities: ['on_play_1_cost_conjure'] },
        { id: 'teleportation_station', name: 'Teleportation Station', type: 'environment', class: 'brainy', cost: 2, rarity: 'super_rare', img: wikiImg('Teleportation_Station'), tribe: 'Science', desc: 'Start of turn: You may teleport a Zombie from your hand here.', abilities: ['start_of_turn_may_teleport'] },

        // BRAINY - Colossal
        { id: 'thinking_cap', name: 'Thinking Cap', type: 'trick', class: 'brainy', cost: 2, rarity: 'super_rare', img: wikiImg('Thinking_Cap'), tribe: 'Trick', desc: 'Conjure two Superpowers.', abilities: ['conjure_2_superpowers'] },
        { id: 'gadget_scientist', name: 'Gadget Scientist', type: 'zombie', class: 'brainy', cost: 4, attack: 3, health: 3, rarity: 'super_rare', img: wikiImg('Gadget_Scientist'), tribe: 'Science', desc: 'When played: A Science card in your hand costs 2 less.', traits: [], abilities: ['on_play_reduce_science_cost_2'] },

        // BRAINY - Triassic
        { id: 'triplication', name: 'Triplication', type: 'trick', class: 'brainy', cost: 3, rarity: 'super_rare', img: wikiImg('Triplication'), tribe: 'Trick', desc: 'Conjure three cards.', abilities: ['conjure_3'] },
        { id: 'binary_stars', name: 'Binary Stars', type: 'zombie', class: 'brainy', cost: 5, attack: 5, health: 5, rarity: 'legendary', img: wikiImg('Binary_Stars'), tribe: 'Science', desc: 'When played: All Zombies get Strikethrough and Frenzy.', traits: [], abilities: ['on_play_all_zombies_strikethrough_frenzy'] },

        // BRAINY - Event
        { id: 'intergalactic_warlord', name: 'Intergalactic Warlord', type: 'zombie', class: 'brainy', cost: 4, attack: 3, health: 4, rarity: 'event', img: wikiImg('Intergalactic_Warlord'), tribe: 'Professional', desc: 'When played: All Zombies get +1/+1.', traits: [], abilities: ['on_play_all_zombies_plus_1'] },

        // CRAZY - Premium
        { id: 'chimney_sweep', name: 'Chimney Sweep', type: 'zombie', class: 'crazy', cost: 1, attack: 1, health: 2, rarity: 'common', img: wikiImg('Chimney_Sweep'), tribe: 'Dancing', desc: 'Gravestone. When revealed: All Zombies get +1 Strength.', traits: ['gravestone'], abilities: ['graves_all_zombies_plus_1'] },

        // CRAZY - Galactic
        { id: 'disco_naut', name: 'Disco-Naut', type: 'zombie', class: 'crazy', cost: 2, attack: 2, health: 1, rarity: 'uncommon', img: wikiImg('Disco-Naut'), tribe: 'Dancing', desc: 'When played: All Zombies with 2 Strength or less get Bullseye.', traits: [], abilities: ['on_play_bullseye_low_str'] },
        { id: 'binary_stars_z', name: 'Binary Stars', type: 'zombie', class: 'crazy', cost: 5, attack: 5, health: 5, rarity: 'legendary', img: wikiImg('Binary_Stars'), tribe: 'Science', desc: 'When played: All Zombies get Strikethrough and Frenzy.', traits: [], abilities: ['on_play_all_zombies_strikethrough_frenzy'] },

        // CRAZY - Colossal
        { id: 'conga_zombie', name: 'Conga Zombie', type: 'zombie', class: 'crazy', cost: 3, attack: 2, health: 3, rarity: 'uncommon', img: wikiImg('Conga_Zombie'), tribe: 'Dancing', desc: 'Gravestone. When revealed: A Zombie gets +2/+2.', traits: ['gravestone'], abilities: ['graves_buff_zombie_2'] },

        // CRAZY - Triassic
        { id: 'flamenco_zombie', name: 'Flamenco Zombie', type: 'zombie', class: 'crazy', cost: 3, attack: 2, health: 2, rarity: 'super_rare', img: wikiImg('Flamenco_Zombie'), tribe: 'Dancing', desc: 'When you play a Dancing Zombie, this gets +2 Strength.', traits: [], abilities: ['on_dancing_played_plus_2'] },

        // CRAZY - Event
        { id: 'impfinity_clone', name: 'Impfinity Clone', type: 'trick', class: 'crazy', cost: 1, rarity: 'event', img: wikiImg('Impfinity_Clone'), tribe: 'Trick', desc: 'Make two 1/1 Imps with Frenzy in random lanes.', abilities: ['make_2_imp_frenzy'] },

        // CRAZY - Legendary
        { id: 'mixed_up_gravedigger', name: 'Mixed-Up Gravedigger', type: 'zombie', class: 'crazy', cost: 5, attack: 4, health: 4, rarity: 'legendary', img: wikiImg('Mixed-Up_Gravedigger'), tribe: 'Dancing', desc: 'Gravestone. When revealed: Shuffle all Gravestones and move them to random lanes.', traits: ['gravestone'], abilities: ['graves_shuffle_all'] },

        // HEARTY - Premium
        { id: 'arm_wrestler', name: 'Arm Wrestler', type: 'zombie', class: 'hearty', cost: 1, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Arm_Wrestler'), tribe: 'Sports', desc: 'When played: Move this to the lane with the strongest Plant.', traits: [], abilities: ['on_play_move_to_strongest'] },
        { id: 'tennis_champ', name: 'Tennis Champ', type: 'zombie', class: 'hearty', cost: 1, attack: 2, health: 1, rarity: 'common', img: wikiImg('Tennis_Champ'), tribe: 'Sports', desc: '', traits: [], abilities: [] },

        // HEARTY - Galactic
        { id: 'cosmic_sports_star', name: 'Cosmic Sports Star', type: 'zombie', class: 'hearty', cost: 4, attack: 3, health: 3, rarity: 'rare', img: wikiImg('Cosmic_Sports_Star'), tribe: 'Sports', desc: 'When played: Conjure a Sports Zombie, and it gets +2/+2.', traits: [], abilities: ['on_play_conjure_sports'] },
        { id: 'total_eclipse', name: 'Total Eclipse', type: 'environment', class: 'hearty', cost: 2, rarity: 'uncommon', img: wikiImg('Total_Eclipse'), tribe: 'Environment', desc: 'Plants here get -1/-1.', abilities: ['env_plants_minus_1'] },

        // HEARTY - Colossal
        { id: 'shieldcrusher_viking', name: 'Shieldcrusher Viking', type: 'zombie', class: 'hearty', cost: 5, attack: 5, health: 5, rarity: 'legendary', img: wikiImg('Shieldcrusher_Viking'), tribe: 'Mustache', desc: 'Strikethrough. When this does damage, the Plant Hero gets -1 Health.', traits: ['strikethrough'], abilities: ['on_damage_hero_minus_1'] },
        { id: 'jurassic_fossilhead', name: 'Jurassic Fossilhead', type: 'zombie', class: 'hearty', cost: 3, attack: 2, health: 2, rarity: 'super_rare', img: wikiImg('Jurassic_Fossilhead'), tribe: 'Professional', desc: 'Dino-Roar: This gets +2/+2.', traits: [], abilities: ['dino_roar_plus_2'] },

        // HEARTY - Triassic
        { id: 'planetary_gladiator', name: 'Planetary Gladiator', type: 'zombie', class: 'hearty', cost: 2, attack: 1, health: 3, rarity: 'uncommon', img: wikiImg('Planetary_Gladiator'), tribe: 'Sports', desc: 'When a Plant hurts your Hero, this gets +1/+1.', traits: [], abilities: ['on_hero_hurt_plus_1'] },
        { id: 'sumo_wrestler', name: 'Sumo Wrestler', type: 'zombie', class: 'hearty', cost: 3, attack: 2, health: 3, rarity: 'uncommon', img: wikiImg('Sumo_Wrestler'), tribe: 'Sports', desc: 'When played: Move a Plant to another lane.', traits: [], abilities: ['on_play_move_plant'] },

        // HEARTY - Event
        { id: 'intergalactic_warlord_z', name: 'Intergalactic Warlord', type: 'zombie', class: 'hearty', cost: 4, attack: 3, health: 4, rarity: 'event', img: wikiImg('Intergalactic_Warlord'), tribe: 'Professional', desc: 'When played: All Zombies get +1/+1.', traits: [], abilities: ['on_play_all_zombies_plus_1'] },

        // HEARTY - Legendary
        { id: 'wannabe_hero', name: 'Wannabe Hero', type: 'zombie', class: 'hearty', cost: 5, attack: 3, health: 3, rarity: 'legendary', img: wikiImg('Wannabe_Hero'), tribe: 'Mustache', desc: 'When played: This gets +1 Strength / +1 Health for each other Zombie.', traits: [], abilities: ['on_play_plus_per_zombie'] },

        // SNEAKY - Premium
        { id: 'smelly_zombie', name: 'Smelly Zombie', type: 'zombie', class: 'sneaky', cost: 2, attack: 2, health: 2, rarity: 'common', img: wikiImg('Smelly_Zombie'), tribe: 'Monster', desc: 'Hunt.', traits: ['hunt'], abilities: [] },
        { id: 'foot_soldier_zombie', name: 'Foot Soldier Zombie', type: 'zombie', class: 'sneaky', cost: 3, attack: 2, health: 3, rarity: 'common', img: wikiImg('Foot_Soldier_Zombie'), tribe: 'Sports', desc: 'Gravestone. When revealed: Move to a Plant.', traits: ['gravestone'], abilities: ['graves_move_to_plant'] },

        // SNEAKY - Galactic
        { id: 'cosmic_imp', name: 'Cosmic Imp', type: 'zombie', class: 'sneaky', cost: 2, attack: 1, health: 1, rarity: 'rare', img: wikiImg('Cosmic_Imp'), tribe: 'Imp', desc: 'When played: Conjure an Imp, and it gets +2 Strength.', traits: [], abilities: ['on_play_conjure_imp'] },
        { id: 'black_hole', name: 'Black Hole', type: 'environment', class: 'sneaky', cost: 1, rarity: 'uncommon', img: wikiImg('Black_Hole'), tribe: 'Environment', desc: 'When a Plant is played here, move it here and it gets -1 Strength.', abilities: ['env_move_plant_debuff'] },

        // SNEAKY - Colossal
        { id: 'buried_treasure', name: 'Buried Treasure', type: 'zombie', class: 'sneaky', cost: 1, attack: 0, health: 0, rarity: 'uncommon', img: wikiImg('Buried_Treasure'), tribe: 'Pirate', desc: 'Gravestone. When revealed: Conjure a Legendary card.', traits: ['gravestone'], abilities: ['graves_conjure_legendary'] },
        { id: 'pogo_bouncer', name: 'Pogo Bouncer', type: 'zombie', class: 'sneaky', cost: 2, attack: 2, health: 2, rarity: 'super_rare', img: wikiImg('Pogo_Bouncer'), tribe: 'Pirate', desc: 'Gravestone. When revealed: Bounce a Plant.', traits: ['gravestone'], abilities: ['graves_bounce_plant'] },

        // SNEAKY - Triassic
        { id: 'fire_rooster', name: 'Fire Rooster', type: 'zombie', class: 'sneaky', cost: 2, attack: 2, health: 1, rarity: 'uncommon', img: wikiImg('Fire_Rooster'), tribe: 'Pet', desc: 'When played: Move a Plant. This gets +1 Strength for each Plant here.', traits: [], abilities: ['on_play_move_plant_plus_per_plant'] },
        { id: 'space_cowboy', name: 'Space Cowboy', type: 'zombie', class: 'sneaky', cost: 3, attack: 3, health: 2, rarity: 'legendary', img: wikiImg('Space_Cowboy'), tribe: 'Pirate', desc: 'When played: Move to a random lane. After combat here, move to a random lane.', traits: [], abilities: ['on_play_move_random', 'after_combat_move_random'] },

        // SNEAKY - Event
        { id: 'line_dancing_zombie', name: 'Line Dancing Zombie', type: 'zombie', class: 'sneaky', cost: 4, attack: 3, health: 3, rarity: 'uncommon', img: wikiImg('Line_Dancing_Zombie'), tribe: 'Dancing', desc: 'When played: Move to a random lane.', traits: [], abilities: ['on_play_move_random'] },
        { id: 'zombot_plank_walker', name: 'Zombot Plank Walker', type: 'zombie', class: 'sneaky', cost: 8, attack: 6, health: 6, rarity: 'legendary', img: wikiImg('Zombot_Plank_Walker'), tribe: 'Science', desc: 'When played: Make a random Zombie in each other lane.', traits: [], abilities: ['on_play_make_random_zombies'] },

        // SNEAKY - Super-Rare
        { id: 'swashbuckler_zombie', name: 'Swashbuckler Zombie', type: 'zombie', class: 'sneaky', cost: 3, attack: 2, health: 2, rarity: 'super_rare', img: wikiImg('Swashbuckler_Zombie'), tribe: 'Pirate', desc: 'When played: If on the Heights, this gets +3/+3.', traits: [], abilities: ['on_play_heights_plus_3'] },

        // === NEW PLANT CARDS ===

        // GUARDIAN - Missing
        { id: 'gardening_gloves', name: 'Gardening Gloves', type: 'trick', class: 'guardian', cost: 2, rarity: 'uncommon', img: wikiImg('Gardening_Gloves'), tribe: 'Trick', desc: 'Move a Plant. Conjure a Trick.', traits: [], abilities: [] },
        { id: 'spikeweed_sector', name: 'Spikeweed Sector', type: 'environment', class: 'guardian', cost: 3, rarity: 'uncommon', img: wikiImg('Spikeweed_Sector'), tribe: 'Environment', desc: 'Before combat here: Do 2 damage to a Zombie here.', traits: [], abilities: ['before_combat_damage_2'] },
        { id: 'plantern', name: 'Plantern', type: 'plant', class: 'guardian', cost: 3, attack: 3, health: 3, rarity: 'uncommon', img: wikiImg('Plantern'), tribe: 'Tree Root', desc: 'While in an Environment: This gets +1/+1 and Bullseye.', traits: ['bullseye'], abilities: [] },
        { id: 'photosynthesizer', name: 'Photosynthesizer', type: 'trick', class: 'guardian', cost: 1, rarity: 'uncommon', img: wikiImg('Photosynthesizer'), tribe: 'Trick', desc: 'A Plant gets +2. Conjure a Galactic Gardens card.', traits: [], abilities: [] },
        { id: 'grape_responsibility', name: 'Grape Responsibility', type: 'trick', class: 'guardian', cost: 1, rarity: 'uncommon', img: wikiImg('Grape_Responsibility'), tribe: 'Berry', desc: "Double a Plant's Strength and Health.", traits: [], abilities: [] },
        { id: 'primal_potato_mine', name: 'Primal Potato Mine', type: 'plant', class: 'guardian', cost: 1, attack: 0, health: 1, rarity: 'uncommon', img: wikiImg('Primal_Potato_Mine'), tribe: 'Root', desc: 'When destroyed: Do 3 damage to a Zombie here.', traits: ['team-up'], abilities: ['on_destroy_damage_here_3'] },
        { id: 'grizzly_pear', name: 'Grizzly Pear', type: 'plant', class: 'guardian', cost: 5, attack: 5, health: 4, rarity: 'uncommon', img: wikiImg('Grizzly_Pear'), tribe: 'Fruit', desc: 'Amphibious.', traits: ['amphibious'], abilities: [] },
        { id: 'galacta_cactus', name: 'Galacta-Cactus', type: 'plant', class: 'guardian', cost: 1, attack: 2, health: 1, rarity: 'super_rare', img: wikiImg('Galacta-Cactus'), tribe: 'Cactus', desc: 'Bullseye. When destroyed: Do 1 damage to everything.', traits: ['bullseye'], abilities: ['on_destroy_damage_all_1'] },
        { id: 'force_field', name: 'Force Field', type: 'environment', class: 'guardian', cost: 4, rarity: 'super_rare', img: wikiImg('Force_Field'), tribe: 'Environment', desc: "Plants here can't be hurt.", traits: [], abilities: [] },
        { id: 'marine_bean', name: 'Marine Bean', type: 'plant', class: 'guardian', cost: 3, attack: 3, health: 3, rarity: 'super_rare', img: wikiImg('Marine_Bean'), tribe: 'Bean', desc: 'Amphibious. When played: This gets +1/+1 for each other Amphibious Plant.', traits: ['amphibious'], abilities: ['on_play_plus_per_amphibious'] },
        { id: 'corn_dog', name: 'Corn Dog', type: 'plant', class: 'guardian', cost: 2, attack: 3, health: 2, rarity: 'event', img: wikiImg('Corn_Dog'), tribe: 'Corn', desc: 'Amphibious. Hunt.', traits: ['amphibious', 'hunt'], abilities: [] },
        { id: 'hot_date', name: 'Hot Date', type: 'plant', class: 'guardian', cost: 2, attack: 0, health: 1, rarity: 'event', img: wikiImg('Hot_Date'), tribe: 'Fruit', desc: 'When played: Move a Zombie to this lane. When destroyed: Do 3 damage to a Zombie here.', traits: [], abilities: ['on_play_move_zombie_here', 'on_destroy_damage_here_3'] },
        { id: 'health_nut', name: 'Health-Nut', type: 'plant', class: 'guardian', cost: 3, attack: 0, health: 4, rarity: 'event', img: wikiImg('Health-Nut'), tribe: 'Nut', desc: 'This attacks using its Health instead of its Strength.', traits: [], abilities: ['attack_uses_health'] },
        { id: 'pear_cub', name: 'Pear Cub', type: 'plant', class: 'guardian', cost: 3, attack: 1, health: 1, rarity: 'event', img: wikiImg('Pear_Cub'), tribe: 'Fruit', desc: 'Amphibious. When destroyed: Make a Grizzly Pear here. All Fruits get +1/+1.', traits: ['amphibious'], abilities: ['on_destroy_make_grizzly_pear'] },
        { id: 'shamrocket', name: 'Shamrocket', type: 'trick', class: 'guardian', cost: 3, rarity: 'event', img: wikiImg('Shamrocket'), tribe: 'Trick', desc: 'Destroy a Zombie with 4 or more.', traits: [], abilities: ['destroy_zombie_4'] },
        { id: 'red_stinger', name: 'Red Stinger', type: 'plant', class: 'guardian', cost: 4, attack: 3, health: 7, rarity: 'event', img: wikiImg('Red_Stinger'), tribe: 'Flower', desc: 'Team-Up. When played behind a Plant: This becomes 7/3.', traits: ['team-up'], abilities: ['on_play_behind_transform'] },

        // KABLOOM - Missing
        { id: 'invasive_species', name: 'Invasive Species', type: 'plant', class: 'kabloom', cost: 2, attack: 1, health: 4, rarity: 'uncommon', img: wikiImg('Invasive_Species'), tribe: 'Leafy', desc: 'While in an Environment: This gets +3.', traits: [], abilities: [] },
        { id: 'mushroom_grotto', name: 'Mushroom Grotto', type: 'environment', class: 'kabloom', cost: 3, rarity: 'uncommon', img: wikiImg('Mushroom_Grotto'), tribe: 'Environment', desc: 'When you play a Plant here, make a Puff-Shroom in another random lane.', traits: [], abilities: [] },
        { id: 'puff_shroom', name: 'Puff-Shroom', type: 'plant', class: 'kabloom', cost: 0, attack: 1, health: 1, rarity: 'common', img: wikiImg('Puff-Shroom'), tribe: 'Mushroom', desc: 'Team-Up.', traits: ['team-up'], abilities: [] },
        { id: 'hot_lava', name: 'Hot Lava', type: 'environment', class: 'kabloom', cost: 0, rarity: 'common', img: wikiImg('Hot_Lava'), tribe: 'Environment', desc: 'Before combat here: Do 1 damage to each Plant and Zombie here.', traits: [], abilities: ['before_combat_damage_all_1'] },
        { id: 'petal_morphosis', name: 'Petal-Morphosis', type: 'trick', class: 'kabloom', cost: 4, rarity: 'rare', img: wikiImg('Petal-Morphosis'), tribe: 'Flower', desc: 'Transform a Plant into a random Plant. Draw a card.', traits: [], abilities: [] },
        { id: 'cro_magnolia', name: 'Cro-Magnolia', type: 'plant', class: 'kabloom', cost: 3, attack: 2, health: 4, rarity: 'rare', img: wikiImg('Cro-Magnolia'), tribe: 'Flower', desc: 'Plant Evolution: Plants here and next door get +2.', traits: [], abilities: ['plant_evo_buff_adjacent'] },
        { id: 'reincarnation', name: 'Reincarnation', type: 'plant', class: 'kabloom', cost: 1, attack: 2, health: 2, rarity: 'legendary', img: wikiImg('Reincarnation'), tribe: 'Flower', desc: "While in your hand: At end of turn, this transforms into a random Plant with +1/+1. It keeps this ability.", traits: [], abilities: ['end_of_turn_transform'] },
        { id: 'sonic_bloom', name: 'Sonic Bloom', type: 'plant', class: 'kabloom', cost: 4, attack: 3, health: 1, rarity: 'event', img: wikiImg('Sonic_Bloom'), tribe: 'Flower', desc: 'When played: Do 1 damage to the Zombie Hero for each Plant.', traits: [], abilities: ['on_play_damage_per_plant'] },
        { id: 'transfiguration', name: 'Transfiguration', type: 'plant', class: 'kabloom', cost: 4, attack: 4, health: 7, rarity: 'event', img: wikiImg('Transfiguration'), tribe: 'Leafy', desc: 'End of turn: This transforms into a random Plant that costs 1 more. It keeps this ability.', traits: [], abilities: ['end_of_turn_transform'] },
        { id: 'electric_blueberry', name: 'Electric Blueberry', type: 'plant', class: 'kabloom', cost: 5, attack: 0, health: 5, rarity: 'event', img: wikiImg('Electric_Blueberry'), tribe: 'Berry', desc: 'After combat here: Do 6 damage to a random Zombie or the Zombie Hero.', traits: [], abilities: ['after_combat_damage_6'] },

        // MEGA-GROW - Missing
        { id: 'vegetation_mutation', name: 'Vegetation Mutation', type: 'trick', class: 'mega-grow', cost: 2, rarity: 'uncommon', img: wikiImg('Vegetation_Mutation'), tribe: 'Trick', desc: 'All Plants on Heights and Environments get +2/+2.', traits: [], abilities: [] },
        { id: 'sweet_pea', name: 'Sweet Pea', type: 'plant', class: 'mega-grow', cost: 2, attack: 2, health: 3, rarity: 'uncommon', img: wikiImg('Sweet_Pea'), tribe: 'Pea', desc: 'When played: Move a Zombie to this lane.', traits: [], abilities: ['on_play_move_zombie_here'] },
        { id: 'coffee_grounds', name: 'Coffee Grounds', type: 'environment', class: 'mega-grow', cost: 2, rarity: 'uncommon', img: wikiImg('Coffee_Grounds'), tribe: 'Environment', desc: 'Plants here get Double Strike.', traits: [], abilities: [] },
        { id: 'umbrella_leaf', name: 'Umbrella Leaf', type: 'plant', class: 'mega-grow', cost: 1, attack: 0, health: 2, rarity: 'uncommon', img: wikiImg('Umbrella_Leaf'), tribe: 'Leafy', desc: 'Team-Up. Other Plants here and next door are Untrickable.', traits: ['team-up', 'untrickable'], abilities: [] },
        { id: 'half_banana', name: 'Half-Banana', type: 'plant', class: 'mega-grow', cost: 1, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Half-Banana'), tribe: 'Fruit', desc: 'When destroyed: All Fruits in your hand get +1/+1.', traits: [], abilities: ['on_destroy_buff_fruits'] },
        { id: 'typical_beanstalk', name: 'Typical Beanstalk', type: 'plant', class: 'mega-grow', cost: 3, attack: 3, health: 3, rarity: 'uncommon', img: wikiImg('Typical_Beanstalk'), tribe: 'Bean', desc: 'When played next to a Leafy Plant: This gets +1 and Conjure a Leafy card.', traits: [], abilities: ['on_play_conjure_leafy'] },
        { id: 'banana_peel', name: 'Banana Peel', type: 'trick', class: 'mega-grow', cost: 2, rarity: 'rare', img: wikiImg('Banana_Peel'), tribe: 'Fruit', desc: 'Move a Zombie. Conjure a Fruit.', traits: [], abilities: [] },
        { id: 'bamboozle', name: 'Bamboozle', type: 'plant', class: 'mega-grow', cost: 6, attack: 6, health: 6, rarity: 'rare', img: wikiImg('Bamboozle'), tribe: 'Leafy', desc: 'Plant Evolution: Draw two cards.', traits: [], abilities: ['plant_evo_draw_2'] },
        { id: 'pea_patch', name: 'Pea Patch', type: 'plant', class: 'mega-grow', cost: 2, attack: 2, health: 3, rarity: 'rare', img: wikiImg('Pea_Patch'), tribe: 'Pea', desc: 'Fusion: A Plant played on this gets +2/+2.', traits: [], abilities: ['fusion_plus_2_2'] },
        { id: 'moonbean', name: 'Moonbean', type: 'plant', class: 'mega-grow', cost: 3, attack: 2, health: 5, rarity: 'super_rare', img: wikiImg('Moonbean'), tribe: 'Bean', desc: 'When this does damage, shuffle two Magic Beanstalks into your deck.', traits: [], abilities: ['on_damage_shuffle_beans'] },
        { id: 'pod_fighter', name: 'Pod Fighter', type: 'plant', class: 'mega-grow', cost: 5, attack: 3, health: 4, rarity: 'super_rare', img: wikiImg('Pod_Fighter'), tribe: 'Pea', desc: 'This does a Bonus Attack when you play a Plant here or next door.', traits: [], abilities: ['on_plant_played_bonus_attack'] },
        { id: 'the_red_plant_it', name: 'The Red Plant-It', type: 'environment', class: 'mega-grow', cost: 5, rarity: 'super_rare', img: wikiImg('The_Red_Plant-It'), tribe: 'Environment', desc: 'Plants here get +5/+5.', traits: [], abilities: [] },
        { id: 'grape_power', name: 'Grape Power', type: 'trick', class: 'mega-grow', cost: 3, rarity: 'super_rare', img: wikiImg('Grape_Power'), tribe: 'Berry', desc: "Double a Plant's Strength. Gain a Grape Responsibility.", traits: [], abilities: [] },
        { id: 'savage_spinach', name: 'Savage Spinach', type: 'plant', class: 'mega-grow', cost: 4, attack: 3, health: 6, rarity: 'super_rare', img: wikiImg('Savage_Spinach'), tribe: 'Leafy', desc: 'Leafy Evolution: All Plants in all lanes and your hand get +2.', traits: [], abilities: ['leafy_evo_buff_all'] },
        { id: 'captain_cucumber', name: 'Captain Cucumber', type: 'plant', class: 'mega-grow', cost: 3, attack: 1, health: 4, rarity: 'legendary', img: wikiImg('Captain_Cucumber'), tribe: 'Fruit', desc: 'Cards you Conjure cost 1 less. When this does damage, Conjure a Legendary card.', traits: [], abilities: ['conjure_cost_1_less', 'on_damage_conjure_legendary'] },
        { id: 'onion_rings', name: 'Onion Rings', type: 'plant', class: 'mega-grow', cost: 5, attack: 4, health: 4, rarity: 'legendary', img: wikiImg('Onion_Rings'), tribe: 'Root', desc: 'When played: Each Plant in your hand becomes 4/4.', traits: [], abilities: ['on_play_transform_hand_4_4'] },
        { id: 'apotatosaurus', name: 'Apotatosaurus', type: 'plant', class: 'mega-grow', cost: 6, attack: 5, health: 5, rarity: 'legendary', img: wikiImg('Apotatosaurus'), tribe: 'Root', desc: 'Untrickable. When played: Conjure a Root. Dino-Roar: This gets +1/+1.', traits: ['untrickable'], abilities: ['on_play_conjure_root', 'dino_roar_plus_1'] },
        { id: 'clique_peas', name: 'Clique Peas', type: 'plant', class: 'mega-grow', cost: 1, attack: 1, health: 1, rarity: 'event', img: wikiImg('Clique_Peas'), tribe: 'Bean', desc: 'When played: Shuffle two Clique Peas into your deck. For the rest of the game, all Clique Peas get +1/+1 and cost +1.', traits: [], abilities: ['on_play_shuffle_clique'] },
        { id: 'lily_of_the_valley', name: 'Lily of the Valley', type: 'plant', class: 'mega-grow', cost: 2, attack: 2, health: 2, rarity: 'event', img: wikiImg('Lily_of_the_Valley'), tribe: 'Flower', desc: 'When you play another Plant on the Heights, that Plant gets +2/+2.', traits: [], abilities: ['on_heights_plant_buff_2'] },
        { id: 'banana_split', name: 'Banana Split', type: 'plant', class: 'mega-grow', cost: 4, attack: 4, health: 5, rarity: 'event', img: wikiImg('Banana_Split'), tribe: 'Fruit', desc: 'When destroyed: Make two Half-Bananas next door.', traits: [], abilities: ['on_destroy_make_half_bananas'] },
        { id: 'plucky_clover', name: 'Plucky Clover', type: 'plant', class: 'mega-grow', cost: 5, attack: 2, health: 5, rarity: 'event', img: wikiImg('Plucky_Clover'), tribe: 'Leafy', desc: "When played: Conjure an Event card. This gets Strength equal to that card's cost.", traits: [], abilities: ['on_play_conjure_event'] },

        // SMARTY - Missing
        { id: 'snowdrop', name: 'Snowdrop', type: 'plant', class: 'smarty', cost: 1, attack: 1, health: 2, rarity: 'common', img: wikiImg('Snowdrop'), tribe: 'Flower', desc: 'This gets +2/+2 when a Zombie is frozen.', traits: [], abilities: ['on_zombie_frozen_plus_2'] },
        { id: 'weenie_beanie', name: 'Weenie Beanie', type: 'plant', class: 'smarty', cost: 1, attack: 1, health: 1, rarity: 'common', img: wikiImg('Weenie_Beanie'), tribe: 'Bean', desc: '', traits: [], abilities: [] },
        { id: 'snow_pea', name: 'Snow Pea', type: 'plant', class: 'smarty', cost: 2, attack: 2, health: 2, rarity: 'common', img: wikiImg('Snow_Pea'), tribe: 'Pea', desc: 'When this hurts a Zombie, Freeze that Zombie.', traits: [], abilities: ['on_damage_freeze'] },
        { id: 'smoosh_shroom', name: 'Smoosh-Shroom', type: 'plant', class: 'smarty', cost: 5, attack: 5, health: 4, rarity: 'common', img: wikiImg('Smoosh-Shroom'), tribe: 'Mushroom', desc: '', traits: [], abilities: [] },
        { id: 'shellery', name: 'Shellery', type: 'plant', class: 'smarty', cost: 1, attack: 2, health: 1, rarity: 'uncommon', img: wikiImg('Shellery'), tribe: 'Leafy', desc: 'Team-Up.', traits: ['team-up'], abilities: [] },
        { id: 'rescue_radish', name: 'Rescue Radish', type: 'plant', class: 'smarty', cost: 3, attack: 3, health: 4, rarity: 'uncommon', img: wikiImg('Rescue_Radish'), tribe: 'Root', desc: 'When played: Bounce another Plant.', traits: [], abilities: ['on_play_bounce_plant'] },
        { id: 'vanilla', name: 'Vanilla', type: 'plant', class: 'smarty', cost: 3, attack: 3, health: 3, rarity: 'uncommon', img: wikiImg('Vanilla'), tribe: 'Bean', desc: '', traits: [], abilities: [] },
        { id: 'carrotillery', name: 'Carrotillery', type: 'plant', class: 'smarty', cost: 4, attack: 5, health: 3, rarity: 'uncommon', img: wikiImg('Carrotillery'), tribe: 'Root', desc: 'Team-Up.', traits: ['team-up'], abilities: [] },
        { id: 'mars_flytrap', name: 'Mars Flytrap', type: 'plant', class: 'smarty', cost: 1, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Mars_Flytrap'), tribe: 'Flytrap', desc: 'When this hurts the Zombie Hero, steal a section from their Super-Block Meter.', traits: [], abilities: ['on_damage_steal_block'] },
        { id: 'planet_of_the_grapes', name: 'Planet of the Grapes', type: 'environment', class: 'smarty', cost: 3, rarity: 'uncommon', img: wikiImg('Planet_of_the_Grapes'), tribe: 'Environment', desc: 'When a Plant here hurts the Zombie Hero, draw a card.', traits: [], abilities: [] },
        { id: 'leaf_blower', name: 'Leaf Blower', type: 'plant', class: 'smarty', cost: 4, attack: 3, health: 4, rarity: 'uncommon', img: wikiImg('Leaf_Blower'), tribe: 'Leafy', desc: 'Amphibious. When played in an Environment: Bounce a Zombie or Gravestone.', traits: ['amphibious'], abilities: ['on_play_bounce'] },
        { id: 'grave_mistake', name: 'Grave Mistake', type: 'trick', class: 'smarty', cost: 2, rarity: 'uncommon', img: wikiImg('Grave_Mistake'), tribe: 'Trick', desc: 'Bounce a Gravestone. Draw a card.', traits: [], abilities: [] },
        { id: 'pear_pal', name: 'Pear Pal', type: 'plant', class: 'smarty', cost: 2, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Pear_Pal'), tribe: 'Fruit', desc: 'Amphibious. Team-Up.', traits: ['amphibious', 'team-up'], abilities: [] },
        { id: 'primal_peashooter', name: 'Primal Peashooter', type: 'plant', class: 'smarty', cost: 1, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Primal_Peashooter'), tribe: 'Pea', desc: 'When this hurts a Zombie, Bounce that Zombie.', traits: [], abilities: ['on_damage_bounce'] },
        { id: 'chilly_pepper', name: 'Chilly Pepper', type: 'plant', class: 'smarty', cost: 3, attack: 2, health: 1, rarity: 'rare', img: wikiImg('Chilly_Pepper'), tribe: 'Fruit', desc: 'When played: Freeze a Zombie.', traits: [], abilities: ['on_play_freeze_zombie'] },
        { id: 'navy_bean', name: 'Navy Bean', type: 'plant', class: 'smarty', cost: 4, attack: 3, health: 3, rarity: 'rare', img: wikiImg('Navy_Bean'), tribe: 'Bean', desc: 'Amphibious. Team-Up. When played: All Amphibious Plants get +1/+1.', traits: ['amphibious', 'team-up'], abilities: ['on_play_buff_amphibious'] },
        { id: 'melon_pult', name: 'Melon-Pult', type: 'plant', class: 'smarty', cost: 5, attack: 3, health: 5, rarity: 'rare', img: wikiImg('Melon-Pult'), tribe: 'Fruit', desc: 'Strikethrough.', traits: ['strikethrough'], abilities: [] },
        { id: 'lily_pad', name: 'Lily Pad', type: 'plant', class: 'smarty', cost: 1, attack: 0, health: 1, rarity: 'rare', img: wikiImg('Lily_Pad'), tribe: 'Leafy', desc: 'Amphibious. Fusion: A Plant played on this gets Amphibious. Conjure a Leafy card.', traits: ['amphibious'], abilities: ['fusion_amphibious'] },
        { id: 'sow_magic_beans', name: 'Sow Magic Beans', type: 'trick', class: 'smarty', cost: 2, rarity: 'super_rare', img: wikiImg('Sow_Magic_Beans'), tribe: 'Bean', desc: 'Shuffle five Magic Beanstalks into your deck.', traits: [], abilities: [] },
        { id: 'bean_counter', name: 'Bean Counter', type: 'plant', class: 'smarty', cost: 4, attack: 1, health: 1, rarity: 'super_rare', img: wikiImg('Bean_Counter'), tribe: 'Bean', desc: 'Team-Up. This gets +1/+1 when you play another Bean. When played: Gain two Weenie Beanies.', traits: ['team-up'], abilities: ['on_bean_played_plus_1'] },
        { id: 'winter_squash', name: 'Winter Squash', type: 'plant', class: 'smarty', cost: 4, attack: 2, health: 6, rarity: 'super_rare', img: wikiImg('Winter_Squash'), tribe: 'Squash', desc: 'When a Zombie or Gravestone becomes frozen, destroy it.', traits: [], abilities: ['on_freeze_destroy'] },
        { id: 'laser_cattail', name: 'Laser Cattail', type: 'plant', class: 'smarty', cost: 2, attack: 2, health: 2, rarity: 'super_rare', img: wikiImg('Laser_Cattail'), tribe: 'Animal', desc: 'Amphibious. Team-Up. This gets +1/+1 when you play a Plant here.', traits: ['amphibious', 'team-up'], abilities: ['on_plant_played_plus_1'] },
        { id: 'bog_of_enlightenment', name: 'Bog of Enlightenment', type: 'environment', class: 'smarty', cost: 2, rarity: 'super_rare', img: wikiImg('Bog_of_Enlightenment'), tribe: 'Environment', desc: 'Amphibious Plants here get +2. Non-Amphibious Zombies here get -2.', traits: [], abilities: [] },
        { id: 'rotobaga', name: 'Rotobaga', type: 'plant', class: 'smarty', cost: 2, attack: 2, health: 1, rarity: 'super_rare', img: wikiImg('Rotobaga'), tribe: 'Root', desc: 'Amphibious. This attacks both lanes next door instead of this lane.', traits: ['amphibious'], abilities: [] },
        { id: 'shooting_starfruit', name: 'Shooting Starfruit', type: 'plant', class: 'smarty', cost: 5, attack: 2, health: 2, rarity: 'legendary', img: wikiImg('Shooting_Starfruit'), tribe: 'Fruit', desc: 'This attacks in all five lanes.', traits: [], abilities: [] },
        { id: 'go_nuts', name: 'Go-Nuts', type: 'plant', class: 'smarty', cost: 3, attack: 2, health: 2, rarity: 'event', img: wikiImg('Go-Nuts'), tribe: 'Nut', desc: 'Team-Up. When you play a Team-Up Plant, all Team-Up Plants get +1.', traits: ['team-up'], abilities: ['on_team_up_played_plus_1'] },
        { id: 'mayflower', name: 'Mayflower', type: 'plant', class: 'smarty', cost: 3, attack: 2, health: 4, rarity: 'event', img: wikiImg('Mayflower'), tribe: 'Flower', desc: 'Amphibious. When this hurts the Zombie Hero, Conjure a Corn, Squash, or Bean.', traits: ['amphibious'], abilities: ['on_damage_conjure'] },
        { id: 'snake_grass', name: 'Snake Grass', type: 'plant', class: 'smarty', cost: 4, attack: 4, health: 2, rarity: 'event', img: wikiImg('Snake_Grass'), tribe: 'Leafy', desc: 'Amphibious. Start of Turn: Make another Snake Grass in the lane to the right.', traits: ['amphibious'], abilities: ['start_of_turn_summon_snake'] },
        { id: 'witch_hazel', name: 'Witch Hazel', type: 'plant', class: 'smarty', cost: 4, attack: 0, health: 3, rarity: 'event', img: wikiImg('Witch_Hazel'), tribe: 'Flower', desc: 'End of Turn: Destroy a random Zombie and make a Puff-Shroom there.', traits: [], abilities: ['end_of_turn_destroy_random'] },
        { id: 'jolly_holly', name: 'Jolly Holly', type: 'plant', class: 'smarty', cost: 5, attack: 4, health: 1, rarity: 'event', img: wikiImg('Jolly_Holly'), tribe: 'Leafy', desc: 'Amphibious. When played: Freeze Zombies next door.', traits: ['amphibious'], abilities: ['on_play_freeze_adjacent'] },
        { id: 'sap_fling', name: 'Sap-Fling', type: 'plant', class: 'smarty', cost: 6, attack: 5, health: 3, rarity: 'event', img: wikiImg('Sap-Fling'), tribe: 'Tree', desc: 'When played: Make a Sappy Place Environment.', traits: [], abilities: ['on_play_make_environment'] },
        { id: 'magic_beanstalk', name: 'Magic Beanstalk', type: 'plant', class: 'smarty', cost: 1, attack: 4, health: 4, rarity: 'common', img: wikiImg('Magic_Beanstalk'), tribe: 'Bean', desc: 'When played: Draw a card.', traits: [], abilities: ['on_play_draw'] },
        { id: 'sappy_place', name: 'Sappy Place', type: 'environment', class: 'smarty', cost: 4, rarity: 'common', img: wikiImg('Sappy_Place'), tribe: 'Environment', desc: 'Zombies here get -3.', traits: [], abilities: [] },

        // SOLAR - Missing
        { id: 'cosmoss', name: 'Cosmoss', type: 'plant', class: 'solar', cost: 1, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Cosmoss'), tribe: 'Moss', desc: 'When an Environment is played, this gets +2/+2.', traits: [], abilities: ['on_environment_played_plus_2'] },
        { id: 'apple_saucer', name: 'Apple-Saucer', type: 'plant', class: 'solar', cost: 2, attack: 3, health: 1, rarity: 'uncommon', img: wikiImg('Apple-Saucer'), tribe: 'Fruit', desc: 'When played: If you made at least 6 Sun this turn, this gets Strikethrough.', traits: [], abilities: ['on_play_strikethrough_if_6sun'] },
        { id: 'smashing_pumpkin', name: 'Smashing Pumpkin', type: 'plant', class: 'solar', cost: 6, attack: 6, health: 6, rarity: 'common', img: wikiImg('Smashing_Pumpkin'), tribe: 'Squash', desc: '', traits: [], abilities: [] },
        { id: 'sun_shroom', name: 'Sun-Shroom', type: 'plant', class: 'solar', cost: 1, attack: 1, health: 1, rarity: 'event', img: wikiImg('Sun-Shroom'), tribe: 'Mushroom', desc: 'Start of Turn: You get +1 Sun this turn. This gets +1/+1 when you made at least 6 Sun this turn.', traits: [], abilities: ['start_of_turn_sun_1'] },
        { id: 'ketchup_mechanic', name: 'Ketchup Mechanic', type: 'plant', class: 'solar', cost: 3, attack: 3, health: 3, rarity: 'event', img: wikiImg('Ketchup_Mechanic'), tribe: 'Flower', desc: 'When played: Heal your Hero for 3. If there are 4 or more Zombies, Conjure a card.', traits: [], abilities: ['on_play_heal_3'] },

        // === NEW ZOMBIE CARDS ===

        // BEASTLY - Missing
        { id: 'skunk_punk', name: 'Skunk Punk', type: 'zombie', class: 'beastly', cost: 1, attack: 1, health: 1, rarity: 'common', img: wikiImg('Skunk_Punk'), tribe: 'Pet', desc: '', traits: [], abilities: [] },
        { id: 'pied_piper', name: 'Pied Piper', type: 'zombie', class: 'beastly', cost: 2, attack: 2, health: 1, rarity: 'common', img: wikiImg('Pied_Piper'), tribe: 'Pet', desc: 'Gravestone. When revealed: Plants here get -1/-1.', traits: ['gravestone'], abilities: ['graves_plants_here_minus_1'] },
        { id: 'zookeeper', name: 'Zookeeper', type: 'zombie', class: 'beastly', cost: 2, attack: 1, health: 3, rarity: 'common', img: wikiImg('Zookeeper'), tribe: 'Pet', desc: 'When you play another Pet, all Pets get +1.', traits: [], abilities: ['on_pet_played_plus_1'] },
        { id: 'locust_swarm', name: 'Locust Swarm', type: 'trick', class: 'beastly', cost: 5, rarity: 'common', img: wikiImg('Locust_Swarm'), tribe: 'Pet', desc: 'Destroy a Plant.', traits: [], abilities: ['destroy_plant'] },
        { id: 'haunting_zombie', name: 'Haunting Zombie', type: 'zombie', class: 'beastly', cost: 2, attack: 2, health: 1, rarity: 'uncommon', img: wikiImg('Haunting_Zombie'), tribe: 'Monster', desc: 'When destroyed: Gain a Haunting Ghost.', traits: [], abilities: ['on_destroy_gain_ghost'] },
        { id: 'loudmouth', name: 'Loudmouth', type: 'zombie', class: 'beastly', cost: 3, attack: 1, health: 1, rarity: 'uncommon', img: wikiImg('Loudmouth'), tribe: 'Imp', desc: 'Gravestone. When revealed: A Zombie gets +2/+2.', traits: ['gravestone'], abilities: ['graves_buff_zombie_2'] },
        { id: 'b_flat', name: 'B-flat', type: 'trick', class: 'beastly', cost: 3, rarity: 'uncommon', img: wikiImg('B-flat'), tribe: 'Trick', desc: 'Destroy a random Plant.', traits: [], abilities: ['destroy_random_plant'] },
        { id: 'alien_ooze', name: 'Alien Ooze', type: 'trick', class: 'beastly', cost: 3, rarity: 'uncommon', img: wikiImg('Alien_Ooze'), tribe: 'Monster', desc: "A Plant gets -3/-3. If it's on Heights or an Environment, it gets -6/-6 instead.", traits: [], abilities: [] },
        { id: 'squirrel_herder', name: 'Squirrel Herder', type: 'zombie', class: 'beastly', cost: 2, attack: 2, health: 2, rarity: 'rare', img: wikiImg('Squirrel_Herder'), tribe: 'Professional', desc: 'Gravestone. When revealed: Destroy one of their Nuts or Berries.', traits: ['gravestone'], abilities: ['graves_destroy_nut_or_berry'] },
        { id: 'vitamin_z', name: 'Vitamin Z', type: 'trick', class: 'beastly', cost: 3, rarity: 'rare', img: wikiImg('Vitamin_Z'), tribe: 'Gourmet', desc: 'A Zombie gets +3/+3.', traits: [], abilities: [] },
        { id: 'kangaroo_rider', name: 'Kangaroo Rider', type: 'zombie', class: 'beastly', cost: 4, attack: 4, health: 4, rarity: 'rare', img: wikiImg('Kangaroo_Rider'), tribe: 'Imp', desc: 'When hurt: Bounce this kangaroo.', traits: [], abilities: ['on_hurt_bounce_self'] },
        { id: 'smashing_gargantuar', name: 'Smashing Gargantuar', type: 'zombie', class: 'beastly', cost: 5, attack: 5, health: 5, rarity: 'rare', img: wikiImg('Smashing_Gargantuar'), tribe: 'Gargantuar', desc: 'All Gargantuars have Frenzy.', traits: [], abilities: [] },
        { id: 'cyborg_zombie', name: 'Cyborg Zombie', type: 'zombie', class: 'beastly', cost: 2, attack: 3, health: 2, rarity: 'super_rare', img: wikiImg('Cyborg_Zombie'), tribe: 'Science', desc: 'Hunt. When destroyed: Gain a Vengeful Cyborg.', traits: ['hunt'], abilities: ['on_destroy_gain_vengeful'] },
        { id: 'area_22', name: 'Area 22', type: 'environment', class: 'beastly', cost: 3, rarity: 'super_rare', img: wikiImg('Area_22'), tribe: 'Environment', desc: 'Zombies here get +2/+2 and Frenzy.', traits: [], abilities: [] },
        { id: 'maniacal_laugh', name: 'Maniacal Laugh', type: 'trick', class: 'beastly', cost: 6, rarity: 'super_rare', img: wikiImg('Maniacal_Laugh'), tribe: 'Trick', desc: 'A Zombie gets +5/+5 and Frenzy.', traits: [], abilities: [] },
        { id: 'octo_zombie', name: 'Octo Zombie', type: 'zombie', class: 'beastly', cost: 8, attack: 8, health: 8, rarity: 'legendary', img: wikiImg('Octo_Zombie'), tribe: 'Pet', desc: 'Amphibious. Frenzy. When Played: Make a 3/2 Octo-Pet with Amphibious and Frenzy. When destroyed: Gain an Octo Zombie.', traits: ['amphibious', 'frenzy'], abilities: ['on_play_make_octo_pet'] },
        { id: 'zombot_1000', name: 'Zombot 1000', type: 'zombie', class: 'beastly', cost: 9, attack: 9, health: 9, rarity: 'legendary', img: wikiImg('Zombot_1000'), tribe: 'Science', desc: 'Gravestone. When revealed: Destroy all Plants here and next door.', traits: ['gravestone'], abilities: ['graves_destroy_adjacent'] },
        { id: 'interstellar_bounty_hunter', name: 'Interstellar Bounty Hunter', type: 'zombie', class: 'beastly', cost: 4, attack: 4, health: 4, rarity: 'legendary', img: wikiImg('Interstellar_Bounty_Hunter'), tribe: 'Science', desc: 'Hunt. Frenzy. When this destroys a Plant, draw a card.', traits: ['hunt', 'frenzy'], abilities: ['on_destroy_draw'] },
        { id: 'mondo_bronto', name: 'Mondo Bronto', type: 'zombie', class: 'beastly', cost: 5, attack: 5, health: 5, rarity: 'legendary', img: wikiImg('Mondo_Bronto'), tribe: 'Pet', desc: 'Amphibious. Dino-Roar: This gets +1/+1 and destroy all Plants here.', traits: ['amphibious'], abilities: ['dino_roar_plus_1'] },
        { id: 'gargantuar_throwing_gargantuar', name: 'Gargantuar-Throwing Gargantuar', type: 'zombie', class: 'beastly', cost: 7, attack: 6, health: 6, rarity: 'legendary', img: wikiImg('Gargantuar-Throwing_Gargantuar'), tribe: 'Gargantuar', desc: 'When hurt: Make a random Gargantuar in a random lane.', traits: [], abilities: ['on_hurt_make_gargantuar'] },
        { id: 'fraidy_cat', name: 'Fraidy Cat', type: 'zombie', class: 'beastly', cost: 1, attack: 2, health: 2, rarity: 'event', img: wikiImg('Fraidy_Cat'), tribe: 'Pet', desc: 'When a Plant Trick is played, this gets +1/+1 and moves to a random lane.', traits: [], abilities: ['on_plant_trick_plus_1'] },
        { id: 'secret_agent', name: 'Secret Agent', type: 'trick', class: 'beastly', cost: 1, rarity: 'event', img: wikiImg('Secret_Agent'), tribe: 'Professional', desc: 'Bounce a Zombie, and it gets +3/+3.', traits: [], abilities: [] },
        { id: 'energy_drink_zombie', name: 'Energy Drink Zombie', type: 'zombie', class: 'beastly', cost: 2, attack: 1, health: 1, rarity: 'event', img: wikiImg('Energy_Drink_Zombie'), tribe: 'Gourmet', desc: 'Frenzy. Start of Tricks: This gets +1/+1 and moves to a random lane.', traits: ['frenzy'], abilities: ['start_of_tricks_plus_1'] },
        { id: 'synchronized_swimmer', name: 'Synchronized Swimmer', type: 'zombie', class: 'beastly', cost: 2, attack: 2, health: 1, rarity: 'event', img: wikiImg('Synchronized_Swimmer'), tribe: 'Dancing', desc: 'Amphibious. When played: This Zombie copies the Strength and Health of another Zombie.', traits: ['amphibious'], abilities: ['on_play_copy_zombie'] },
        { id: 'hover_goat_3000', name: 'Hover-Goat 3000', type: 'zombie', class: 'beastly', cost: 3, attack: 1, health: 3, rarity: 'event', img: wikiImg('Hover-Goat_3000'), tribe: 'Pet', desc: 'Amphibious. When played: Another Zombie gets +2/+2. When hurt: Bounce this Goat.', traits: ['amphibious'], abilities: ['on_play_buff_ally_2'] },
        { id: 'overstuffed_zombie', name: 'Overstuffed Zombie', type: 'zombie', class: 'beastly', cost: 4, attack: 4, health: 4, rarity: 'event', img: wikiImg('Overstuffed_Zombie'), tribe: 'Gourmet', desc: 'Hunt. When this destroys a Plant and survives, it heals to full and heals your Hero for 2.', traits: ['hunt'], abilities: ['on_destroy_heal_2'] },
        { id: 'sneezing_zombie', name: 'Sneezing Zombie', type: 'zombie', class: 'beastly', cost: 4, attack: 2, health: 4, rarity: 'event', img: wikiImg('Sneezing_Zombie'), tribe: 'Party', desc: "Plants and the Plant Hero can't be healed. When played: All Plants get -1/-1.", traits: [], abilities: ['on_play_debuff_all_1'] },
        { id: 'king_of_the_grill', name: 'King of the Grill', type: 'zombie', class: 'beastly', cost: 6, attack: 6, health: 6, rarity: 'event', img: wikiImg('King_of_the_Grill'), tribe: 'Gargantuar', desc: 'Frenzy. When a Gargantuar destroys a Plant, Conjure a Gargantuar card.', traits: ['frenzy'], abilities: ['on_garg_destroy_conjure'] },
        { id: 'zom_bats', name: 'Zom-Bats', type: 'zombie', class: 'beastly', cost: 3, attack: 2, health: 2, rarity: 'common', img: wikiImg('Zom-Bats'), tribe: 'Pet', desc: 'Amphibious. When this hurts a Plant, draw a Card.', traits: ['amphibious'], abilities: ['on_damage_draw'] },

        // BRAINY - Missing
        { id: 'cardboard_robot_zombie', name: 'Cardboard Robot Zombie', type: 'zombie', class: 'brainy', cost: 1, attack: 1, health: 1, rarity: 'common', img: wikiImg('Cardboard_Robot_Zombie'), tribe: 'Science', desc: '', traits: [], abilities: [] },
        { id: 'lurch_for_lunch', name: 'Lurch for Lunch', type: 'trick', class: 'brainy', cost: 2, rarity: 'common', img: wikiImg('Lurch_for_Lunch'), tribe: 'Gourmet', desc: 'A Zombie does a Bonus Attack.', traits: [], abilities: [] },
        { id: 'fun_dead_raiser', name: 'Fun-Dead Raiser', type: 'trick', class: 'brainy', cost: 3, rarity: 'common', img: wikiImg('Fun-Dead_Raiser'), tribe: 'Party', desc: 'Draw two cards.', traits: [], abilities: ['draw_2'] },
        { id: 'drum_major', name: 'Drum Major', type: 'zombie', class: 'brainy', cost: 4, attack: 4, health: 4, rarity: 'common', img: wikiImg('Drum_Major'), tribe: 'Dancing', desc: '', traits: [], abilities: [] },
        { id: 'cell_phone_zombie', name: 'Cell Phone Zombie', type: 'zombie', class: 'brainy', cost: 2, attack: 1, health: 1, rarity: 'uncommon', img: wikiImg('Cell_Phone_Zombie'), tribe: 'Professional', desc: 'When played: Draw a card.', traits: [], abilities: ['on_play_draw'] },
        { id: 'pool_shark', name: 'Pool Shark', type: 'zombie', class: 'brainy', cost: 2, attack: 3, health: 1, rarity: 'uncommon', img: wikiImg('Pool_Shark'), tribe: 'Mustache', desc: 'Bullseye.', traits: ['bullseye'], abilities: [] },
        { id: 'zombot_drone_engineer', name: 'Zombot Drone Engineer', type: 'zombie', class: 'brainy', cost: 2, attack: 1, health: 4, rarity: 'uncommon', img: wikiImg('Zombot_Drone_Engineer'), tribe: 'Science', desc: 'Gravestone. When a Science Zombie does damage, that Zombie gets +1.', traits: ['gravestone'], abilities: ['graves_science_plus_1'] },
        { id: 'mountain_climber', name: 'Mountain Climber', type: 'zombie', class: 'brainy', cost: 4, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Mountain_Climber'), tribe: 'Sports', desc: 'Bullseye. When played on Heights: This gets +2/+2.', traits: ['bullseye'], abilities: ['on_play_heights_plus_2'] },
        { id: 'medulla_nebula', name: 'Medulla Nebula', type: 'environment', class: 'brainy', cost: 3, rarity: 'uncommon', img: wikiImg('Medulla_Nebula'), tribe: 'Environment', desc: 'When you play a Zombie here, you get +2 Brains this turn.', traits: [], abilities: [] },
        { id: 'moonwalker', name: 'Moonwalker', type: 'zombie', class: 'brainy', cost: 3, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Moonwalker'), tribe: 'Science', desc: 'When played on Heights or an Environment: This gets +2/+2.', traits: [], abilities: ['on_play_heights_plus_2'] },
        { id: 'copter_commando', name: 'Copter Commando', type: 'zombie', class: 'brainy', cost: 5, attack: 6, health: 5, rarity: 'uncommon', img: wikiImg('Copter_Commando'), tribe: 'Science', desc: '', traits: [], abilities: [] },
        { id: 'mustache_waxer', name: 'Mustache Waxer', type: 'zombie', class: 'brainy', cost: 1, attack: 2, health: 2, rarity: 'uncommon', img: wikiImg('Mustache_Waxer'), tribe: 'Professional', desc: 'When you play a Mustache, this gets +2 and you get +1 Brain.', traits: [], abilities: ['on_mustache_played_plus_2'] },
        { id: 'quarterly_bonus', name: 'Quarterly Bonus', type: 'trick', class: 'brainy', cost: 4, rarity: 'uncommon', img: wikiImg('Quarterly_Bonus'), tribe: 'Professional', desc: "Strength of a Zombie becomes 4, then it does a Bonus Attack.", traits: [], abilities: [] },
        { id: 'kite_flyer', name: 'Kite Flyer', type: 'zombie', class: 'brainy', cost: 2, attack: 2, health: 1, rarity: 'rare', img: wikiImg('Kite_Flyer'), tribe: 'Mustache', desc: 'When this hurts the Zombie Hero, draw a card.', traits: [], abilities: ['on_damage_draw'] },
        { id: 'rocket_zombie', name: 'Rocket Zombie', type: 'zombie', class: 'brainy', cost: 4, attack: 3, health: 3, rarity: 'rare', img: wikiImg('Rocket_Zombie'), tribe: 'Science', desc: 'When played: Do 3 damage to a Plant.', traits: [], abilities: ['on_play_damage_3'] },
        { id: 'zombot_suit', name: 'Zombot Suit', type: 'zombie', class: 'brainy', cost: 3, attack: 2, health: 4, rarity: 'rare', img: wikiImg('Zombot_Suit'), tribe: 'Science', desc: 'When played: Do 2 damage to a random Plant.', traits: [], abilities: ['on_play_damage_random_2'] },
        { id: 'frankentuar', name: 'Frankentuar', type: 'zombie', class: 'brainy', cost: 5, attack: 4, health: 4, rarity: 'rare', img: wikiImg('Frankentuar'), tribe: 'Gargantuar', desc: 'When this destroys a Plant, heal your Hero for 2.', traits: [], abilities: ['on_destroy_heal_2'] },
        { id: 'telepathic', name: 'Telepathic', type: 'trick', class: 'brainy', cost: 1, rarity: 'rare', img: wikiImg('Telepathic'), tribe: 'Trick', desc: 'Conjure a Trick. It costs 1 less.', traits: [], abilities: [] },
        { id: 'android', name: 'Android', type: 'zombie', class: 'brainy', cost: 3, attack: 3, health: 3, rarity: 'rare', img: wikiImg('Android'), tribe: 'Science', desc: 'When played: If you have at least 3 Science Zombies, all Science Zombies get +1/+1.', traits: [], abilities: ['on_play_science_buff'] },
        { id: 'disco_neutron_dance', name: 'Disco Neutron Dance', type: 'trick', class: 'brainy', cost: 4, rarity: 'super_rare', img: wikiImg('Disco_Neutron_Dance'), tribe: 'Science', desc: 'A Zombie gets +2/+2. If it is a Science Zombie, it does a Bonus Attack.', traits: [], abilities: [] },
        { id: 'zombot_alarm', name: 'Zombot Alarm', type: 'trick', class: 'brainy', cost: 3, rarity: 'super_rare', img: wikiImg('Zombot_Alarm'), tribe: 'Science', desc: 'Transform a Zombie into a random Zombie that costs 2 more.', traits: [], abilities: [] },
        { id: 'zmech_gargantuar', name: 'Zmech Gargantuar', type: 'zombie', class: 'brainy', cost: 7, attack: 6, health: 6, rarity: 'legendary', img: wikiImg('Z-Mech_Gargantuar'), tribe: 'Science', desc: 'When played: Do 3 damage to a Plant and 1 damage to all other Plants.', traits: [], abilities: ['on_play_missile_madness'] },

        // CRAZY - Missing
        { id: 'jester', name: 'Jester', type: 'zombie', class: 'crazy', cost: 3, attack: 1, health: 5, rarity: 'rare', img: wikiImg('Jester'), tribe: 'Mustache', desc: 'When hurt: This gets +1 Strength.', traits: [], abilities: ['on_hurt_plus_1'] },
        { id: 'chum_bucket', name: 'Chum Bucket', type: 'environment', class: 'crazy', cost: 3, rarity: 'uncommon', img: wikiImg('Chum_Bucket'), tribe: 'Environment', desc: 'Zombies here get +1/+1. When a Zombie here destroys a Plant, draw a card.', traits: [], abilities: [] },

        // HEARTY - Missing
        { id: 'bonus_track_buckethead', name: 'Bonus Track Buckethead', type: 'zombie', class: 'hearty', cost: 3, attack: 2, health: 4, rarity: 'event', img: wikiImg('Bonus_Track_Buckethead'), tribe: 'Dancing', desc: 'Armored 1. When another Zombie does damage, this gets +1.', traits: ['armored_1'], abilities: ['on_ally_damage_plus_1'] },
        { id: 'zombology_teacher', name: 'Zombology Teacher', type: 'zombie', class: 'hearty', cost: 1, attack: 1, health: 1, rarity: 'event', img: wikiImg('Zombology_Teacher'), tribe: 'Professional', desc: 'When played: Your next Trick costs 1 less.', traits: [], abilities: ['on_play_reduce_next_trick'] },
        { id: 'gargologist', name: 'Gargologist', type: 'zombie', class: 'hearty', cost: 2, attack: 2, health: 2, rarity: 'event', img: wikiImg('Gargologist'), tribe: 'Professional', desc: 'Gargantuars cost 1 less.', traits: [], abilities: [] },
        { id: 'turkey_rider', name: 'Turkey Rider', type: 'zombie', class: 'hearty', cost: 3, attack: 2, health: 3, rarity: 'event', img: wikiImg('Turkey_Rider'), tribe: 'Pet', desc: 'When destroyed: Conjure a Gargantuar.', traits: [], abilities: ['on_destroy_conjure_gargantuar'] },

        // SNEAKY - Missing
        { id: 'imposter', name: 'Imposter', type: 'zombie', class: 'sneaky', cost: 2, attack: 2, health: 2, rarity: 'event', img: wikiImg('Imposter'), tribe: 'Imp', desc: 'When played: Transform a Plant into a 1/1 Imp.', traits: [], abilities: ['on_play_transform_plant_imp'] },
        { id: 'imp_throwing_imp', name: 'Imp-Throwing Imp', type: 'zombie', class: 'sneaky', cost: 3, attack: 2, health: 2, rarity: 'event', img: wikiImg('Imp-Throwing_Imp'), tribe: 'Pirate', desc: 'When this hurts the Zombie Hero, make a random Imp in a random lane.', traits: [], abilities: ['on_damage_make_imp'] },
        { id: 'captain_flameface', name: 'Captain Flameface', type: 'zombie', class: 'sneaky', cost: 4, attack: 4, health: 3, rarity: 'event', img: wikiImg('Captain_Flameface'), tribe: 'Pirate', desc: 'Strikethrough. When played: All Pirates get Bullseye.', traits: ['strikethrough'], abilities: ['on_play_pirates_bullseye'] },
        { id: 'zombie_high_diver', name: 'Zombie High Diver', type: 'zombie', class: 'sneaky', cost: 3, attack: 3, health: 3, rarity: 'event', img: wikiImg('Zombie_High_Diver'), tribe: 'Sports', desc: 'Amphibious. When played: Move a Plant to the Water.', traits: ['amphibious'], abilities: ['on_play_move_to_water'] },
        { id: 'trapper_zombie', name: 'Trapper Zombie', type: 'zombie', class: 'sneaky', cost: 3, attack: 2, health: 3, rarity: 'event', img: wikiImg('Trapper_Zombie'), tribe: 'Professional', desc: 'When played: All Plants on the Ground get -1/-1.', traits: [], abilities: ['on_play_debuff_ground_1'] },
        { id: 'stupid_cupid_zombie', name: 'Stupid Cupid', type: 'zombie', class: 'sneaky', cost: 4, attack: 3, health: 3, rarity: 'legendary', img: wikiImg('Stupid_Cupid'), tribe: 'Pirate', desc: 'When played: Move a Plant to a random lane.', traits: [], abilities: ['on_play_move_plant_random'] },

        // ENVIRONMENT CARDS
        { id: 'coffee_grounds_env', name: 'Coffee Grounds', type: 'environment', class: 'mega-grow', cost: 2, rarity: 'uncommon', img: wikiImg('Coffee_Grounds'), tribe: 'Environment', desc: 'Plants here get Double Strike.', traits: [], abilities: [] },
    ],

    classColors: {
        'solar': '#f59e0b', 'kabloom': '#ef4444', 'guardian': '#22c55e',
        'mega-grow': '#3b82f6', 'smarty': '#06b6d4', 'beastly': '#a855f7',
        'brainy': '#3b82f6', 'crazy': '#f97316', 'hearty': '#ef4444', 'sneaky': '#64748b'
    },
    classEmoji: {
        'solar': '☀️', 'kabloom': '💥', 'guardian': '🛡️', 'mega-grow': '📈',
        'smarty': '🧠', 'beastly': '🐾', 'brainy': '🎓', 'crazy': '🤪',
        'hearty': '❤️', 'sneaky': '🌑'
    },
    rarityColors: {
        'common': '#9ca3af', 'uncommon': '#22c55e', 'rare': '#3b82f6',
        'super_rare': '#a855f7', 'legendary': '#f59e0b', 'event': '#f97316'
    }
};

function getHeroCards(heroId) {
    const hero = CARD_DATA.heroes.find(h => h.id === heroId);
    if (!hero || hero.type !== 'hero') return [];
    return CARD_DATA.cards.filter(c => hero.classes.includes(c.class));
}

function getClassCards(className) {
    return CARD_DATA.cards.filter(c => c.class === className);
}

function getCard(id) {
    return CARD_DATA.cards.find(c => c.id === id) || CARD_DATA.heroes.find(h => h.id === id);
}
