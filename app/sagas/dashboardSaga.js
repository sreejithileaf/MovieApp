/**
 * Created on July 17, 2022
 * Home Saga - handles home APIs
 */

import { put, call, select } from 'redux-saga/effects';
import { getTopRatedMovies } from '../api/apiMethods';
import * as loadingActions from '../actions/loadingActions';
import { showSingleAlert } from '../config/common';
import Strings from '../config/strings';


export function* getTopRatedSaga(actions) {

  yield put(loadingActions.enableLoader());

  try {
    const response = yield call(getTopRatedMovies, actions.params);
    console.log('API RESPONSE-----', response);
    yield put(loadingActions.disableLoader({}));

    if (response && response.results) {
      if (actions.getTopRatedCallback) {
        actions.getTopRatedCallback({
          status: true,
          data: response.results,
        });
      }
    } else {
      showSingleAlert(Strings.API_FAILED);
      if (actions.getTopRatedCallback) {
        actions.getTopRatedCallback({ status: false, data: [] });
      }
    }
  } catch (error) {
    console.log('API ERROR!!!!', error);
    yield put(loadingActions.disableLoader({}));
    showSingleAlert(Strings.API_FAILED);
    if (actions.getTopRatedCallback) {
      actions.getTopRatedCallback({ status: false, data: [] });
    }
  }
}
