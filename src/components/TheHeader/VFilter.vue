<template>
  <div>
    <VButton title="Filters" @click="openModal = true" />
    <Teleport to="body">
      <VModal v-if="openModal" @close="openModal = false">
        <p>Filters:</p>
        <div>
          <label>Price: </label>
          <input
            :value="price"
            type="range"
            min="1"
            max="1000"
            @input="updateFilter('price', $event.target.value)"
          />
        </div>

        <div>
          <label>Popularity: </label>
          <input
            :value="popularity"
            type="range"
            min="0"
            max="5"
            step="1"
            @input="updateFilter('popularity', $event.target.value)"
          />
        </div>
      </VModal>
    </Teleport>
  </div>
</template>

<script>
import VButton from "@/components/ui/VButton.vue";
import VModal from "@/components/ui/VModal.vue";

export default {
  components: { VModal, VButton },
  props: {
    filters: { type: Object, required: false },
  },
  data() {
    return {
      openModal: false,
    };
  },
  computed: {
    price() {
      return this.filters.price.max;
    },
    popularity() {
      return this.filters.popularity.max;
    },
  },
  methods: {
    updateFilter(key, value) {
      // update filters for price/popularity
    },
  },
};
</script>

<style scoped lang="postcss">
.filters {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100vh;
}
</style>
