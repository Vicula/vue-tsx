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
import Product from "../types/product";
import Nav from "./nav.vue";
import Prod from "./prod--single.vue";
import Popup from "./prod--popup.vue";
import manufacturer from "../types/manufacturer";

export default {
  components: {
    Nav,
    Prod,
    Popup,
  },
  // Here we provide data to children components so we can teleport data
  // we make provide a function so it can compute data
  provide() {
    return {
      navObj: computed(() => {
        return {
          logoImg: `http://images.repzio.com/productimages/${this.data.ManufacturerID}/logo${this.data.ManufacturerID}_lg.jpg?w=100`,
        };
      }),
      popupObj: computed(() => {
        return {
          toggle: this.popup,
          activeItem: this.activeItem,
          priceKey: this.data.priceKey,
        };
      }),
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

    return { data };
  },
  data: () => {
    return {
      popup: false,
      activeItem: {},
    };
  },
  computed: {
    prodFactory() {
      const ar = [],
        it = this.data.items;
      for (const item in it) {
        const s = it[item];
        ar.push(
          <Prod onPopup={this.triggerPopup} key={s.ProductID} item={s} />
        );
      }
      return ar;
    },
  },
  methods: {
    triggerPopup(i: Product) {
      this.activeItem = i;
      this.popup = true;
    },
    closePopup() {
      this.popup = false;
    },
  },
  render() {
    return (
      <div class="products">
        <Nav />
        <div class="products__grid">{this.prodFactory}</div>
        <Popup onClose={this.closePopup} />
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
