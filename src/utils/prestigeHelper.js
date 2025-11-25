export const generatePrestigeConfig = (weaponList, specificCamos, sharedCamos) => {
  return weaponList.reduce((acc, weapon) => {
    const camosForWeapon = specificCamos[weapon]

    if (camosForWeapon) {
      const entries = Object.entries(camosForWeapon)
      const startingUniversalCamoEntries = Object.fromEntries(entries.slice(0, 2))
      const finalUniversalCamoEntry = Object.fromEntries(entries.slice(-1))

      acc[weapon] = {
        multiplayer: {
          ...startingUniversalCamoEntries,
          ...sharedCamos,
          ...finalUniversalCamoEntry
        }
      }
    } else {
      acc[weapon] = {
        multiplayer: {
          ...sharedCamos
        }
      }
    }

    return acc
  }, {})
}