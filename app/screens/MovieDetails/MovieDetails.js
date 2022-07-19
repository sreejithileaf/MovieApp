/**
 * Created on July 17, 2022
 * Movie Details screen 
 */


import {
  View,
  BackHandler,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ToastAndroid,
  Alert
} from 'react-native';

import styles from './styles';
import React, { Component } from 'react';
import Images from '../../config/images';
import Constants from '../../config/constants';
import { ScrollView } from 'react-native-gesture-handler';

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieData: '',
      isWatchlistItem: false
    };
  }

  /*
  * Fetch movie details on page load
  */

  componentDidMount() {

    const { id } = this.props.navigation.state.params
    const { watchlistItems } = this.props
    let filterData = watchlistItems.filter(item => item.id == id)

    this.setState({ isWatchlistItem: filterData.length > 0 })
    this.props.getMovieDetailsAction(id, ({ data, status }) => {
      if (status) {
        console.log('MOVIE DETAIL SCREEN', data);
        this.setState({
          movieData: data
        });
      }
    });

    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this._handleBackButton,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  /*
  * Shows a toast/alert message when movie is added/removed from Watchlist
  */
  _notifyMessage(msg) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT)
    } else {
      Alert.alert(msg);
    }
  }

  /*
 * Navigates to back
 */
  _handleBackButton = () => {
    this.props.navigation.goBack();
    return true;
  };

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

    const { item, id } = this.props.navigation.state.params
    const { watchlistItems, updateWatchlist } = this.props

    const { isWatchlistItem } = this.state
    let updatedWatchListArray = []

    if (isWatchlistItem) {
      let tempArray = [...watchlistItems]
      let indexFound = -1
      tempArray.map((obj, index) => {
        if (obj.id == id) {
          indexFound = index
        }
      })
      if (indexFound > -1)
        tempArray.splice(indexFound, 1)

      updatedWatchListArray = tempArray

    } else {
      updatedWatchListArray = [...watchlistItems, ...[item]]
    }


    updateWatchlist(updatedWatchListArray)
    this.setState({ isWatchlistItem: !this.state.isWatchlistItem })
    this._notifyMessage(isWatchlistItem ? "Removed from Watchlist" : "Added to Watchlist")

  };
  render() {

    const {
      movieData,
      isWatchlistItem
    } = this.state;

    return (
      <SafeAreaView style={styles.safeContainer}>
        <ScrollView>
          <Image
            style={styles.posterStyle}
            source={{ uri: Constants.APP_IMG_URL_LARGE + movieData.poster_path }}>
          </Image>

          <View style={styles.movieTitleContainer}>

            <Image
              style={styles.imgStyle}
              source={{ uri: Constants.APP_IMG_URL_LARGE + movieData.poster_path }}>
            </Image>

            <Text style={[styles.movieTitleTextStyle, { fontWeight: '600' }]}>
              {movieData.title}
            </Text>

          </View>


          <FlatList
            style={{ flexGrow: 0, marginTop: 15 }}
            horizontal={true}
            data={movieData.genres}
            keyExtractor={(time, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <View style={styles.listContainer}>
                  {!!item.name && (
                    <TouchableOpacity style={styles.genreContainer}>
                      <Text
                        style={styles.genreTextStyle}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            }}
          />

          <View style={styles.movieTitleContainer}>
            <Text style={[styles.movieTextStyle, { fontSize: 14, width: 90, marginTop: 15 }]}>
              {'About Movie'}
            </Text>
            <View style={styles.thinSeparator} />

            <Text style={[styles.movieTextStyle, { fontSize: 12, marginTop: 15 }]}>
              {'Overviews:'}
            </Text>

            <Text style={[styles.movieTextStyle, { fontSize: 12, marginTop: 5 }]}>
              {movieData.overview}
            </Text>

            <Text style={[styles.movieTextStyle, { fontSize: 12, marginTop: 12 }]}>
              {'Release Date:'}
            </Text>

            <Text style={[styles.movieTextStyle, { fontSize: 12 }]}>
              {movieData.release_date}
            </Text>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, flexDirection: 'column', marginTop: 12, alignSelf: 'flex-start' }}>
                <Text style={[styles.movieTextStyle, { fontSize: 12 }]}>
                  {'Average Rating:'}
                </Text>

                <Text style={[styles.movieTextStyle, { fontSize: 12 }]}>
                  {movieData.vote_average}
                </Text>
              </View>

              <View style={{ flex: 1, flexDirection: 'column', marginTop: 12, alignItems: 'flex-start' }}>
                <Text style={[styles.movieTextStyle, { fontSize: 12 }]}>
                  {'Rate Count:'}
                </Text>

                <Text style={[styles.movieTextStyle, { fontSize: 12 }]}>
                  {movieData.vote_count}
                </Text>
              </View>

            </View>

            <Text style={[styles.movieTextStyle, { fontSize: 12, marginTop: 12 }]}>
              {'Popularity:'}
            </Text>

            <Text style={[styles.movieTextStyle, { fontSize: 12 }]}>
              {movieData.popularity}
            </Text>

            <View style={{ flexDirection: 'row' }}>

              <View style={{ flex: 1, flexDirection: 'column', alignSelf: 'flex-start' }}>
                <TouchableOpacity style={styles.backButtonContainer}
                  onPress={() => this._didTapOnBackButton()}>
                  <Image
                    style={{ width: 16, height: 14, alignSelf: 'center', justifyContent: 'center' }}
                    source={Images.back}>
                  </Image>

                  <Text style={[styles.movieTextStyle, { color: Constants.APP_LIGHTGREY_COLOR, marginStart: 10, fontSize: 14, alignSelf: 'center' }]}>
                    {'Back'}
                  </Text>
                </TouchableOpacity>
              </View>


              <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                <TouchableOpacity style={styles.watchListContainer}
                  onPress={() => this._addToWatchList()}>
                  <Image
                    style={{ width: 14, height: 18, alignSelf: 'center', justifyContent: 'center' }}
                    source={isWatchlistItem ? Images.watchlist_dark_tick : Images.watchlist_dark}>
                  </Image>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
