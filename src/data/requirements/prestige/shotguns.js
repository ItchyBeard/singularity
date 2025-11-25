import shotguns from '@/data/weapons/shotguns'
import {
    PRESTIGE_CAMOS
} from '../../camouflages/definitions';
import { generatePrestigeConfig } from '@/utils/prestigeHelper';

const universalCamouflages = {
    "M10 Breacher": {
        "Trade Tools": { "amount": 1, "type": "weapon_prestige" },
        "Sunset Zebra": { "amount": 2, "type": "weapon_prestige" },
        "Overdrive": { "amount": 250, "type": "weapon_prestige_master" }
    },
    "Echo 12": {
        "Zombies": { "amount": 1, "type": "weapon_prestige" },
        "Pack-a-Punch": { "amount": 2, "type": "weapon_prestige" },
        "Weaponized 115": { "amount": 250, "type": "weapon_prestige_master" }
    },
    "Akita": {
        "Fissure": { "amount": 1, "type": "weapon_prestige" },
        "Slither": { "amount": 2, "type": "weapon_prestige" },
        "Hexed": { "amount": 250, "type": "weapon_prestige_master" }
    }
}

export default generatePrestigeConfig(shotguns, universalCamouflages, PRESTIGE_CAMOS)