import sniperRifles from '@/data/weapons/sniperRifles'
import {
  MP_BASE_CAMOS_SNIPER,
  MP_MASTERY_CAMOS,
  ZM_BASE_CAMOS_DEFAULT,
  ZM_MASTERY_CAMOS,
  CP_BASE_CAMOS_DEFAULT,
  CP_MASTERY_CAMOS,
  WZ_BASE_CAMOS,
  WZ_MASTERY_CAMOS,
} from '../../camouflages/definitions'

const specialCamouflages = {
  "VS Recon": {
    "multiplayer": {
      "Diamondback": { "amount": 50, "type": "kills_with_4x_or_higher_magnification_scope" },
      "Raptor": { "amount": 30, "type": "one_shot_kills" },
      "Mainframe": { "amount": 2, "type": "kills_without_reloading", "times": 10 }
    },
    "zombies": {
      "Mutilate": { "amount": 3, "type": "critical_kills_consecutively", "times": 5 },
      "Slither": { "amount": 300, "type": "kills_with_ammo_mod", "mod": "Dead Wire" },
      "Pathfinder": { "amount": 300, "type": "kills_while_pack_a_punched" }
    },
    "campaign": {
      "Cinder": { "amount": 100, "type": "specific_enemy_kills", "enemy": 'Fear' },
      "Caiman": { "amount": 100, "type": "kills_with_suppressor" },
      "Network": { "amount": 100, "type": "kills_with_8_attachments" }
    },
    "warzone": {
      "Shimmer": { "amount": 5, "type": "headshots" },
      "Tyrant": { "amount": 5, "type": "kills_with_suppressor" },
      "Trace": { "amount": 5, "type": "kills_without_taking_damage" }
    }
  },

  "Shadow SK": {
    "multiplayer": {
      "Diamondback": { "amount": 50, "type": "kills_with_suppressor" },
      "Raptor": { "amount": 15, "type": "long_shot_kills" },
      "Mainframe": { "amount": 2, "type": "kills_without_reloading", "times": 10 }
    },
    "zombies": {
      "Mutilate": { "amount": 5, "type": "critical_kills_rapidly", "times": 15 },
      "Slither": { "amount": 75, "type": "kills_with_ammo_mod_activations", "mod": "Fire Works" },
      "Pathfinder": { "amount": 300, "type": "kills_at_rare_rarity_or_higher" }
    },
    "campaign": {
      "Cinder": { "amount": 50, "type": "kills_while_moving_ads" },
      "Caiman": { "amount": 10, "type": "kills_without_reloading", "times": 10 },
      "Network": { "amount": 25, "type": "destructions_guild" }
    },
    "warzone": {
      "Shimmer": { "amount": 5, "type": "headshots" },
      "Tyrant": { "amount": 5, "type": "kills_with_suppressor" },
      "Trace": { "amount": 5, "type": "kills_without_taking_damage" }
    }
  },

  "XR-3 Ion": {
    "multiplayer": {
      "Diamondback": { "amount": 15, "type": "longshot_kills" },
      "Raptor": { "amount": 50, "type": "kills_with_no_attachments" },
      "Mainframe": { "amount": 2, "type": "kills_without_reloading", "times": "10" }
    },
    "zombies": {
      "Mutilate": { "amount": 2, "type": "critical_kills_with_a_single_shot", "times": 15 },
      "Slither": { "amount": 75, "type": "armored_zombie_kills" },
      "Pathfinder": { "amount": 10, "type": "kills_without_taking_damage", "times": 5 }
    },
    "campaign": {
      "Cinder": { "amount": 100, "type": "kills_with_4x_or_higher_magnification_scope" },
      "Caiman": { "amount": 100, "type": "kills_with_suppressor" },
      "Network": { "amount": 100, "type": "specific_enemy_kills", "enemy": 'Fear' }
    },
    "warzone": {
      "Shimmer": { "amount": 5, "type": "headshots" },
      "Tyrant": { "amount": 5, "type": "kills_with_suppressor" },
      "Trace": { "amount": 5, "type": "kills_without_taking_damage" }
    }
  }
}

export default {
  ...sniperRifles.reduce((acc, weapon) => {
   acc[weapon] = {
      multiplayer: {
        ...MP_BASE_CAMOS_SNIPER,
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