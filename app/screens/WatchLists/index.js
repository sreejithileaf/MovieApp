/**
 * Created on July 16, 2022
 * DashboardScreen - DashboardScreen container
 */

import { connect } from "react-redux";
import React, { Component } from "react";
import WatchLists from "./WatchLists";

class WatchListsScreenContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <WatchLists {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.loadingReducer.isLoading,
    watchlistItems: state.watchlistReducer.watchlistItems,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetailsAction: (params, getMovieDetailsCallback) => {
      dispatch(
        getMovieDetails.getMovieDetails(params, getMovieDetailsCallback)
      );
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchListsScreenContainer);
