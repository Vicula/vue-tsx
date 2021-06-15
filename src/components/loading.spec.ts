import { mount } from "@vue/test-utils";
import Loading from "./loading.vue";

describe("HelloWorld", () => {
  it("should display header text", () => {
    const msg = "TEST 3";
    const wrapper = mount(Loading, { props: { msg } });

    expect(wrapper.find(".wrapper p").text()).toEqual(msg);
  });
});
