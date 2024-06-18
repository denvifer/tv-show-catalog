<script setup lang="ts">
import InputText from "primevue/inputtext";
import { Button } from "~/components/Button";
import { ShowTile } from "~/components/ShowTile";
import { useAppStore } from "~/composables/useAppStore";
import { debounce } from "~/utils/debounce";

const debounceMilliseconds = 500;

const { searchStore } = useAppStore();
const router = useRouter();

const triggerSearchDebounced = debounce(() => {
  searchStore.triggerSearch();
}, debounceMilliseconds);

const goBack = () => router.go(-1);
</script>
<template>
  <div class="flex flex-col gap-3 items-center">
    <header class="flex flex-col gap-3 items-center">
      <Button icon="pi-arrow-left" @click="goBack">Back to Catalog</Button>
      <InputText
        type="text"
        class="text-black"
        v-model="searchStore.searchText.value"
        @input="triggerSearchDebounced"
      />
      <span>Enter at least three characters</span>
    </header>
    <section class="flex gap-3 flex-wrap justify-center">
      <ShowTile
        v-for="tile in searchStore.tiles.value"
        v-bind:key="tile.id"
        :tile="tile"
      />
    </section>
  </div>
</template>
