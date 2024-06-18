<script setup lang="ts">
import { Button } from "~/components/Button";
import { useAppStore } from "~/composables/useAppStore";
import { onMounted } from "vue";
import { CatalogSection } from "./components/CatalogSection";
import type { AppTypes } from "~/types/appTypes";
import { CatalogGridSkeleton } from "./components/CatalogGridSkeleton";

const { catalogStore } = useAppStore();

const changeOrder = (order: AppTypes.Order) => {
  if (catalogStore.order.value !== order) {
    catalogStore.setOrder(order);
    catalogStore.loadBasics();
  }
};

const hasData = computed(() => !!catalogStore.sectionStores.value.length);

const onTopRatedClick = () => changeOrder("rating");
const onLatestClick = () => changeOrder("date");

onMounted(() => {
  catalogStore.loadBasics();
});
</script>
<template>
  <div class="flex flex-col gap-3">
    <header class="flex gap-3 justify-between sm:justify-center">
      <div class="flex gap-3">
        <Button
          icon="pi-trophy"
          :selected="catalogStore.order.value === 'rating'"
          @click="onTopRatedClick"
          >Top Rated First</Button
        >
        <Button
          icon="pi-calendar"
          :selected="catalogStore.order.value === 'date'"
          @click="onLatestClick"
          >Latest First</Button
        >
      </div>
      <NuxtLink to="/search">
        <Button aria-label="Search" icon="pi-search" class="place-self-end" />
      </NuxtLink>
    </header>
    <section class="flex flex-col gap-3">
      <CatalogSection
        v-if="hasData"
        v-for="listStore in catalogStore.sectionStores.value"
        :sectionStore="listStore"
      />
      <CatalogGridSkeleton v-else />
    </section>
  </div>
</template>
