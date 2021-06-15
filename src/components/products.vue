<template>
  <div class="products">
    <Nav :logo="logoImg" />
    <div class="products__grid">
      <Prod v-for="item in data.items" :key="item.ProductID" :item="item" />
    </div>
  </div>
</template>
<script>
/**
 * Products
 * ------------------------------------------------------------------------------
 * Products state where we fetch data before for
 * manufactures and get access to app
 *
 *
 * @namespace Products
 */
import { ref } from "vue";
import Nav from "./nav.vue";
import Prod from "./prod--single.vue";

export default {
  components: {
    Nav,
    Prod,
  },
  async setup() {
    const data = ref(null);
    const dataResponse = await fetch(
      "https://raw.githubusercontent.com/RepZio/TestApplication/master/test.json"
    );
    data.value = await dataResponse.json();

    return { data };
  },
  computed: {
    logoImg() {
      return `http://images.repzio.com/productimages/${this.data.ManufacturerID}/logo${this.data.ManufacturerID}_lg.jpg?w=100`;
    },
  },
};
</script>
<style lang="scss">
/**
 *
 * @element Products
 *
*/

$component: ".products";

// @block
// -------------

#{$component} {
  max-width: 1440px;
  margin: auto;
  width: 100%;
  background: #555;
  padding-top: 10rem;
}

// @--element
// -------------

#{$component}__grid {
  display: flex;
  flex-flow: wrap;
  justify-content: center;

  article {
    width: 250px;

    img {
      width: 100%;
    }
  }
}
// @--modifier
// --------------

#{$component}__title {
  display: block;
}
</style>
