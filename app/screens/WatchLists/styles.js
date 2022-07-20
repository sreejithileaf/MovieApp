/**
 * Created on July 17, 2022
 * Dashboard Screen - About Us Screen Styles
 */

import { StyleSheet } from "react-native";
import Constants from "../../config/constants";

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Constants.APP_TAB_COLOR,
  },
  headingTextStyle: {
    alignItems: "flex-start",
    fontSize: 34,
    fontFamily: Constants.Fonts.MEDIUM,
    color: Constants.APP_WHITE_COLOR,
    marginTop: 50,
    marginStart: 20,
    marginEnd: 20,
  },

  subHeadingOneTextStyle: {
    alignItems: "flex-start",
    fontSize: 16,
    fontFamily: Constants.Fonts.MEDIUM,
    color: Constants.APP_WHITE_COLOR,
    marginTop: 22,
    marginStart: 20,
    marginEnd: 20,
  },

  backButtonContainer: {
    position: "absolute",
    bottom: 10,
    right: 30,
    flexDirection: "row",
    justifyContent: "center",
    width: 105,
    height: 42,
    backgroundColor: Constants.APP_GENRES_COLOR,
    borderRadius: 16,
  },

  movieTextStyle: {
    color: Constants.APP_WHITE_COLOR,
    fontFamily: Constants.Fonts.REGULAR,
    fontWeight: "500",
  },

  watchListStyle: {
    flex: 1,
    marginTop: 30,
    marginStart: 20,
    marginEnd: 20,
  },

  watchListContentStyle: {
    justifyContent: "center",
    alignContent: "center",
  },

  noMovieContainerStyle: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },

  noMovietextStyle: {
    fontSize: 14,
    fontFamily: Constants.Fonts.MEDIUM,
    color: Constants.APP_WHITE_COLOR,
  },

  backImageStyle: {
    width: 16,
    height: 14,
    alignSelf: "center",
    justifyContent: "center",
  },

  backTextStyle: {
    color: Constants.APP_LIGHTGREY_COLOR,
    marginStart: 10,
    fontSize: 14,
    alignSelf: "center",
  },
});

export default styles;
