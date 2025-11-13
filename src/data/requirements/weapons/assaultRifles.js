import assaultRifles from '@/data/weapons/assaultRifles'
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

// Using the MXR-17 challenges as a template for all ARs
const specialCamouflages = {
  multiplayer: {
    'Diamondback': { amount: 50, type: 'kills_with_5_attachments' },
    'Raptor': { amount: 30, type: 'kills_shortly_after_sprinting' },
    'Mainframe': { amount: 20, type: 'kills_with_underbarrel' },
  },
  zombies: {
    'Mutilate': { amount: 5, type: 'critical_kills_rapidly', times: 15 },
    'Slither': { amount: 10, type: 'kills_without_reloading', times: 15 },
    'Pathfinder': { amount: 300, type: 'kills_with_cryo_freeze' },
  },
  campaign: {
    'Cinder': { amount: 150, type: 'kills_with_8_attachments' },
    'Caiman': { amount: 150, type: 'kills_at_rare_rarity' },
    'Network': { amount: 3, type: 'rapid_kills', times: 10 },
  },
  warzone: {
    'Shimmer': { amount: 5, type: 'headshots' },
    'Tyrant': { amount: 5, type: 'kills_with_suppressor' },
    'Trace': { amount: 5, type: 'kills_without_taking_damage' },
  },
}

export default {
  ...assaultRifles.reduce((acc, weapon) => {
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