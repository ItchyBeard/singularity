import launchers from '@/data/weapons/launchers'
import {
    PRESTIGE_CAMOS
} from '../../camouflages/definitions';
import { generatePrestigeConfig } from '@/utils/prestigeHelper';

const universalCamouflages = {
    "AAROW 109": {
        "Equinox": { "amount": 1, "type": "weapon_prestige" },
        "Asphalt": { "amount": 2, "type": "weapon_prestige" },
        "Birdie": { "amount": 250, "type": "weapon_prestige_master" }
    },
    "A.R.C. M1": {
        "Haze": { "amount": 1, "type": "weapon_prestige" },
        "Blend": { "amount": 2, "type": "weapon_prestige" },
        "Dimensions": { "amount": 250, "type": "weapon_prestige_master" }
    }
}

export default generatePrestigeConfig(launchers, universalCamouflages, PRESTIGE_CAMOS)