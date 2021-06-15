<script lang="tsx">
/**
 * Products
 * ------------------------------------------------------------------------------
 * Products state where we fetch data before for
 * manufactures and get access to app
 *
 *
 * @namespace Products
 */
import { ref, Ref, computed } from "vue";

import Nav from "./nav.vue";
import Prod from "./prod--single.vue";
import manufacturer from "../types/manufacturer";

export default {
  components: {
    Nav,
    Prod,
  },
  // Here we provide data to children components so we can teleport data
  // we make provide a function so it can compute data
  provide() {
    return {
      navObj: computed(() => {
        return {
          showBranding: this.data.ShowBranding,
          logoImg: `http://images.repzio.com/productimages/${this.data.ManufacturerID}/logo${this.data.ManufacturerID}_lg.jpg?w=100`,
        };
      }),
      // cartObj: computed(() => vm.$store.state.cart.cart),
      // cartItems:computed(() => vm.$store.getters['cartItems']),
      // recProduct:computed(() => vm.$store.state.cart.recomendedProduct),
      // goal:computed(() => vm.$store.state.cart.goal),
      // message:computed(() => vm.$store.getters['getCurrentMessage']),
      // upsell:computed(() => vm.$store.state.cart.upsell),
    };
  },
  async setup(): Promise<{ data: Ref<manufacturer> }> {
    const data: Ref<manufacturer> = ref({
      EmailAddress: "",
      CompanyName: "",
      ManufacturerID: 0,
      Message: "",
      IncludePricing: true,
      ShowBranding: true,
      priceLevelName: "",
      priceKey: "",
      SalesRep: {},
      items: [],
    });
    const dataResponse = await fetch(
      "https://raw.githubusercontent.com/RepZio/TestApplication/master/test.json"
    );
    data.value = (await dataResponse.json()) || {};
    console.log(data.value);
    return { data };
  },
  computed: {
    prodFactory() {
      const ar = [],
        it = this.data.items;
      for (const item in it) {
        const s = it[item];
        ar.push(<Prod key={s.ProductID} item={s} />);
      }
      return ar;
    },
  },
  render() {
    return (
      <div class="products">
        <Nav />
        <div class="products__grid">{this.prodFactory}</div>
      </div>
    );
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
  background: #ccc;
  padding: 6rem 0;
}

// @--element
// -------------

#{$component}__grid {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
}
// @--modifier
// --------------
</style>
