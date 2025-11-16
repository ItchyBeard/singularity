import handguns from '@/data/weapons/handguns'
import {
  MP_BASE_CAMOS_DEFAULT,
  MP_MASTERY_CAMOS,
  ZM_BASE_CAMOS_DEFAULT,
  ZM_MASTERY_CAMOS,
  CP_BASE_CAMOS_DEFAULT,
  CP_MASTERY_CAMOS,
  WZ_BASE_CAMOS,
  WZ_MASTERY_CAMOS,
} from '../../camouflages/definitions'

const specialCamouflages = {
  multiplayer: {
    'Diamondback': { amount: 15, type: 'kills_shortly_after_switching_weapons' },
    'Raptor': { amount: 50, type: 'kills_while_moving' },
    'Mainframe': { amount: 30, type: 'one_kill_without_taking_damage' },
  },
  zombies: {
    'Mutilate': { amount: 300, type: 'kills_at_rare_rarity_or_higher' },
    'Slither': { amount: 3, times: 5, type: 'critical_kills_consecutively' },
    'Pathfinder': { amount: 300, attachment: 'Napalm Burst Ammo Mod', type: 'kills_with_specific_attachment' },
  },
  campaign: {
    'Cinder': { amount: 25, type: 'kills_shortly_after_switching_weapons' },
    'Caiman': { amount: 25, type: 'destructions_guild' },
    'Network': { amount: 100, type: 'specific_enemy_kills', enemy: 'Human enemy' },
  },
  warzone: {
    'Warzone Special 1': { type: 'TBD' },
    'Warzone Special 2': { type: 'TBD' },
    'Warzone Special 3': { type: 'TBD' },
  },
}

export default {
  ...handguns.reduce((acc, weapon) => {
    acc[weapon] = {
      multiplayer: {
        ...MP_BASE_CAMOS_DEFAULT,
        ...specialCamouflages.multiplayer,
        ...MP_MASTERY_CAMOS,
      },
      zombies: {
        ...ZM_BASE_CAMOS_DEFAULT,
        ...specialCamouflages.zombies,
        ...ZM_MASTERY_CAMOS,
      },
      campaign: {
        ...CP_BASE_CAMOS_DEFAULT,
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