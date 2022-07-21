/**
 * Created on JULY 16, 2022
 * Navigation - Navigation methods
 */

import React, { Component } from "react";

/** Navigation Classes */
import { createCompatNavigatorFactory } from "@react-navigation/compat";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

/** Screens */
import Dashboard from "../screens/Dashboard";
import MovieDetails from "../screens/MovieDetails";
import WatchLists from "../screens/WatchLists";
import Constants from "../config/constants";

const HomeStack = createCompatNavigatorFactory(createStackNavigator)(
  {
    MovieDetails: MovieDetails,
    Dashboard: Dashboard,
    WatchLists: WatchLists,
  },
  {
    initialRouteName: "Dashboard",

    navigationOptions: {
      gesturesEnabled: false,
    },
    headerMode: "none",
  }
);

function App() {
  return (
    <NavigationContainer
      theme={{ colors: { background: Constants.APP_TAB_COLOR } }}
    >
      <HomeStack />
    </NavigationContainer>
  );
}

export default App;
