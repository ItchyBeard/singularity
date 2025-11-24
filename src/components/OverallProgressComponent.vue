<template>
  <div class="overall-progress-component">
    <div class="counter" v-for="(counter, name) in overallProgress" :key="name">
      <div class="counter-label">
        <img
          :src="`https://cdn.itchy-beard.co.uk/singularity/camouflages/${convertToKebabCase(name)}.png`"
          :alt="name"
          onerror="javascript:this.src='/military-gradient.svg'" />
        <p>
          <span>{{ name }} {{ $t('general.unlocked') }}</span>
          <span>{{ counter }}/{{ totalWeapons }}</span>
        </p>
      </div>

      <div class="progress-track">
        <div
          class="progress-fill"
          :style="{
            width: `${(counter / totalWeapons) * 100}%`,
            background: getCamoGradient(name)
          }">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useStore } from '@/stores/store'
import { convertToKebabCase } from '@/utils/utils'
import ShareProgressModal from '@/components/ShareProgressModal.vue'

export default {
  props: {
    mode: {
      type: String,
      required: true,
    },
  },

  computed: {
    ...mapState(useStore, ['weapons']),

    overallProgress() {
      const { mode, weapons } = this

      if (mode === 'multiplayer') {
        return {
          'Shattered Gold': weapons.filter((w) => w.progress.multiplayer['Shattered Gold']).length,
          'Arclight': weapons.filter((w) => w.progress.multiplayer['Arclight']).length,
          'Tempest': weapons.filter((w) => w.progress.multiplayer['Tempest']).length,
          'Singularity': weapons.filter((w) => w.progress.multiplayer['Singularity']).length,
        }
      } else if (mode === 'zombies') {
        return {
          'Golden Dragon': weapons.filter((w) => w.progress.zombies['Golden Dragon']).length,
          'Bloodstone': weapons.filter((w) => w.progress.zombies['Bloodstone']).length,
          'Doomsteel': weapons.filter((w) => w.progress.zombies['Doomsteel']).length,
          'Infestation': weapons.filter((w) => w.progress.zombies['Infestation']).length,
        }
      } else if (mode === 'campaign') {
        return {
          'Molten Gold': weapons.filter((w) => w.progress.campaign['Molten Gold']).length,
          'Moonstone': weapons.filter((w) => w.progress.campaign['Moonstone']).length,
          'Chroma Flux': weapons.filter((w) => w.progress.campaign['Chroma Flux']).length,
          'Genesis': weapons.filter((w) => w.progress.campaign['Genesis']).length,
        }
      } else if (mode === 'warzone') {
        return {
          'Golden Damascus': weapons.filter((w) => w.progress.warzone['Golden Damascus']).length,
          'Starglass': weapons.filter((w) => w.progress.warzone['Starglass']).length,
          'Absolute Zero': weapons.filter((w) => w.progress.warzone['Absolute Zero']).length,
          'Apocalypse': weapons.filter((w) => w.progress.warzone['Apocalypse']).length,
        }
      } else {
        return {}
      }
    },

    totalWeapons() {
      return this.weapons.length
    },
  },

  methods: {
    convertToKebabCase,

    getCamoGradient(name) {
      const gradients = {
        'Shattered Gold': 'linear-gradient(90deg, #FCD34D, #B45309)',
        'Arclight': 'linear-gradient(90deg, #E5E7EB, #9CA3AF)',
        'Tempest': 'linear-gradient(90deg, #22D3EE, #0E7490)',
        'Singularity': 'linear-gradient(90deg, #C084FC, #6B21A8)',

        'Golden Dragon': 'linear-gradient(90deg, #FBBF24, #991B1B)',
        'Bloodstone': 'linear-gradient(90deg, #F87171, #7F1D1D)',
        'Doomsteel': 'linear-gradient(90deg, #94A3B8, #475569)',
        'Infestation': 'linear-gradient(90deg, #84CC16, #365314)',

        'Molten Gold': 'linear-gradient(90deg, #F59E0B, #B45309)',
        'Moonstone': 'linear-gradient(90deg, #C4B5FD, #7C3AED)',
        'Chroma Flux': 'linear-gradient(90deg, #F0ABFC, #A855F7)',
        'Genesis': 'linear-gradient(90deg, #E879F9, #BE185D)',

        'Golden Damascus': 'linear-gradient(90deg, #D97706, #7C2D12)',
        'Starglass': 'linear-gradient(90deg, #67E8F9, #06B6D4)',
        'Absolute Zero': 'linear-gradient(90deg, #A5F3FC, #0891B2)',
        'Apocalypse': 'linear-gradient(90deg, #FCA5A5, #991B1B)',
      }
      return gradients[name] || 'linear-gradient(90deg, #a855f7, #d946ef)'
    }
  },
}
</script>

<style lang="scss" scoped>
.overall-progress-component {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 0 25px;
  padding: 10px;

  .counter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 140px;

    + .counter {
      margin-left: 40px;
    }

    .counter-label {
      align-items: center;
      display: flex;
      font-size: 14px;
      justify-content: center;
      margin-bottom: 8px;

      img {
        $size: 20px;
        border-radius: $size;
        height: 100%;
        margin-right: 8px;
        object-fit: cover;
        position: relative;
        width: $size;
        z-index: 1;
      }

      p {
        cursor: default;
        font-weight: 400;
        margin: 0;

        span:first-child {
          margin-right: 5px;
        }

        span:last-child {
          font-weight: 600;
        }
      }
    }

    .progress-track {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      height: 6px;
      overflow: hidden;
      width: 100%;
    }

    .progress-fill {
      border-radius: 4px;
      height: 100%;
      transition: width 0.5s ease-out;
    }
  }

  @media (max-width: $tablet) {
    justify-content: space-around;
    gap: 10px;
    margin-top: 0;

    .counter {
      min-width: auto;

      + .counter {
        margin-left: 0;
      }
    }

    .counter p span:first-child {
      display: none;
    }
  }

  @media (max-width: $mobile) {
    align-items: flex-start;
    flex-direction: column;
    width: 100%;

    .counter {
      width: 100%;
      margin-bottom: 15px;

      p span:first-child {
        display: inline-block;
      }
    }
  }
}
</style>