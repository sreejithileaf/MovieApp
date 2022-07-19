/**
 * Created on July 16, 2022
 * Home Reducer - handles dashboard screen data states
 */

import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
import { Dimensions } from 'react-native';
import { act } from 'react-test-renderer';

const initialState = {
  watchlistItems: [],
};

export const watchlistReducer = createReducer(initialState, {
  [types.UPDATE_WATCHLIST](state, action) {
    return {
      ...state,
      watchlistItems: action.watchlist,
    };
  }
});
