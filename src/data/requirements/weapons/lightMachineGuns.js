import lightMachineGuns from '@/data/weapons/lightMachineGuns'
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
    'Diamondback':  { amount: 30,  type: 'kills_objective' },
    'Raptor': { amount: 2, times: 5, type: 'kills_without_releasing_trigger' },
    'Mainframe': { amount: 50, type: 'kills_with_5_attachments' },
  },
  zombies: {
    'Mutilate': { amount: 150, tier: 2, type: 'kills_with_tier_armor' },
    'Slither': { amount: 75, perk: 'Shadow Rift', type: 'zombie_perk_kills' },
    'Pathfinder': { amount: 100, type: 'zombie_kills_after_using_field_upgrade' },
  },
  campaign: {
    'Cinder': { amount: 3, times: 10, type: 'kills_without_releasing_trigger' },
    'Caiman': { amount: 100, attachment: 'Extended Magazine', type: 'kills_with_specific_attachment' },
    'Network': { amount: 100, type: 'specific_enemy_kills', enemy: 'Human enemy' },
  },
  warzone: {
    'Warzone Special 1': { type: 'TBD' },
    'Warzone Special 2': { type: 'TBD' },
    'Warzone Special 3': { type: 'TBD' },
  },
}

export default {
  ...lightMachineGuns.reduce((acc, weapon) => {
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