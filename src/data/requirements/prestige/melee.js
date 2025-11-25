import melee from '@/data/weapons/melee'
import {
    PRESTIGE_CAMOS
} from '../../camouflages/definitions';
import { generatePrestigeConfig } from '@/utils/prestigeHelper';

const universalCamouflages = {
    "Knife": {
        "Vivid": { "amount": 1, "type": "weapon_prestige" },
        "Tangerine": { "amount": 2, "type": "weapon_prestige" },
        "Igneous": { "amount": 250, "type": "weapon_prestige_master" }
    },
    "Flatline MK.II": {
        "Glyph": { "amount": 1, "type": "weapon_prestige" },
        "Runoff": { "amount": 2, "type": "weapon_prestige" },
        "QWERTY": { "amount": 250, "type": "weapon_prestige_master" }
    }
}

export default generatePrestigeConfig(melee, universalCamouflages, PRESTIGE_CAMOS)