<template>
  <nav class="container">
    <router-link to="/" class="logo">
      <div class="icon"></div>
      <p><span>Singularity</span></p>
    </router-link>
    <div>
      <router-link to="/">{{ $t('general.multiplayer') }}</router-link>
      <router-link to="/zombies">{{ $t('general.zombies') }}</router-link>
      <router-link to="/campaign">{{ $t('general.campaign') }}</router-link>
      <span
        class="disabled-link-wrapper"
        v-tippy="{
          content: $t('general.coming_soon'),
          placement: 'bottom',
        }">
        <router-link to="/warzone" class="disabled-link">
          {{ $t('general.warzone') }}
        </router-link>
      </span>
      <span
        class="disabled-link-wrapper"
        style="margin-right: 2rem;"
        v-tippy="{
          content: $t('general.coming_soon'),
          placement: 'bottom',
        }">
        <router-link to="/prestige" class="disabled-link">
          {{ $t('general.prestige') }}
        </router-link>
      </span>

      <router-link
        to="/settings"
        class="icon settings"
        :content="$tc('general.setting', 2)"
        v-tippy="{ placement: 'bottom' }">
        <IconComponent name="cog" />
      </router-link>
    </div>
    <IconComponent name="bars" class="mobile-nav-toggle" @click="$emit('toggleMobileNavigation')" />
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.disabled-link-wrapper {
  display: inline-block;
  opacity: 0.3;
  cursor: not-allowed;
  margin: 0 0 0 2rem;
}

.disabled-link {
  pointer-events: none;
}
</style>
