<template>
  <div class="product">
    <div class="product__imgWrapper">
      <img class="product__img" :src="img" alt="product name" />
    </div>
    <div class="product__details">
      <VProductPrice
        :price="price"
        :salePrice="salePrice"
        :secondPrice="secondPrice"
        :secondPriceUnit="secondPriceUnit"
      />
      <p class="product__name">{{ name }}</p>
      <VProductRating :rating="rating" :reviews="reviews" />
    </div>
  </div>
</template>

<script>
import VProductPrice from "./VProductPrice.vue";
import VProductRating from "./VProductRating.vue";

export default {
  components: {
    VProductPrice,
    VProductRating,
  },
  props: {
    product: { type: Object, required: true },
  },
  computed: {
    price() {
      return this.product.price;
    },
    salePrice() {
      return this.product.special_price;
    },
    secondPrice() {
      return this.product.base_price_base_amount;
    },
    secondPriceUnit() {
      return `${this.product.base_price_base_amount}${this.product.base_price_base_unit}`;
    },
    name() {
      return this.product.name;
    },
    rating() {
      return Math.round(this.product.yotpo_rating);
    },
    reviews() {
      return this.product.yotpo_review_count;
    },
    img() {
      return `https://c.roastmarket.de/media/catalog/product${this.product.image}`;
    },
  },
};
</script>

<style scoped lang="postcss">
.product {
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 8px 0 rgb(26 27 27 / 10%);

  &__imgWrapper {
    width: 100%;
    height: 16rem;
    background: var(--gray300);
  }

  &__img {
    width: 100%;
    height: auto;
    max-height: 100%;
  }

  &__details {
    padding: 0.5rem;
  }

  &__name {
    font-weight: 700;
    font-size: 0.875rem;
    margin-top: 0.75rem;
    margin-bottom: 1.5rem;
  }
}
</style>
