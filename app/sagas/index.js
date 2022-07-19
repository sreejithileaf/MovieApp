/**
 * Created on July 17, 2022
 * Sagas -  Redux saga class init.
 */

import * as types from '../actions/types';

import { getTopRatedSaga } from './dashboardSaga';
import { getMovieDetailsSaga } from './getMovieDetailsSaga';


import { takeEvery, all, takeLatest } from 'redux-saga/effects';

export default function* watch() {
  yield all([
    takeLatest(types.GET_TOP_RATED, getTopRatedSaga),
    takeLatest(types.GET_MOVIE_DETAILS, getMovieDetailsSaga)
  ]);
}
