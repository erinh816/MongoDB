import React from 'react';
// import PropTypes from '../../Library/Caches/typescript/2.9/node_modules/@types/prop-types';
import { Button, NavigatorIOS, Text, View } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';
import CameraView from './components/CameraView';
import HomeScreen from './components/HomeScreen';
import CameraScreen from './components/CameraScreen';
import GalleryScreen from './components/GalleryScreen';
import Photo from './components/Photo';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  CameraView: { screen: CameraView },
  CameraScreen: { screen: CameraScreen },
  GalleryScreen: { screen: GalleryScreen },
  Photo: { screen: Photo }
});


export default App;