import lightMachineGuns from '@/data/weapons/lightMachineGuns'
import {
    PRESTIGE_CAMOS
} from '../../camouflages/definitions'

const universalCamouflages = {
    "MK.78": {
      "Invertebrate": { "amount": 1, "type": "weapon_prestige" },
      "Mitosis": { "amount": 2, "type": "weapon_prestige" },
      "Luna": { "amount": 250, "type": "weapon_prestige_master" }
    },
    "XM325": {
      "Voltaic": { "amount": 1, "type": "weapon_prestige" },
      "Fated": { "amount": 2, "type": "weapon_prestige" },
      "Lacerate": { "amount": 250, "type": "weapon_prestige_master" }
    }
}

const universalCamoEntries = Object.entries(universalCamouflages)[0][1]

// Extract first two and last one:
const startingUniversalCamoEntries = Object.fromEntries(Object.entries(universalCamoEntries).slice(0, 2))
const finalUniversalCamoEntry = Object.fromEntries(Object.entries(universalCamoEntries).slice(-1))

export default {
  ...lightMachineGuns.reduce((acc, weapon) => {
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