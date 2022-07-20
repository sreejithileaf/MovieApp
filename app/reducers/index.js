/**
 * Created on July 17, 2022
 * Reducer index - Combine reducers
 */

import * as dashboardReducer from "./dashboardReducer";
import * as loadingReducer from "./loadingReducer";
import * as watchlistReducer from "./watchlistReducer";

export default Object.assign(
  dashboardReducer,
  loadingReducer,
  watchlistReducer
);
