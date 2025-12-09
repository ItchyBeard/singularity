<template>
  <td
    class="camo-cell"
    :class="{ completed, disabled: !requirement || weapon.comingSoon }"
    @click="toggle"
    v-tippy="{
      content: tooltipContent,
      placement: 'top',
      allowHTML: true,
      disabled: !requirement || weapon.comingSoon,
    }">
    <div class="checkbox">
      <IconComponent v-if="completed" name="check" size="14" />
    </div>

    <div v-if="isDebugVisible" class="debug-info">
      <div class="debug-camo-name">{{ camoName }}</div>
      <div class="debug-challenge">{{ debugChallengeText }}</div>
    </div>
  </td>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useStore } from '@/stores/store'

export default {
  props: {
    weapon: {
      type: Object,
      required: true,
    },
    camoName: {
      type: String,
      required: true,
    },
    progressKey: {
      type: String,
      required: true,
    },
    isDebugVisible: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapState(useStore, ['weaponRequirements']),

    progress() {
      return this.weapon.progress[this.progressKey]
    },

    completed() {
      return this.progress[this.camoName] || false
    },

    requirement() {
      if (
        !this.weaponRequirements[this.weapon.name] ||
        !this.weaponRequirements[this.weapon.name][this.progressKey]
      ) {
        return null
      }
      return this.weaponRequirements[this.weapon.name][this.progressKey][this.camoName]
    },

    tooltipContent() {
      if (this.weapon.comingSoon) return this.$t('general.coming_soon')
      if (!this.requirement) return 'TBA'

      const challenge = this.translateChallenge(this.requirement)
      return `<div class="camo-tooltip"><b>${this.camoName}</b><br>${challenge}</div>`
    },

    debugChallengeText() {
      if (this.weapon.comingSoon) return 'Coming Soon'
      if (!this.requirement) return 'TBA'
      return this.translateChallenge(this.requirement)
    },
  },

  methods: {
    ...mapActions(useStore, ['toggleCamouflageCompleted']),

    toggle() {
      if (!this.requirement || this.weapon.comingSoon) return

      this.toggleCamouflageCompleted(
        this.weapon.name,
        this.camoName,
        this.completed,
        this.progressKey
      )
    },

    translateChallenge(challenge) {
      if (!challenge) return 'TBA'

      const { amount, type, seconds, times, enemy, attachment, wildcard, specialty, mod, tier } = challenge
      let translation = ''

      if (enemy) {
        translation = this.$t(`challenges.types.${type}`, { amount, enemy })
      } else if (mod) {
        translation = this.$t(`challenges.types.${type}`, { amount, mod })
      } else if (tier) {
        translation = this.$t(`challenges.types.${type}`, { amount, tier })
      } else if (attachment) {
        translation = this.$t(`challenges.types.${type}`, { amount, attachment })
      } else if (seconds) {
        translation = this.$t(`challenges.types.${type}`, { amount, seconds, times })
      } else if (times) {
        translation = this.$t(`challenges.types.${type}`, { amount, times })
      } else if (wildcard) {
        translation = this.$t(`challenges.types.${type}`, { amount, wildcard })
      } else if (specialty) {
        translation = this.$t(`challenges.types.${type}`, { amount, specialty })
      } else if (amount) {
        translation = this.$t(`challenges.types.${type}`, { amount })
      } else {
        translation = this.$t(`challenges.types.${type}`)
      }

      if (this.progressKey === 'warzone') {
        translation = translation
          .replace(/\bKills\b/g, 'Eliminations')
          .replace(/\bkills\b/g, 'Eliminations')
      }

      return translation
    },
  },
}
</script>

<style lang="scss">
.camo-tooltip {
  b {
    color: white;
  }
}
</style>

<style lang="scss" scoped>
.camo-cell {
  padding: 6px 4px 8px;
  cursor: pointer;
  transition: $transition;
  vertical-align: top;

  .checkbox {
    width: 22px;
    height: 22px;
    background: transparent;
    border: 2px solid $elevation-3-color;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    transition: $transition;

    .icon-component {
      opacity: 0;
      color: $text-color;
      transition: opacity 0.1s ease-in;
    }
  }

  &.completed {
    .checkbox {
      background: #8634b5;
      border-color: #452c45;
      .icon-component {
        opacity: 1;
      }
    }
  }

  &.disabled {
    cursor: not-allowed;
    .checkbox {
      background: $elevation-1-color;
      border-color: $elevation-2-color;
      opacity: 0.5;
    }
  }

  &:not(.disabled):hover {
    .checkbox {
      border-color: $elevation-5-color;
    }

    &.completed .checkbox {
      background: lighten(#8634b5, 5%);
      border-color: lighten(#452c45, 5%);
    }
  }
}

.debug-info {
  font-size: 0.8rem;
  line-height: 1.2;
  color: #777;
  max-width: 100px;
  margin: 4px auto 0;
  word-wrap: break-word;
}

.debug-camo-name {
  font-weight: 600;
  color: #999;
}
</style>