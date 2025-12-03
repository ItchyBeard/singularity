import subMachineGuns from '@/data/weapons/subMachineGuns'
import { PRESTIGE_CAMOS } from '../../camouflages/definitions'
import { generatePrestigeConfig } from '@/utils/prestigeHelper'

const universalCamouflages = {
  'Ryden 45K': {
    Aqua: { amount: 1, type: 'weapon_prestige' },
    Azalea: { amount: 2, type: 'weapon_prestige' },
    Tagged: { amount: 250, type: 'weapon_prestige_master' },
  },
  'RK-9': {
    'Billow': { amount: 1, type: 'weapon_prestige' },
    'Neon Zebra': { amount: 2, type: 'weapon_prestige' },
    'Spotted': { amount: 250, type: 'weapon_prestige_master' },
  },
  'Razor 9mm': {
    Leopard: { amount: 1, type: 'weapon_prestige' },
    Scorch: { amount: 2, type: 'weapon_prestige' },
    Heatwave: { amount: 250, type: 'weapon_prestige_master' },
  },
  'Dravec 45': {
    Kawaii: { amount: 1, type: 'weapon_prestige' },
    Concrete: { amount: 2, type: 'weapon_prestige' },
    Sealed: { amount: 250, type: 'weapon_prestige_master' },
  },
  'Carbon 57': {
    Paladin: { amount: 1, type: 'weapon_prestige' },
    Wavelength: { amount: 2, type: 'weapon_prestige' },
    Shrouded: { amount: 250, type: 'weapon_prestige_master' },
  },
  'MPC-25': {
    Comics: { amount: 1, type: 'weapon_prestige' },
    Plum: { amount: 2, type: 'weapon_prestige' },
    Bacon: { amount: 250, type: 'weapon_prestige_master' },
  },
  'Kogot-7': {
    PrestigeA: { amount: 1, type: 'weapon_prestige' },
    PrestigeB: { amount: 2, type: 'weapon_prestige' },
    PrestigeC: { amount: 250, type: 'weapon_prestige_master' },
  },
  'Sturmwolf 45': {
    PrestigeA: { amount: 1, type: 'weapon_prestige' },
    PrestigeB: { amount: 2, type: 'weapon_prestige' },
    PrestigeC: { amount: 250, type: 'weapon_prestige_master' },
  },
}

export default generatePrestigeConfig(subMachineGuns, universalCamouflages, PRESTIGE_CAMOS)
