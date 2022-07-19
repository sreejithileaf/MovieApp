/**
 * Created on JULY 16, 2022
 * NavigationService - Navigation service methods
 */

import { NavigationActions } from '@react-navigation/compat';

let _navigator;
function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function goBack(key) {
  _navigator.dispatch(
    NavigationActions.back({
      key: key,
    }),
  );
}

export default {
  navigate,
  goBack,
  setTopLevelNavigator,
};
