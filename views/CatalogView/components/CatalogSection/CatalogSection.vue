<script setup lang="ts">
import { useVirtualList } from "@vueuse/core";
import { Button } from "~/components/Button";
import { ShowTile } from "~/components/ShowTile";
import { mergeRefs } from "~/utils/vue";
import { useInfiniteScroll } from "~/composables/useInfiniteScroll";
import { useResponsiveStyles } from "~/composables/useResponsiveStyles";
import type { CatalogSectionStore } from "~/stores/CatalogSectionStore";
import { debounce } from "~/utils/debounce";

const gap = 12;
const scrollAmountMultiplier = 0.9;
const resizeDebounceMilliseconds = 500;

const props = defineProps<{ sectionStore: CatalogSectionStore }>();

const responsiveStyles = useResponsiveStyles();
const listElement = ref<HTMLElement>();

const tiles = computed(() => props.sectionStore.tiles.value);

const { list, containerProps, wrapperProps } = useVirtualList(tiles, {
  itemWidth: () => responsiveStyles.value.catalogTileWidth + gap,
});

const { elementRef } = useInfiniteScroll(
  () => props.sectionStore.loadNextPage(),
  "horizontal",
  100
);

const mergedListRef = mergeRefs(listElement, elementRef, containerProps.ref);

const scrollByDirection = (direction: "left" | "right") => {
  if (listElement.value) {
    const element = listElement.value;
    const { clientWidth, scrollLeft } = element;

    const scrollAmount =
      (direction === "left" ? -clientWidth : clientWidth) *
      scrollAmountMultiplier;
    element.scrollTo({
      left: scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  }
};

const scrollLeft = () => {
  scrollByDirection("left");
};

const scrollRight = () => {
  scrollByDirection("right");
};

const scrollToStart = () => {
  listElement.value?.scrollTo({
    left: 0,
  });
};

const onResize = debounce(scrollToStart, resizeDebounceMilliseconds);

onMounted(() => {
  window.addEventListener("resize", onResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});

watch(() => props.sectionStore, scrollToStart);
</script>
<template>
  <div class="flex flex-col gap-3">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-3">
        <i :class="['pi', 'pi-folder']"></i>
        <h2 class="font-bold">
          {{ sectionStore.title.value }}
        </h2>
        <template v-if="sectionStore.totalNumberOfTiles.value">
          <span>|</span>
          <span>{{ `${sectionStore.totalNumberOfTiles.value} items` }}</span>
        </template>
      </div>

      <div class="flex gap-3">
        <Button
          aria-label="Scroll left"
          @click="scrollLeft"
          icon="pi-chevron-left"
        />
        <Button
          aria-label="Scroll right"
          @click="scrollRight"
          icon="pi-chevron-right"
        />
      </div>
    </div>

    <div v-bind="containerProps" class="noScrollbar" ref="mergedListRef">
      <div v-bind="wrapperProps" class="gap-3">
        <ShowTile
          v-for="tile in list"
          v-bind:key="tile.data.id"
          :tile="tile.data"
        />
      </div>
    </div>
  </div>
</template>
