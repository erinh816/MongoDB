import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <ImageBackground scource={require('./assets/eye.png')}
        style={styles.container}>
        <Text style={styles.text}>ClarifEYE</Text>
        <Image style={styles.image} source={require('./eye.png')} />
        <Button title='BUTTON' />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2BB05',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
  },
  image: {
    width: 200,
    height: 200
  }
});

export default;
