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
      const i = this.footerObj.value.logo;
      if (i) return <img src={i} />;
      return "";
    },
    name() {
      const n = this.footerObj.value.name;
      if (n) return <p>{n}</p>;
      return "";
    },
    email() {
      const e = this.footerObj.value.email;
      if (e) return <p>{e}</p>;
      return "";
    },
    phone() {
      const p = this.footerObj.value.phone;
      if (p) return <p>{p}</p>;
      return "";
    },
    location() {
      const l = this.footerObj.value.location;
      if (l) return <p>{l}</p>;
      return "";
    },
  },
  render() {
    return (
      <footer class="footer">
        <div class="footer__wrapper">
          {this.logo}
          {this.name}
          {this.email}
          {this.phone}
          {this.location}
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
