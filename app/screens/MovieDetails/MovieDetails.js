/**
 * Created on July 17, 2022
 * Movie Details screen
 */

import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ToastAndroid,
} from "react-native";

import styles from "./styles";
import React, { Component } from "react";
import Images from "../../config/images";
import Constants from "../../config/constants";
import { ScrollView } from "react-native";
import HudView from "../../components/hudView";

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieData: "",
      isWatchlistItem: false,
    };
  }

  /*
   * Fetch movie details on page load
   */

  componentDidMount = async () => {
    const { id } = await this.props.navigation.state.params;
    const { watchlistItems } = this.props;
    let filterData = watchlistItems.filter((item) => item.id == id);
    this.setState({ isWatchlistItem: filterData.length > 0 });
    this.props.getMovieDetailsAction(id, ({ data, status }) => {
      if (status) {
        console.log("MOVIE DETAIL SCREEN", data);
        this.setState({
          movieData: data,
        });
      }
    });
  };

  /*
   * Shows a toast/alert message when movie is added/removed from Watchlist
   */
  _notifyMessage(msg) {
    if (Platform.OS === "android") {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      alert(msg);
    }
  }

  /*
   * Navigates to back
   */
  _didTapOnBackButton = () => {
    this.props.navigation.goBack();
  };

  /*
   * Add/Remove movie item to watchlist
   * Fetch watchlist data from reducer and modify it and dispatch to reducer
   */
  _addToWatchList = () => {
    const { item, id } = this.props.navigation.state.params;
    const { watchlistItems, updateWatchlist } = this.props;
    const { isWatchlistItem } = this.state;
    let updatedWatchListArray = [];
    if (isWatchlistItem) {
      let tempArray = [...watchlistItems];
      let indexFound = -1;
      tempArray.map((obj, index) => {
        if (obj.id == id) {
          indexFound = index;
        }
      });
      if (indexFound > -1) tempArray.splice(indexFound, 1);
      updatedWatchListArray = tempArray;
    } else {
      updatedWatchListArray = [...watchlistItems, ...[item]];
    }
    updateWatchlist(updatedWatchListArray);
    this.setState({ isWatchlistItem: !this.state.isWatchlistItem });
    this._notifyMessage(
      isWatchlistItem ? "Removed from Watchlist" : "Added to Watchlist"
    );
  };
  render() {
    const { movieData, isWatchlistItem } = this.state;
    const { isLoading } = this.props;

    return (
      <SafeAreaView style={styles.safeContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            style={styles.posterStyle}
            source={{
              uri: Constants.APP_IMG_URL_LARGE + movieData.poster_path,
            }}
            testID={"poster"}
          ></Image>

          <View style={styles.movieTitleContainer}>
            <Image
              style={styles.imgStyle}
              source={{
                uri: Constants.APP_IMG_URL_LARGE + movieData.poster_path,
              }}
              testID={"sub_poster"}
            ></Image>

            <Text style={styles.movieTitleTextStyle} testID={"title"}>
              {movieData.title}
            </Text>
          </View>

          <FlatList
            style={styles.genreListStyle}
            horizontal={true}
            data={movieData.genres}
            renderItem={({ item, key }) => {
              return (
                <View
                  style={[
                    {
                      marginLeft: key == 0 ? 20 : 10,
                      marginRight: key == movieData.genres.length - 1 ? 20 : 10,
                    },
                  ]}
                >
                  {!!item.name && (
                    <View style={styles.genreContainer}>
                      <Text style={styles.genreTextStyle}>{item.name}</Text>
                    </View>
                  )}
                </View>
              );
            }}
          />

          <View style={styles.movieTitleContainer}>
            <Text style={[styles.movieTextStyle, styles.aboutMovieStyle]}>
              {"About Movie"}
            </Text>

            <View style={styles.thinSeparator} />

            <Text style={[styles.movieTextStyle, styles.overviewStyle]}>
              {"Overviews:"}
            </Text>

            <Text style={[styles.movieTextStyle, styles.overviewContentStyle]}>
              {movieData.overview}
            </Text>

            <Text style={[styles.movieTextStyle, styles.releaseStyle]}>
              {"Release Date:"}
            </Text>

            <Text style={[styles.movieTextStyle, styles.releaseContentStyle]}>
              {movieData.release_date}
            </Text>

            <View style={styles.rowStyle}>
              <View style={styles.avgRatingContainer}>
                <Text
                  style={[styles.movieTextStyle, styles.releaseContentStyle]}
                >
                  {"Average Rating:"}
                </Text>

                <Text
                  style={[styles.movieTextStyle, styles.releaseContentStyle]}
                >
                  {movieData.vote_average}
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  marginTop: 12,
                  alignItems: "flex-start",
                }}
              >
                <Text style={[styles.movieTextStyle, { fontSize: 12 }]}>
                  {"Rate Count:"}
                </Text>

                <Text style={[styles.movieTextStyle, { fontSize: 12 }]}>
                  {movieData.vote_count}
                </Text>
              </View>
            </View>

            <Text style={[styles.movieTextStyle, styles.releaseStyle]}>
              {"Popularity:"}
            </Text>

            <Text style={[styles.movieTextStyle, styles.releaseContentStyle]}>
              {movieData.popularity}
            </Text>
          </View>
        </ScrollView>

        <View style={styles.bottomContainerStyle}>
          <View style={styles.backButtonContainerStyle}>
            <TouchableOpacity
              style={styles.backButtonContainer}
              onPress={() => this._didTapOnBackButton()}
            >
              <Image
                style={styles.backButtonImageStyle}
                source={Images.back}
              ></Image>

              <Text style={[styles.movieTextStyle, styles.backTextStyle]}>
                {"Back"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.watchListContainerStyle}>
            <TouchableOpacity
              style={styles.watchListContainer}
              onPress={() => this._addToWatchList()}
              testID={"watchlist"}
            >
              <Image
                style={styles.watchListImageStyle}
                source={
                  isWatchlistItem
                    ? Images.watchlist_dark_tick
                    : Images.watchlist_dark
                }
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
        {isLoading && <HudView />}
      </SafeAreaView>
    );
  }
}
