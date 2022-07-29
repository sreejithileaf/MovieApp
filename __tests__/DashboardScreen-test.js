/**
 * @format
 */

import "react-native";
import React from "react";
import DashboardScreen from "../app/screens/Dashboard/DashboardScreen";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react-native";
import configureStore from "../app/store/configureStore";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
jest.useFakeTimers();

describe("Dashboard Screen ", () => {
  const { store } = configureStore();
  const component = (
    <Provider store={store}>
      <DashboardScreen />
    </Provider>
  );
  render(component);
  const dashboardState = store.getState();
  test("Snapshot ", () => {
    expect(component).toMatchSnapshot();
  });
  it("Render without any crash", () => {
    expect(component).toBeTruthy();
  });
  it("return correct  state", () => {
    expect(dashboardState.dashboardReducer).toEqual(
      expect.objectContaining({
        mostViewedItems: [],
      })
    );
  });
  it("should execute onPress method", async () => {
    const { getByAltText } = await render(<DashboardScreen />);
    fireEvent.press(screen.getByTestId("watchlist"));
    expect(screen.getByTestId("watchlist")).toHaveBeenCalledTimes(1);
  });
});
