import marksmanRifles from '@/data/weapons/marksmanRifles'
import {
    PRESTIGE_CAMOS
} from '../../camouflages/definitions';
import { generatePrestigeConfig } from '@/utils/prestigeHelper';

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

export default generatePrestigeConfig(marksmanRifles, universalCamouflages, PRESTIGE_CAMOS)