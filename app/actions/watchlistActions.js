/**
 * Created on JULY 17, 2022
 * DashboardActions - Actions for dashboard data operations
 */

import * as types from './types';

export function updateWatchlist(watchlist) {
  return {
    type: types.UPDATE_WATCHLIST,
    watchlist,
  };
}


