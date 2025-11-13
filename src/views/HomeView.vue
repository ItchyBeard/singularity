<template>
  <div class="container">
    <OverallProgressComponent mode="multiplayer" />

    <div class="filter-container">
      <FiltersComponent :options="filterOptions" :show-info="true" />
      <div class="toggles">
        <FavoritesToggleComponent />
        <LayoutToggleComponent />
      </div>
    </div>

    <WeaponsComponent :weapons="filteredWeapons" :favorites="favorites" />

    <ProgressComponent mode="multiplayer" />
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
          label: this.$t('filters.hide_shattered_gold'),
          key: 'hideShatteredGold',
          type: 'checkbox',
        },
        {
          label: this.$t('filters.hide_arclight'),
          key: 'hideArclight',
          type: 'checkbox',
        },
        {
          label: this.$t('filters.hide_tempest'),
          key: 'hideTempest',
          type: 'checkbox',
        },
        {
          label: this.$t('filters.hide_singularity'),
          key: 'hideSingularity',
          type: 'checkbox',
        },
      ]
    },

    filteredWeapons() {
      let filteredWeapons = this.weapons
      const { hideShatteredGold, hideArclight, hideTempest, hideSingularity, weaponCategory } =
        this.filters

      if (weaponCategory && weaponCategory !== 'null') {
        filteredWeapons = filteredWeapons.filter((weapon) => weapon.category === weaponCategory)
      }

      if (hideShatteredGold) {
        filteredWeapons = filteredWeapons.filter(
          (weapon) => !weapon.progress.multiplayer['Shattered Gold']
        )
      }

      if (hideArclight) {
        filteredWeapons = filteredWeapons.filter(
          (weapon) => !weapon.progress.multiplayer['Arclight']
        )
      }

      if (hideTempest) {
        filteredWeapons = filteredWeapons.filter((weapon) => !weapon.progress.multiplayer['Tempest'])
      }

      if (hideSingularity) {
        filteredWeapons = filteredWeapons.filter(
          (weapon) => !weapon.progress.multiplayer['Singularity']
        )
      }

      return groupBy(filteredWeapons, (weapon) => weapon.category)
    },

    favorites() {
      if (!this.store) return []
      const favorites = this.store.getFavorites('weapons')
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