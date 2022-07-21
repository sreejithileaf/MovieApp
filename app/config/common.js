/**
 * Created on July 17, 2022
 * Common - Common functions in the App.
 */

import { Alert } from "react-native";
import Constants from "./constants";

// Method to check object is empty/null
export function isEmpty(obj) {
  // null and undefined are "empty"
  if (obj == null) return true;

  // Assume if it has a length property with a non-zero value
  // that that property is correct.
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;

  // If it isn't an object at this point
  // it is empty, but it can't be anything *but* empty
  // Is it empty?  Depends on your application.
  if (typeof obj !== "object") return true;

  // Otherwise, does it have any properties of its own?
  // Note that this doesn't handle
  // toString and valueOf enumeration bugs in IE < 9
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) return false;
  }
  return true;
}

// Method to show single alert message with 'OK' callback
export function showSingleAlert(alertMessage, okText, callbackFunction) {
  setTimeout(function () {
    Alert.alert(Constants.APP_NAME, alertMessage, [
      {
        text: okText ? okText : "Ok",
        onPress: () => {
          callbackFunction ? callbackFunction() : null;
        },
      },
    ]);
  }, 100);
}
