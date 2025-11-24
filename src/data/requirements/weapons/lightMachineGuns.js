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
  "MK.78": {
    "multiplayer": {
      "Diamondback": { "amount": 30, "type": "kills_objective" },
      "Raptor": { "amount": 2, "type": "kills_without_releasing_trigger", "times": 5 },
      "Mainframe": { "amount": 50, "type": "kills_with_5_attachments" }
    },
    "zombies": {
      "Mutilate": { "amount": 5, "type": "critical_kills_rapidly", "times": 15 },
      "Slither": { "amount": 10, "type": "kills_without_reloading", "times": 15 },
      "Pathfinder": { "amount": 300, "type": "kills_with_cryo_freeze" }
    },
    "campaign": {
      "Cinder": { "amount": 3, "times": 10, "type": "kills_without_releasing_trigger" },
      "Caiman": { "amount": 100, "type": "kills_with_specific_attachment", "attachment": "Extended Mag" },
      "Network": { "amount": 50, "type": "specific_enemy_kills", "enemy": 'Human' }
    },
    "warzone": {
      "Shimmer": { "amount": 5, "type": "headshots" },
      "Tyrant": { "amount": 5, "type": "kills_with_suppressor" },
      "Trace": { "amount": 5, "type": "kills_without_taking_damage" }
    }
  },

  "XM325": {
    "multiplayer": {
      "Diamondback": { "amount": 30, "type": "kills_while_affected_by_tactical" },
      "Raptor": { "amount": 2, "type": "kills_without_releasing_trigger", "times": 5 },
      "Mainframe": { "amount": 50, "type": "kills_while_wildcard_is_equipped_and_8_attachments", "wildcard": "Gunfighter" }
    },
    "zombies": {
      "Mutilate": { "amount": 5, "type": "critical_kills_rapidly", "times": 15 },
      "Slither": { "amount": 10, "type": "kills_without_reloading", "times": 15 },
      "Pathfinder": { "amount": 300, "type": "kills_with_cryo_freeze" }
    },
    "campaign": {
      "Cinder": { "amount": 25, "type": "destructions_guild" },
      "Caiman": { "amount": 3, "times": 10, "type": "kills_without_releasing_trigger" },
      "Network": { "amount": 100, "type": "kills_with_8_attachments" }
    },
    "warzone": {
      "Shimmer": { "amount": 5, "type": "headshots" },
      "Tyrant": { "amount": 5, "type": "kills_with_suppressor" },
      "Trace": { "amount": 5, "type": "kills_without_taking_damage" }
    }
  }
}


export default {
  ...lightMachineGuns.reduce((acc, weapon) => {
    acc[weapon] = {
      multiplayer: {
        ...MP_BASE_CAMOS_DEFAULT,
        ...specialCamouflages[weapon].multiplayer,
        ...MP_MASTERY_CAMOS,
      },
      zombies: {
        ...ZM_BASE_CAMOS_DEFAULT,
        ...specialCamouflages[weapon].zombies,
        ...ZM_MASTERY_CAMOS,
      },
      campaign: {
        ...CP_BASE_CAMOS_DEFAULT,
        ...specialCamouflages[weapon].campaign,
        ...CP_MASTERY_CAMOS,
      },
      warzone: {
        ...WZ_BASE_CAMOS,
        ...specialCamouflages[weapon].warzone,
        ...WZ_MASTERY_CAMOS,
      }
    }
    return acc
  }, {}),
}