<script lang="tsx">
/**
 * Loading
 * ------------------------------------------------------------------------------
 * Loading state where we fetch data before homepage
 *
 *
 *
 * @namespace Loading
 */
import { App, defineComponent, h } from "vue";

export default {
  install: (app: App): void => {
    app.component(
      "Loading",
      defineComponent({
        computed: {
          buildButton() {
            return <div class="testComp">test does this work</div>;
          },
        },
        render() {
          const test1 = <div class="testComp">test does this work</div>;
          const test2 = <div class="testComp">test does this work</div>;
          const test3 = h("p", {}, "TEST 3");
          return (
            <div class="wrapper">
              {test1} {test2} {test3}
            </div>
          );
        },
      })
    );
  },
};
</script>
<style lang="scss">
/**
 *
 * @element Loading
 *
*/

$component: ".loading";

// @block
// -------------

// @--element
// -------------

// @--modifier
// --------------
</style>
