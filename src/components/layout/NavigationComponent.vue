<template>
  <nav class="container">
    <router-link to="/" class="logo">
      <div class="icon"></div>
      <p><span>Singularity</span></p>
    </router-link>

    <div class="nav-links">
      <router-link to="/">{{ $t('general.multiplayer') }}</router-link>
      <router-link to="/zombies">{{ $t('general.zombies') }}</router-link>
      <router-link to="/campaign">{{ $t('general.campaign') }}</router-link>
      <router-link to="/warzone">{{ $t('general.warzone') }}</router-link>
      <router-link to="/prestige">{{ $t('general.prestige') }}</router-link>
      <button
        class="icon-btn share"
        @click="triggerShare"
        v-tippy="{ content: 'Share Progress', placement: 'bottom' }">
        <IconComponent name="download-alt" />
      </button>

      <router-link
        to="/settings"
        class="icon-btn settings"
        :content="$tc('general.setting', 2)"
        v-tippy="{ placement: 'bottom' }">
        <IconComponent name="cog" />
      </router-link>
    </div>

    <IconComponent name="bars" class="mobile-nav-toggle" @click="$emit('toggleMobileNavigation')" />

    <ShareProgressModal
      ref="shareGenerator"
      :mode="currentMode"
    />

  </nav>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import ShareProgressModal from '@/components/ShareProgressModal.vue'

const route = useRoute();
const shareGenerator = ref<InstanceType<typeof ShareProgressModal> | null>(null);

const currentMode = computed(() => {
  const path = route.path;
  if (path.includes('zombies')) return 'zombies';
  if (path.includes('campaign')) return 'campaign';
  if (path.includes('warzone')) return 'warzone';
  return 'multiplayer';
});

const triggerShare = () => {
  if (shareGenerator.value) {
    shareGenerator.value.generateImage();
  }
};
</script>

<style lang="scss" scoped>
nav.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-links {
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 25px;

  a {
    text-decoration: none;
    color: #9ca3af;
    font-weight: 500;
    transition: color 0.2s;

    &:hover,
    &.router-link-active {
      color: white;
    }
  }
}

.disabled-link-wrapper {
  display: inline-block;
  opacity: 0.3;
  cursor: not-allowed;
}

.disabled-link {
  pointer-events: none;
  color: inherit;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  transition: color 0.2s, transform 0.1s;

  &:hover {
    color: white;
  }

  &:active {
    transform: scale(0.95);
  }

  :deep(svg) {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
}

.mobile-nav-toggle {
  display: none;
  cursor: pointer;
  color: white;

  :deep(svg) {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .mobile-nav-toggle {
    display: block;
  }
}
</style>