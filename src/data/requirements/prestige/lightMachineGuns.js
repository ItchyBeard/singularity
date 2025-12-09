import lightMachineGuns from "@/data/weapons/lightMachineGuns"
import { PRESTIGE_CAMOS } from "../../camouflages/definitions"
import { generatePrestigeConfig } from "@/utils/prestigeHelper"

const universalCamouflages = {
  "MK.78": {
    "Invertebrate": { amount: 1, type: "weapon_prestige" },
    "Mitosis": { amount: 2, type: "weapon_prestige" },
    "Luna": { amount: 250, type: "weapon_prestige_master" },
  },
  "XM325": {
    "Voltaic": { amount: 1, type: "weapon_prestige" },
    "Fated": { amount: 2, type: "weapon_prestige" },
    "Lacerate": { amount: 250, type: "weapon_prestige_master" },
  },
  "Sokol 545": {
    "PrestigeA": { amount: 1, type: "weapon_prestige" },
    "PrestigeB": { amount: 2, type: "weapon_prestige" },
    "PrestigeC": { amount: 250, type: "weapon_prestige_master" },
  },
}

export default generatePrestigeConfig(lightMachineGuns, universalCamouflages, PRESTIGE_CAMOS)
