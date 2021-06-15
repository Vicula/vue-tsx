<template>
  <nav class="nav">
    <img v-if="logo" :src="logo" />
  </nav>
</template>
<script lang="tsx">
/**
 * Nav
 * ------------------------------------------------------------------------------
 * Nav for the site
 *
 *
 *
 * @namespace Nav
 */
import { h } from "vue";

export default {
  props: {
    logo: String,
  },
};
</script>
<style lang="scss">
/**
 *
 * @element Nav
 *
*/

$component: ".nav";

// @block
// -------------

#{$component} {
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background: white;
  padding: 0.5rem;
}

// @__element
// -------------

// @--modifier
// --------------
</style>
