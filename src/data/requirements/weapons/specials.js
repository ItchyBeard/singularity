import specials from '@/data/weapons/specials'

const specialCamouflages = {}

export default {
  ...specials.reduce((acc, weapon) => {
    acc[weapon] = {
      multiplayer: {
        'Military 1': { type: 'TBD' }, 'Military 2': { type: 'TBD' }, 'Military 3': { type: 'TBD' }, 'Military 4': { type: 'TBD' }, 'Military 5': { type: 'TBD' }, 'Military 6': { type: 'TBD' }, 'Military 7': { type: 'TBD' }, 'Military 8': { type: 'TBD' }, 'Military 9': { type: 'TBD' },
        ...specialCamouflages[weapon]?.multiplayer,
        'Shattered Gold': { amount: 3, type: 'kills_without_dying', times: 10 },
        'Arclight': { amount: 10, type: 'double_kills' },
        'Tempest': { amount: 5, type: 'kills_without_dying', times: 3 },
        'Singularity': { type: 'TBD' },
      },
      zombies: {
        'Zombie Base 1': { type: 'TBD' }, 'Zombie Base 2': { type: 'TBD' }, 'Zombie Base 3': { type: 'TBD' }, 'Zombie Base 4': { type: 'TBD' }, 'Zombie Base 5': { type: 'TBD' }, 'Zombie Base 6': { type: 'TBD' }, 'Zombie Base 7': { type: 'TBD' }, 'Zombie Base 8': { type: 'TBD' }, 'Zombie Base 9': { type: 'TBD' },
        ...specialCamouflages[weapon]?.zombies,
        'Golden Dragon': { type: 'TBD' },
        'Bloodstone': { type: 'TBD' },
        'Doomsteel': { type: 'TBD' },
        'Infestation': { type: 'TBD' },
      },
      campaign: {
        'Campaign Base 1': { type: 'TBD' }, 'Campaign Base 2': { type: 'TBD' }, 'Campaign Base 3': { type: 'TBD' }, 'Campaign Base 4': { type: 'TBD' }, 'Campaign Base 5': { type: 'TBD' }, 'Campaign Base 6': { type: 'TBD' }, 'Campaign Base 7': { type: 'TBD' }, 'Campaign Base 8': { type: 'TBD' }, 'Campaign Base 9': { type: 'TBD' },
        ...specialCamouflages[weapon]?.campaign,
        'Molten Gold': { type: 'TBD' },
        'Moonstone': { type: 'TBD' },
        'Chroma Flux': { type: 'TBD' },
        'Genesis': { type: 'TBD' },
      },
      warzone: {
        'Warzone Base 1': { type: 'TBD' }, 'Warzone Base 2': { type: 'TBD' }, 'Warzone Base 3': { type: 'TBD' }, 'Warzone Base 4': { type: 'TBD' }, 'Warzone Base 5': { type: 'TBD' }, 'Warzone Base 6': { type: 'TBD' }, 'Warzone Base 7': { type: 'TBD' }, 'Warzone Base 8': { type: 'TBD' }, 'Warzone Base 9': { type: 'TBD' },
        ...specialCamouflages[weapon]?.warzone,
        'Golden Damascus': { type: 'TBD' },
        'Starglass': { type: 'TBD' },
        'Absolute Zero': { type: 'TBD' },
        'Apocalypse': { type: 'TBD' },
      },
    }
    return acc
  }, {}),
}