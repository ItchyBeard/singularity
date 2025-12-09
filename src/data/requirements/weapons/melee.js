import melee from '@/data/weapons/melee'
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
  "Knife": {
    "multiplayer": {
      "Diamondback": { "amount": 15, "type": "kills_shortly_after_switching_weapons" },
      "Raptor": { "amount": 15, "type": "kill_shortly_after_movement" },
      "Mainframe": { "amount": 30, "type": "kills_without_taking_damage" }
    },
    "zombies": {
      "Mutilate": { "amount": 300, "type": "kills_while_pack_a_punched" },
      "Slither": { "amount": 300, "type": "kills_with_ammo_mod", "mod": "Brain Rot" },
      "Pathfinder": { "amount": 100, "type": "kills_while_field_upgrade_is_active" }
    },
    "campaign": {
      "Cinder": { "amount": 100, "type": "kills_at_rare_rarity" },
      "Caiman": { "amount": 50, "type": "kills_shortly_after_sprinting" },
      "Network": { "amount": 50, "type": "specific_enemy_kills", "enemy": 'Guild Tech' }
    },
    "warzone": {
      "Shimmer": {"amount": 2, "type": "kills_while_moving"},
      "Tyrant": {"amount": 2, "type": "kills_without_taking_damage"},
      "Trace": {"amount": 2, "type": "kills_shortly_after_sprinting"}
    }
  },

  "Flatline MK.II": {
    "multiplayer": {
      "Diamondback": { "amount": 15, "type": "kills_shortly_after_switching_weapons" },
      "Raptor": { "amount": 30, "type": "kills_on_affected_enemies_with_tacticals" },
      "Mainframe": { "amount": 50, "type": "kills_while_moving" }
    },
    "zombies": {
      "Mutilate": { "amount": 300, "type": "kills_at_rare_rarity_or_higher" },
      "Slither": { "amount": 300, "type": "kills_with_ammo_mod", "mod": "Cryo Freeze" },
      "Pathfinder": { "amount": 100, "type": "kills_while_affected_by_tactical" }
    },
    "campaign": {
      "Cinder": { "amount": 100, "type": "specific_enemy_kills", "enemy": 'Human' },
      "Caiman": { "amount": 25, "type": "kills_shortly_after_switching_weapons" },
      "Network": { "amount": 25, "type": "kill_shortly_after_movement" }
    },
    "warzone": {
      "Shimmer": {"amount": 2, "type": "kills_while_moving"},
      "Tyrant": {"amount": 2, "type": "kills_without_taking_damage"},
      "Trace": {"amount": 2, "type": "kills_shortly_after_sprinting"}
    }
  },

  "Ballistic Knife": {
    "multiplayer": {
      "Diamondback": {"amount": 5, "type": "kills"},
      "Raptor": {"amount": 30, "type": "kills_without_taking_damage"},
      "Mainframe": {"amount": 30, "type": "kill_while_affected_by_tactical_or_non_lethal_scorestreak"}
    },
    "zombies": {
      "Mutilate": {"amount": 10, "type": "kills_without_taking_damage_times", "times": 3},
      "Slither": {"amount": 300, "type": "kills_while_pack_a_punched"},
      "Pathfinder": {"amount": 100, "type": "kills_while_field_upgrade_is_active"}
    },
    "campaign": {
      "Cinder": {"amount": 50, "type": "specific_enemy_kills", "enemy": "Guild Tech"},
      "Caiman": {"amount": 25, "type": "kills_shortly_after_switching_weapons"},
      "Network": {"amount": 100, "type": "kills_at_rare_or_higher"}
    },
    "warzone": {
      "Shimmer": {"amount": 2, "type": "kills_while_moving"},
      "Tyrant": {"amount": 2, "type": "kills_without_taking_damage"},
      "Trace": {"amount": 2, "type": "kills_shortly_after_sprinting"}
    }
  }
}

export default {
  ...melee.reduce((acc, weapon) => {
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