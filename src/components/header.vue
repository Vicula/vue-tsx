<script lang="tsx">
/**
 * Header
 * ------------------------------------------------------------------------------
 * Header for the site with the company name and message
 *
 *
 *
 * @namespace Header
 */
export default {
  inject: ["headerObj"],
  computed: {
    title() {
      return this.headerObj.value.name;
    },
    msg() {
      return this.headerObj.value.message;
    },
  },
  render() {
    return (
      <header class="header">
        <h1 class="header__title">{this.title}</h1>
        <div class="header__message" v-html={this.msg}></div>
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
  padding: 1.5rem;

  @media screen and (min-width: 768px) {
    padding: 1.5rem 5rem;
  }
}

// @__element
// -------------

#{$component}__title {
  font-size: 50px;
  color: goldenrod;

  @media screen and (min-width: 768px) {
    font-size: 70px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 100px;
  }
}

#{$component}__message {
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
}

// @--modifier
// --------------
</style>
