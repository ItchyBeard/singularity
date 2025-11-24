import assaultRifles from '@/data/weapons/assaultRifles'
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
  "M15 Mod 0": {
    "multiplayer": {
      "Diamondback": { "amount": 50, "type": "kills_while_moving" },
      "Raptor": { "amount": 30, "type": "kills_objective" },
      "Mainframe": { "amount": 20, "type": "kills_with_underbarrel_launcher" }
    },
    "zombies": {
      "Mutilate": { "amount": 5, "type": "critical_kills_rapidly", "times": 15 },
      "Slither": { "amount": 10, "type": "kills_without_reloading", "times": 15 },
      "Pathfinder": { "amount": 300, "type": "kills_with_cryo_freeze" }
    },
    "campaign": {
      "Cinder": { "amount": 50, "type": "kills_shortly_after_sprinting" },
      "Caiman": { "amount": 100, "type": "kills_with_4x_or_higher_magnification_scope" },
      "Network": { "amount": 100, "type": "specific_enemy_kills", "enemy": 'Fear' }
    },
    "warzone": {
      "Shimmer": { "amount": 5, "type": "headshots" },
      "Tyrant": { "amount": 5, "type": "kills_with_suppressor" },
      "Trace": { "amount": 5, "type": "kills_without_taking_damage" }
    }
  },

  "AK-27": {
    "multiplayer": {
      "Diamondback": { "amount": 30, "type": "hipfire_kills" },
      "Raptor": { "amount": 2, "type": "kills_without_reloading" },
      "Mainframe": { "amount": 20, "type": "kills_with_underbarrel_launcher" }
    },
    "zombies": {
      "Mutilate": { "amount": 5, "type": "critical_kills_rapidly", "times": 15 },
      "Slither": { "amount": 10, "type": "kills_without_reloading", "times": 15 },
      "Pathfinder": { "amount": 300, "type": "kills_with_cryo_freeze" }
    },
    "campaign": {
      "Cinder": { "amount": 50, "type": "kills_shortly_after_sprinting" },
      "Caiman": { "amount": 50, "type": "kills_while_moving_ads" },
      "Network": { "amount": 100, "type": "specific_enemy_kills", "enemy": 'Human' }
    },
    "warzone": {
      "Shimmer": { "amount": 5, "type": "headshots" },
      "Tyrant": { "amount": 5, "type": "kills_with_suppressor" },
      "Trace": { "amount": 5, "type": "kills_without_taking_damage" }
    }
  },

  "MXR-17": {
    "multiplayer": {
      "Diamondback": { "amount": 50, "type": "kills_with_5_attachments" },
      "Raptor": { "amount": 30, "type": "kills_shortly_after_sprinting" },
      "Mainframe": { "amount": 20, "type": "kills_with_underbarrel" }
    },
    "zombies": {
      "Mutilate": { "amount": 5, "type": "critical_kills_rapidly", "times": 15 },
      "Slither": { "amount": 10, "type": "kills_without_reloading", "times": 15 },
      "Pathfinder": { "amount": 300, "type": "kills_with_cryo_freeze" }
    },
    "campaign": {
      "Cinder": { "amount": 150, "type": "kills_with_8_attachments" },
      "Caiman": { "amount": 100, "type": "kills_at_rare_rarity" },
      "Network": { "amount": 3, "type": "rapid_kills", "times": 10 }
    },
    "warzone": {
      "Shimmer": { "amount": 5, "type": "headshots" },
      "Tyrant": { "amount": 5, "type": "kills_with_suppressor" },
      "Trace": { "amount": 5, "type": "kills_without_taking_damage" }
    }
  },

  "X9 Maverick": {
    "multiplayer": {
      "Diamondback": { "amount": 30, "type": "kills_while_affected_by_tactical" },
      "Raptor": { "amount": 50, "type": "kills_with_no_attachments" },
      "Mainframe": { "amount": 30, "type": "kill_without_taking_damage" }
    },
    "zombies": {
      "Mutilate": { "amount": 5, "type": "critical_kills_rapidly", "times": 15 },
      "Slither": { "amount": 10, "type": "kills_without_reloading", "times": 15 },
      "Pathfinder": { "amount": 300, "type": "kills_with_cryo_freeze" }
    },
    "campaign": {
      "Cinder": { "amount": 3, "type": "rapid_kills", "times": 10 },
      "Caiman": { "amount": 50, "type": "kills_with_specific_attachment_tac", "attachment": "Tactical Laser" },
      "Network": { "amount": 50, "type": "kills_while_moving_ads" },
    },
    "warzone": {
      "Shimmer": { "amount": 5, "type": "headshots" },
      "Tyrant": { "amount": 5, "type": "kills_with_suppressor" },
      "Trace": { "amount": 5, "type": "kills_without_taking_damage" }
    }
  },

  "DS20 Mirage": {
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
      "Cinder": { "amount": 3, "type": "rapid_kills", "times": 10 },
      "Caiman": { "amount": 25, "type": "kill_shortly_after_movement" },
      "Network": { "amount": 100, "type": "kills_with_specific_attachment", "attachment": "Extended Mag" },
    },
    "warzone": {
      "Shimmer": { "amount": 5, "type": "headshots" },
      "Tyrant": { "amount": 5, "type": "kills_with_suppressor" },
      "Trace": { "amount": 5, "type": "kills_without_taking_damage" }
    }
  },

  "Peacekeeper Mk1": {
    "multiplayer": {
      "Diamondback": { "amount": 50, "type": "kills_with_5_attachments" },
      "Raptor": { "amount": 30, "type": "kills_without_taking_damage", },
      "Mainframe": { "amount": 20, "type": "kills_with_underbarrel_launcher" }
    },
    "zombies": {
      "Mutilate": { "amount": 5, "type": "critical_kills_rapidly", "times": 15 },
      "Slither": { "amount": 10, "type": "kills_without_reloading", "times": 15 },
      "Pathfinder": { "amount": 300, "type": "kills_with_cryo_freeze" }
    },
    "campaign": {
      "Cinder": { "amount": 10, "type": "kills_without_reloading", "times": 10 },
      "Caiman": { "amount": 100, "type": "specific_enemy_kills", "enemy": 'Guild Tech' },
      "Network": { "amount": 25, "type": "kill_shortly_after_movement" },
    },
    "warzone": {
      "Shimmer": { "amount": 5, "type": "headshots" },
      "Tyrant": { "amount": 5, "type": "kills_with_suppressor" },
      "Trace": { "amount": 5, "type": "kills_without_taking_damage" }
    }
  }
}

export default {
  ...assaultRifles.reduce((acc, weapon) => {
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