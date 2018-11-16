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
import KitaCamera from './components/KitaCamera';
import rootText from './components/rootText';

import Photo from './components/Photo';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  KitaCamera: { screen: KitaCamera },
  rootText: { screen: rootText }
  // CameraView: { screen: CameraView }
  // CameraScreen: { screen: CameraScreen },
  // GalleryScreen: { screen: GalleryScreen },
  // Photo: { screen: Photo },
  // GoogleText: { screen: GoogleText }
});

export default App;

