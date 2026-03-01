import specials from '@/data/weapons/specials'
import {
  MP_BASE_CAMOS_MELEE,
  MP_MASTERY_CAMOS,
  ZM_BASE_CAMOS_LAUNCHER_MELEE,
  ZM_MASTERY_CAMOS,
  CP_BASE_CAMOS_LAUNCHER_MELEE,
  CP_MASTERY_CAMOS,
  WZ_BASE_CAMOS,
  WZ_MASTERY_CAMOS,
} from '../../camouflages/definitions'

const specialCamouflages = {
  "NX Ravager": {
    "multiplayer": {
      "Diamondback": {"amount": 15, "type": "kills_objective"},
      "Raptor": {"amount": 25, "type": "kills_without_taking_damage"},
      "Mainframe": {"amount": 25, "type": "kills_while_moving"}
    },
    "zombies": {
      "Mutilate": { "amount": 300, "type": "kills_while_pack_a_punched" },
      "Slither": { "amount": 300, "type": "kills_with_ammo_mod", "mod": "Cryo Freeze"},
      "Pathfinder": { "amount": 150, "type": "kills_with_tier_armor", "tier": 2 }
    },
    "campaign": {
      "Cinder": { "amount": 100, "type": "specific_enemy_kills", "enemy": 'Human' },
      "Caiman": { "amount": 3, "type": "rapid_kills", "times": 10 },
      "Network": { "amount": 100, "type": "kills_at_rare_rarity" }
    },
    "warzone": {
      "Shimmer": {"amount": 5, "type": "kills_without_taking_damage"},
      "Tyrant": {"amount": 5, "type": "kills_while_moving"},
      "Trace": {"amount": 5, "type": "kills_shortly_after_sprinting"}
    },

     "GDL Havoc": {
    "multiplayer": {
      "Diamondback": {"amount": 15, "type": "kills_objective"},
      "Raptor": {"amount": 25, "type": "kills_without_taking_damage"},
      "Mainframe": {"amount": 25, "type": "kills_while_moving"}
    },
    "zombies": {
      "Mutilate": { "amount": 300, "type": "kills_while_pack_a_punched" },
      "Slither": { "amount": 300, "type": "kills_with_ammo_mod", "mod": "Cryo Freeze"},
      "Pathfinder": { "amount": 150, "type": "kills_with_tier_armor", "tier": 2 }
    },
    "campaign": {
      "Cinder": { "amount": 100, "type": "specific_enemy_kills", "enemy": 'Human' },
      "Caiman": { "amount": 3, "type": "rapid_kills", "times": 10 },
      "Network": { "amount": 100, "type": "kills_at_rare_rarity" }
    },
    "warzone": {
      "Shimmer": {"amount": 5, "type": "kills_without_taking_damage"},
      "Tyrant": {"amount": 5, "type": "kills_while_moving"},
      "Trace": {"amount": 5, "type": "vehicle_destructions"}
    }
  }
}

export default {
  ...specials.reduce((acc, weapon) => {
    acc[weapon] = {
      multiplayer: {
        ...MP_BASE_CAMOS_MELEE,
        ...specialCamouflages[weapon].multiplayer,
        ...MP_MASTERY_CAMOS,
      },
      zombies: {
        ...ZM_BASE_CAMOS_LAUNCHER_MELEE,
        ...specialCamouflages[weapon].zombies,
        ...ZM_MASTERY_CAMOS,
      },
      campaign: {
        ...CP_BASE_CAMOS_LAUNCHER_MELEE,
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
