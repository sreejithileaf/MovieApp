/**
 * Created on July 17, 2022
 * AppAction - Common actions for App
 */

import * as types from './types';

export function onChangeNetworkStatus(networkStatus) {
  return {
    type: types.APP_NETWORK_STATUS,
    networkStatus,
  };
}


