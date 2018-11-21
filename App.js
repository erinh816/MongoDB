import React from 'react';
// import PropTypes from '../../Library/Caches/typescript/2.9/node_modules/@types/prop-types';
import { Button, NavigatorIOS, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import CameraView from './components/CameraView';
import HomeScreen from './components/HomeScreen';
import CameraScreen from './components/CameraScreen';
import GalleryScreen from './components/GalleryScreen';
import KitaCamera from './components/KitaCamera';
import rootText from './components/rootText';
<<<<<<< HEAD
import LoginScreen from './components/LoginScreen';
//chat
import Main from './components/Chat/Main';
import Chat from './components/Chat/Chat';
=======
//import BarcodeScanner from './components/BarCodeScanner';
import BarCodeScannerExample from './components/BarCodeScannerExample';
>>>>>>> master

import Photo from './components/Photo';
import BarCodeScanner from './components/BarCode3'
import Log from './components/Chat/Log';


const App = createStackNavigator({
  Home: { screen: HomeScreen },
  KitaCamera: { screen: KitaCamera },
  rootText: { screen: rootText },
<<<<<<< HEAD
  Login: { screen: LoginScreen },
  // CameraView: { screen: CameraView }
=======
  // CameraView: { screen: CameraView },
>>>>>>> master
  // CameraScreen: { screen: CameraScreen },
  // GalleryScreen: { screen: GalleryScreen },
  // Photo: { screen: Photo },
  // GoogleText: { screen: GoogleText }
<<<<<<< HEAD
  Main: { screen: Main },
  Chat: { screen: Chat },
  BarCodeScanner: { screen: BarCodeScanner },
  Log: { screen: Log }
=======
  //BarcodeScanner:{screen:BarcodeScanner}
  BarCodeScannerExample:{screen:BarCodeScannerExample}

>>>>>>> master
});

export default App;

