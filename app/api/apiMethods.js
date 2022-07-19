/**
 * Created on July 17, 2022
 * API Methods defined here
 */

import ApiConstants from './apiConstants';
import Api from './index';

export function getTopRatedMovies(params) {
  return Api(params, "", 'get', null); //path, params, method, token
}

export function getMovieDetails(params) {
  return Api("", params, 'get', null);
}



