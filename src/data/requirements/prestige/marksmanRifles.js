import marksmanRifles from '@/data/weapons/marksmanRifles'
import {
    PRESTIGE_CAMOS
} from '../../camouflages/definitions'

const universalCamouflages = {
    "M8A1": {
        "Cherry Blossom": { "amount": 1, "type": "weapon_prestige" },
        "Clay": { "amount": 2, "type": "weapon_prestige" },
        "Dragon": { "amount": 250, "type": "weapon_prestige_master" }
    },
    "Warden 308": {
        "Psychedelic": { "amount": 1, "type": "weapon_prestige" },
        "Uranium": { "amount": 2, "type": "weapon_prestige" },
        "Marbled": { "amount": 250, "type": "weapon_prestige_master" }
    },
    "M34 Novaline": {
        "Shattered": { "amount": 1, "type": "weapon_prestige" },
        "Cohesion": { "amount": 2, "type": "weapon_prestige" },
        "Koi Pond": { "amount": 250, "type": "weapon_prestige_master" }
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