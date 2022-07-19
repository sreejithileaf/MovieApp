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

  backButtonContainer: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    width: 105,
    height: 42,

    backgroundColor: Constants.APP_GENRES_COLOR,
    borderRadius: 16,
  },

  movieTextStyle: {
    color: Constants.APP_WHITE_COLOR,
    fontFamily: Constants.Fonts.REGULAR,
    fontWeight: '500'
  },
});

export default styles;
