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
  "M10 Breacher": {
    "multiplayer": {
      "Diamondback": { "amount": 30, "type": "kills_without_taking_damage" },
      "Raptor": { "amount": 30, "type": "kills_with_no_attachments" },
      "Mainframe": { "amount": 30, "type": "kills_shortly_after_sprinting" }
    },
    "zombies": {
      "Mutilate": { "amount": 5, "type": "critical_kills_rapidly", "times": 15 },
      "Slither": { "amount": 300, "type": "kills_with_ammo_mod", "mod": "Brain Rot" },
      "Pathfinder": { "amount": 3, "type": "critical_kills_consecutively", "times": 5 }
    },
    "campaign": {
      "Cinder": { "amount": 25, "type": "destructions_guild" },
      "Caiman": { "amount": 20, "type": "kill_shortly_after_movement" },
      "Network": { "amount": 50, "type": "hipfire_kills" }
    },
    "warzone": {
      "Shimmer": {"amount": 5, "type": "kills_while_moving"},
      "Tyrant": {"amount": 5, "type": "kills_while_ads"},
      "Trace": {"amount": 5, "type": "kills_while_sliding"}
    }
  },

  "Echo 12": {
    "multiplayer": {
      "Diamondback": { "amount": 30, "type": "kills_objective" },
      "Raptor": { "amount": 10, "type": "kills_shortly_after_sprinting" },
      "Mainframe": { "amount": 50, "type": "kills_with_no_attachments" }
    },
    "zombies": {
      "Mutilate": { "amount": 300, "type": "point_blank_kills" },
      "Slither": { "amount": 300, "type": "kills_with_ammo_mod", "mod": "Cryo Freeze" },
      "Pathfinder": { "amount": 10, "type": "kills_without_taking_damage", "times": 5 }
    },
    "campaign": {
      "Cinder": { "amount": 50, "type": "hipfire_kills" },
      "Caiman": { "amount": 50, "type": "kills_with_specific_attachment_tac", "attachment": "Tactical Laser" },
      "Network": { "amount": 50, "type": "specific_enemy_kills", "enemy": 'Human' }
    },
    "warzone": {
      "Shimmer": {"amount": 5, "type": "kills_while_moving"},
      "Tyrant": {"amount": 5, "type": "kills_while_ads"},
      "Trace": {"amount": 5, "type": "kills_while_sliding"}
    }
  },

  "Akita": {
    "multiplayer": {
      "Diamondback": { "amount": 50, "type": "kills_while_moving" },
      "Raptor": { "amount": 30, "type": "hipfire_kills" },
      "Mainframe": { "amount": 20, "type": "kill_shortly_after_movement" }
    },
    "zombies": {
      "Mutilate": { "amount": 10, "type": "kills_without_taking_damage", "times": 5 },
      "Slither": { "amount": 300, "type": "kills_with_ammo_mod", "mod": "Napalm Burst" },
      "Pathfinder": { "amount": 300, "type": "point_blank_kills" }
    },
    "campaign": {
      "Cinder": { "amount": 100, "type": "kills_at_rare_rarity" },
      "Caiman": { "amount": 50, "type": "kills_shortly_after_sprinting" },
      "Network": { "amount": 50, "type": "hipfire_kills" }
    },
    "warzone": {
      "Shimmer": {"amount": 5, "type": "kills_while_moving"},
      "Tyrant": {"amount": 5, "type": "kills_while_sliding"},
      "Trace": {"amount": 5, "type": "hipfire_kills"}
    }
  }
}

export default {
  ...shotguns.reduce((acc, weapon) => {
      acc[weapon] = {
        multiplayer: {
          ...MP_BASE_CAMOS_SHOTGUN,
          ...specialCamouflages[weapon].multiplayer,
          ...MP_MASTERY_CAMOS,
        },
        zombies: {
          ...ZM_BASE_CAMOS_SHOTGUN,
          ...specialCamouflages[weapon].zombies,
          ...ZM_MASTERY_CAMOS,
        },
        campaign: {
          ...CP_BASE_CAMOS_SHOTGUN,
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