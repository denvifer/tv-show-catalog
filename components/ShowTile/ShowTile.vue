<script setup lang="ts">
import type { AppTypes } from "~/types/appTypes";
import { computed } from "vue";

const props = defineProps<{ tile: AppTypes.ShowTile }>();

const attributes = computed(() => [
  {
    icon: "pi-trophy",
    text: props.tile.rating || "-",
  },
  {
    icon: "pi-globe",
    text: props.tile.language || "-",
  },
  {
    icon: "pi-calendar",
    text: props.tile.premiered?.substring(0, 4) || "-",
  },
]);
</script>
<template>
  <nuxt-link :to="`/show/${tile.id}`" class="block no-underline">
    <div
      :class="[
        styles.container,
        'relative shrink-0 flex p-3 gap-3 bg-color-tile-background/[0.8] rounded overflow-hidden',
      ]"
    >
      <div class="flex grow gap-3 overflow-hidden">
        <div
          :class="[
            styles.imageWrapper,
            'relative h-full shrink-0 bg-color-canvas-background rounded overflow-hidden',
          ]"
        >
          <img
            v-if="tile.imageMedium"
            :src="tile.imageMedium"
            :class="styles.image"
            :alt="tile.name"
          />
        </div>
        <section class="min-w-0">
          <div>
            <h3 class="font-bold">
              {{ tile.name }}
            </h3>
          </div>
          <div
            v-for="attribute in attributes"
            :class="['flex', 'gap-2', 'items-center']"
          >
            <i :class="['pi', attribute.icon]"></i>{{ attribute.text }}
          </div>
        </section>
      </div>
    </div>
  </nuxt-link>
</template>
<style module="styles">
.container {
  width: var(--catalog-tile-width);
  aspect-ratio: 2;
}

.imageWrapper {
  aspect-ratio: 8/11;
}

.image {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
