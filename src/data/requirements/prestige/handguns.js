import handguns from "@/data/weapons/handguns.js"
import {
    PRESTIGE_CAMOS
} from "../../camouflages/definitions";
import { generatePrestigeConfig } from "@/utils/prestigeHelper";

const universalCamouflages = {
    "Jäger 45": {
        "Ronin": { "amount": 1, "type": "weapon_prestige" },
        "Jasper": { "amount": 2, "type": "weapon_prestige" },
        "Aced": { "amount": 250, "type": "weapon_prestige_master" }
    },
    "Velox 5.7": {
        "Plasma": { "amount": 1, "type": "weapon_prestige" },
        "Onyx": { "amount": 2, "type": "weapon_prestige" },
        "Moonlit": { "amount": 250, "type": "weapon_prestige_master" }
    },
    "CODA 9": {
        "Art of War": { "amount": 1, "type": "weapon_prestige" },
        "Moss": { "amount": 2, "type": "weapon_prestige" },
        "Benjamins": { "amount": 250, "type": "weapon_prestige_master" }
    }
}

export default generatePrestigeConfig(handguns, universalCamouflages, PRESTIGE_CAMOS)