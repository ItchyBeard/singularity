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
      <router-link to="/warzone">{{ $t('general.warzone') }}</router-link>

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
<script setup lang="ts">
</script>