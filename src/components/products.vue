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
import { ref } from "vue";
import Nav from "./nav.vue";
import Prod from "./prod--single.vue";

export default {
  components: {
    Nav,
    Prod,
  },
  async setup() {
    const data = ref({
      ManufacturerID: "",
      items: [{ ProductID: "" }],
    });
    const dataResponse = await fetch(
      "https://raw.githubusercontent.com/RepZio/TestApplication/master/test.json"
    );
    data.value = (await dataResponse.json()) || {};

    return { data };
  },
  computed: {
    logoImg(): string {
      return `http://images.repzio.com/productimages/${this.data.ManufacturerID}/logo${this.data.ManufacturerID}_lg.jpg?w=100`;
    },
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
        <Nav logo={this.logoImg} />
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
  background: #888;
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
