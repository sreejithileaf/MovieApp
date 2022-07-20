/**
 * Created on July 17, 2022
 * WatchLists screen
 */

import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableHighlight,
} from "react-native";

import styles from "./styles";
import React, { Component } from "react";
import Images from "../../config/images";
import Constants from "../../config/constants";
import MovieRow from "../../components/MovieRow";

export default class WatchLists extends Component {
  constructor(props) {
    super(props);
  }

  /*
   * Navigate to back
   */
  _didTapOnBackButton = () => {
    this.props.navigation.goBack();
  };

  /*
   * Navigates to Movie detail page
   */
  _onRowClick = (item) => {
    this.props.navigation.navigate("MovieDetails", { id: item.id, item });
  };

  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <Text style={styles.headingTextStyle}>Movies App</Text>
        <Text style={styles.subHeadingOneTextStyle}>Your Watch List</Text>

        {this.props.watchlistItems && this.props.watchlistItems.length ? (
          <FlatList
            style={styles.watchListStyle}
            data={this.props.watchlistItems}
            showsVerticalScrollIndicator={false}
            extraData={this.props.watchlistItems}
            renderItem={({ item }) => (
              <TouchableHighlight
                underlayColor={Constants.APP_TAB_COLOR}
                style={styles.watchListContentStyle}
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
            )}
          />
        ) : (
          <View style={styles.noMovieContainerStyle}>
            <Text style={styles.noMovietextStyle}>
              {"No movies in the Wish List"}
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => this._didTapOnBackButton()}
        >
          <Image style={styles.backImageStyle} source={Images.back}></Image>
          <Text style={[styles.movieTextStyle, styles.backTextStyle]}>
            {"Back"}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
