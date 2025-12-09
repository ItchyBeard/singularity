import handguns from '@/data/weapons/handguns'
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
  "Jäger 45": {
    "multiplayer": {
      "Diamondback": { "amount": 15, "type": "kills_shortly_after_switching_weapons" },
      "Raptor": { "amount": 50, "type": "kills_while_moving" },
      "Mainframe": { "amount": 30, "type": "kills_without_taking_damage" }
    },
    "zombies": {
      "Mutilate": { "amount": 300, "type": "kills_at_rare_rarity_or_higher" },
      "Slither": { "amount": 3, "type": "critical_kills_consecutively", "times": 5 },
      "Pathfinder": { "amount": 300, "type": "kills_with_ammo_mod", "mod": "Napalm Burst" }
    },
    "campaign": {
      "Cinder": { "amount": 25, "type": "kills_shortly_after_switching_weapons" },
      "Caiman": { "amount": 25, "type": "destructions_guild" },
      "Network": { "amount": 100, "type": "specific_enemy_kills", "enemy": 'Human' }
    },
    "warzone": {
      "Shimmer": {"amount": 3, "type": "kills_while_moving"},
      "Tyrant": {"amount": 3, "type": "kills_while_ads"},
      "Trace": {"amount": 3, "type": "kills_with_suppressor"}
    }
  },

  "Velox 5.7": {
    "multiplayer": {
      "Diamondback": { "amount": 50, "type": "kill_shortly_after_movement" },
      "Raptor": { "amount": 30, "type": "kills_shortly_after_sprinting" },
      "Mainframe": { "amount": 20, "type": "kills_while_affected_by_tactical" }
    },
    "zombies": {
      "Mutilate": { "amount": 75, "type": "armored_zombie_kills" },
      "Slither": { "amount": 75, "type": "kills_with_ammo_mod_activations", "mod": "Shadow Rift" },
      "Pathfinder": { "amount": 300, "type": "kills_at_rare_rarity_or_higher" }
    },
    "campaign": {
      "Cinder": { "amount": 100, "type": "kills_with_suppressor" },
      "Caiman": { "amount": 50, "type": "specific_enemy_kills", "enemy": 'Guild Tech' },
      "Network": { "amount": 50, "type": "hipfire_kills" }
    },
    "warzone": {
      "Shimmer": {"amount": 3, "type": "kills_while_moving"},
      "Tyrant": {"amount": 3, "type": "kills_while_ads"},
      "Trace": {"amount": 3, "type": "kills_with_suppressor"}
    }
  },

  "CODA 9": {
    "multiplayer": {
      "Diamondback": { "amount": 10, "type": "kills_with_suppressor" },
      "Raptor": { "amount": 30, "type": "hipfire_kills" },
      "Mainframe": { "amount": 15, "type": "kills_shortly_after_switching_weapons" }
    },
    "zombies": {
      "Mutilate": { "amount": 75, "type": "kills_with_ammo_mod_activations", "mod": "Shadow Rift" },
      "Slither": { "amount": 300, "type": "hipfire_kills" },
      "Pathfinder": { "amount": 100, "type": "kills_while_affected_by_tactical" }
    },
    "campaign": {
      "Cinder": { "amount": 50, "type": "point_blank_kills" },
      "Caiman": { "amount": 25, "type": "destructions_guild" },
      "Network": { "amount": 25, "type": "kills_shortly_after_switching_weapons" }
    },
    "warzone": {
      "Shimmer": {"amount": 3, "type": "kills_while_moving"},
      "Tyrant": {"amount": 3, "type": "kills_while_ads"},
      "Trace": {"amount": 3, "type": "kills_with_suppressor"}
    }
  }
}

export default {
  ...handguns.reduce((acc, weapon) => {
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