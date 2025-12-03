<template>
  <div class="share-wrapper">
    <div class="off-screen-container">
      <div ref="shareCardRef" class="share-card">

        <div class="card-header">
          <div class="logo-area">
            <div
              class="dynamic-icon"
              :style="{ background: modeBranding.gradient }"
            ></div>

            <h1>{{ modeBranding.title }}</h1>
          </div>

          <div class="url">singularity-tracker.netlify.app</div>
        </div>

        <div class="stats-grid">
          <div v-for="(count, name) in currentStats" :key="name" class="stat-box">
            <img
              :src="`https://cdn.itchy-beard.co.uk/singularity/camouflages/${convertToKebabCase(String(name))}.png`"
              crossorigin="anonymous"
              alt="camo"
              onerror="this.style.display='none'"
            />
            <div class="stat-info">
              <h3>{{ name }}</h3>
              <div class="progress-text">{{ count }} / {{ totalRequired }}</div>
              <div class="mini-track">
                <div
                  class="mini-fill"
                  :style="{ width: `${Math.min((Number(count) / totalRequired) * 100, 100)}%`, background: getCamoGradient(String(name)) }">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <p>Black Ops 7 Camo Grind</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import html2canvas from 'html2canvas';
import { useStore } from '@/stores/store';
import { convertToKebabCase } from '@/utils/utils';

// 1. Define Props
const props = defineProps<{
  mode: string
}>();

// 2. Setup Store & Refs
const store = useStore();
const isGenerating = ref(false);
const shareCardRef = ref<HTMLElement | null>(null);

// 3. Computed Properties
const weapons = computed(() => store.weapons);

// NEW LOGIC: Total Required (Base Game / Season 0 only)
const totalRequired = computed(() => {
  return weapons.value.filter((w: any) => !w.season || w.season === 0).length || 1;
});

// BRANDING LOGIC: Determines the Title and Gradient based on the mode
const modeBranding = computed(() => {
  switch (props.mode) {
    case 'zombies':
      return {
        title: 'Infestation',
        gradient: 'linear-gradient(135deg, #84CC16, #365314)' // Green
      }
    case 'campaign':
      return {
        title: 'Genesis',
        gradient: 'linear-gradient(135deg, #E879F9, #BE185D)' // Pink
      }
    case 'warzone':
      return {
        title: 'Apocalypse',
        gradient: 'linear-gradient(135deg, #FCA5A5, #991B1B)' // Red/Orange
      }
    default: // multiplayer
      return {
        title: 'Singularity',
        gradient: 'linear-gradient(135deg, #C084FC, #6B21A8)' // Purple
      }
  }
});

// STATS LOGIC
const currentStats = computed(() => {
  const mode = props.mode;
  const wList = weapons.value;

  if (!wList || wList.length === 0) return {};

  const countUnlocked = (category: string, type: 'multiplayer' | 'zombies' | 'campaign' | 'warzone') => {
    return wList.filter((w: any) => w.progress[type] && w.progress[type][category]).length;
  };

  if (mode === 'multiplayer') {
    return {
      'Shattered Gold': countUnlocked('Shattered Gold', 'multiplayer'),
      'Arclight': countUnlocked('Arclight', 'multiplayer'),
      'Tempest': countUnlocked('Tempest', 'multiplayer'),
      'Singularity': countUnlocked('Singularity', 'multiplayer'),
    };
  } else if (mode === 'zombies') {
    return {
      'Golden Dragon': countUnlocked('Golden Dragon', 'zombies'),
      'Bloodstone': countUnlocked('Bloodstone', 'zombies'),
      'Doomsteel': countUnlocked('Doomsteel', 'zombies'),
      'Infestation': countUnlocked('Infestation', 'zombies'),
    };
  } else if (mode === 'campaign') {
    return {
      'Molten Gold': countUnlocked('Molten Gold', 'campaign'),
      'Moonstone': countUnlocked('Moonstone', 'campaign'),
      'Chroma Flux': countUnlocked('Chroma Flux', 'campaign'),
      'Genesis': countUnlocked('Genesis', 'campaign'),
    };
  } else if (mode === 'warzone') {
    return {
      'Golden Damascus': countUnlocked('Golden Damascus', 'warzone'),
      'Starglass': countUnlocked('Starglass', 'warzone'),
      'Absolute Zero': countUnlocked('Absolute Zero', 'warzone'),
      'Apocalypse': countUnlocked('Apocalypse', 'warzone'),
    };
  }
  return {};
});

// HELPER METHODS
const getCamoGradient = (name: string) => {
  const gradients: Record<string, string> = {
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
  };
  return gradients[name] || 'linear-gradient(90deg, #a855f7, #d946ef)';
};

// GENERATE ACTION
const generateImage = async () => {
  if (isGenerating.value) return;
  isGenerating.value = true;

  // Wait for DOM
  await new Promise(resolve => setTimeout(resolve, 150));

  try {
    const element = shareCardRef.value;

    if (!element) {
      throw new Error('Share card element not found');
    }

    const canvas = await html2canvas(element, {
      useCORS: true,
      scale: 2,
      backgroundColor: '#121212',
      width: 1200,
      height: 630
    });

    const link = document.createElement('a');
    link.download = `singularity-${props.mode}-progress.png`;
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  } catch (err) {
    console.error('Image generation failed', err);
    alert('Could not generate image. Check console.');
  } finally {
    isGenerating.value = false;
  }
};

defineExpose({
  generateImage
});
</script>

<style lang="scss" scoped>
.share-wrapper {
  width: 0;
  height: 0;
  overflow: hidden;
}

.off-screen-container {
  position: fixed;
  top: 0;
  left: -9999px;
  z-index: -9999;
}

.share-card {
  width: 1200px;
  height: 630px;
  background: #121212;
  color: white;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    padding-bottom: 30px;

    .logo-area {
      display: flex;
      align-items: center;
      gap: 20px; /* Space between the gradient box and the text */

      /* The Gradient Box (Icon) */
      .dynamic-icon {
        width: 48px;
        height: 48px;
        border-radius: 10px;
        box-shadow: 0 0 15px rgba(0,0,0,0.5);
      }

      h1 {
        font-size: 56px; /* Large, bold title */
        font-weight: 800;
        margin: 0;
        color: white;
        letter-spacing: -1px;
      }
    }

    .url {
      font-size: 24px;
      opacity: 0.5;
      font-weight: 500;
    }
  }

  .stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    flex-grow: 1;
    padding: 50px 0;

    .stat-box {
      background: rgba(255,255,255,0.05);
      padding: 20px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      border: 1px solid rgba(255,255,255,0.05);

      img {
        width: 80px;
        height: 80px;
        margin-right: 30px;
        border-radius: 50%;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      }

      .stat-info {
        flex-grow: 1;

        h3 { margin: 0 0 10px; font-size: 32px; font-weight: 700; }
        .progress-text { font-size: 24px; color: #aaa; margin-bottom: 10px; font-family: monospace;}

        .mini-track {
          height: 12px;
          background: rgba(255,255,255,0.1);
          border-radius: 6px;
          width: 100%;
          overflow: hidden;

          .mini-fill {
            height: 100%;
            border-radius: 6px;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
          }
        }
      }
    }
  }

  .card-footer {
    text-align: center;
    opacity: 0.3;
    font-size: 16px;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: 600;
  }
}
</style>