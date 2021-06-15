<script lang="tsx">
/**
 * Footer
 * ------------------------------------------------------------------------------
 * Footer for the site with the contact info
 *
 *
 *
 * @namespace Footer
 */

export default {
  inject: ["footerObj"],
  computed: {
    logo() {
      return this.footerObj.value.logo;
    },
    name() {
      return this.footerObj.value.name;
    },
    email() {
      return this.footerObj.value.email;
    },
    phone() {
      return this.footerObj.value.phone;
    },
    location() {
      return this.footerObj.value.location;
    },
  },
  render() {
    return (
      <footer class="footer">
        <div class="footer__wrapper">
          <img src={this.logo} />
          <p>{this.name}</p>
          <p>{this.email}</p>
          <p>{this.phone}</p>
          <p>{this.location}</p>
        </div>
      </footer>
    );
  },
};
</script>
<style lang="scss">
/**
 *
 * @element Footer
 *
*/

$component: ".footer";

// @block
// -------------

#{$component} {
  background: white;
  padding: 2rem;
  text-align: center;
  margin-top: 6rem;
}

// @__element
// -------------

// @--modifier
// --------------
</style>
