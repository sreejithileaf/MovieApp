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
  container: {
    flex: 1,
    backgroundColor: Constants.APP_TAB_COLOR,
  },

  listContainer: {
    marginStart: 20,
    marginEnd: 20,
  },
  watchlistStyles: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5
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
    alignSelf: 'center',
    fontFamily: Constants.Fonts.MEDIUM,
    fontWeight: '600',
    marginStart: 10
  },

  watchListContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },

  headingTextStyle: {
    alignItems: 'flex-start',
    fontSize: 34,
    fontFamily: Constants.Fonts.MEDIUM,
    color: Constants.APP_WHITE_COLOR,
    marginTop: 50,
    marginStart: 20,
    marginEnd: 20,
  },

  subHeadingOneTextStyle: {
    alignItems: 'flex-start',
    fontSize: 16,
    fontFamily: Constants.Fonts.MEDIUM,
    color: Constants.APP_WHITE_COLOR,
    marginTop: 22,
    marginStart: 20,
    marginEnd: 20,
  },

  categoryTextStyle: {
    alignItems: 'flex-start',
    fontSize: 12,
    fontFamily: Constants.Fonts.MEDIUM,
    color: Constants.APP_LIGHTGREY_COLOR,
  },

  selectedText: {
    alignItems: 'flex-start',
    fontSize: 12,
    fontFamily: Constants.Fonts.MEDIUM,
    color: Constants.APP_TAB_COLOR,
  },


});

export default styles;
