<template>
  <div class="modal">
    <div class="modal__dialog">
      <div class="modal__header" @click="$emit('close')">X</div>
      <div class="modal__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="postcss">
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background: var(--white);

  &__backdrop {
    background-color: #111231;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    backdrop-filter: blur(2px);
    z-index: 1;
  }

  &__dialog {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    padding: 1rem;
  }

  &__header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  &__body {
    margin-top: 20px;
  }
}
</style>
