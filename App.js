import React from 'react';
// import PropTypes from '../../Library/Caches/typescript/2.9/node_modules/@types/prop-types';
import { Button, NavigatorIOS, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SwipeNavigator from 'react-native-swipe-navigation';
import CameraView from './components/CameraView';
import HomeScreen from './components/HomeScreen';
import CameraScreen from './components/CameraScreen';
import GalleryScreen from './components/GalleryScreen';
import KitaCamera from './components/KitaCamera';
import rootText from './components/rootText';

import LoginScreen from './components/LoginScreen';

import Main from './components/Chat/Main';
import Chat from './components/Chat/Chat';

import BarCodeScannerExample from './components/BarCodeScannerExample';

import Photo from './components/Photo';

import Log from './components/Chat/Log';

//****************** */
// const App = createStackNavigator({
//   Home: { screen: HomeScreen },
//   KitaCamera: { screen: KitaCamera },
//   rootText: { screen: rootText },

//   Login: { screen: LoginScreen },

//   // CameraView: { screen: CameraView },

//   // CameraScreen: { screen: CameraScreen },
//   // GalleryScreen: { screen: GalleryScreen },
//   // Photo: { screen: Photo },
//   // GoogleText: { screen: GoogleText }
//   Main: { screen: Main },
//   Chat: { screen: Chat },


//   BarCodeScannerExample:{screen:BarCodeScannerExample},
  
// });
//********************** */

const App = SwipeNavigator({
  Home: {
    screen: HomeScreen,
    left: 'BarCodeScannerExample',
    right: 'KitaCamera',
    // top: 'WebView',
    bottom: 'Login'
  },
  Login: {
    screen: LoginScreen
  },
  Main: {
    screen: Main
  },
  KitaCamera: {
    screen: KitaCamera,
    top: 'CameraScreen'
  },
  CameraScreen: {
    screen: CameraScreen
  },
  BarCodeScannerExample: {
    screen: BarCodeScannerExample
  },
  // WebView: {
  //   screen: WebView
  // },
  rootText: {
    screen: rootText
  },
 
 
 
 })

export default App;

