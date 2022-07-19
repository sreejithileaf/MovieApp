/**
 * Created on July 17, 2022
 * CommonStyles - App common styles.
 */

import Constants from '../config/constants';

export default (commonStyles = {
  buttonStyle: {
    borderRadius: 5,
    backgroundColor: 'red',
  },
  noDataFoundContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDataFoundText: {
    fontSize: 14,
    fontFamily: Constants.Fonts.REGULAR,
    color: Constants.APP_TAB_COLOR,
    marginVertical: 20,
  },
  backButtonContainerStyle: {
    height: 40,
    width: 40,
    marginTop: 10,
    marginLeft: 10,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
