import shotguns from '@/data/weapons/shotguns'
import {
  MP_BASE_CAMOS_SHOTGUN,
  MP_MASTERY_CAMOS,
  ZM_BASE_CAMOS_SHOTGUN,
  ZM_MASTERY_CAMOS,
  CP_BASE_CAMOS_SHOTGUN,
  CP_MASTERY_CAMOS,
  WZ_BASE_CAMOS,
  WZ_MASTERY_CAMOS,
} from '../../camouflages/definitions'

const specialCamouflages = {
  multiplayer: {
    'Special Camo 1': { type: 'TBD' },
    'Special Camo 2': { type: 'TBD' },
    'Special Camo 3': { type: 'TBD' },
  },
  zombies: {
    'Zombie Special 1': { type: 'TBD' },
    'Zombie Special 2': { type: 'TBD' },
  },
  campaign: {
    'Campaign Special 1': { type: 'TBD' },
    'Campaign Special 2': { type: 'TBD' },
  },
  warzone: {
    'Warzone Special 1': { type: 'TBD' },
    'Warzone Special 2': { type: 'TBD' },
  },
}

export default {
  ...shotguns.reduce((acc, weapon) => {
    acc[weapon] = {
      multiplayer: {
        ...MP_BASE_CAMOS_SHOTGUN,
        ...specialCamouflages.multiplayer,
        ...MP_MASTERY_CAMOS,
      },
      zombies: {
        ...ZM_BASE_CAMOS_SHOTGUN,
        ...specialCamouflages.zombies,
        ...ZM_MASTERY_CAMOS,
      },
      campaign: {
        ...CP_BASE_CAMOS_SHOTGUN,
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