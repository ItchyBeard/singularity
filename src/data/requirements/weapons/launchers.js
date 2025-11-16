import launchers from '@/data/weapons/launchers'
import {
  MP_BASE_CAMOS_LAUNCHER,
  MP_MASTERY_CAMOS,
  ZM_BASE_CAMOS_LAUNCHER_MELEE,
  ZM_MASTERY_CAMOS,
  CP_BASE_CAMOS_LAUNCHER_MELEE,
  CP_MASTERY_CAMOS,
  WZ_BASE_CAMOS,
  WZ_MASTERY_CAMOS,
} from '../../camouflages/definitions'

const specialCamouflages = {
  multiplayer: {
    'Diamondback': { amount: 10, type: 'aerial_scorestreaks' },
    'Raptor': { amount: 10, type: 'direct_hit_kills' },
    'Mainframe': { amount: 10, type: 'scorestreaks_or_enemy_equipment' },
  },
  zombies: {
    'Mutilate': { amount: 75, perk: 'Fire Works', type: 'zombie_perk_kills' },
    'Slither': { amount: 300, type: 'kills_while_pack_a_punched' },
    'Pathfinder': { amount: 10, times: 5, type: 'kills_without_taking_damage_times' },
  },
  campaign: {
    'Cinder': { amount: 25, type: 'direct_hit_kills' },
    'Caiman': { amount: 100, type: 'specific_enemy_kills', enemy: 'Fear enemies' },
    'Network': { amount: 3, times: 10, type: 'kills_in_a_single_shot' },
  },
  warzone: {
    'Warzone Special 1': { type: 'TBD' },
    'Warzone Special 2': { type: 'TBD' },
    'Warzone Special 3': { type: 'TBD' },
  },
}

export default {
  ...launchers.reduce((acc, weapon) => {
    acc[weapon] = {
      multiplayer: {
        ...MP_BASE_CAMOS_LAUNCHER,
        ...specialCamouflages.multiplayer,
        ...MP_MASTERY_CAMOS,
      },
      zombies: {
        ...ZM_BASE_CAMOS_LAUNCHER_MELEE,
        ...specialCamouflages.zombies,
        ...ZM_MASTERY_CAMOS,
      },
      campaign: {
        ...CP_BASE_CAMOS_LAUNCHER_MELEE,
        ...specialCamouflages.campaign,
        ...CP_MASTERY_CAMOS,
      },
      warzone: {
        ...WZ_BASE_CAMOS,
        ...specialCamouflages.warzone,
        ...WZ_MASTERY_CAMOS,
      },
    }
    return acc
  }, {}),
}