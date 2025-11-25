import shotguns from '@/data/weapons/shotguns'
import {
    PRESTIGE_CAMOS
} from '../../camouflages/definitions'

const universalCamouflages = {
    "M10 Breacher": {
        "Trade Tools": { "amount": 1, "type": "weapon_prestige" },
        "Sunset Zebra": { "amount": 2, "type": "weapon_prestige" },
        "Overdrive": { "amount": 250, "type": "weapon_prestige_master" }
    },
    "Echo 12": {
        "Zombies": { "amount": 1, "type": "weapon_prestige" },
        "Pack-a-Punch": { "amount": 2, "type": "weapon_prestige" },
        "Weaponized 115": { "amount": 250, "type": "weapon_prestige_master" }
    },
    "Akita": {
        "Fissure": { "amount": 1, "type": "weapon_prestige" },
        "Slither": { "amount": 2, "type": "weapon_prestige" },
        "Hexed": { "amount": 250, "type": "weapon_prestige_master" }
    }
}

const universalCamoEntries = Object.entries(universalCamouflages)[0][1]

// Extract first two and last one:
const startingUniversalCamoEntries = Object.fromEntries(Object.entries(universalCamoEntries).slice(0, 2))
const finalUniversalCamoEntry = Object.fromEntries(Object.entries(universalCamoEntries).slice(-1))

export default {
  ...shotguns.reduce((acc, weapon) => {
    acc[weapon] = {
      multiplayer: {
        ...startingUniversalCamoEntries,   
        ...PRESTIGE_CAMOS,
        ...finalUniversalCamoEntry
      }
    }
    return acc
  }, {})
}