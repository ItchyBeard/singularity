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
    'Diamondback': { times: 30, type: 'one_kill_without_taking_damage' },
    'Raptor': { amount: 50, type: 'kills_with_no_attachments' },
    'Mainframe': { amount: 30, type: 'kills_shortly_after_sprinting' },
  },
  zombies: {
    'Mutilate': { amount: 5, times: 15, type: 'critical_kills_rapidly' },
    'Slither': { amount: 300, attachment: 'Brain Rot Ammo Mod', type: 'kills_with_specific_attachment' },
    'Pathfinder': { amount: 3, times: 5, type: 'critical_kills_consecutively' },
  },
  campaign: {
    'Cinder': { amount: 25, type: 'destructions_guild' },
    'Caiman': { times: 25, type: 'kill_shortly_after_movement' },
    'Network': { amount: 50, type: 'hipfire_kills' },
  },
  warzone: {
    'Warzone Special 1': { type: 'TBD' },
    'Warzone Special 2': { type: 'TBD' },
    'Warzone Special 3': { type: 'TBD' },
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