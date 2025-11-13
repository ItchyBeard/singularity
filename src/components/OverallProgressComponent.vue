<template>
  <div class="overall-progress-component">
    <div class="counter" v-for="(counter, name) in overallProgress" :key="name">
      <img
        :src="`https://cdn.itchy-beard.co.uk/singularity/camouflages/${convertToKebabCase(name)}.png`"
        :alt="name"
        onerror="javascript:this.src='/military-gradient.svg'" />
      <p>
        <span>{{ name }} {{ $t('general.unlocked') }}</span>
        <span>{{ counter }}/{{ totalWeapons }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useStore } from '@/stores/store'
import { convertToKebabCase } from '@/utils/utils'

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
    align-items: center;
    display: flex;
    font-size: 14px;
    justify-content: center;

    + .counter {
      margin-left: 40px;
    }

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

      span:first-child {
        margin-right: 5px;
      }

      span:last-child {
        font-weight: 600;
      }
    }
  }

  @media (max-width: $tablet) {
    justify-content: space-around;
    gap: 10px;
    margin-top: 0;

    .counter + .counter {
      margin-left: 0;
    }

    .counter p span:first-child {
      display: none;
    }
  }

  @media (max-width: $mobile) {
    align-items: flex-start;
    flex-direction: column;

    .counter p span:first-child {
      display: inline-block;
    }
  }
}
</style>