<template>
  <div :class="styles.layer"></div>
  <div :class="[styles.layer, styles.layer2]"></div>
  <div :class="[styles.layer, styles.layer3]"></div>
</template>
<style module="styles">
.layer {
  background-image: linear-gradient(-60deg, #7a0010 50%, #030d1f 50%);
  opacity: 0.5;

  position: fixed;
  top: 0;
  right: -50%;
  bottom: 0;
  left: -50%;
  z-index: -1;
  animation: slide 5s ease-in-out infinite alternate;
}

.layer2 {
  animation-direction: alternate-reverse;
  animation-duration: 4s;
}

.layer3 {
  animation-duration: 5s;
}

@keyframes slide {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
  }
}
</style>
