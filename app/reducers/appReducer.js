/**
 * Created on JULY 17, 2022 * 
 * App Reducer - handles app common states
 */

import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
const { width, height } = Dimensions.get('window');
import { Dimensions } from 'react-native';

const initialState = {
  isNetworkAvailable: false,
};

export const appReducer = createReducer(initialState, {
  [types.APP_NETWORK_STATUS](state, action) {
    return {
      ...state,
      isNetworkAvailable: action.networkStatus,
    };
  },
});
