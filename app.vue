<script setup lang="ts">
import "primeicons/primeicons.css";

import { AppStore } from "~/stores/AppStore";
import { Background } from "./components/Background";

const appStore = new AppStore();
provide(AppStore.injectionKey, appStore);

useHead({
  bodyAttrs: {
    class: "p-3 text-color-text",
  },
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ],
});
</script>
<template>
  <Background />
  <NuxtPage />
</template>
