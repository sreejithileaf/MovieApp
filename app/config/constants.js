/**
 * Created on July 16, 2022
 * Constants - Constant data of the App.
 */

import { Dimensions, Platform } from "react-native";

export default constants = {
  APP_NAME: "MovieApp",
  APP_BASE_URL: "http://api.themoviedb.org/3/movie/",
  APP_IMG_URL_SMALL: "https://image.tmdb.org/t/p/w185",
  APP_IMG_URL_LARGE: "https://image.tmdb.org/t/p/w300",

  APP_BASE_HEIGHT: 896,
  APP_BASE_WIDTH: 414,

  Fonts: {
    REGULAR: Platform.OS === "ios" ? "Poppins-Regular" : "Poppins_Regular",

    BOLD: Platform.OS === "ios" ? "Poppins-Regular" : "Poppins_Bold",

    MEDIUM: Platform.OS === "ios" ? "Poppins-Regular" : "Poppins_Medium",
  },

  APP_THEME_COLOR: "rgb(251,125,29)",
  APP_WHITE_COLOR: "#FFFFFF",
  APP_LIGHTGREY_COLOR: "#EEEEEE",
  APP_GENRES_COLOR: "#3A3F47",
  APP_GREEN_COLOR: "#4FCCA3",
  APP_TAB_COLOR: "#242A32",
  APP_BLACK_COLOR: "rgb(59,59,59)",
  APP_DARK_BLACK_COLOR: "rgb(32,32,32)",
  APP_TEXT_GRAY_COLOR: "rgb(152,152,152)",

  ACTIVE_OPACITY: 0.7,

  IS_ANDROID: Platform.OS === "ios" ? false : true,

  IOS_VERSION: parseInt(Platform.Version, 10),
};
