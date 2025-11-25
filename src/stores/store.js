import { defineStore } from 'pinia'
import { notify } from '@kyvg/vue3-notification'
import defaultWeapons from '@/data/weapons'
import defaultFilters from '@/data/defaults/filters'
import defaultPreferences from '@/data/defaults/preferences'
import weaponRequirements from '@/data/requirements/weapons'
import camouflageNameChanges from '@/data/camouflageNameChanges'
import camouflageOrder from '@/data/camouflageOrder'

import prestigeMasterList from '@/data/requirements/prestige'

const token = import.meta.env.MODE === 'production' ? 'singularity' : 'singularity-dev'

export const useStore = defineStore({
  id: 'store',

  state: () => ({
    beganGrind: null,
    favorites: {
      weapons: [],
      zombies: [],
      warzone: [],
      campaign: [],
      prestige: [],
    },
    filters: {},
    weaponRequirements: { ...weaponRequirements },
    weapons: [],
    preferences: { ...defaultPreferences },
  }),

  getters: {
    isFavorite: (state) => (type, name) => state.favorites[type]?.includes(name) || false,
    getFavorites: (state) => (type) => state.favorites[type],
    weaponCategories: (state) =>
      Array.from(new Set(state.weapons.map((weapon) => weapon.category)))
  },

  actions: {
    setWeapons(weapons) {
      this.weapons = JSON.parse(JSON.stringify(defaultWeapons))

      for (const [categoryName, categoryData] of Object.entries(prestigeMasterList)) {
        for (const [weaponName, weaponData] of Object.entries(categoryData)) {
          const exists = this.weapons.some(w => w.name === weaponName)

          if (!exists) {
            this.weapons.push({
              name: weaponName,
              category: categoryName,
              comingSoon: false,
              progress: {
                multiplayer: {},
                zombies: {},
                campaign: {},
                warzone: {},
                prestige: {}
              }
            })
          }

          const currentWeapon = this.weapons.find(w => w.name === weaponName)

          if (!currentWeapon.progress.prestige) {
            currentWeapon.progress.prestige = {}
          }

          const camos = weaponData.multiplayer || {}
          Object.keys(camos).forEach(camoName => {
            if (!Object.prototype.hasOwnProperty.call(currentWeapon.progress.prestige, camoName)) {
              currentWeapon.progress.prestige[camoName] = false
            }
          })
        }
      }

      if (weapons) {
        weapons.forEach((weapon) => {
          const index = this.weapons.findIndex((w) => w.name === weapon.name)

          if (index !== -1) {
            ['multiplayer', 'zombies', 'warzone', 'campaign', 'prestige'].forEach((type) => {
              if (weapon.progress[type]) {
                Object.keys(weapon.progress[type]).forEach((camouflage) => {
                  if (camouflage in camouflageNameChanges && weapon.progress[type][camouflage]) {
                    this.weapons[index].progress[type][camouflageNameChanges[camouflage]] = true
                  } else if (this.weapons[index].progress[type] && camouflage in this.weapons[index].progress[type]) {
                    this.weapons[index].progress[type][camouflage] =
                      weapon.progress[type][camouflage]
                  }
                })
              }
            })
          }
        })
      }
    },

    setFavorites(favorites) {
      Object.keys(favorites).forEach((key) => {
        if (key in this.favorites) {
          this.favorites[key] = favorites[key]
        }
      })
    },

    setFilters(filters) {
      this.filters = JSON.parse(JSON.stringify(defaultFilters))

      if (filters) {
        Object.keys(filters).forEach((key) => {
          if (key in defaultFilters) {
            this.filters[key] = filters[key]
          }
        })
      }
    },

    setPreferences(preferences) {
      this.preferences = JSON.parse(JSON.stringify(defaultPreferences))

      if (preferences) {
        Object.keys(preferences).forEach((key) => {
          if (key in defaultPreferences) {
            this.preferences[key] = preferences[key]
          }
        })
      }
    },

    getStoredProgress() {
      const storage = localStorage.getItem(token)

      if (!storage) {
        this.setWeapons()
        this.setFilters()
        return
      }

      const { weapons, filters, beganGrind, favorites, preferences } =
        JSON.parse(storage)

      if (weapons) this.setWeapons(weapons)
      if (filters) this.setFilters(filters)
      if (beganGrind) this.beganGrind = beganGrind
      if (favorites) this.setFavorites(favorites)
      if (preferences) this.setPreferences(preferences)
    },

    storeProgress() {
      if (this.beganGrind === null) this.beganGrind = new Date()

      localStorage.setItem(
        token,
        JSON.stringify({
          weapons: this.weapons,
          filters: this.filters,
          beganGrind: this.beganGrind,
          favorites: this.favorites,
          preferences: this.preferences,
        })
      )
    },

    resetProgress() {
      localStorage.removeItem(token)
      this.setWeapons()
      this.beganGrind = null

      notify({
        type: 'success',
        title: 'Progress successfully reset!',
      })
    },

    toggleFavorite({ type, name }) {
      if (!this.favorites[type]) this.favorites[type] = []
      const index = this.favorites[type].findIndex((favorite) => favorite === name)

      if (index === -1) {
        this.favorites[type].push(name)
      } else {
        this.favorites[type].splice(index, 1)
      }

      this.storeProgress()
    },

    unfavoriteAll(type) {
      this.favorites[type] = []
      this.storeProgress()
    },

    toggleCamouflageCompleted(weaponName, camouflage, current, progressKey) {
      this.weapons.find((w) => w.name === weaponName).progress[progressKey][camouflage] = !current

      if (!current) {
        this.togglePreviousCamouflagesCompleted(weaponName, camouflage, current, progressKey)
      } else {
        this.resetNextCamouflages(weaponName, camouflage, progressKey)
      }

      this.storeProgress()
    },

    getSortedCamos(weaponName, progressKey) {
      const selectedWeapon = this.weapons.find((w) => w.name === weaponName)

      if (progressKey === 'prestige') {
        const weaponCategory = selectedWeapon.category
        if (
          prestigeMasterList[weaponCategory] &&
          prestigeMasterList[weaponCategory][weaponName] &&
          prestigeMasterList[weaponCategory][weaponName].multiplayer
        ) {
          return Object.keys(prestigeMasterList[weaponCategory][weaponName].multiplayer)
        }
        return Object.keys(selectedWeapon.progress.prestige)
      } else {
        return Object.keys(selectedWeapon.progress[progressKey]).sort(
          (a, b) => camouflageOrder.indexOf(a) - camouflageOrder.indexOf(b)
        )
      }
    },

    togglePreviousCamouflagesCompleted(weaponName, camouflage, current, progressKey) {
      const selectedWeapon = this.weapons.find((w) => w.name === weaponName)
      const sortedCamouflages = this.getSortedCamos(weaponName, progressKey)
      const camouflageIndex = sortedCamouflages.findIndex((c) => c === camouflage)
      const previousCamouflages = sortedCamouflages.slice(0, camouflageIndex)

      previousCamouflages.forEach((camo) => {
        if (Object.prototype.hasOwnProperty.call(selectedWeapon.progress[progressKey], camo)) {
          selectedWeapon.progress[progressKey][camo] = !current
        }
      })

      this.storeProgress()
    },

    resetNextCamouflages(weaponName, camouflage, progressKey) {
      const selectedWeapon = this.weapons.find((w) => w.name === weaponName)
      const sortedCamouflages = this.getSortedCamos(weaponName, progressKey)
      const camouflageIndex = sortedCamouflages.findIndex((c) => c === camouflage)
      const nextCamouflages = sortedCamouflages.slice(camouflageIndex + 1)

      nextCamouflages.forEach((camo) => {
        if (Object.prototype.hasOwnProperty.call(selectedWeapon.progress[progressKey], camo)) {
          selectedWeapon.progress[progressKey][camo] = false
        }
      })

      this.storeProgress()
    },

    toggleWeaponCompleted(weapon, current, progressKey) {
      const selectedWeapon = this.weapons.find((w) => w.name === weapon.name)
      Object.keys(selectedWeapon.progress[progressKey]).forEach(
        (camouflage) => (selectedWeapon.progress[progressKey][camouflage] = !current)
      )

      this.storeProgress()
    },

    toggleCategoryCompleted(category, progressKey) {
      const categoryWeapons = this.weapons.filter((weapon) => weapon.category === category)
      const categoryCompleted = categoryWeapons.every((weapon) =>
        Object.values(weapon.progress[progressKey]).every(Boolean)
      )

      categoryWeapons.forEach((weapon) => {
        Object.keys(weapon.progress[progressKey]).forEach((camouflage) => {
          weapon.progress[progressKey][camouflage] = !categoryCompleted
        })
      })

      this.storeProgress()
    },
  },
})