// definitions.js

// --- MULTIPLAYER ---
export const MP_BASE_CAMOS_DEFAULT = {
  'Underbrush': { amount: 5, type: 'headshots' },
  'Woodland': { amount: 10, type: 'headshots' },
  'Slate Digital': { amount: 20, type: 'headshots' },
  'Redwood': { amount: 30, type: 'headshots' },
  'Poison': { amount: 40, type: 'headshots' },
  'Toxic': { amount: 50, type: 'headshots' },
  'Mountain': { amount: 60, type: 'headshots' },
  'Stalker': { amount: 70, type: 'headshots' },
  'Ruby Snake': { amount: 80, type: 'headshots' },
}
export const MP_BASE_CAMOS_SHOTGUN = {
  'Underbrush': { amount: 5, type: 'point_blank_kills' },
  'Woodland': { amount: 10, type: 'point_blank_kills' },
  'Slate Digital': { amount: 20, type: 'point_blank_kills' },
  'Redwood': { amount: 30, type: 'point_blank_kills' },
  'Poison': { amount: 40, type: 'point_blank_kills' },
  'Toxic': { amount: 50, type: 'point_blank_kills' },
  'Mountain': { amount: 60, type: 'point_blank_kills' },
  'Stalker': { amount: 70, type: 'point_blank_kills' },
  'Ruby Snake': { amount: 80, type: 'point_blank_kills' },
}
export const MP_BASE_CAMOS_SNIPER = {
  'Underbrush': { amount: 5, type: 'one_shot_kills' },
  'Woodland': { amount: 10, type: 'one_shot_kills' },
  'Slate Digital': { amount: 20, type: 'one_shot_kills' },
  'Redwood': { amount: 30, type: 'one_shot_kills' },
  'Poison': { amount: 40, type: 'one_shot_kills' },
  'Toxic': { amount: 50, type: 'one_shot_kills' },
  'Mountain': { amount: 60, type: 'one_shot_kills' },
  'Stalker': { amount: 70, type: 'one_shot_kills' },
  'Ruby Snake': { amount: 80, type: 'one_shot_kills' },
}
export const MP_BASE_CAMOS_LAUNCHER = {
  'Underbrush': { amount: 5, type: 'kills' },
  'Woodland': { amount: 10, type: 'kills' },
  'Slate Digital': { amount: 20, type: 'kills' },
  'Redwood': { amount: 30, type: 'kills' },
  'Poison': { amount: 40, type: 'kills' },
  'Toxic': { amount: 50, type: 'kills' },
  'Mountain': { amount: 60, type: 'kills' },
  'Stalker': { amount: 70, type: 'kills' },
  'Ruby Snake': { amount: 80, type: 'kills' },
}
export const MP_BASE_CAMOS_MELEE = {
  'Underbrush': { amount: 5, type: 'kills' },
  'Woodland': { amount: 10, type: 'kills' },
  'Slate Digital': { amount: 20, type: 'kills' },
  'Redwood': { amount: 30, type: 'kills' },
  'Poison': { amount: 40, type: 'kills' },
  'Toxic': { amount: 50, type: 'kills' },
  'Mountain': { amount: 60, type: 'kills' },
  'Stalker': { amount: 70, type: 'kills' },
  'Ruby Snake': { amount: 80, type: 'kills' },
}
export const MP_MASTERY_CAMOS = {
  'Shattered Gold': { amount: 3, type: 'kills_without_dying', times: 10 },
  'Arclight': { amount: 10, type: 'double_kills' },
  'Tempest': { amount: 5, type: 'kills_without_dying', times: 3 },
  'Singularity': { type: 'unlock_tempest_30_weapons' },
}

// --- ZOMBIES ---
export const ZM_BASE_CAMOS_DEFAULT = {
  'Char': { amount: 100, type: 'critical_kills' },
  'Tundra': { amount: 200, type: 'critical_kills' },
  'Flood Digital': { amount: 300, type: 'critical_kills' },
  'Cedar': { amount: 400, type: 'critical_kills' },
  'Marshland': { amount: 500, type: 'critical_kills' },
  'Mire': { amount: 600, type: 'critical_kills' },
  'Ravine': { amount: 700, type: 'critical_kills' },
  'Skulk': { amount: 800, type: 'critical_kills' },
  'Emerald Snake': { amount: 1000, type: 'critical_kills' },
}
export const ZM_BASE_CAMOS_SHOTGUN = {
  'Char': { amount: 100, type: 'point_blank_kills' },
  'Tundra': { amount: 200, type: 'point_blank_kills' },
  'Flood Digital': { amount: 300, type: 'point_blank_kills' },
  'Cedar': { amount: 400, type: 'point_blank_kills' },
  'Marshland': { amount: 500, type: 'point_blank_kills' },
  'Mire': { amount: 600, type: 'point_blank_kills' },
  'Ravine': { amount: 700, type: 'point_blank_kills' },
  'Skulk': { amount: 800, type: 'point_blank_kills' },
  'Emerald Snake': { amount: 1000, type: 'point_blank_kills' },
}
export const ZM_BASE_CAMOS_LAUNCHER_MELEE = {
  'Char': { amount: 100, type: 'eliminations' },
  'Tundra': { amount: 200, type: 'eliminations' },
  'Flood Digital': { amount: 300, type: 'eliminations' },
  'Cedar': { amount: 400, type: 'eliminations' },
  'Marshland': { amount: 500, type: 'eliminations' },
  'Mire': { amount: 600, type: 'eliminations' },
  'Ravine': { amount: 700, type: 'eliminations' },
  'Skulk': { amount: 800, type: 'eliminations' },
  'Emerald Snake': { amount: 1000, type: 'eliminations' },
}
export const ZM_MASTERY_CAMOS = {
  'Golden Dragon': { amount: 10, type: 'rapid_kills', times: 15 },
  'Bloodstone': { amount: 20, type: 'consecutive_kills_without_taking_damage', times: 5 },
  'Doomsteel': { amount: 10, type: 'elite_zombie_kills' },
  'Infestation': { type: 'unlock_doomsteel_30_weapons' },
}

