<script setup lang="ts">
import { SkeletonItem } from "~/components/SkeletonItem";
</script>
<template>
  <div class="flex flex-col gap-3">
    <div class="flex justify-between items-center gap-3">
      <SkeletonItem isLight class="w-40 h-4 rounded opacity-80" />
      <div class="flex gap-3">
        <SkeletonItem v-for="index in 2" class="size-8 square rounded" />
      </div>
    </div>
    <div class="flex gap-3 overflow-hidden">
      <SkeletonItem
        v-for="index in 5"
        :class="[
          styles.tile,
          'skeletonItem shrink-0 bg-red rounded opacity-80',
        ]"
      />
    </div>
  </div>
</template>
<style module="styles">
.tile {
  width: var(--catalog-tile-width);
  aspect-ratio: 2;
}
</style>
