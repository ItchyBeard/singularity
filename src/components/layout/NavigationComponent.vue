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
import ShareProgressModal from '@/components/ShareProgressModal.vue';

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
  justify-content: space-between; /* Pushes Logo left and Links right */
  padding: 20px 0; /* Add some breathing room if needed */
}

.nav-links {
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 25px; /* Consistent spacing between ALL links and icons */

  a {
    text-decoration: none;
    color: #9ca3af; /* Gray-400 equivalent */
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
  /* Remove margins here since we use gap on the parent now */
}

.disabled-link {
  pointer-events: none;
  color: inherit;
}

/* Shared style for both the button and the router-link icon */
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

  /* Ensure SVG icons are sized correctly */
  :deep(svg) {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
}

/* Mobile Responsive Styles */
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

@media (max-width: 768px) { /* Adjust based on your $tablet variable */
  .nav-links {
    display: none; /* Hidden on mobile, handled by your mobile menu */
  }

  .mobile-nav-toggle {
    display: block;
  }
}
</style>