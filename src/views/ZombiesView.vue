<template>
  <div class="container">
    <OverallProgressComponent mode="zombies" />

    <div class="filter-container">
      <FiltersComponent :options="filterOptions" />
      <div class="toggles">
        <FavoritesToggleComponent />
        <LayoutToggleComponent />
      </div>
    </div>

    <WeaponsComponent :weapons="filteredWeapons" :favorites="favorites" progress-key="zombies" />

    <ProgressComponent mode="zombies" />
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useStore } from '@/stores/store'
import { groupBy } from '@/utils/utils'

import FavoritesToggleComponent from '@/components/FavoritesToggleComponent.vue'
import FiltersComponent from '@/components/FiltersComponent.vue'
import LayoutToggleComponent from '@/components/LayoutToggleComponent.vue'
import OverallProgressComponent from '@/components/OverallProgressComponent.vue'
import ProgressComponent from '@/components/ProgressComponent.vue'
import WeaponsComponent from '@/components/WeaponsComponent.vue'

export default {
  components: {
    FavoritesToggleComponent,
    FiltersComponent,
    LayoutToggleComponent,
    OverallProgressComponent,
    ProgressComponent,
    WeaponsComponent,
  },

  data() {
    return {
      store: useStore(),
    }
  },

  computed: {
    ...mapState(useStore, ['weapons', 'filters', 'weaponCategories']),

    filterOptions() {
      return [
        {
          label: this.$tc('general.category'),
          key: 'weaponCategory',
          type: 'select',
          options: this.weaponCategories,
        },
        {
          label: this.$t('filters.hide_golden_dragon'),
          key: 'hideGoldenDragon',
          type: 'checkbox',
        },
        {
          label: this.$t('filters.hide_bloodstone'),
          key: 'hideBloodstone',
          type: 'checkbox',
        },
        {
          label: this.$t('filters.hide_doomsteel'),
          key: 'hideDoomsteel',
          type: 'checkbox',
        },
        {
          label: this.$t('filters.hide_infestation'),
          key: 'hideInfestation',
          type: 'checkbox',
        },
      ]
    },

    filteredWeapons() {
      let filteredWeapons = this.weapons
      const {
        hideGoldenDragon,
        hideBloodstone,
        hideDoomsteel,
        hideInfestation,
        weaponCategory,
      } = this.filters

      if (weaponCategory && weaponCategory !== 'null') {
        filteredWeapons = filteredWeapons.filter((weapon) => weapon.category === weaponCategory)
      }

      if (hideGoldenDragon) {
        filteredWeapons = filteredWeapons.filter(
          (weapon) => !weapon.progress.zombies['Golden Dragon']
        )
      }

      if (hideBloodstone) {
        filteredWeapons = filteredWeapons.filter((weapon) => !weapon.progress.zombies['Bloodstone'])
      }

      if (hideDoomsteel) {
        filteredWeapons = filteredWeapons.filter((weapon) => !weapon.progress.zombies['Doomsteel'])
      }

      if (hideInfestation) {
        filteredWeapons = filteredWeapons.filter(
          (weapon) => !weapon.progress.zombies['Infestation']
        )
      }

      return groupBy(filteredWeapons, (weapon) => weapon.category)
    },

    favorites() {
      if (!this.store) return []
      const favorites = this.store.getFavorites('zombies')
      return this.weapons.filter((weapon) => favorites.includes(weapon.name))
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}

h1 {
  margin-top: 75px;
}

h2 {
  margin: 30px auto 0;
  max-width: 450px;
}

.filter-container {
  align-items: center;
  display: flex;
  width: 100%;

  @media (max-width: $tablet) {
    flex-direction: column;

    :deep(.filters-component) {
      margin-bottom: 20px;
      margin-right: 0;
      width: 100%;
    }

    .toggles {
      display: flex;
      justify-content: space-between;
      width: 100%;

      > :first-child {
        margin-right: 20px;
      }
    }
  }
}

:deep(.filters-component) {
  flex-grow: 1;
  margin-right: 15px;
}
</style>