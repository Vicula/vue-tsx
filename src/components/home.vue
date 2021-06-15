<template>
  <Suspense>
    <products />
  </Suspense>
</template>
<script>
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

export default {
  components: {
    products,
  },
  mounted() {
    console.log("hey");
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
