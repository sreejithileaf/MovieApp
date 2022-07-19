/**
 * Created on JULY 16, 2022
 * Action -  index class for actions
 */

import * as dashboardActions from './dashboardActions';
import * as movieDetailsActions from './movieDetailsActions';

export const ActionCreators = Object.assign(
  {},
  dashboardActions,
  movieDetailsActions
);
