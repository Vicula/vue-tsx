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
  props: {
    item: {
      type: Object,
      default: () => {
        return { ProductID: "", PhotoName: "", ItemName: "" };
      },
    },
  },
  computed: {
    money(): string {
      return `$${parseInt(this.item.BasePrice).toFixed(2)}`;
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
        <img src={this.item.PhotoName + "?w=200&h=200"} />
        <h3>{this.item.ItemName}</h3>
        <h5>{this.money}</h5>
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

  img {
    width: 100%;
    border-radius: 5%;
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
