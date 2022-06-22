<template>
  <div class="filters">
    <VFilter
      :filters="filters"
      @update-filters="updateFilters('filters', $event)"
    />
    <VSelect
      :modelValue="filters.sortBy"
      :options="$options.selectOptions"
      @update:modelValue="updateSortValue('sortBy', $event)"
    />
  </div>
</template>

<script>
import VSelect from "@/components/ui/VSelect.vue";
import VFilter from "./VFilter.vue";

export default {
  components: {
    VSelect,
    VFilter,
  },
  props: {
    filters: { type: Object, required: true },
  },
  methods: {
    updateSortValue(key, value) {
      this.$emit("update-filters", { ...this.filters, [key]: value });
    },
    updateFilters(filters) {
      // emit filters to parent
    },
  },
  created() {
    this.$options.selectOptions = [
      {
        key: "popularity",
        value: "Popularity",
      },
      {
        key: "price",
        value: "Price",
      },
    ];
  },
};
</script>

<style lang="postcss" scoped>
.filters {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media only screen and (min-width: 1024px) {
    width: 300px;
  }
}
</style>
