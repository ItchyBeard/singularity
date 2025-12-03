<template>
  <div :class="['weapon-wrapper', { favorite: isFavorite }]">
    <div :class="['weapon', { label, 'coming-soon': isComingSoon }]">
      <div
        :class="[
          'name',
          'grid',
          {
            'molten-gold': isCamoComplete('Molten Gold'),
            'moonstone': isCamoComplete('Moonstone'),
            'chroma-flux': isCamoComplete('Chroma Flux'),
            'genesis': isCamoComplete('Genesis'),
            'shattered-gold': isCamoComplete('Shattered Gold'),
            'arclight': isCamoComplete('Arclight'),
            'tempest': isCamoComplete('Tempest'),
            'singularity': isCamoComplete('Singularity'),
            'golden-dragon': isCamoComplete('Golden Dragon'),
            'bloodstone': isCamoComplete('Bloodstone'),
            'doomsteel': isCamoComplete('Doomsteel'),
            'infestation': isCamoComplete('Infestation'),
            'golden-damascus': isCamoComplete('Golden Damascus'),
            'starglass': isCamoComplete('Starglass'),
            'absolute-zero': isCamoComplete('Absolute Zero'),
            'apocalypse': isCamoComplete('Apocalypse'),
            'singularity': allComplete && !isCamoComplete('Singularity'),
          },
        ]"
        :data-label="label"
        @dblclick="toggleWeapon"
        v-tippy="{
          content: $t('pages.multiplayer.double_click_tooltip', {
            state: allComplete
              ? $t('general.reset').toLowerCase()
              : $t('general.complete').toLowerCase(),
          }),
        }">
        {{ weapon.name }}
      </div>

      <div
        v-if="!isComingSoon && weapon.unlocks.length > 0"
        class="progress"
        :style="{
          'grid-template-columns': `repeat(${
            weapon.unlocks.length > 6 ? 6 : weapon.unlocks.length
          }, 1fr)`,
        }">
        <div
          v-for="camouflage in weapon.unlocks"
          :key="camouflage.name"
          class="camouflage weapon-layout-grid"
          @click="toggleCamo(camouflage.name)"
          :content="`${camouflage.name} - ${camouflage.requirement}`"
          v-tippy="{ placement: 'bottom' }">
          <div :class="['inner', { completed: isCamoComplete(camouflage.name) }]">
            <img
              :src="`https://cdn.itchy-beard.co.uk/singularity/camouflages/${convertToKebabCase(
                camouflage.name
              )}.png`"
              :alt="camouflage.name"
              onerror="javascript:this.src='/military-gradient.svg'" />
            <IconComponent class="complete" name="check" fill="#10ac84" />
            <IconComponent class="remove" name="times" fill="#ee5253" />
            <IconComponent
              v-if="camouflage.type === 'Universal'"
              name="globe"
              class="universal-icon"
              size="16" />
          </div>
        </div>
      </div>
    </div>

    <IconComponent
      class="favorite-icon"
      name="star"
      :fill="isFavorite ? '#feca57' : 'gray'"
      icon-style="solid"
      size="25"
      @click="toggleFavorite"
      v-tippy="{
        content: $t('filters.toggle_favorite', {
          state: isFavorite ? $t('general.remove_from') : $t('general.add_to'),
        }),
      }" />
  </div>
</template>

<script>
import { useStore } from '@/stores/store'
import { convertToKebabCase } from '@/utils/utils'
import { mapActions, mapState } from 'pinia'
import { weaponMetadata } from '@/data/weapons' // Make sure this path points to your weapons.js file

export default {
  props: {
    weapon: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      store: useStore(),
    }
  },

  computed: {
    ...mapState(useStore, ['preferences', 'weapons', 'weaponRequirements', 'filters']),

    weaponFromStore() {
      return this.weapons.find((w) => w.name === this.weapon.name)
    },

    weaponProgress() {
      return this.weaponFromStore?.progress.prestige || {}
    },

    allComplete() {
      if (this.weapon.unlocks.length === 0 || !this.weaponFromStore) return false
      return this.weapon.unlocks.every((camo) => this.weaponProgress[camo.name])
    },

    isFavorite() {
      if (!this.store) return false
      return this.store.isFavorite('prestige', this.weapon.name)
    },

    // Compute metadata locally
    localMetadata() {
      return weaponMetadata[this.weapon.name] || {}
    },

    isComingSoon() {
      const now = new Date()
      const releaseDate = this.localMetadata.releaseDate
        ? new Date(this.localMetadata.releaseDate)
        : null

      if (releaseDate) {
        return now < releaseDate
      }
      return this.localMetadata.comingSoon || false
    },

    label() {
      if (this.isComingSoon) {
        if (this.localMetadata.releaseDate) {
          const date = new Date(this.localMetadata.releaseDate)
          return `Available ${date.getDate()}/${date.getMonth() + 1}`
        }
        return this.$t('general.coming_soon')
      } else if (this.localMetadata.season && this.localMetadata.season > 0) {
        return `Season ${this.localMetadata.season}`
      } else {
        return null
      }
    },
  },

  methods: {
    convertToKebabCase,
    ...mapActions(useStore, ['toggleCamouflageCompleted', 'toggleFavorite']),

    isCamoComplete(camoName) {
      return !!this.weaponProgress[camoName]
    },

    toggleCamo(camoName) {
      this.toggleCamouflageCompleted(
        this.weapon.name,
        camoName,
        this.isCamoComplete(camoName),
        'prestige'
      )
    },

    toggleWeapon() {
      const targetState = !this.allComplete
      this.weapon.unlocks.forEach((camo) => {
        if (this.isCamoComplete(camo.name) !== targetState) {
          this.toggleCamo(camo.name)
        }
      })
    },

    toggleFavorite() {
      this.$store.toggleFavorite({ type: 'prestige', name: this.weapon.name })
    },
  },
}
</script>

<style lang="scss" scoped>
.weapon-wrapper {
  position: relative;

  &.favorite .favorite-icon {
    opacity: 1 !important;
  }

  &:hover {
    .favorite-icon {
      opacity: 1;
    }
  }

  .favorite-icon {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: $transition;
    transform: translate(50%, -50%);
    z-index: 2;

    @media (max-width: $tablet) {
      opacity: 1 !important;
      transform: translate(50%, -50%) scale(1.25);
    }
  }

  .weapon {
    position: relative;

    &.label {
      &.coming-soon .name {
        background: $elevation-1-color;
        color: rgba($text-color, 0.25);
        pointer-events: none;

        &::after {
          background: $blue;
        }
      }

      .name {
        &::after {
          background: $purple;
          border: 3px solid $background-color;
          border-radius: 100px;
          bottom: 0;
          color: $text-color;
          content: attr(data-label);
          font-size: 10px;
          font-weight: 500;
          left: 50%;
          padding: 4px 6px;
          position: absolute;
          transform: translate(-50%, 50%);
          z-index: 2;
        }
      }
    }

    .name {
      $padding: 25px;
      align-items: center;
      background: $elevation-3-color;
      border-radius: $border-radius;
      cursor: pointer;
      display: flex;
      font-weight: 600;
      justify-content: center;
      position: relative;
      transition: $transition;
      user-select: none;

      @media (max-width: $tablet) {
        font-size: 18px;
        padding: $padding;
      }

      &.molten-gold {
        @include molten-gold-camouflage-background;
        color: black;
      }
      &.moonstone {
        @include moonstone-camouflage-background;
        color: black;
      }
      &.chroma-flux {
        @include chroma-flux-camouflage-background;
        color: black;
      }
      &.genesis {
        @include genesis-camouflage-background;
        color: black;
      }
      &.shattered-gold {
        @include shattered-gold-camouflage-background;
        color: black;
      }
      &.arclight {
        @include arclight-camouflage-background;
        color: black;
      }
      &.tempest {
        @include tempest-camouflage-background;
        color: white;
      }
      &.singularity {
        @include singularity-camouflage-background;
        color: white;
      }
      &.golden-dragon {
        @include golden-dragon-camouflage-background;
        color: black;
      }
      &.bloodstone {
        @include bloodstone-camouflage-background;
        color: white;
      }
      &.doomsteel {
        @include doomsteel-camouflage-background;
        color: white;
      }
      &.infestation {
        @include infestation-camouflage-background;
        color: white;
      }
      &.golden-damascus {
        @include golden-damascus-camouflage-background;
        color: white;
      }
      &.starglass {
        @include starglass-camouflage-background;
        color: black;
      }
      &.absolute-zero {
        @include absolute-zero-camouflage-background;
        color: white;
      }
      &.apocalypse {
        @include apocalypse-camouflage-background;
        color: white;
      }

      &.grid {
        padding: $padding 0;
      }
    }

    .progress {
      display: grid;
      gap: 5px;
      margin-top: 5px;

      .camouflage {
        position: relative;
        user-select: none;

        &.weapon-layout-grid > .inner {
          flex-direction: column;
          justify-content: center;

          &.completed > .info {
            opacity: 0.5;
          }

          img {
            height: 100%;
            object-fit: cover;
            position: relative;
            width: 100%;
            z-index: 1;
          }

          .icon-component.complete,
          .icon-component.remove {
            left: 50%;
            opacity: 0;
            position: absolute;
            transform: translate(-50%, -50%);
            transition: $transition;
            top: 50%;
            z-index: 2;
          }

          .info {
            padding: 8px;

            .name {
              font-size: 14px;
            }
          }
        }

        .favorite-camouflage-icon {
          position: absolute;
          right: 0;
          top: 0;
          transform: translate(40%, -40%);
          z-index: 2;
        }

        .inner {
          align-items: center;
          background: $elevation-2-color;
          border-radius: $border-radius;
          cursor: pointer;
          display: flex;
          height: 100%;
          justify-content: center;
          overflow: hidden;
          position: relative;
          transition: $transition;
          width: 100%;

          .universal-icon {
            position: absolute;
            bottom: 3px;
            left: 3px;
            opacity: 0.7;
            color: $text-color;
            filter: drop-shadow(0 0 1px $background-color);
            z-index: 2;
          }

          &:hover {
            @media (min-width: $tablet) {
              img,
              p {
                opacity: 0.25;
              }

              .icon-component.complete {
                opacity: 1;
              }
            }
          }

          &.completed {
            &:hover {
              @media (min-width: $tablet) {
                .icon-component.complete {
                  opacity: 0;
                }
                .icon-component.remove {
                  opacity: 1;
                }
              }
            }

            img,
            p {
              opacity: 0.25;
            }

            .icon-component {
              &.complete {
                opacity: 1;
              }

              &.remove {
                opacity: 0;
              }
            }
          }

          &.disabled {
            cursor: not-allowed;

            &:hover {
              img,
              p {
                opacity: 1;
              }

              .icon-component {
                opacity: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>