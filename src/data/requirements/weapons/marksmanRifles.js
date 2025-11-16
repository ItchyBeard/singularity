import marksmanRifles from '@/data/weapons/marksmanRifles'
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
    'Diamondback': { amount: 50, type: 'kills_with_4x_or_higher_magnification_scope' },
    'Raptor': { amount: 15, type: 'longshot_kills' },
    'Mainframe': { amount: 30, type: 'kills_without_taking_damage' },
  },
  zombies: {
    'Mutilate': { amount: 300, type: 'kills_while_pack_a_punched' },
    'Slither': { amount: 300, attachment: 'Cryo Freeze Ammo Mod', type: 'kills_with_specific_attachment' },
    'Pathfinder': { amount: 100, type: 'zombie_kills_after_using_field_upgrade' },
  },
  campaign: {
    'Cinder': { amount: 100, type: 'kills_with_4x_or_higher_magnification_scope' },
    'Caiman': { amount: 50, type: 'kills_while_moving_ads' },
    'Network': { amount: 100, type: 'kills_at_rare_rarity_or_higher' },
  },
  warzone: {
    'Warzone Special 1': { type: 'TBD' },
    'Warzone Special 2': { type: 'TBD' },
    'Warzone Special 3': { type: 'TBD' },
  },
}

export default {
  ...marksmanRifles.reduce((acc, weapon) => {
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