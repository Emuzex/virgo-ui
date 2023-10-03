import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import ComponentA from "./ComponentA.vue";

describe("ComponentA.vue", () => {
  test("renders the component with passed props", () => {
    const msg = "test";
    const wrapper = mount(ComponentA, {
      props: { msg },
    });

    const html = wrapper.html();

    expect(html).toContain(msg);
  });
});
