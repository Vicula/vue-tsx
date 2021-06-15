<script lang="tsx">
/**
 * Product Popup
 * ------------------------------------------------------------------------------
 * Product popup for showing all the specifc data
 * on our looped products
 *
 *
 * @namespace ProductPopup
 */

export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return { PhotoName: "", ItemName: "", BasePrice: "" };
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
      <article class="prod">
        <img src={this.item.PhotoName + "?w=200&h=200"} />
        <h4>{this.item.ItemName}</h4>
        <h5>{this.money}</h5>
      </article>
    );
  },
};
</script>
<style lang="scss">
/**
 *
 * @element Product Popup
 *
*/

$component: ".popup";

// @block
// -------------

#{$component} {
  display: block;
}

// @--element
// -------------

// @--modifier
// --------------
</style>
