/**
 * Created on JULY 18, 2022
 * MovieDetailsActions - Actions for Movie details data operations
 */

import * as types from './types';

export function getMovieDetails(params, getMovieDetailsCallback) {
  return {
    type: types.GET_MOVIE_DETAILS,
    params,
    getMovieDetailsCallback,
  };
}


