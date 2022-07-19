/**
 * Created on July 16, 2022
 * DashboardScreen 
 */

import {
  View,
  BackHandler,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableHighlight,
} from 'react-native';

import styles from './styles';
import React, { Component } from 'react';
import Images from '../../config/images';
import Constants from '../../config/constants';
import HudView from '../../components/hudView';
import MovieRow from '../../components/MovieRow';
import ApiConstants from '../../api/apiConstants';


export default class DashboardScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieData: '',
      catId: 1,
      selectedItem: 1,
      isWatchlistItem: false
    };


  }
  /* This function is used to check any of the movie item in the dashboard is already in the watchlist 
   *  Returns true if it is added in watchlist
   */
  _checkWatchListItem(id) {
    const { watchlistItems } = this.props
    let filterData = watchlistItems.filter(item => item.id == id)
    if (filterData.length > 0)
      return true;
    else
      return false;
  }

  /* Returns the types of categories 
  */
  getCategories() {
    return [
      {
        id: '1',
        category: 'Top rated',
      },
      {
        id: '2',
        category: 'Popular',
      },
      {
        id: '3',
        category: 'Now Playing',
      },
      {
        id: '4',
        category: 'Latest',
      },
      {
        id: '5',
        category: 'Upcoming',
      },
    ]
  };

  /*
  * Function is called when a user taps on movie list. This will navigate to movie details page
  */
  _onPressRow = item => {
    console.log('Movie Id--->', item.id);
    this.props.navigation.navigate('MovieDetails', { id: item.id, item });
  }

  /*
  * This function is called when user press the category buttons
   * API is called to fetch movie list based on selected category
  */
  _onPressCategory = keyItem => {
    console.log('Cat Id--->', keyItem);

    this.setState({
      catId: keyItem,
      selectedItem: keyItem
    });

    let params;
    switch (keyItem) {
      case '1':
        params = ApiConstants.API_TOP_RATED;
        break;
      case '2':
        params = ApiConstants.API_POPULAR;
        break;
      case '3':
        params = ApiConstants.API_NOW_PLAYING;
        break;
      case '4':
        params = ApiConstants.API_LATEST;
        break;
      case '5':
        params = ApiConstants.API_UPCOMING;
        break;
    }

    this.props.getTopRatedAction(params, ({ data, status }) => {
      if (status) {
        console.log('DASHBOARD SCREEN', data);
        this.setState({
          movieData: data
        });
      }
    });
  }

  componentDidMount() {
    const { catId } = this.state;

    this.props.getTopRatedAction(ApiConstants.API_TOP_RATED, ({ data, status }) => {
      if (status) {
        console.log('DASHBOARD SCREEN', data);
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
  * Navigates to watchlist screen
  */
  _openWatchList = () => {
    this.props.navigation.navigate('WatchLists');
  };

  render() {
    const { isLoading } = this.props;
    const { movieData } = this.state;
    return (
      <SafeAreaView style={styles.safeContainer}>

        <Text
          style={styles.headingTextStyle}>
          Movies App
        </Text>

        <Text
          style={styles.subHeadingOneTextStyle}>
          Find your movies
        </Text>

        <Text
          style={styles.subHeadingOneTextStyle}>
          Categories
        </Text>

        <FlatList
          extraData={this.state.selectedItem}
          style={{ flexGrow: 0, }}
          horizontal={true}
          data={this.getCategories()}
          keyExtractor={(time, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {

            return (
              <View style={styles.listContainer}>
                {!!item.category && (
                  <TouchableOpacity style={this.state.selectedItem === item.id ?
                    [styles.categoryContainer, { backgroundColor: Constants.APP_GREEN_COLOR }] :
                    [styles.categoryContainer, { backgroundColor: Constants.APP_GENRES_COLOR }]}
                    onPress={() => this._onPressCategory(item.id)}>
                    <Text
                      style={this.state.selectedItem === item.id ? styles.selectedText : styles.categoryTextStyle}>
                      {item.category}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            );
          }}
        />

        <View style={{
          flex: 1,
          flexDirection: 'row'
        }}>
          <View style={{
            flex: 1,
            marginTop: 30,
            marginStart: 20,
            marginEnd: 20,
          }}>
            <FlatList
              data={movieData}
              showsVerticalScrollIndicator={false}
              extraData={movieData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <TouchableHighlight
                    underlayColor="#242A32"
                    style={{ justifyContent: 'center', alignContent: 'center' }}
                    key={item.id}
                    onPress={() => this._onPressRow(item)}>
                    <MovieRow
                      isFromDashboard={true}
                      isWatchListItems={this._checkWatchListItem(item.id)}
                      title={item.title}
                      releasedate={item.release_date}
                      image_url={Constants.APP_IMG_URL_SMALL + item.poster_path}
                      avgrating={item.vote_average}
                    />
                  </TouchableHighlight>
                );
              }
              }
            />

          </View>

          <View style={styles.watchListContainer}>
            <TouchableOpacity
              onPress={() => this._openWatchList()}
              style={[styles.watchlistStyles,
              {
                backgroundColor: Constants.APP_GREEN_COLOR,
                borderColor: Constants.APP_GREEN_COLOR, width: 135,
                height: 42, borderRadius: 10, marginEnd: 20,
              }]}>
              <Text style={styles.watchlistText}>
                {'Watch List'}
              </Text>
              <Image style={{ alignSelf: 'center', marginStart: 20 }}
                source={Images.watchlist_dark} />
            </TouchableOpacity>
          </View>
        </View>
        {isLoading && <HudView />}
      </SafeAreaView>
    );
  }
}
