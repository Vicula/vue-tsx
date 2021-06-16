<script lang="tsx">
/**
 *
 * Product Single
 * ------------------------------------------------------------------------------
 * Single Product for the app
 *
 *
 *
 * @namespace ProductSingle
 */

export default {
  inject: ["prodObj"],
  props: {
    item: {
      type: Object,
      default: () => {
        return { ProductID: "", PhotoName: "", ItemName: "" };
      },
    },
  },
  computed: {
    money() {
      if (this.pricing)
        return <h5>{"$" + parseInt(this.item.BasePrice).toFixed(2)}</h5>;
      return "";
    },
    branding(): boolean {
      return this.prodObj.value.branding;
    },
    pricing(): boolean {
      return this.prodObj.value.pricing;
    },
    img() {
      const p = this.item.PhotoName;
      if (p) return <img class="prod__img" src={p + "?w=200&h=200"} />;
      return "";
    },
    name() {
      const n = this.item.ItemName;
      if (n) return <h3>{n}</h3>;
      return "";
    },
    logo() {
      if (this.branding)
        return <img class="prod__logo" src={this.prodObj.value.logo} />;
      return "";
    },
    content() {
      return (
        <div class="prod__wrap">
          {this.img}
          {this.name}
          {this.money}
          {this.logo}
        </div>
      );
    },
  },
  render() {
    return (
      <article
        class="prod"
        onClick={() => {
          this.$emit("popup", this.item);
        }}
      >
        {this.content}
      </article>
    );
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
  background: #eee;
  max-width: 275px;
  padding: 1.25rem;
  width: 250px;
  border-radius: 5%;
  margin: 25px 10px;
  position: relative;

  &__img {
    width: 100%;
    border-radius: 5%;
  }

  &__logo {
    position: absolute;
    width: 50px;
    padding: 10px;
    background: white;
    border-radius: 38%;
    top: 15px;
    right: 15px;
  }

  @media screen and (min-width: 768px) {
    margin: 25px;
    cursor: pointer;

    &:hover {
      transform: translateY(-10px);
      z-index: 0;
      transition: all ease 0.2s;
      filter: drop-shadow(10px 20px 10px rgba(0, 0, 0, 0.2));
    }
  }
}

// @--element
// -------------

// @--modifier
// --------------
</style>
