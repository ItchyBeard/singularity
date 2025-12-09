import launchers from '@/data/weapons/launchers'
import {
  MP_BASE_CAMOS_LAUNCHER,
  MP_MASTERY_CAMOS,
  ZM_BASE_CAMOS_LAUNCHER_MELEE,
  ZM_MASTERY_CAMOS,
  CP_BASE_CAMOS_LAUNCHER_MELEE,
  CP_MASTERY_CAMOS,
  WZ_BASE_CAMOS,
  WZ_MASTERY_CAMOS,
} from '../../camouflages/definitions'

const specialCamouflages = {
    "AAROW 109": {
    "multiplayer": {
      "Diamondback": { "amount": 10, "type": "aerial_scorestreaks" },
      "Raptor": { "amount": 10, "type": "direct_hit_kills" },
      "Mainframe": { "amount": 10, "type": "scorestreaks_or_enemy_equipment" }
    },
    "zombies": {
      "Mutilate": { "amount": 75, "type": "kills_with_ammo_mod_activations", "mod": "Fire Works" },
      "Slither": { "amount": 300, "type": "kills_while_pack_a_punched" },
      "Pathfinder": { "amount": 10, "type": "kills_without_taking_damage", "times": 5 }
    },
    "campaign": {
      "Cinder": { "amount": 25, "type": "direct_hit_kills" },
      "Caiman": { "amount": 100, "type": "specific_enemy_kills", "enemy": 'Fear' },
      "Network": { "amount": 3, "type": "kills_in_a_single_shot", "times": 10 }
    },
    "warzone": {
      "Shimmer": {"amount": 2, "type": "kills_without_taking_damage"},
      "Tyrant": {"amount": 5, "type": "kills_or_vehicle_destructions"},
      "Trace": {"amount": 2, "type": "launcher_kills_while_moving"}
    }
  },

  "A.R.C. M1": {
    "multiplayer": {
      "Diamondback": { "amount": 10, "type": "aerial_scorestreaks" },
      "Raptor": { "amount": 10, "type": "kill_without_taking_damage" },
      "Mainframe": { "amount": 10, "type": "scorestreaks_or_enemy_equipment" }
    },
    "zombies": {
      "Mutilate": { "amount": 150, "type": "kills_with_tier_armor", "tier": 2 },
      "Slither": { "amount": 75, "type": "armored_zombie_kills" },
      "Pathfinder": { "amount": 75, "type": "kills_with_ammo_mod_activations", "mod": "Fire Works" }
    },
    "campaign": {
      "Cinder": { "amount": 25, "type": "kills_shortly_after_switching_weapons" },
      "Caiman": { "amount": 50, "type": "kills_while_moving_ads" },
      "Network": { "amount": 50, "type": "specific_enemy_kills", "enemy": 'Guild Tech' }
    },
    "warzone": {
      "Shimmer": {"amount": 2, "type": "launcher_kills_without_taking_damage"},
      "Tyrant": {"amount": 5, "type": "kills_or_vehicle_destructions"},
      "Trace": {"amount": 2, "type": "launcher_kills_while_moving"}
    }
  },
}

export default {
  ...launchers.reduce((acc, weapon) => {
    acc[weapon] = {
      multiplayer: {
        ...MP_BASE_CAMOS_LAUNCHER,
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