// --- CAMPAIGN ---
export const CP_BASE_CAMOS_DEFAULT = {
  'Foliage': { amount: 10, type: 'critical_kills' },
  'Desert': { amount: 25, type: 'critical_kills' },
  'City Digital': { amount: 50, type: 'critical_kills' },
  'Pine': { amount: 75, type: 'critical_kills' },
  'Forest': { amount: 100, type: 'critical_kills' },
  'Sludge': { amount: 125, type: 'critical_kills' },
  'Plateau': { amount: 150, type: 'critical_kills' },
  'Nocturne': { amount: 200, type: 'critical_kills' },
  'Topaz Snake': { amount: 250, type: 'critical_kills' },
}
export const CP_BASE_CAMOS_SHOTGUN = {
  'Foliage': { amount: 10, type: 'point_blank_kills' },
  'Desert': { amount: 25, type: 'point_blank_kills' },
  'City Digital': { amount: 50, type: 'point_blank_kills' },
  'Pine': { amount: 75, type: 'point_blank_kills' },
  'Forest': { amount: 100, type: 'point_blank_kills' },
  'Sludge': { amount: 125, type: 'point_blank_kills' },
  'Plateau': { amount: 150, type: 'point_blank_kills' },
  'Nocturne': { amount: 200, type: 'point_blank_kills' },
  'Topaz Snake': { amount: 250, type: 'point_blank_kills' },
}
export const CP_BASE_CAMOS_LAUNCHER_MELEE = {
  'Foliage': { amount: 10, type: 'kills' },
  'Desert': { amount: 25, type: 'kills' },
  'City Digital': { amount: 50, type: 'kills' },
  'Pine': { amount: 75, type: 'kills' },
  'Forest': { amount: 100, type: 'kills' },
  'Sludge': { amount: 125, type: 'kills' },
  'Plateau': { amount: 150, type: 'kills' },
  'Nocturne': { amount: 200, type: 'kills' },
  'Topaz Snake': { amount: 250, type: 'kills' },
}
export const CP_MASTERY_CAMOS = {
  'Molten Gold': { amount: 20, type: 'special_enemy_kills' },
  'Moonstone': { amount: 100, type: 'endgame_zone_kills' },
  'Chroma Flux': { amount: 10, type: 'endgame_elite_kills' },
  'Genesis': { type: 'unlock_chroma_flux_30_weapons' },
}

// --- WARZONE ---
export const WZ_BASE_CAMOS = {
  'Autumn': { amount: 5, type: 'eliminations' },
  'Arctic': { amount: 10, type: 'eliminations' },
  'Forest Digital': { amount: 15, type: 'eliminations' },
  'Balsam': { amount: 20, type: 'eliminations' },
  'Arid': { amount: 30, type: 'eliminations' },
  'Oil': { amount: 40, type: 'eliminations' },
  'Snowcap': { amount: 50, type: 'eliminations' },
  'Hunter': { amount: 75, type: 'eliminations' },
  'Sapphire Snake': { amount: 100, type: 'eliminations' },
}

export const WZ_MASTERY_CAMOS = {
  'Golden Damascus': { amount: 3, type: 'kills_in_a_single_match', times: 5 },
  'Starglass': { amount: 5, type: 'kills_without_dying', times: 5 },
  'Absolute Zero': { amount: 10, type: 'kills_in_top_10' },
  'Apocalypse': { type: 'unlock_absolute_zero_30_weapons' },
}

// --- PRESTIGE ---
export const PRESTIGE_CAMOS = {
  'Cobalt Circuit': { amount: 100, type: 'weapon_prestige_master' },
  'Vermilion Cypher': { amount: 150, type: 'weapon_prestige_master' },
  'Violet Network': { amount: 200, type: 'weapon_prestige_master' },
}