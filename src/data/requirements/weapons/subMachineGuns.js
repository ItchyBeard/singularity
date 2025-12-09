import subMachineGuns from '@/data/weapons/subMachineGuns'
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
  "Ryden 45K": {
    "multiplayer": {
      "Diamondback": { "amount": 50, "type": "kills_with_no_attachments" },
      "Raptor": { "amount": 30, "type": "kills_shortly_after_sprinting" },
      "Mainframe": { "amount": 20, "type": "kills_without_taking_damage" }
    },
    "zombies": {
      "Mutilate": { "amount": 300, "type": "kills_with_ammo_mod", "mod": "Dead Wire" },
      "Slither": { "amount": 5, "type": "critical_kills_rapidly", "times": 15 },
      "Pathfinder": { "amount": 300, "type": "kills_with_ammo_mod", "mod": "Cryo Freeze" }
    },
    "campaign": {
      "Cinder": { "amount": 150, "type": "kills_with_8_attachments" },
      "Caiman": { "amount": 100, "type": "kills_with_specific_attachment", "attachment": "Extended Mag" },
      "Network": { "amount": 50, "type": "point_blank_kills" }
    },
    "warzone": {
      "Shimmer": {"amount": 5, "type": "tbd"},
      "Tyrant": {"amount": 5, "type": "tbd"},
      "Trace": {"amount": 5, "type": "tbd"}
    }
  },

  "RK-9": {
    "multiplayer": {
      "Diamondback": { "amount": 50, "type": "kills_while_moving" },
      "Raptor": { "amount": 30, "type": "kills_on_affected_enemies_with_tacticals" },
      "Mainframe": { "amount": 20, "type": "kills_with_suppressor" }
    },
    "zombies": {
      "Mutilate": { "amount": 300, "type": "kills_with_ammo_mod", "mod": "Napalm Burst" },
      "Slither": { "amount": 75, "type": "armored_zombie_kills" },
      "Pathfinder": { "amount": 3, "type": "critical_kills_consecutively", "times": 5 }
    },
    "campaign": {
      "Cinder": { "amount": 50, "type": "kills_with_specific_attachment_tac", "attachment": "Tactical Laser" },
      "Caiman": { "amount": 25, "type": "kills_shortly_after_switching_weapons" },
      "Network": { "amount": 50, "type": "kills_while_moving_ads" }
    },
    "warzone": {
      "Shimmer": {"amount": 5, "type": "tbd"},
      "Tyrant": {"amount": 5, "type": "tbd"},
      "Trace": {"amount": 5, "type": "tbd"}
    }
  },

  "Razor 9mm": {
    "multiplayer": {
      "Diamondback": { "amount": 530, "type": "hipfire_kills" },
      "Raptor": { "amount": 30, "type": "kills_objective" },
      "Mainframe": { "amount": 50, "type": "kills_while_moving" }
    },
    "zombies": {
      "Mutilate": { "amount": 300, "type": "hipfire_kills" },
      "Slither": { "amount": 150, "type": "kills_with_tier_armor", "tier": 2 },
      "Pathfinder": { "amount": 10, "type": "kills_without_reloading", "times": 15 }
    },
    "campaign": {
      "Cinder": { "amount": 100, "type": "specific_enemy_kills", "enemy": 'Fear' },
      "Caiman": { "amount": 20, "type": "kill_shortly_after_movement" },
      "Network": { "amount": 50, "type": "point_blank_kills" }
    },
    "warzone": {
      "Shimmer": {"amount": 5, "type": "tbd"},
      "Tyrant": {"amount": 5, "type": "tbd"},
      "Trace": {"amount": 5, "type": "tbd"}
    }
  },

  "Dravec 45": {
    "multiplayer": {
      "Diamondback": { "amount": 30, "type": "kills_objective" },
      "Raptor": { "amount": 2, "type": "kills_without_reloading", "times": 10 },
      "Mainframe": { "amount": 15, "type": "kill_shortly_after_movement" }
    },
    "zombies": {
      "Mutilate": { "amount": 300, "type": "kills_with_ammo_mod", "mod": "Brain Rot" },
      "Slither": { "amount": 5, "type": "critical_kills_rapidly", "times": 15 },
      "Pathfinder": { "amount": 100, "type": "kills_while_field_upgrade_is_active" }
    },
    "campaign": {
      "Cinder": { "amount": 50, "type": "kills_shortly_after_sprinting" },
      "Caiman": { "amount": 100, "type": "kills_with_specific_attachment", "attachment": "Extended Mag" },
      "Network": { "amount": 50, "type": "kills_with_specific_attachment_tac", "attachment": "Tactical Laser" }
    },
    "warzone": {
      "Shimmer": {"amount": 5, "type": "tbd"},
      "Tyrant": {"amount": 5, "type": "tbd"},
      "Trace": {"amount": 5, "type": "tbd"}
    }
  },

  "Carbon 57": {
    "multiplayer": {
      "Diamondback": { "amount": 50, "type": "hipfire_kills" },
      "Raptor": { "amount": 2, "type": "kills_without_reloading", "times": 10 },
      "Mainframe": { "amount": 30, "type": "kills_while_wildcard_is_equipped_and_8_attachments", "wildcard": "Gunfighter" }
    },
    "zombies": {
      "Mutilate": { "amount": 300, "type": "kills_with_ammo_mod_activations", "mod": "Fire Works" },
      "Slither": { "amount": 10, "type": "kills_without_reloading", "times": 15 },
      "Pathfinder": { "amount": 75, "type": "armored_zombie_kills" }
    },
    "campaign": {
      "Cinder": { "amount": 25, "type": "destructions_guild" },
      "Caiman": { "amount": 50, "type": "hipfire_kills" },
      "Network": { "amount": 3, "times": 10, "type": "rapid_kills" }
    },
    "warzone": {
      "Shimmer": {"amount": 5, "type": "tbd"},
      "Tyrant": {"amount": 5, "type": "tbd"},
      "Trace": {"amount": 5, "type": "tbd"}
    }
  },

  "MPC-25": {
    "multiplayer": {
      "Diamondback": { "amount": 50, "type": "kills_with_suppressor" },
      "Raptor": { "amount": 1, "type": "kill_shortly_after_movement", "times": 15 },
      "Mainframe": { "amount": 50, "type": "kills_while_wildcard_is_equipped_and_8_attachments", "wildcard": "Gunfighter" }
    },
    "zombies": {
      "Mutilate": { "amount": 300, "type": "kills_with_ammo_mod", "mod": "Napalm Burst" },
      "Slither": { "amount": 3, "type": "critical_kills_consecutively", "times": 5 },
      "Pathfinder": { "amount": 300, "type": "point_blank_kills" }
    },
    "campaign": {
      "Cinder": { "amount": 100, "type": "kills_with_specific_attachment", "attachment": "Extended Mag" },
      "Caiman": { "amount": 100, "type": "kills_at_rare_rarity" },
      "Network": { "amount": 50, "type": "specific_enemy_kills", "enemy": 'Guild Tech' }
    },
    "warzone": {
      "Shimmer": {"amount": 5, "type": "tbd"},
      "Tyrant": {"amount": 5, "type": "tbd"},
      "Trace": {"amount": 5, "type": "tbd"}
    }
  },

  "Kogot-7": {
    "multiplayer": {
      "Diamondback": { "amount": 50, "type": "kills_with_suppressor" },
      "Raptor": { "amount": 2, "type": "kills_without_reloading", "times": 10 },
      "Mainframe": { "amount": 30, "type": "hipfire_kills" }
    },
    "zombies": {
      "Mutilate": { "amount": 300, "type": "hipfire_kills" },
      "Slither": { "amount": 100, "type": "kills_while_field_upgrade_is_active" },
      "Pathfinder": { "amount": 300, "type": "kills_with_ammo_mod", "mod": "Dead Wire" }
    },
    "campaign": {
      "Cinder": { "amount": 50, "type": "hipfire_kills" },
      "Caiman": { "amount": 100, "type": "specific_enemy_kills", "enemy": "Human" },
      "Network": { "amount": 25, "type": "kills_shortly_after_moving" }
    },
    "warzone": {
      "Shimmer": { "amount": 5, "type": "eliminations_while_moving" },
      "Tyrant": { "amount": 5, "type": "eliminations_shortly_after_sprinting" },
      "Trace": { "amount": 5, "type": "eliminations_while_sliding" }
    }
  },

  "Sturmwolf 45": {
    "multiplayer": {
      "Diamondback": { "amount": 5, "type": "tbd" },
      "Raptor": { "amount": 5, "type": "tbd" },
      "Mainframe": { "amount": 5, "type": "tbd" }
    },
    "zombies": {
      "Mutilate": { "amount": 5, "type": "tbd" },
      "Slither": { "amount": 5, "type": "tbd" },
      "Pathfinder": { "amount": 5, "type": "tbd" }
    },
    "campaign": {
      "Cinder": { "amount": 5, "type": "tbd" },
      "Caiman": { "amount": 5, "type": "tbd" },
      "Network": { "amount": 5, "type": "tbd" }
    },
    "warzone": {
      "Shimmer": { "amount": 5, "type": "tbd" },
      "Tyrant": { "amount": 5, "type": "tbd" },
      "Trace": { "amount": 5, "type": "tbd" }
    }
  }
}

export default {
  ...subMachineGuns.reduce((acc, weapon) => {
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