/**
 * @format
 */

import "react-native";
import React from "react";
import WatchLists from "../app/screens/WatchLists/WatchLists";
import Constants from "../app/config/constants";
import {
  render,
  container,
  screen,
  fireEvent,
} from "@testing-library/react-native";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

describe("Watch Lists Screen renders correctly", () => {
  const wrapper = renderer.create(<WatchLists />).toJSON();
  test("Snapshot ", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("It must have title", async () => {
    const { getByText } = render(<WatchLists />);
    getByText("Your Watch List", { exact: false });
  });
  it("Title style", async () => {
    const { getByText } = render(<WatchLists />);
    getByText("Your Watch List", { exact: false });
  });
});
