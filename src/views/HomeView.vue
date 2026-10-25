<template>
  <div class="container">
    <div class="divergence-alert">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <circle cx="12" cy="8" r="1" />
        <path d="M12 10a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1z" />
      </svg>

      <div>
        Looking for the Modern Warfare 4 camo tracker?
        <a
          href="https://divergence-tracker.netlify.app/"
          target="_blank"
          rel="noopener noreferrer">
          Check out Divergence here!
        </a>
        Good luck with the grind!
      </div>
    </div>

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
          label: this.$t('filters.hide_military'),
          key: 'hideMilitaryCamos',
          type: 'checkbox',
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
        filteredWeapons = filteredWeapons.filter(
          (weapon) => !weapon.progress.multiplayer['Tempest']
        )
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

.divergence-alert {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  box-sizing: border-box;
  padding: 16px 20px;
  margin-bottom: 32px;

  background: #162637;
  border: 1px solid #285b89;
  border-radius: 4px;

  color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  text-align: left;

  svg {
    flex-shrink: 0;
    color: #3299ff;
  }

  a {
    color: #3299ff;
    text-decoration: none;

    &:hover {
      color: #75bdff;
      text-decoration: underline;
    }
  }

  @media (max-width: 600px) {
    padding: 12px 14px;
    font-size: 13px;
    gap: 10px;
  }
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