import marksmanRifles from '@/data/weapons/marksmanRifles'
import {
    PRESTIGE_CAMOS
} from '../../camouflages/definitions'

const universalCamouflages = {
    "M15 Mod 0": {
        "Graffiti": { "amount": 1, "type": "weapon_prestige" },
        "Aces": { "amount": 2, "type": "weapon_prestige" },
        "Obscured": { "amount": 250, "type": "weapon_prestige_master" }
    }
}

const universalCamoEntries = Object.entries(universalCamouflages)[0][1]

// Extract first two and last one:
const startingUniversalCamoEntries = Object.fromEntries(Object.entries(universalCamoEntries).slice(0, 2))
const finalUniversalCamoEntry = Object.fromEntries(Object.entries(universalCamoEntries).slice(-1))

export default {
  ...marksmanRifles.reduce((acc, weapon) => {
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