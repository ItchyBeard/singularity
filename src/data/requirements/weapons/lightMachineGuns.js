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
      "Mutilate": { "amount": 150, "type": "kills_with_tier_armor", "tier": 2 },
      "Slither": { "amount": 75, "type": "kills_with_ammo_mod_activations", "mod": "Shadow Rift" },
      "Pathfinder": { "amount": 100, "type": "kills_while_field_upgrade_is_active" }
    },
    "campaign": {
      "Cinder": { "amount": 3, "times": 10, "type": "kills_without_releasing_trigger" },
      "Caiman": { "amount": 100, "type": "kills_with_specific_attachment", "attachment": "Extended Mag" },
      "Network": { "amount": 50, "type": "specific_enemy_kills", "enemy": 'Human' }
    },
    "warzone": {
      "Shimmer": {"amount": 5, "type": "tbd"},
      "Tyrant": {"amount": 5, "type": "tbd"},
      "Trace": {"amount": 5, "type": "tbd"}
    }
  },

  "XM325": {
    "multiplayer": {
      "Diamondback": { "amount": 30, "type": "kills_while_affected_by_tactical" },
      "Raptor": { "amount": 2, "type": "kills_without_releasing_trigger", "times": 5 },
      "Mainframe": { "amount": 50, "type": "kills_while_wildcard_is_equipped_and_8_attachments", "wildcard": "Gunfighter" }
    },
    "zombies": {
      "Mutilate": { "amount": 300, "type": "kills_with_ammo_mod", "mod": "Dead Wire" },
      "Slither": { "amount": 300, "type": "hipfire_kills" },
      "Pathfinder": { "amount": 10, "type": "kills_without_reloading", "times": 5 }
    },
    "campaign": {
      "Cinder": { "amount": 25, "type": "destructions_guild" },
      "Caiman": { "amount": 3, "times": 10, "type": "kills_without_releasing_trigger" },
      "Network": { "amount": 100, "type": "kills_with_8_attachments" }
    },
    "warzone": {
      "Shimmer": {"amount": 5, "type": "tbd"},
      "Tyrant": {"amount": 5, "type": "tbd"},
      "Trace": {"amount": 5, "type": "tbd"}
    }
  },

  "Sokol 545": {
    "multiplayer": {
      "Diamondback": {"type": "tbd"},
      "Raptor": {"type": "tbd"},
      "Mainframe": {"type": "tbd"}
    },
    "zombies": {
      "Mutilate": {"type": "tbd"},
      "Slither": {"type": "tbd"},
      "Pathfinder": {"type": "tbd"}
    },
    "campaign": {
      "Cinder": {"type": "tbd"},
      "Caiman": {"type": "tbd"},
      "Network": {"type": "tbd"}
    },
    "warzone": {
      "Shimmer": {"type": "tbd"},
      "Tyrant": {"type": "tbd"},
      "Trace": {"type": "tbd"}
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