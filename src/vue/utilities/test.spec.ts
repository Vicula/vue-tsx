import { mount } from "@vue/test-utils";
import Test from "./test.vue";

describe("HelloWorld", () => {
  it("should display header text", () => {
    const msg = "TEST 3";
    const wrapper = mount(Test, { props: { msg } });

    expect(wrapper.find(".wrapper p").text()).toEqual(msg);
  });
});
