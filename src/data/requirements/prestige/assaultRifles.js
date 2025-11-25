import assaultRifles from '@/data/weapons/assaultRifles'
import {
    PRESTIGE_CAMOS
} from '../../camouflages/definitions'

const universalCamouflages = {
    "M15 Mod 0": {
        "Graffiti": { "amount": 1, "type": "weapon_prestige" },
        "Aces": { "amount": 2, "type": "weapon_prestige" },
        "Obscured": { "amount": 250, "type": "weapon_prestige_master" }
    },
    "AK-27": {
        "Carbon Fiber": { "amount": 1, "type": "weapon_prestige" },
        "Shackled": { "amount": 2, "type": "weapon_prestige" },
        "Lotus": { "amount": 250, "type": "weapon_prestige_master" }
    },
    "MXR-17": {
        "Skulls": { "amount": 1, "type": "weapon_prestige" },
        "Dia De Muertos": { "amount": 2, "type": "weapon_prestige" },
        "Afterlife": { "amount": 250, "type": "weapon_prestige_master" }
    },
    "X9 Maverick": {
        "Strands": { "amount": 1, "type": "weapon_prestige" },
        "Murder": { "amount": 2, "type": "weapon_prestige" },
        "Hellfire": { "amount": 250, "type": "weapon_prestige_master" }
    },
    "DS20 Mirage": {
        "Fracture": { "amount": 1, "type": "weapon_prestige" },
        "Nocturnal": { "amount": 2, "type": "weapon_prestige" },
        "Oni": { "amount": 250, "type": "weapon_prestige_master" }
    },
    "Peacekeeper Mk1": {
        "Prowler": { "amount": 1, "type": "weapon_prestige" },
        "Ocean": { "amount": 2, "type": "weapon_prestige" },
        "Cyborg": { "amount": 250, "type": "weapon_prestige_master" }
    }
}

const universalCamoEntries = Object.entries(universalCamouflages)[0][1]

// Extract first two and last one:
const startingUniversalCamoEntries = Object.fromEntries(Object.entries(universalCamoEntries).slice(0, 2))
const finalUniversalCamoEntry = Object.fromEntries(Object.entries(universalCamoEntries).slice(-1))

export default {
  ...assaultRifles.reduce((acc, weapon) => {
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