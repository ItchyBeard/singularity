import subMachineGuns from '@/data/weapons/subMachineGuns'
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
    'Diamondback': { amount: 50, type: 'kills_with_no_attachments' },
    'Raptor': { amount: 30, type: 'kills_shortly_after_sprinting' },
    'Mainframe': { amount: 30, type: 'kills_without_taking_damage' },
  },
  zombies: {
    'Mutilate': { amount: 300, attachment: 'Dead Wire Ammo Mod', type: 'kills_with_specific_attachment' },
    'Slither': { amount: 5, type: 'critical_kills_rapidly', times: 15 },
    'Pathfinder': { amount: 5, type: 'critical_kills_rapidly', times: 15 },
  },
  campaign: {
    'Cinder': { amount: 100, type: 'kills_with_8_attachments' },
    'Caiman': { amount: 100, attachment: 'Extended Magazine', type: 'kills_with_specific_attachment' },
    'Network': { amount: 50, type: 'point_blank_kills' },
  },
  warzone: {
    'Warzone Special 1': { type: 'TBD' },
    'Warzone Special 2': { type: 'TBD' },
    'Warzone Special 3': { type: 'TBD' },
  },
}

export default {
  ...subMachineGuns.reduce((acc, weapon) => {
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