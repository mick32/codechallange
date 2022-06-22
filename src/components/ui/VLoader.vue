<template>
  <div class="loader">
    <div class="loader__bounce" />
    <div class="loader__bounce" />
    <div class="loader__bounce" />
  </div>
</template>

<script>
export default {
  name: "VLoader",
};
</script>

<style scoped lang="postcss">
.loader {
  position: fixed;
  width: 46px;
  position: relative;
  height: 45px;
  left: 0;
  transform: none;
  margin: auto;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  background: var(--white);

  &__bounce {
    width: 10px;
    height: 10px;
    margin-right: 5px;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    background-color: var(orange);
    border-radius: 100%;

    &:nth-child(2) {
      animation-delay: -0.32s;
    }

    &:nth-child(3) {
      animation-delay: -0.32s;
      margin: 0;
    }
  }
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    transform: scale(0);
  }

  40% {
    transform: scale(1);
  }
}
</style>
