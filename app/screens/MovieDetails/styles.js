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
  posterStyle: {
    height: 210,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },

  movieTitleContainer: {
    flexDirection: "column",
    marginStart: 20,
    marginEnd: 20,
  },

  imgStyle: {
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
  },

  movieTitleTextStyle: {
    fontSize: 18,
    color: Constants.APP_WHITE_COLOR,
    fontFamily: Constants.Fonts.BOLD,
    marginStart: 110,
    marginTop: 15,
  },

  movieTextStyle: {
    color: Constants.APP_WHITE_COLOR,
    fontFamily: Constants.Fonts.REGULAR,
    fontWeight: "500",
  },

  genreTextStyle: {
    alignItems: "flex-start",
    fontSize: 12,
    fontFamily: Constants.Fonts.MEDIUM,
    color: Constants.APP_LIGHTGREY_COLOR,
  },
  genreContainer: {
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: Constants.APP_GENRES_COLOR,
    borderRadius: 16,
  },

  backButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: 105,
    height: 42,
    backgroundColor: Constants.APP_GENRES_COLOR,
    borderRadius: 16,
  },

  watchListContainer: {
    justifyContent: "center",
    width: 42,
    height: 42,
    backgroundColor: Constants.APP_GREEN_COLOR,
    borderRadius: 16,
  },

  thinSeparator: {
    borderTopColor: Constants.APP_GENRES_COLOR,
    width: 90,
    borderTopWidth: 4,
    marginTop: 5,
  },
  genreListStyle: {
    flexGrow: 0,
    marginTop: 15,
  },
  aboutMovieStyle: {
    fontSize: 14,
    width: 90,
    marginTop: 15,
  },

  overviewStyle: {
    fontSize: 12,
    marginTop: 15,
  },

  overviewContentStyle: {
    fontSize: 12,
    marginTop: 5,
  },

  releaseStyle: {
    fontSize: 12,
    marginTop: 12,
  },
  releaseContentStyle: {
    fontSize: 12,
  },

  rowStyle: {
    flexDirection: "row",
  },
  avgRatingContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: 12,
    alignSelf: "flex-start",
  },

  bottomContainerStyle: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  backButtonContainerStyle: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "flex-start",
  },
  backButtonImageStyle: {
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
  watchListContainerStyle: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end",
  },
  watchListImageStyle: {
    width: 14,
    height: 18,
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default styles;
