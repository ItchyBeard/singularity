import specials from "@/data/weapons/specials"
import { PRESTIGE_CAMOS } from "../../camouflages/definitions"
import { generatePrestigeConfig } from "@/utils/prestigeHelper"

const universalCamouflages = {
  "NX Ravager": {
    "Stuck": { amount: 1, type: "weapon_prestige" },
    "Sequence": { amount: 2, type: "weapon_prestige" },
    "Ripple": { amount: 250, type: "weapon_prestige_master" },
  },  
  "GDL Havoc": {
    "Textile": { amount: 1, type: "weapon_prestige" },
    "Navy": { amount: 2, type: "weapon_prestige" },
    "Flamingo": { amount: 250, type: "weapon_prestige_master" },
  },
}

export default generatePrestigeConfig(specials, universalCamouflages, PRESTIGE_CAMOS)
