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
      "Mutilate": { "amount": 5, "type": "critical_kills_rapidly", "times": 15 },
      "Slither": { "amount": 10, "type": "kills_without_reloading", "times": 15 },
      "Pathfinder": { "amount": 300, "type": "kills_with_cryo_freeze" }
    },
    "campaign": {
      "Cinder": { "amount": 150, "type": "kills_with_8_attachments" },
      "Caiman": { "amount": 100, "type": "kills_with_specific_attachment", "attachment": "Extended Mag" },
      "Network": { "amount": 50, "type": "point_blank_kills" }
    },
    "warzone": {
      "Shimmer": { "amount": 5, "type": "headshots" },
      "Tyrant": { "amount": 5, "type": "kills_with_suppressor" },
      "Trace": { "amount": 5, "type": "kills_without_taking_damage" }
    }
  },

  "RK-9": {
    "multiplayer": {
      "Diamondback": { "amount": 50, "type": "kills_while_moving" },
      "Raptor": { "amount": 30, "type": "kills_on_affected_enemies_with_tacticals" },
      "Mainframe": { "amount": 20, "type": "kills_with_suppressor" }
    },
    "zombies": {
      "Mutilate": { "amount": 5, "type": "critical_kills_rapidly", "times": 15 },
      "Slither": { "amount": 10, "type": "kills_without_reloading", "times": 15 },
      "Pathfinder": { "amount": 300, "type": "kills_with_cryo_freeze" }
    },
    "campaign": {
      "Cinder": { "amount": 50, "type": "kills_with_specific_attachment_tac", "attachment": "Tactical Laser" },
      "Caiman": { "amount": 25, "type": "kills_shortly_after_switching_weapons" },
      "Network": { "amount": 50, "type": "kills_while_moving_ads" }
    },
    "warzone": {
      "Shimmer": { "amount": 5, "type": "headshots" },
      "Tyrant": { "amount": 5, "type": "kills_with_suppressor" },
      "Trace": { "amount": 5, "type": "kills_without_taking_damage" }
    }
  },

  "Razor 9mm": {
    "multiplayer": {
      "Diamondback": { "amount": 530, "type": "hipfire_kills" },
      "Raptor": { "amount": 30, "type": "kills_objective" },
      "Mainframe": { "amount": 50, "type": "kills_while_moving" }
    },
    "zombies": {
      "Mutilate": { "amount": 5, "type": "critical_kills_rapidly", "times": 15 },
      "Slither": { "amount": 10, "type": "kills_without_reloading", "times": 15 },
      "Pathfinder": { "amount": 300, "type": "kills_with_cryo_freeze" }
    },
    "campaign": {
      "Cinder": { "amount": 100, "type": "specific_enemy_kills", "enemy": 'Fear' },
      "Caiman": { "amount": 20, "type": "kill_shortly_after_movement" },
      "Network": { "amount": 50, "type": "point_blank_kills" }
    },
    "warzone": {
      "Shimmer": { "amount": 5, "type": "headshots" },
      "Tyrant": { "amount": 5, "type": "kills_with_suppressor" },
      "Trace": { "amount": 5, "type": "kills_without_taking_damage" }
    }
  },

  "Dravec 45": {
    "multiplayer": {
      "Diamondback": { "amount": 30, "type": "kills_objective" },
      "Raptor": { "amount": 2, "type": "kills_without_reloading", "times": 10 },
      "Mainframe": { "amount": 15, "type": "kill_shortly_after_movement" }
    },
    "zombies": {
      "Mutilate": { "amount": 5, "type": "critical_kills_rapidly", "times": 15 },
      "Slither": { "amount": 10, "type": "kills_without_reloading", "times": 15 },
      "Pathfinder": { "amount": 300, "type": "kills_with_cryo_freeze" }
    },
    "campaign": {
      "Cinder": { "amount": 50, "type": "kills_shortly_after_sprinting" },
      "Caiman": { "amount": 100, "type": "kills_with_specific_attachment", "attachment": "Extended Mag" },
      "Network": { "amount": 50, "type": "kills_with_specific_attachment_tac", "attachment": "Tactical Laser" }
    },
    "warzone": {
      "Shimmer": { "amount": 5, "type": "headshots" },
      "Tyrant": { "amount": 5, "type": "kills_with_suppressor" },
      "Trace": { "amount": 5, "type": "kills_without_taking_damage" }
    }
  },

  "Carbon 57": {
    "multiplayer": {
      "Diamondback": { "amount": 50, "type": "hipfire_kills" },
      "Raptor": { "amount": 2, "type": "kills_without_reloading", "times": 10 },
      "Mainframe": { "amount": 30, "type": "kills_while_wildcard_is_equipped_and_8_attachments", "wildcard": "Gunfighter" }
    },
    "zombies": {
      "Mutilate": { "amount": 5, "type": "critical_kills_rapidly", "times": 15 },
      "Slither": { "amount": 10, "type": "kills_without_reloading", "times": 15 },
      "Pathfinder": { "amount": 300, "type": "kills_with_cryo_freeze" }
    },
    "campaign": {
      "Cinder": { "amount": 25, "type": "destructions_guild" },
      "Caiman": { "amount": 50, "type": "hipfire_kills" },
      "Network": { "amount": 3, "times": 10, "type": "rapid_kills" }
    },
    "warzone": {
      "Shimmer": { "amount": 5, "type": "headshots" },
      "Tyrant": { "amount": 5, "type": "kills_with_suppressor" },
      "Trace": { "amount": 5, "type": "kills_without_taking_damage" }
    }
  },

  "MPC-25": {
    "multiplayer": {
      "Diamondback": { "amount": 50, "type": "TBD" },
      "Raptor": { "amount": 30, "type": "TBD" },
      "Mainframe": { "amount": 20, "type": "TBD" }
    },
    "zombies": {
      "Mutilate": { "amount": 5, "type": "critical_kills_rapidly", "times": 15 },
      "Slither": { "amount": 10, "type": "kills_without_reloading", "times": 15 },
      "Pathfinder": { "amount": 300, "type": "kills_with_cryo_freeze" }
    },
    "campaign": {
      "Cinder": { "amount": 100, "type": "kills_with_specific_attachment", "attachment": "Extended Mag" },
      "Caiman": { "amount": 100, "type": "kills_at_rare_rarity" },
      "Network": { "amount": 50, "type": "specific_enemy_kills", "enemy": 'Guild Tech' }
    },
    "warzone": {
      "Shimmer": { "amount": 5, "type": "headshots" },
      "Tyrant": { "amount": 5, "type": "kills_with_suppressor" },
      "Trace": { "amount": 5, "type": "kills_without_taking_damage" }
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