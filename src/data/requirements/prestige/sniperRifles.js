import sniperRifles from '@/data/weapons/sniperRifles'
import {
    PRESTIGE_CAMOS
} from '../../camouflages/definitions';
import { generatePrestigeConfig } from '@/utils/prestigeHelper';

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

export default generatePrestigeConfig(sniperRifles, universalCamouflages, PRESTIGE_CAMOS)