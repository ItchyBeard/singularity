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
      "Mutilate": { "amount": 300, "type": "kills_while_pack_a_punched" },
      "Slither": { "amount": 300, "type": "kills_with_ammo_mod", "mod": "Cryo Freeze" },
      "Pathfinder": { "amount": 100, "type": "kills_while_field_upgrade_is_active" }
    },
    "campaign": {
      "Cinder": { "amount": 100, "type": "kills_with_4x_or_higher_magnification_scope" },
      "Caiman": { "amount": 50, "type": "kills_while_moving_ads" },
      "Network": { "amount": 100, "type": "kills_at_rare_rarity" }
    },
    "warzone": {
      "Shimmer": {"amount": 5, "type": "headshots"},
      "Tyrant": {"amount": 5, "type": "kills_without_taking_damage"},
      "Trace": {"amount": 5, "type": "kills_while_moving"}
    }
  },

  "Warden 308": {
    "multiplayer": {
      "Diamondback": { "amount": 30, "type": "objective_kills" },
      "Raptor": { "amount": 50, "type": "kills_with_5_attachments" },
      "Mainframe": { "amount": 30, "type": "one_shot_kills" }
    },
    "zombies": {
      "Mutilate": { "amount": 75, "type": "kills_with_ammo_mod_activations", "mod": "Fire Works" },
      "Slither": { "amount": 300, "type": "kills_at_rare_rarity_or_higher" },
      "Pathfinder": { "amount": 2, "type": "critical_kills_with_a_single_shot", "times": 15 }
    },
    "campaign": {
      "Cinder": { "amount": 10, "type": "kills_without_reloading", "times": 10 },
      "Caiman": { "amount": 3, "type": "rapid_kills", "times": 10 },
      "Network": { "amount": 100, "type": "kills_with_specific_attachment", "attachment": "Suppressor" }
    },
    "warzone": {
      "Shimmer": {"amount": 5, "type": "kills_with_suppressor"},
      "Tyrant": {"amount": 5, "type": "kills_without_taking_damage"},
      "Trace": {"amount": 5, "type": "kills_while_moving" }
    }
  },

  "M34 Novaline": {
    "multiplayer": {
      "Diamondback": { "amount": 15, "type": "longshot_kills" },
      "Raptor": { "amount": 50, "type": "kills_with_4x_or_higher_magnification_scope" },
      "Mainframe": { "amount": 50, "type": "kills_while_wildcard_is_equipped_and_8_attachments", "wildcard": "Gunfighter" }
    },
    "zombies": {
      "Mutilate": { "amount": 3, "type": "critical_kills_consecutively", "times": 5 },
      "Slither": { "amount": 300, "type": "kills_with_ammo_mod", "mod": "Brain Rot" },
      "Pathfinder": { "amount": 100, "type": "kills_while_affected_by_tactical" }
    },
    "campaign": {
      "Cinder": { "amount": 100, "type": "specific_enemy_kills", "enemy": 'Human' },
      "Caiman": { "amount": 100, "type": "kills_with_8_attachments" },
      "Network": { "amount": 100, "type": "kills_with_4x_or_higher_magnification_scope" }
    },
    "warzone": {
      "Shimmer": {"amount": 5, "type": "headshots"},
      "Tyrant": {"amount": 5, "type": "kills_without_taking_damage"},
      "Trace": {"amount": 5, "type": "kills_while_moving"}
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