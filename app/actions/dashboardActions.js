/**
 * Created on JULY 17, 2022
 * DashboardActions - Actions for dashboard data operations
 */

import * as types from './types';

export function getTopRated(params, getTopRatedCallback) {
  return {
    type: types.GET_TOP_RATED,
    params,
    getTopRatedCallback,
  };
}


