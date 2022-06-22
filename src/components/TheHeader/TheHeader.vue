<template>
  <header class="header" ref="header">
    <div class="header__container">
      <img
        class="header__logo"
        :src="logo"
        alt="Roastmarket - Kaffee online kaufen"
      />
      <div class="header__content">
        <h1 class="header__title">Kaffe & Espresso</h1>
        <Filters
          :filters="filters"
          @update-filters="$emit('update-filters', $event)"
        />
      </div>
    </div>
  </header>
</template>

<script>
import Filters from "./Filters.vue";
import logo from "@/assets/svg/logo.svg";

export default {
  components: {
    Filters,
  },
  props: {
    filters: { type: Object, required: true },
  },
  data() {
    return {
      logo,
      showHeader: true,
    };
  },
};
</script>

<style scoped lang="postcss">
.header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: var(--gray300);
  padding: 1rem;

  &__container {
    width: 100%;

    @media only screen and (min-width: 1024px) {
      max-width: 1024px;
      margin: 0 auto;
    }
  }

  &__logo {
    width: auto;
    height: 15px;
  }

  &__content {
    width: 100%;
    padding: 0 1rem;
  }

  &__title {
    font-size: 24px;
  }
}
</style>
