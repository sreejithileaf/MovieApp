/**
 * Created on July 16, 2022
 * Home Reducer - handles dashboard screen data states
 */

import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
const { width, height } = Dimensions.get('window');
import { Dimensions } from 'react-native';
import { act } from 'react-test-renderer';

const initialState = {
  mostViewedItems: [],
};

export const dashboardReducer = createReducer(initialState, {
});
