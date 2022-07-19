/**
 * Created on July 16, 2022
 * DashboardScreen - DashboardScreen container
 */

import { connect } from 'react-redux';
import DashboardScreen from './DashboardScreen';
import React, { Component } from 'react';
import * as getTopRated from '../../actions/dashboardActions';

class DashboardScreenContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <DashboardScreen {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.loadingReducer.isLoading,
    watchlistItems: state.watchlistReducer.watchlistItems
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTopRatedAction: (params, getTopRatedCallback) => {
      dispatch(getTopRated.getTopRated(params, getTopRatedCallback));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardScreenContainer);
