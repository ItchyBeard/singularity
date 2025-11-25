import sniperRifles from '@/data/weapons/sniperRifles'
import {
    PRESTIGE_CAMOS
} from '../../camouflages/definitions'

const universalCamouflages = {
    "VS Recon": {
        "Arachnid": { "amount": 1, "type": "weapon_prestige" },
        "Sulfur": { "amount": 2, "type": "weapon_prestige" },
        "Nightlight": { "amount": 250, "type": "weapon_prestige_master" }
    },
    "Shadow SK": {
        "Frenetic": { "amount": 1, "type": "weapon_prestige" },
        "Mud": { "amount": 2, "type": "weapon_prestige" },
        "Kintsugi": { "amount": 250, "type": "weapon_prestige_master" }
    },
    "XR-3 Ion": {
        "Burner": { "amount": 1, "type": "weapon_prestige" },
        "Serenity": { "amount": 2, "type": "weapon_prestige" },
        "Snake Eyes": { "amount": 250, "type": "weapon_prestige_master" }
    }
}

const universalCamoEntries = Object.entries(universalCamouflages)[0][1]

// Extract first two and last one:
const startingUniversalCamoEntries = Object.fromEntries(Object.entries(universalCamoEntries).slice(0, 2))
const finalUniversalCamoEntry = Object.fromEntries(Object.entries(universalCamoEntries).slice(-1))

export default {
  ...sniperRifles.reduce((acc, weapon) => {
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