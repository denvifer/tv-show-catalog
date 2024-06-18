<script setup lang="ts">
interface Props {
  icon?: string;
  selected?: boolean;
}

defineProps<Props>();
</script>
<template>
  <button
    :class="[
      'flex items-center justify-center rounded p-2 gap-2 leading-none',
      selected ? 'bg-color-btn-active-background' : 'bg-color-tile-background',
      selected ? null : 'hover:bg-color-btn-hovered-background',
      selected ? null : 'active:bg-color-btn-active-background',
    ]"
  >
    <i v-if="icon" :class="['pi', icon]"></i>
    <slot></slot>
  </button>
</template>
