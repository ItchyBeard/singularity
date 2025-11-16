import sniperRifles from '@/data/weapons/sniperRifles'
import {
  MP_BASE_CAMOS_SNIPER,
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
    'Diamondback': { amount: 50, type: 'kills_with_4x_or_higher_magnification_scope' },
    'Raptor': { amount: 30, type: 'one_shot_kills' },
    'Mainframe': { amount: 2, type: 'kills_without_reloading', times: 10 },
  },
  zombies: {
    'Mutilate': { amount: 3, times: 5, type: 'critical_kills_consecutively' },
    'Slither': { amount: 300, attachment: 'Dead Wire Ammo Mod', type: 'kills_with_specific_attachment' },
    'Pathfinder': { amount: 300, type: 'kills_while_pack_a_punched' },
  },
  campaign: {
    'Cinder': { amount: 100, type: 'specific_enemy_kills', enemy: 'Fear enemies' },
    'Caiman': { amount: 100, type: 'kills_with_suppressor' },
    'Network': { amount: 100, type: 'kills_with_8_attachments' },
  },
  warzone: {
    'Warzone Special 1': { type: 'TBD' },
    'Warzone Special 2': { type: 'TBD' },
    'Warzone Special 3': { type: 'TBD' },
  },
}

export default {
  ...sniperRifles.reduce((acc, weapon) => {
    acc[weapon] = {
      multiplayer: {
        ...MP_BASE_CAMOS_SNIPER,
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