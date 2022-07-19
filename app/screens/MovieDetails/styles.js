/**
 * Created on July 17, 2022
 * Dashboard Screen - About Us Screen Styles
 */

import { StyleSheet } from 'react-native';
import Constants from '../../config/constants';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Constants.APP_TAB_COLOR,
  },
  posterStyle: {
    height: 210,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },

  imgContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  movieTitleContainer: {
    flexDirection: 'column',
    marginStart: 20,
    marginEnd: 20,
  },

  imgStyle: {
    height: 125,
    width: 95,
    borderRadius: 15,
    position: 'absolute',
    top: -60,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  subPosterContainer: {
    flex: 1,
    flexDirection: 'row',
    marginStart: 20,
    marginEnd: 20,
  },

  movieTitleTextStyle: {
    fontSize: 18,
    color: Constants.APP_WHITE_COLOR,
    fontFamily: Constants.Fonts.BOLD,
    marginStart: 110,
    marginTop: 15
  },

  movieTextStyle: {
    color: Constants.APP_WHITE_COLOR,
    fontFamily: Constants.Fonts.REGULAR,
    fontWeight: '500'
  },

  listContainer: {

    marginStart: 20,
    marginEnd: 20,
  },
  genreTextStyle: {
    alignItems: 'flex-start',
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
    flexDirection: 'row',
    justifyContent: 'center',
    width: 105,
    height: 42,
    marginTop: 50,
    marginBottom: 30,
    backgroundColor: Constants.APP_GENRES_COLOR,
    borderRadius: 16,
  },

  watchListContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 42,
    height: 42,
    marginTop: 50,
    marginBottom: 30,
    backgroundColor: Constants.APP_GREEN_COLOR,
    borderRadius: 16,
  },

  thinSeparator: {
    borderTopColor: Constants.APP_GENRES_COLOR,
    width: 90,
    borderTopWidth: 4,
    marginTop: 5,
  },
});

export default styles;
