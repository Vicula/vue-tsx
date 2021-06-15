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
  inject: ["popupObj"],
  computed: {
    show() {
      return this.popupObj.value.toggle;
    },
    item() {
      return this.popupObj.value.activeItem;
    },
    pricekey() {
      return this.popupObj.value.priceKey;
    },
    name() {
      return this.item.ItemName;
    },
    img() {
      return this.item.PhotoName + "?w=400&h=400";
    },
    price() {
      return `$${parseInt(this.item[this.pricekey]).toFixed(2)}`;
    },
    id() {
      return this.item.ItemID;
    },
    description() {
      return this.item.Description;
    },
    dimensions() {
      return this.item.Dimensions;
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  render() {
    return this.show ? (
      <div class="background">
        <section class="popup">
          <div class="popup__wrapper">
            <span onClick={this.close} class="popup__close">
              X
            </span>
            <div class="popup__img">
              <img src={this.img} />
            </div>
            <aside class="popup__content">
              <h2>{this.name}</h2>
              <p>{this.id}</p>
              <p>{this.price}</p>
              <p>{this.description}</p>
              <p>{this.dimensions}</p>
            </aside>
          </div>
        </section>
      </div>
    ) : (
      <div class="popup--closed"></div>
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  background: white;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    height: auto;
    width: 80%;
  }

  @media screen and (min-width: 1024px) {
    height: auto;
    width: 60%;
  }
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.3);
}

// @--element
// -------------

#{$component}__close {
  position: absolute;
  top: 10px;
  right: 5px;
  color: #000;
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 5px;
}

#{$component}__wrapper {
  position: relative;
  display: block;
  width: 100%;
  padding: 40px 0 20px;

  @media screen and (min-width: 1024px) {
    display: flex;
    padding: 50px 0;
  }
}

#{$component}__img {
  width: 60%;
  margin: auto;
  img {
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    padding: 50px;
  }
}

#{$component}__content {
  width: 85%;
  margin: auto;

  @media screen and (min-width: 1024px) {
    padding-right: 50px;
  }
}

// @--modifier
// --------------
</style>
