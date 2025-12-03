import specials from '@/data/weapons/specials'
import { PRESTIGE_CAMOS } from '../../camouflages/definitions'
import { generatePrestigeConfig } from '@/utils/prestigeHelper'

const universalCamouflages = {
  'NX Ravager': {
    PrestigeA: { amount: 1, type: 'weapon_prestige' },
    PrestigeB: { amount: 2, type: 'weapon_prestige' },
    PrestigeC: { amount: 250, type: 'weapon_prestige_master' },
  },
}

export default generatePrestigeConfig(specials, universalCamouflages, PRESTIGE_CAMOS)
