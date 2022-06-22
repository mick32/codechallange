<template>
  <div class="contentPage">
    <p class="contentPage__amount">{{ productAmount }} Artikel</p>
    <div class="productList">
      <VProduct
        v-for="product in products"
        :key="product._source.id"
        :product="product._source"
      />
    </div>
  </div>
</template>

<script>
import VProduct from "@/components/Product/VProduct.vue";
import { getProducts } from "@/api/products";

export default {
  components: { VProduct },
  props: {
    filters: { type: Object, required: true },
  },
  data() {
    return {
      productAmount: 0,
      products: [],
    };
  },
  computed: {
    sortBy() {
      return this.filters.sortBy;
    },
  },
  watch: {
    sortBy(value) {
      this.sortByParams(value, this.products);
    },
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      const result = await getProducts();
      const sortedByAvialability = this.sortByAvailability(
        result.data.hits.hits
      );
      this.sortByParams(this.sortBy, sortedByAvialability);
      this.productAmount = result.data.hits.total;
    },
    sortByAvailability(products) {
      // trick to sort by boolean
      return products.sort(
        (first, second) =>
          second._source.stock.is_in_stock - first._source.stock.is_in_stock
      );
    },
    sortByParams(param, products) {
      const mapParams = {
        Price: "price",
        Popularity: "yotpo_review_count",
      };
      const sortedParam = mapParams[param];

      if (mapParams === "price") {
        this.sortByPrice(sortedParam, products);
      } else {
        this.sortByPopularity(sortedParam, products);
      }
    },
    sortByPrice(key, products) {
      const sortedProducts = products.sort(
        (first, second) => first._source[key] - second._source[key]
      );

      this.products = sortedProducts;
    },
    sortByPopularity(key, products) {
      const sortedProducts = products.sort(
        (first, second) => second._source[key] - first._source[key]
      );

      this.products = sortedProducts;
    },
  },
};
</script>

<style scoped lang="postcss">
.contentPage {
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 1rem;

  &__amount {
    color: var(--secondary);
    margin-bottom: 1rem;
  }
}

.productList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(8, 1fr);
  }
}
</style>
