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
