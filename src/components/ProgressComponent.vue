<template>
  <div class="progress">
    <ModalComponent ref="modal" :mode="mode">
      <template #header>
        {{ $t(`pages.${mode}.completed_modal.title`) }}
      </template>

      <slot name="modal-body" />

      <i18n-t :keypath="`pages.${mode}.completed_modal.body`" tag="p" scope="global">
        <template #duration>
          <b>{{ daysSinceStart }} {{ $tc('general.days_ago', daysSinceStart) }}</b>
        </template>

        <template #date>
          <b>{{ new Date(getBeganGrind).toLocaleDateString('en-GB') }}</b>
        </template>
      </i18n-t>

      <i18n-t
        keypath="pages.mastery.completed_modal.support"
        tag="p"
        style="margin-top: 15px; font-size: 14px; color: #aaa"
        scope="global">
        <a href="https://www.buymeacoffee.com/itchybeard" target="_blank">
          {{ $t('pages.mastery.completed_modal.support_link') }}
        </a>
      </i18n-t>
    </ModalComponent>

    <Transition name="slide-up">
      <div v-if="showBars" class="bars">
        <div
          class="progress"
          v-tippy="{
            content: $t(`pages.${mode}.progress.tooltip`),
            maxWidth: 500,
          }">
          <div :class="`bar ${mode}`" :style="{ width: progress + '%' }"></div>
          <label>
            {{ $t(`pages.${mode}.progress.label`) }}: <span>{{ progress }}%</span>
          </label>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useStore } from '@/stores/store'
import { daysBetweenDates, roundToTwoDecimals } from '@/utils/utils'
import Confetti from '@/utils/confetti'

export default {
  props: {
    mode: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      showBars: false,
    }
  },

  computed: {
    ...mapState(useStore, ['beganGrind', 'weapons']),

    getBeganGrind() {
      return this.beganGrind ?? new Date()
    },

    daysSinceStart() {
      const days = daysBetweenDates(new Date(this.getBeganGrind), new Date())
      return days ? days : 1
    },

    progress() {
      return this.calculateProgress(this.weapons, this.mode)
    },
  },

  watch: {
    progress(value) {
      if (value >= 100) {
        this.handleCompleted()
      }
    },
  },

  mounted() {
    setTimeout(() => {
      this.showBars = true
    }, 500)
  },

  methods: {
    average(arr) {
      return arr.reduce((p, c) => p + c, 0) / arr.length
    },

    calculateProgress(weapons, mode) {
      const requiredWeapons = 33

      // Sort and filter out the weapons with the most progress
      const mostProgressedWeapons = weapons
        .map((weapon) => {
          let totalCamouflages = Object.keys(weapon.progress[mode]).length
          let completedCamouflages = Object.values(weapon.progress[mode]).reduce((a, b) => a + b, 0)

          return {
            ...weapon,
            completed: Object.values(weapon.progress[mode]).reduce((a, b) => a + b, 0),
            completedPercentage: completedCamouflages / totalCamouflages,
          }
        })
        .sort((a, b) => b.completedPercentage - a.completedPercentage)
        .splice(0, requiredWeapons)

      // Count the amount of camouflages completed for the most progress weapons
      const totalCamouflagesCompleted = mostProgressedWeapons.reduce((a, b) => a + b.completed, 0)

      // Count the required amount of camouflages to complete the Dark Matter camouflage
      const requiredCamouflages = mostProgressedWeapons.reduce((a, b) => {
        return a + Object.keys(b.progress[mode]).length
      }, 0)

      return roundToTwoDecimals((totalCamouflagesCompleted / requiredCamouflages) * 100)
    },

    handleCompleted() {
      const DURATION = 10000
      const LENGTH = 120

      new Confetti({
        duration: DURATION,
        heigth: window.innerHeight,
        length: LENGTH,
        width: document.body.clientWidth,
      })

      this.$refs.modal.open()

      setTimeout(() => {
        let canvas = document.querySelector('canvas')
        canvas.parentNode.removeChild(canvas)
      }, DURATION)
    },
  },
}
</script>

<style lang="scss" scoped>
.bars {
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: fixed;
  user-select: none;
  width: 100%;
  z-index: 10;

  .progress {
    background: $elevation-4-color;
    display: block;
    height: 35px;
    position: relative;
    width: 100%;

    .bar {
      display: block;
      height: 100%;
      transition: $transition;

      &.multiplayer {
        background-image: $singularity-gradient;
      }

      &.zombies {
        background-image: $infestation-gradient;
      }

      &.campaign {
        background-image: $genesis-gradient;
      }

      &.warzone {
        background-image: $apocalypse-gradient;
      }
    }

    label {
      font-size: 12px;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      white-space: nowrap;

      span {
        font-weight: 600;
      }
    }
  }
}
</style>