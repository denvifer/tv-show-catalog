import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import ShowTile from "./ShowTile.vue";
import { showTileMock } from "./mocks";

describe("ShowTile", () => {
  it("matches a snapshot", async () => {
    const component = await mount(ShowTile, {
      props: {
        tile: showTileMock,
      },
    });
    expect(component.html()).toMatchSnapshot();
  });
});
