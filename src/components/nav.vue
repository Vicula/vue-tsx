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

export default {
  inject: ["navObj"],
  computed: {
    img() {
      const i = this.navObj.value.logoImg;
      if (i) return <img src={i} />;
      return "";
    },
  },
  render() {
    return <nav class="nav">{this.img}</nav>;
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
  z-index: 10;
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background: white;
  padding: 0.5rem;
  filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3));

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    padding-left: 40px;
  }
}

// @__element
// -------------

// @--modifier
// --------------
</style>
