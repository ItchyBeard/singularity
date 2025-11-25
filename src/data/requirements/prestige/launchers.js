import launchers from '@/data/weapons/launchers'
import {
    PRESTIGE_CAMOS
} from '../../camouflages/definitions'

const universalCamouflages = {
    "AAROW 109": {
        "Equinox": { "amount": 1, "type": "weapon_prestige" },
        "Asphalt": { "amount": 2, "type": "weapon_prestige" },
        "Birdie": { "amount": 250, "type": "weapon_prestige_master" }
    },
    "A.R.C. M1": {
        "Haze": { "amount": 1, "type": "weapon_prestige" },
        "Blend": { "amount": 2, "type": "weapon_prestige" },
        "Dimensions": { "amount": 250, "type": "weapon_prestige_master" }
    }
}

const universalCamoEntries = Object.entries(universalCamouflages)[0][1]

// Extract first two and last one:
const startingUniversalCamoEntries = Object.fromEntries(Object.entries(universalCamoEntries).slice(0, 2))
const finalUniversalCamoEntry = Object.fromEntries(Object.entries(universalCamoEntries).slice(-1))

export default {
  ...launchers.reduce((acc, weapon) => {
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