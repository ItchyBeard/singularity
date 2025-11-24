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
  "M8A1": {
    "multiplayer": {
      "Diamondback": { "amount": 50, "type": "kills_with_4x_or_higher_magnification_scope" },
      "Raptor": { "amount": 15, "type": "longshot_kills" },
      "Mainframe": { "amount": 30, "type": "kills_without_taking_damage" }
    },
    "zombies": {
      "Mutilate": { "amount": 5, "type": "critical_kills_rapidly", "times": 15 },
      "Slither": { "amount": 10, "type": "kills_without_reloading", "times": 15 },
      "Pathfinder": { "amount": 300, "type": "kills_with_cryo_freeze" }
    },
    "campaign": {
      "Cinder": { "amount": 100, "type": "kills_with_4x_or_higher_magnification_scope" },
      "Caiman": { "amount": 50, "type": "kills_while_moving_ads" },
      "Network": { "amount": 100, "type": "kills_at_rare_rarity" }
    },
    "warzone": {
      "Shimmer": { "amount": 5, "type": "headshots" },
      "Tyrant": { "amount": 5, "type": "kills_with_suppressor" },
      "Trace": { "amount": 5, "type": "kills_without_taking_damage" }
    }
  },

  "Warden 308": {
    "multiplayer": {
      "Diamondback": { "amount": 30, "type": "objective_kills" },
      "Raptor": { "amount": 50, "type": "kills_with_5_attachments" },
      "Mainframe": { "amount": 30, "type": "one_shot_kills" }
    },
    "zombies": {
      "Mutilate": { "amount": 5, "type": "critical_kills_rapidly", "times": 15 },
      "Slither": { "amount": 10, "type": "kills_without_reloading", "times": 15 },
      "Pathfinder": { "amount": 300, "type": "kills_with_cryo_freeze" }
    },
    "campaign": {
      "Cinder": { "amount": 10, "type": "kills_without_reloading", "times": 10 },
      "Caiman": { "amount": 3, "type": "rapid_kills", "times": 10 },
      "Network": { "amount": 100, "type": "kills_with_specific_attachment", "attachment": "Suppressor" }
    },
    "warzone": {
      "Shimmer": { "amount": 5, "type": "headshots" },
      "Tyrant": { "amount": 5, "type": "kills_with_suppressor" },
      "Trace": { "amount": 5, "type": "kills_without_taking_damage" }
    }
  },

  "M34 Novaline": {
    "multiplayer": {
      "Diamondback": { "amount": 50, "type": "kills_with_5_attachments" },
      "Raptor": { "amount": 30, "type": "kills_shortly_after_sprinting" },
      "Mainframe": { "amount": 20, "type": "kills_with_underbarrel" }
    },
    "zombies": {
      "Mutilate": { "amount": 5, "type": "critical_kills_rapidly", "times": 15 },
      "Slither": { "amount": 10, "type": "kills_without_reloading", "times": 15 },
      "Pathfinder": { "amount": 300, "type": "kills_with_cryo_freeze" }
    },
    "campaign": {
      "Cinder": { "amount": 100, "type": "specific_enemy_kills", "enemy": 'Human' },
      "Caiman": { "amount": 100, "type": "kills_with_8_attachments" },
      "Network": { "amount": 100, "type": "kills_with_4x_or_higher_magnification_scope" }
    },
    "warzone": {
      "Shimmer": { "amount": 5, "type": "headshots" },
      "Tyrant": { "amount": 5, "type": "kills_with_suppressor" },
      "Trace": { "amount": 5, "type": "kills_without_taking_damage" }
    }
  }
}

export default {
  ...marksmanRifles.reduce((acc, weapon) => {
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