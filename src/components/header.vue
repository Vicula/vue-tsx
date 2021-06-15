<script lang="tsx">
/**
 * Header
 * ------------------------------------------------------------------------------
 * Header for the site
 *
 *
 *
 * @namespace Header
 */
export default {
  render() {
    return (
      <header class="header">
        <h1 class="header__title">RepZio</h1>
        <div class="header__message"></div>
      </header>
    );
  },
};
</script>
<style lang="scss">
/**
 *
 * @element Header
 *
*/

$component: ".header";

// @block
// -------------

#{$component} {
  display: block;
}

// @__element
// -------------

// @--modifier
// --------------
</style>
