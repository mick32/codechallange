<template>
  <select
    class="select"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <option class="select__option" :selected="!modelValue" value="" hidden>
      {{ placeholder }}
    </option>
    <option
      v-for="option in options"
      :key="option.key"
      class="select__option"
      :value="option.value"
      :selected="modelValue == option.value"
    >
      {{ option.value }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    options: { type: Array, required: true },
    modelValue: { type: [Number, String, Boolean, Array], default: undefined },
    placeholder: { type: [String, Number], default: "Please select" },
  },
};
</script>

<style scoped lang="postcss">
.select {
  width: 100%;
  height: 2.5rem;
  padding: 0 1rem;
  box-sizing: border-box;
  outline: none;
  font-size: 1rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--black);

  &__option {
    color: var(--black);
    font-weight: normal;
  }
}
</style>
