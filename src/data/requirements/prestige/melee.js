import melee from '@/data/weapons/melee'
import {
    PRESTIGE_CAMOS
} from '../../camouflages/definitions'

const universalCamouflages = {
    "Knife": {
        "Vivid": { "amount": 1, "type": "weapon_prestige" },
        "Tangerine": { "amount": 2, "type": "weapon_prestige" },
        "Igneous": { "amount": 250, "type": "weapon_prestige_master" }
    },
    "Flatline MK.II": {
        "Glyph": { "amount": 1, "type": "weapon_prestige" },
        "Runoff": { "amount": 2, "type": "weapon_prestige" },
        "QWERTY": { "amount": 250, "type": "weapon_prestige_master" }
    }
}

const universalCamoEntries = Object.entries(universalCamouflages)[0][1]

// Extract first two and last one:
const startingUniversalCamoEntries = Object.fromEntries(Object.entries(universalCamoEntries).slice(0, 2))
const finalUniversalCamoEntry = Object.fromEntries(Object.entries(universalCamoEntries).slice(-1))

export default {
  ...melee.reduce((acc, weapon) => {
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