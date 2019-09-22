import { shallowMount } from "@vue/test-utils";
import CurrencyDashboard from "@/components/CurrencyDashboard.vue";

describe("CurrencyDashboard.vue", () => {
  it("should match current snapshot", () => {
    const wrapper = shallowMount(CurrencyDashboard);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
