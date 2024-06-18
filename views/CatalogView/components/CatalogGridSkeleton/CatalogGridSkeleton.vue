<script setup lang="ts">
import { CatalogSectionSkeleton } from "./components/CatalogSectionSkeleton";
</script>
<template>
  <CatalogSectionSkeleton v-for="index in 5" />
</template>
