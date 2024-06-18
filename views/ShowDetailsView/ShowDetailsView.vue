<script setup lang="ts">
import { getShow } from "~/api";
import { Button } from "~/components/Button";
import type { AppTypes } from "~/types/appTypes";

const route = useRoute();
const router = useRouter();
const showId = computed(() => Number(route.params.id));

const show = ref<AppTypes.Show>();

const loadShow = async () => {
  try {
    show.value = await getShow(showId.value);
  } catch (e) {
    // TODO: Handle error
  }
};

const attributes = computed(() =>
  show.value
    ? [
        {
          icon: "pi-trophy",
          text: show.value.rating || "-",
        },
        {
          icon: "pi-globe",
          text: show.value.language || "-",
        },
        {
          icon: "pi-calendar",
          text: show.value.premiered?.substring(0, 4) || "-",
        },
        {
          icon: "pi-folder",
          text: show.value.genres.join(", "),
        },
      ]
    : []
);

const goBack = () => router.go(-1);

onMounted(loadShow);
watch(showId, loadShow);
</script>
<template>
  <div
    v-if="show"
    :class="[styles.container, 'self-center flex flex-col items-center gap-3']"
  >
    <div
      :class="[
        styles.imageWrapper,
        'relative bg-color-canvas-background rounded overflow-hidden',
      ]"
    >
      <img
        v-if="show.imageOriginal"
        :src="show.imageOriginal"
        :class="styles.image"
        :alt="show.name"
      />
    </div>
    <h1 class="font-bold">{{ show.name }}</h1>
    <article class="text-center" v-html="show.summary" />
    <div
      v-for="attribute in attributes"
      :class="['flex', 'gap-2', 'items-center']"
    >
      <i :class="['pi', attribute.icon]"></i>{{ attribute.text }}
    </div>
    <Button icon="pi-arrow-left" @click="goBack">Back</Button>
  </div>
</template>
<style module="styles">
.container {
  max-width: 1024px;
}

.imageWrapper {
  height: 50lvh;
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
