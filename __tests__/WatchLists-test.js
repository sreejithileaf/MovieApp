/**
 * @format
 */

import "react-native";
import React from "react";
import WatchLists from "../app/screens/WatchLists/WatchLists";
import Constants from "../app/config/constants";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<WatchLists />).toJSON();
  expect(tree).toMatchSnapshot();
});

// jest.mock("react-native", () => ({
//   NativeModules: {
//     RNPasscodeStatus: {
//       supported: jest.fn(),
//       status: jest.fn(),
//       get: jest.fn(),
//     },
//   },
//   StyleSheet: {
//     create: () => ({}),
//   },
//   Platform: {
//     OS: jest.fn(() => "android"),
//     version: jest.fn(() => 25),
//   },
// }));
