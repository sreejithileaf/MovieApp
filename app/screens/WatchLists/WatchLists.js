/**
 * Created on July 17, 2022
 * WatchLists screen 
 */

import {
  View,
  BackHandler,
  Dimensions,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableHighlight
} from 'react-native';

import styles from './styles';
import React, { Component } from 'react';
import Images from '../../config/images';
import Constants from '../../config/constants';
import MovieRow from '../../components/MovieRow';

export default class WatchLists extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this._handleBackButton,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  /*
  * Navigate to back
  */
  _handleBackButton = () => {
    this.props.navigation.goBack();
    return true;
  };

  /*
  * Navigate to back
  */
  _didTapOnBackButton = () => {
    this.props.navigation.goBack();
  };


  /*
  * Navigates to Movie detail page
  */
  _onRowClick = item => {
    this.props.navigation.navigate('MovieDetails', { id: item.id, item });
  }


  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>

        <Text
          style={styles.headingTextStyle}>
          Movies App
        </Text>

        <Text
          style={styles.subHeadingOneTextStyle}>
          Your Watch List
        </Text>

        <View style={{
          flex: 1,
          marginTop: 30,
          marginStart: 20,
          marginEnd: 20,
        }}>

          {this.props.watchlistItems && this.props.watchlistItems.length ? (
            <FlatList
              data={this.props.watchlistItems}
              showsVerticalScrollIndicator={false}
              extraData={this.props.watchlistItems}
              renderItem={({ item }) =>

                <TouchableHighlight
                  underlayColor="#242A32"
                  style={{ justifyContent: 'center', alignContent: 'center' }}
                  key={item.id}
                  onPress={() => this._onRowClick(item)}
                >
                  <MovieRow
                    isFromDashboard={false}
                    title={item.title}
                    releasedate={item.release_date}
                    image_url={Constants.APP_IMG_URL_SMALL + item.poster_path}
                    avgrating={item.vote_average}
                  />
                </TouchableHighlight>
              }
            />
          ) : <Text style={[{
            alignSelf: 'center',
            fontSize: 14,
            fontFamily: Constants.Fonts.MEDIUM,
            color: Constants.APP_WHITE_COLOR,
          }]}>
            {'No movies in the Wish List'}
          </Text>}

        </View>


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

      </SafeAreaView>
    );
  }
}
