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
      "Shimmer": { "amount": 5, "type": "headshots" },
      "Tyrant": { "amount": 5, "type": "kills_with_suppressor" },
      "Trace": { "amount": 5, "type": "kills_without_taking_damage" }
    }
  },

  "Flatline MK.II": {
    "multiplayer": {
      "Diamondback": { "amount": 15, "type": "kills_shortly_after_switching_weapon" },
      "Raptor": { "amount": 30, "type": "kills_on_enemies_affected_by_tactical" },
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
      "Shimmer": { "amount": 5, "type": "headshots" },
      "Tyrant": { "amount": 5, "type": "kills_with_suppressor" },
      "Trace": { "amount": 5, "type": "kills_without_taking_damage" }
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