import React from 'react';
import PropTypes from 'prop-types';
import { Button, NavigatorIOS, Text, View } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';
import CameraView from './components/CameraView';
import HomeScreen from './components/HomeScreen';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  CameraView: { screen: CameraView },
});

export default App;