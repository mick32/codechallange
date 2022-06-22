<template>
  <TheHeader :filters="filters" @update-filters="filters = $event" />
  <ContentPage :filters="filters" />
</template>

<script>
import TheHeader from "@/components/TheHeader/TheHeader.vue";
import ContentPage from "@/modules/contentPage/ContentPage.vue";

export default {
  components: {
    TheHeader,
    ContentPage,
  },
  data() {
    return {
      filters: {
        sortBy: "Popularity",
        price: { min: 1, max: 1000 },
        popularity: { min: 1, max: 5 },
      },
    };
  },
};
</script>
