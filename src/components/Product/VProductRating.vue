<template>
  <div class="rating">
    <div class="rating__stars">
      <span
        v-for="(_, index) in 5"
        :key="index"
        :class="{ 'rating__star--active': index + 1 < rating }"
      >
        *
      </span>
    </div>
    <div class="rating__review">({{ reviews }})</div>
  </div>
</template>

<script>
export default {
  props: {
    rating: { type: [Number, String], required: true },
    reviews: { type: [Number, String], required: true },
  },
};
</script>

<style lang="postcss" scoped>
.rating {
  display: flex;

  &__stars {
    font-size: 1.25rem;
  }

  &__star--active {
    color: var(--yellow);
  }

  &__review {
    margin-left: 0.5rem;
    font-size: 0.75rem;
  }
}
</style>
