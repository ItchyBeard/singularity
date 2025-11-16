<template>
  <div>
    <div class="search-container">
      <div class="text icon">
        <IconComponent name="search" height="20" width="20" />
        <input
          type="text"
          v-model="searchQuery"
          :placeholder="$t('pages.prestige.search_placeholder')"
          class="search-input" />
      </div>
    </div>

    <transition-group name="fade" tag="div" class="container">
      <div v-if="showFavorites" :key="'favorites'" class="category">
        <h2>
          <span>{{ $t('general.favorites') }}</span>
          <span v-if="favorites.length > 0" @click="unfavoriteAll('prestige')" class="action">
            {{ $t('general.remove_all') }}
          </span>
        </h2>

        <div v-if="preferences.layout === 'table' && favorites.length > 0">
          <WeaponsTable
            :categories="{ favorites: favorites }"
            progressKey="prestige"
            :isFavorites="true" />
        </div>

        <transition-group
          v-else-if="preferences.layout !== 'table' && favorites.length > 0"
          name="fade"
          tag="div"
          class="weapons">
          <PrestigeWeapon v-for="weapon in favorites" :key="weapon.name" :weapon="weapon" />
        </transition-group>

        <AlertComponent
          v-if="favorites.length === 0"
          type="empty-state"
          :style="{ padding: '32px 15px 31px' }">
          <i18n-t keypath="general.no_favorites_placeholder" scope="global">
            <template #star>
              <IconComponent name="star" fill="#feca57" icon-style="solid" size="20" />
            </template>
            <template #type>{{ $t('general.prestige').toLowerCase() }}</template>
          </i18n-t>
        </AlertComponent>
      </div>

      <div v-if="preferences.layout === 'table'" :key="'table-layout'" class="category">
        <WeaponsTable :categories="groupedWeapons" progressKey="prestige" />
      </div>
      <template v-else>
        <div v-for="(category, title) in groupedWeapons" :key="title" class="category">
          <h2>
            <span>
              {{ $t('weapon_categories.' + title) }}
            </span>
          </h2>

          <transition-group name="fade" tag="div" class="weapons">
            <PrestigeWeapon v-for="weapon in category" :key="weapon.name" :weapon="weapon" />
          </transition-group>
        </div>
      </template>
    </transition-group>

    <div
      v-if="Object.keys(groupedWeapons).length === 0 && favorites.length === 0"
      class="finished-placeholder">
      <p>{{ $t('pages.prestige.no_results') }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useStore } from '@/stores/store'
import { groupBy } from '@/utils/utils'
import { weaponPrestigeUnlocks } from '@/data/weaponPrestigeUnlocks'

import AlertComponent from '@/components/AlertComponent.vue'
import PrestigeWeapon from '@/components/PrestigeWeapon.vue'
import WeaponsTable from '@/components/WeaponsTable.vue'

export default {
  components: {
    AlertComponent,
    PrestigeWeapon,
    WeaponsTable,
  },

  data() {
    return {
      store: useStore(),
      searchQuery: '',
    }
  },

  computed: {
    ...mapState(useStore, ['preferences', 'weapons']),

    showFavorites() {
      return this.preferences.favorites
    },

    allWeaponsAsList() {
      return Object.keys(weaponPrestigeUnlocks).map((name) => ({
        name,
        ...weaponPrestigeUnlocks[name],
      }))
    },

    filteredWeapons() {
      if (!this.searchQuery) {
        return this.allWeaponsAsList
      }

      const query = this.searchQuery.toLowerCase()
      return this.allWeaponsAsList.filter((weapon) => {
        if (weapon.name.toLowerCase().includes(query)) return true
        if (weapon.universal.some((camo) => camo.name.toLowerCase().includes(query))) return true
        if (weapon.specific.some((camo) => camo.name.toLowerCase().includes(query))) return true
        return false
      })
    },

    favoriteNames() {
      return this.store.getFavorites('prestige')
    },

    favorites() {
      return this.filteredWeapons.filter((weapon) => this.favoriteNames.includes(weapon.name))
    },

    nonFavoriteWeapons() {
      return this.filteredWeapons.filter((weapon) => !this.favoriteNames.includes(weapon.name))
    },

    groupedWeapons() {
      const groups = {}

      for (const weaponName in this.nonFavoriteWeapons) {
        const weaponData = this.nonFavoriteWeapons[weaponName]
        const category = weaponData.category || 'Unknown'

        if (!groups[category]) {
          groups[category] = []
        }

        groups[category].push(weaponData)
      }

      const orderedCategories = Object.keys(groups).sort()
      const orderedGroups = {}
      for (const category of orderedCategories) {
        orderedGroups[category] = groups[category]
      }

      return orderedGroups
    },
  },

  methods: {
    ...mapActions(useStore, ['unfavoriteAll']),
  },
}
</script>

<style lang="scss" scoped>
.search-container {
  max-width: 600px;
  margin: 25px auto;

  .text {
    position: relative;

    .icon-component {
      left: 15px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.5;
    }

    .search-input {
      width: 100%;
      padding: 15px 20px 15px 50px;
      font-size: 16px;
      background: $elevation-1-color;
      border: 2px solid $elevation-3-color;
      border-radius: $border-radius;
      color: $text-color;
      transition: $transition;

      &:focus {
        outline: none;
        border-color: $blue;
      }
    }
  }
}

.container {
  width: 100%;

  .category {
    cursor: default;

    + .category {
      margin-top: 75px;

      @media (max-width: $tablet) {
        margin-top: 100px;
      }
    }

    h2 {
      align-items: center;
      display: inline-flex;
      justify-content: space-between;
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 25px;
      width: 100%;

      span:first-child {
        cursor: default;
        user-select: none;
      }

      span:last-child:not(:first-child) {
        color: $elevation-9-color;
        font-size: 18px;
        margin-left: 10px;

        &.action {
          color: $elevation-9-color;
          cursor: pointer;
          font-size: 14px;
          transition: $transition;

          &:hover {
            color: lighten($elevation-9-color, 10%);
          }
        }
      }

      @media (max-width: $tablet) {
        margin-bottom: 35px;
      }
    }

    .weapons {
      display: grid;
      gap: 30px;
      grid-template-columns: repeat(4, 1fr);
      width: 100%;

      @media (max-width: $tablet) {
        grid-template-columns: 1fr;
      }
    }
  }
}

.finished-placeholder {
  color: darken(white, 50%);
  margin-top: 10vh;
  text-align: center;
  width: 100%;

  p {
    font-size: 22px;
    line-height: 1.7;

    @media (max-width: $tablet) {
      font-size: 24px;
    }
  }
}
</style>