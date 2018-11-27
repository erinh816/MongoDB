import React from 'react';
import { View, Button, Text } from 'react-native'
import * as firebase from 'firebase';
import { createStackNavigator } from 'react-navigation';
import { FormLabel, FormInput } from 'react-native-elements';
import { auth } from 'firebase';
import Main from './Chat/Main.js';

firebase.initializeApp({
    apiKey: "AIzaSyAXUUe46oJXHuTHtxHjoZXeEV4gANDXPTI",
    authDomain: "cyclops-eda39.firebaseapp.com",
    databaseURL: "https://cyclops-eda39.firebaseio.com",
    projectId: "cyclops-eda39",
    storageBucket: "cyclops-eda39.appspot.com",
    messagingSenderId: "652737661358"
});

export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        };
    }


    onLoginPress() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;

        // console.log("email: " + email)
        // console.log("pass: " + password)

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                console.log("Log in works");
                console.log(JSON.stringify(res));
                this.setState({ error: '', loading: false });
                this.props.navigation.navigate('Main')
            })
            .catch((err) => {
                console.log("Log in failed");
                console.log(JSON.stringify(err));
                this.setState({ error: 'Authentication failed', loading: false });
            })
    }

    onSignUpPress() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        console.log("SIGN UP", this.state);
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log("SIGN UP works");
                this.setState({ error: '', loading: false });
                this.props.nav.navigate('Main')
            })
            .catch((err) => {
                console.log("SIGN UP failed");
                console.log(JSON.stringify(err));
                this.setState({ error: 'Authentication failed', loading: false });
            })
    }

    renderButtonOrLoading() {
        if (this.state.loading) {
            return <Text> Loading </Text>
        }
        return <View>
            <Button onPress={this.onLoginPress.bind(this)}
                title="Login">
            </Button>

            <Button onPress={this.onSignUpPress.bind(this)}
                title="Sign Up">
            </Button>
        </View>

    }
    render() {
        return (
            <View>
                <FormLabel>Email</FormLabel>
                <FormInput
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder="martin@DJmagazine.com" />
                <FormLabel>Password</FormLabel>
                <FormInput
                    value={this.state.password}
                    secureTextEntry
                    placeholder='***'
                    onChangeText={password => this.setState({ password })} />
                {this.renderButtonOrLoading()}
            </View>
        )
    }

}

