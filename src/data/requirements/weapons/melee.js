import melee from '@/data/weapons/melee'
import {
  MP_BASE_CAMOS_MELEE,
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
    'Diamondback': { amount: 15, type: 'kills_shortly_after_switching_weapons' },
    'Raptor': { times: 15, type: 'kill_shortly_after_movement' },
    'Mainframe': { times: 30, type: 'one_kill_without_taking_damage' },
  },
  zombies: {
    'Mutilate': { amount: 300, type: 'kills_while_pack_a_punched' },
    'Slither': { amount: 300, attachment: 'Brain Rot Ammo Mod', type: 'kills_with_specific_attachment' },
    'Pathfinder': { amount: 100, type: 'zombie_kills_after_using_field_upgrade' },
  },
  campaign: {
    'Cinder': { amount: 100, type: 'kills_at_rare_rarity_or_higher' },
    'Caiman': { amount: 50, type: 'kills_shortly_after_sprinting' },
    'Network': { amount: 50, type: 'specific_enemy_kills', enemy: 'Guild Tech enemies' },
  },
  warzone: {
    'Warzone Special 1': { type: 'TBD' },
    'Warzone Special 2': { type: 'TBD' },
    'Warzone Special 3': { type: 'TBD' },
  },
}

export default {
  ...melee.reduce((acc, weapon) => {
    acc[weapon] = {
      multiplayer: {
        ...MP_BASE_CAMOS_MELEE,
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