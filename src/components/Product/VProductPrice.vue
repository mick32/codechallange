<template>
  <div class="productPrice">
    <span v-if="salePrice" class="productPrice__sale">{{ salePrice }}€</span>
    <span
      :class="[{ 'productPrice__main--sale': salePrice }, 'productPrice__main']"
      >{{ price }}€</span
    >
    <p class="productPrice__second">
      {{ secondPrice }}€ / {{ secondPriceUnit }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    price: { type: [Number, String], required: true },
    secondPrice: { type: [Number, String], required: true },
    secondPriceUnit: { type: [Number, String], required: true },
    salePrice: { type: [Number, String], required: true },
  },
};
</script>

<style scoped lang="postcss">
.productPrice {
  &__sale,
  &__main {
    line-height: 1.875rem;
  }

  &__sale {
    color: var(--orange500);
  }

  &__main {
    color: var(--primary);
    &--sale {
      color: var(--secondary);
      text-decoration: line-through;
      margin-left: 0.5rem;
    }
  }

  &__second {
    font-size: 0.875rem;
    color: var(--secondary);
    text-transform: lowercase;
  }
}
</style>
