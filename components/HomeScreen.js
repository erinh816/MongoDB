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


export default class HomeScreen extends React.Component {

    handleNavigation(navigate) {
        setTimeout(() => navigate('KitaCamera'), 2000);
    }

    componentDidMount() {
        console.log('here')
    }

    componentWillMount() {
        console.log('mounted')
    }

    componentWillUnmount() {
        console.log('unmounted')
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground
                style={styles.container}>
                <Text style={styles.text}>ClarifEYE</Text>
                <Image style={styles.image} source={require('../assets/eye.png')} />
                <Button
                    title="BARCODE"
                />
                {this.handleNavigation(navigate)}
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