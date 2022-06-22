<template>
  <button class="button" @click="$emit('click')">{{ title }}</button>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
  },
};
</script>

<style scoped lang="postcss">
.button {
  width: 100%;
  height: 100%;
  background: var(--orange500);
  font-size: 1rem;
  border: none;
  border-radius: 0.25rem;
  color: var(--white);
  outline: none;
  cursor: pointer;
}
</style>
