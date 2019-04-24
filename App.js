/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Reducer from './src/Redux/Reducer'
import AppNavigator from './src/AppNavigation'
import LibraryList2 from './src/Component/LibraryList2';

export default class App extends Component {
  render() {
    return (
      <Provider store = {createStore(Reducer)}>
        <AppNavigator />
        {/* <LibraryList2 /> */}
      </Provider>
    );
  }
}


