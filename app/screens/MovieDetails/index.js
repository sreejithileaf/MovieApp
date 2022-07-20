/**
 * Created on July 16, 2022
 * DashboardScreen - DashboardScreen container
 */

import { connect } from "react-redux";
import React, { Component } from "react";
import MovieDetails from "./MovieDetails";
import * as getMovieDetails from "../../actions/movieDetailsActions";
import * as watchListActions from "../../actions/watchlistActions";

class MovieDetailsScreenContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MovieDetails {...this.props} />;
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

    updateWatchlist: (watchlist) => {
      dispatch(watchListActions.updateWatchlist(watchlist));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailsScreenContainer);
