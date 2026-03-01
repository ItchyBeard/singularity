import assaultRifles from './weapons/assaultRifles'
import subMachineGuns from './weapons/subMachineGuns'
import shotguns from './weapons/shotguns'
import lightMachineGuns from './weapons/lightMachineGuns'
import marksmanRifles from './weapons/marksmanRifles'
import sniperRifles from './weapons/sniperRifles'
import handguns from './weapons/handguns'
import launchers from './weapons/launchers'
import melee from './weapons/melee'
import specials from './weapons/specials'
import defaultProgress from '@/data/defaults/progress'

// Insert Seasonal weapon metadata here, rather than on the camo requirements
export const weaponMetadata = {
  // Assault Rifle
    'Maddox RFB': { season: 1, releaseDate: '2025-12-04' },
    'EGRT-17': { season: 2, releaseDate: '2026-02-05' },
    'Voyak KT-3': { season: 2, releaseDate: '2026-03-31' },

  // Submachine Gun
    'Kogot-7': { season: 1, releaseDate: '2025-12-04' },
    'Sturmwolf 45': { season: 1, releaseDate: '2025-12-31' },
    'Rev-46': { season: 2, releaseDate: '2026-02-05' },

  // Shotgun (none yet)
    'SG-12': { season: 2, releaseDate: '2026-02-19' },

  // Light Machine Gun
    'Sokol 545': { season: 1, releaseDate: '2025-12-31' },

  // Marksman Rifle (none yet)
    'Swordfish A1': { season: 2, releaseDate: '2026-03-31' },

  // Sniper Rifle
    'Hawker HX': { season: 1, releaseDate: '2025-12-31' },

  // Handgun (none yet)

  // Launcher (none yet)

  // Melee
    'Ballistic Knife': { season: 1, releaseDate: '2025-12-04' },
    'H311-SAW': { season: 2, releaseDate: '2026-02-05' },

  // Special
    'NX Ravager': { season: 1, releaseDate: '2025-12-11' },
    'GDL Havoc': { season: 2, releaseDate: '2026-02-05' }
}


const categories = [
  { name: 'Assault Rifles', weapons: assaultRifles, required: 6 },
  { name: 'Sub Machine Guns', weapons: subMachineGuns, required: 6 },
  { name: 'Shotguns', weapons: shotguns, required: 3 },
  { name: 'Light Machine Guns', weapons: lightMachineGuns, required: 2 },
  { name: 'Marksman Rifles', weapons: marksmanRifles, required: 3 },
  { name: 'Sniper Rifles', weapons: sniperRifles, required: 3 },
  { name: 'Handguns', weapons: handguns, required: 3 },
  { name: 'Launchers', weapons: launchers, required: 2 },
  { name: 'Melee', weapons: melee, required: 2 },
  { name: 'Specials', weapons: specials, required: 0 },
]

export default categories.flatMap(({ name: category, weapons, required }) =>
  weapons.map((name) => {
    const meta = weaponMetadata[name] || {}
    const now = new Date()
    const releaseDate = meta.releaseDate ? new Date(meta.releaseDate) : null

    const isComingSoon = releaseDate
      ? now < releaseDate
      : (meta.comingSoon || false)

    return {
      category,
      name,
      required,
      season: meta.season !== undefined ? meta.season : 0,
      comingSoon: isComingSoon,
      releaseDate: meta.releaseDate || null,
      progress: {
        ...defaultProgress[name],
      },
    }
  })
)
