import camouflages from '@/data/requirements/weapons'

export default Object.entries(camouflages).reduce((acc, [weaponName, weaponData]) => {
  acc[weaponName] = {
    multiplayer: {},
    zombies: {},
    warzone: {},
  }

  Object.keys(weaponData).forEach((mode) => {
    acc[weaponName][mode] = {}

    Object.keys(weaponData[mode]).forEach((camouflage) => {
      acc[weaponName][mode][camouflage] = false
    })
  })

  return acc
}, {})
