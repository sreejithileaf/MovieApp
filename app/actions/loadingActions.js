/**
 * Created on June 18, 2022
 * Loading - Actions for loading status
 */

import * as types from './types';

export function enableLoader() {
  return {
    type: types.ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.DISABLE_LOADER,
  };
}
