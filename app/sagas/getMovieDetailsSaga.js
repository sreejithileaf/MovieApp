/**
 * Created on July 17, 2022
 * Movie Details Saga - handles home APIs
 */

import { put, call, select } from 'redux-saga/effects';
import { getMovieDetails } from '../api/apiMethods';
import * as loadingActions from '../actions/loadingActions';
import { showSingleAlert } from '../config/common';
import Strings from '../config/strings';


export function* getMovieDetailsSaga(actions) {

  yield put(loadingActions.enableLoader());

  try {
    const response = yield call(getMovieDetails, actions.params);
    console.log('API RESPONSE Saga', response);
    yield put(loadingActions.disableLoader({}));

    if (response && response.id) {
      if (actions.getMovieDetailsCallback) {
        actions.getMovieDetailsCallback({
          status: true,
          data: response,
        });
      }
    } else {
      showSingleAlert(Strings.API_FAILED);
      if (actions.getMovieDetailsCallback) {
        actions.getMovieDetailsCallback({ status: false, data: [] });
      }
    }
  } catch (error) {
    console.log('API ERROR!!!!', error);
    yield put(loadingActions.disableLoader({}));
    showSingleAlert(Strings.API_FAILED);
    if (actions.getMovieDetailsCallback) {
      actions.getMovieDetailsCallback({ status: false, data: [] });
    }
  }
}
