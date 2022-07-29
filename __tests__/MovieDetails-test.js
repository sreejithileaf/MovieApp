/**
 * @format
 */

import "react-native";
import React from "react";
import MovieDetails from "../app/screens/MovieDetails/MovieDetails";
import constants from "../app/config/constants";
import { Image } from "react-native";
import { shallow, configure, mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../app/store/configureStore";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import { render, container, screen } from "@testing-library/react-native";
import { toHaveStyle } from "@testing-library/jest-native";
import "@testing-library/jest-native/extend-expect";

describe("Movie Details Screen ", () => {
  const wrapper = renderer.create(<MovieDetails />).toJSON();

  test("Snapshot ", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("Image must contain an src", async () => {
    const { getByAltText } = await render(<MovieDetails />);

    const image = screen.getByTestId("poster");
    expect(image.props.source.uri).toContain(
      "https://image.tmdb.org/t/p/w300undefined"
    );
  });
  it("Image must have a style", async () => {
    const { getByAltText } = await render(<MovieDetails />);

    const image = screen.getByTestId("sub_poster");
    expect(image).toHaveStyle({
      height: 125,
      width: 95,
      borderRadius: 15,
      position: "absolute",
      top: -60,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: "flex-start",
      alignItems: "flex-start",
    });
  });
  it("It must have a about movie section", async () => {
    const { getByText } = render(<MovieDetails />);
    getByText("About Movie", { exact: false });
  });
  it("It must have a about Overviews section", async () => {
    const { getByText } = render(<MovieDetails />);
    getByText("Overviews", { exact: false });
  });
  it("It must have a Release Date", async () => {
    const { getByText } = render(<MovieDetails />);
    getByText("Release Date:", { exact: true });
  });
  it("It must have a about movie rating section", async () => {
    const { getByText } = render(<MovieDetails />);
    getByText("Average Rating:", { exact: false });
  });
});
