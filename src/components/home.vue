<script lang="tsx">
/**
 * Home
 * ------------------------------------------------------------------------------
 * Home where we suspense
 *
 *
 *
 * @namespace Home
 */
import products from "./products.vue";
import { Suspense } from "vue";
export default {
  components: {
    products,
  },
  render() {
    return (
      <Suspense>
        <products />
      </Suspense>
    );
  },
};
</script>
<style lang="scss">
/**
 *
 * @element Home
 *
*/

$component: ".Home";

// @block
// -------------

// @--element
// -------------

// @--modifier
// --------------

body {
  margin: 0;
}
</style>
