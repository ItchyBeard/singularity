import assaultRifles from "@/data/weapons/assaultRifles"
import {
    PRESTIGE_CAMOS
} from "../../camouflages/definitions";
import { generatePrestigeConfig } from "@/utils/prestigeHelper";

const universalCamouflages = {
  "M15 Mod 0": {
    "Graffiti": { amount: 1, type: "weapon_prestige" },
    "Aces": { amount: 2, type: "weapon_prestige" },
    "Obscured": { amount: 250, type: "weapon_prestige_master" },
  },
  "AK-27": {
    "Carbon Fiber": { amount: 1, type: "weapon_prestige" },
    "Shackled": { amount: 2, type: "weapon_prestige" },
    "Lotus": { amount: 250, type: "weapon_prestige_master" },
  },
  "MXR-17": {
    "Skulls": { amount: 1, type: "weapon_prestige" },
    "Dia De Muertos": { amount: 2, type: "weapon_prestige" },
    "Afterlife": { amount: 250, type: "weapon_prestige_master" },
  },
  "X9 Maverick": {
    "Strands": { amount: 1, type: "weapon_prestige" },
    "Murder": { amount: 2, type: "weapon_prestige" },
    "Hellfire": { amount: 250, type: "weapon_prestige_master" },
  },
  "DS20 Mirage": {
    "Fracture": { amount: 1, type: "weapon_prestige" },
    "Nocturnal": { amount: 2, type: "weapon_prestige" },
    "Oni": { amount: 250, type: "weapon_prestige_master" },
  },
  "Peacekeeper Mk1": {
    "Prowler": { amount: 1, type: "weapon_prestige" },
    "Ocean": { amount: 2, type: "weapon_prestige" },
    "Cyborg": { amount: 250, type: "weapon_prestige_master" },
  },
  "Maddox RFB": {
    "Galactic": { amount: 1, type: "weapon_prestige" },
    "Sand": { amount: 2, type: "weapon_prestige" },
    "Electro Magnetic": { amount: 250, type: "weapon_prestige_master" },
  },
}

export default generatePrestigeConfig(assaultRifles, universalCamouflages, PRESTIGE_CAMOS)
