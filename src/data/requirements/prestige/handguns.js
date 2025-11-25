import handguns from '@/data/weapons/handguns.js'
import {
    PRESTIGE_CAMOS
} from '../../camouflages/definitions'

const universalCamouflages = {
    "Jäger 45": {
        "Ronin": { "amount": 1, "type": "weapon_prestige" },
        "Jasper": { "amount": 2, "type": "weapon_prestige" },
        "Aced": { "amount": 250, "type": "weapon_prestige_master" }
    },
    "Velox 5.7": {
        "Plasma": { "amount": 1, "type": "weapon_prestige" },
        "Onyx": { "amount": 2, "type": "weapon_prestige" },
        "Moonlit": { "amount": 250, "type": "weapon_prestige_master" }
    },
    "CODA 9": {
        "Art of War": { "amount": 1, "type": "weapon_prestige" },
        "Moss": { "amount": 2, "type": "weapon_prestige" },
        "Benjamins": { "amount": 250, "type": "weapon_prestige_master" }
    }
}

const universalCamoEntries = Object.entries(universalCamouflages)[0][1]

// Extract first two and last one:
const startingUniversalCamoEntries = Object.fromEntries(Object.entries(universalCamoEntries).slice(0, 2))
const finalUniversalCamoEntry = Object.fromEntries(Object.entries(universalCamoEntries).slice(-1))

export default {
  ...handguns.reduce((acc, weapon) => {
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