<template>
  <article>
    <img v-if="item" :src="item.PhotoName + '?w=200'" />
    <h4>{{ item.ItemName }}</h4>
  </article>
</template>
<script>
/**
 * Product Single
 * ------------------------------------------------------------------------------
 * Single Product for the app
 *
 *
 *
 * @namespace ProductSingle
 */

export default {
  props: {
    item: Object,
  },
};
</script>
<style lang="scss">
/**
 *
 * @element Product Single
 *
*/

$component: ".prod";

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
}
// @--modifier
// --------------

#{$component}__title {
  display: block;
}
</style>
