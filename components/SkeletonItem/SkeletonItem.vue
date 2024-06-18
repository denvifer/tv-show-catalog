<script setup lang="ts">
defineProps<{ isLight?: boolean }>();
</script>
<template>
  <div
    :class="[styles.skeletonItem, isLight ? styles.light : styles.dark]"
  ></div>
</template>
<style module="styles">
.skeletonItem {
  animation: skeletonAnimation 1.5s infinite reverse;
  background-size: 200%;
}

.dark {
  background-image: linear-gradient(90deg, #121821, #313c4c, #121821);
}

.light {
  background-image: linear-gradient(90deg, #e6e6e6, #707588, #e6e6e6);
}

@keyframes skeletonAnimation {
  0% {
    background-position: -100% 0;
  }

  100% {
    background-position: 100% 0;
  }
}
</style>
