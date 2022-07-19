/**
 * Created on July 17, 2022
 * MovieRow - Custom row for showing movie data
 */

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Constants from '../config/constants';
import Images from '../config/images';

const MovieRow = ({ isFromDashboard, isWatchListItems, title, releasedate, image_url, avgrating }) => (


  <View style={styles.container}>
    <Image style={styles.imgStyle}
      source={{ uri: image_url }} />
    <View style={styles.containertextStyle}>
      <Text style={[styles.innerTextStyle, { fontWeight: '500' }]}>
        {"Title:"}
      </Text>
      <Text style={[styles.innerTextStyle, { fontWeight: '400' }]}>
        {title}
      </Text>

      <Text style={[styles.innerTextStyle, { marginTop: 5, fontWeight: '500' }]}>
        {"Release Date:"}
      </Text>
      <Text style={[styles.innerTextStyle, { fontWeight: '400' }]}>
        {releasedate}
      </Text>

      <Text style={[styles.innerTextStyle, { marginTop: 5, fontWeight: '500' }]}>
        {"Average Rating:"}
      </Text>
      <Text style={[styles.innerTextStyle, { fontWeight: '400' }]}>
        {avgrating}
      </Text>

    </View>
    <View style={styles.rightContainerStyle}>
      <Image style={[styles.drawableRightOne, { alignSelf: 'flex-end' }]}
        source={isFromDashboard && isWatchListItems ? Images.watchlist_green : !isFromDashboard ? Images.watchlist_green : Images.watchlist_white} />

      {isFromDashboard ? (
        <View>
          <Image style={[styles.drawableRightTwo, { alignSelf: 'flex-end' }]}
            source={isWatchListItems ? Images.star_green : Images.star_white} />

          <Text style={isWatchListItems ?
            [styles.innerTextStyle, { color: Constants.APP_GREEN_COLOR, fontWeight: '400', marginTop: 5, alignSelf: 'flex-end' }] :
            [styles.innerTextStyle, { color: Constants.APP_WHITE_COLOR, fontWeight: '400', marginTop: 5, alignSelf: 'flex-end' }]}>
            {avgrating}
          </Text>

        </View>
      ) : (

        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Text style={[styles.innerTextStyle, { fontWeight: '400', color: Constants.APP_GREEN_COLOR }]}>
            {"Read more"}
          </Text>
        </View>
      )}
    </View>
  </View >
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 18
  },
  innerTextStyle: {
    fontSize: 11,
    color: Constants.APP_WHITE_COLOR,
    fontFamily: Constants.Fonts.MEDIUM,
  },
  containertextStyle: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 20,
  },
  rightContainerStyle: {
    flexDirection: 'column',
  },
  description: {
    fontSize: 11,
    fontStyle: 'italic',
  },
  imgStyle: {
    height: 125,
    width: 95,
    borderRadius: 15
  },

  drawableRightOne: {
    height: 24,
    width: 18,
  },
  drawableRightTwo: {
    height: 21,
    width: 21,
    marginTop: 20,
  },
});

export default MovieRow;