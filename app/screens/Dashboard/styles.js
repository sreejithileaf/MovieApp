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

  watchlistStyles: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: Constants.APP_GREEN_COLOR,
    borderColor: Constants.APP_GREEN_COLOR,
    width: 135,
    height: 42,
    borderRadius: 10,
    marginEnd: 20,
  },

  categoryContainer: {
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 16,
  },

  watchlistText: {
    color: Constants.APP_TAB_COLOR,
    alignSelf: "center",
    fontFamily: Constants.Fonts.MEDIUM,
    fontWeight: "600",
    marginStart: 10,
  },

  watchListContainer: {
    position: "absolute",
    right: 0,
    bottom: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  watchListImageStyle: {
    alignSelf: "center",
    marginStart: 20,
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

  categoryTextStyle: {
    alignItems: "flex-start",
    fontSize: 12,
    fontFamily: Constants.Fonts.MEDIUM,
    color: Constants.APP_LIGHTGREY_COLOR,
  },

  selectedText: {
    alignItems: "flex-start",
    fontSize: 12,
    fontFamily: Constants.Fonts.MEDIUM,
    color: Constants.APP_TAB_COLOR,
  },

  categoryListStyle: {
    flexGrow: 0,
  },

  movieListStyle: {
    flex: 1,
    marginTop: 30,
    marginStart: 20,
    marginEnd: 20,
  },

  movieListContentStyle: {
    justifyContent: "center",
    alignContent: "center",
  },
});

export default styles;
