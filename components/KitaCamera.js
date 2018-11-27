import React from 'react';
import { View, ScrollView, TouchableOpacity, Button, Text } from 'react-native';
import { Camera, Permissions, ImageManipulator } from 'expo';
// import rootText from './rootText';
import Loader from './Loader';
import config from '../config';
import axios from 'axios';
class KitaCamera extends React.Component {
    constructor(props) {
        super(props);
        this.snap = this.snap.bind(this);
        this.state = {
            hasCameraPermission: null,
            loading: false,
            textReceived: []
        };
    }

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    snap = async () => {
        this.setState({ loading: true });
        const { nav } = this.props;
        // const { navigate } = this.props.navigation;
        if (this.camera) {
            let photo;
            let textReceived;
            let translatedText;
            try {
                let { uri } = await this.camera.takePictureAsync();
                photo = await ImageManipulator.manipulateAsync(
                    uri,
                    [{ resize: { width: 420 } }],
                    {
                        base64: true
                    }
                );
                textReceived = await this.getText(photo.base64);
                //translatedText = await this.getTranslatedText(textRecieved);
                // if (translatedText === 'undefined') {
                //     translatedText = 'Text not recognized';
                // }
                this.setState({ loading: false, textReceived: textReceived });
            } catch (err) {
                this.setState({ loading: false });
                console.log(err);
            }
            // nav.navigate(rootText, { leaveFrom: 'right' });
        }
    };

    getText = image => {
        return axios
            .post(config.googleCloud.api + config.googleCloud.apiKey, {
                requests: [
                    {
                        image: {
                            content: image
                        },
                        features: [
                            {
                                type: 'LABEL_DETECTION',
                                maxResults: 1
                            }
                        ]
                    }
                ]
            })
            .then(response => response.data)
            .then(data => {
                // console.log(data);
                console.log("LABELS", data.responses[0].labelAnnotations);
                return data.responses[0].labelAnnotations;
            })
            .catch(err => console.log(err));
    };


    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else if (this.state.textReceived.length === 0){
            return (
                <View style={{ flex: 1 }}>
                    <Loader loading={this.state.loading} />
                    <Camera
                        autoFocus={Camera.Constants.AutoFocus.on}
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            justifyContent: 'center'
                        }}
                        type={this.state.type}
                        ref={ref => {
                            this.camera = ref;
                        }}>

                        <TouchableOpacity
                            style={{
                                flex: 1,
                                alignSelf: 'center',
                                alignItems: 'center',
                            }}
                            onPress={this.snap}>
                            <View
                                style={{ flex: 1, fontSize: 18000, marginBottom: 10, color: 'white' }}>
                                {/* {' '}Flip{' '} */}
                            </View>
                        </TouchableOpacity>

                        {/* <View  style={{flex: 1}}>
                            <Button style={{flex: 1}} onPress={this.snap} title="Capture" />
                        </View> */}
                    </Camera>
                </View>
            );
        } else if (this.state.textReceived.length >= 1) {
            let targetArray = this.state.textReceived;
            let responseText = "";
            targetArray.forEach(label => responseText += label.description);
            Expo.Speech.speak(responseText);
            return (
                <View style={{ flex: 1, marginTop: 20 }}>
                    <Button
                        title="Back to Camera"
                        onPress={() => {
                            Expo.Speech.stop();
                            // nav.navigate('rootCameraContainer');
                        }}>
                        {/* <Text style={{ color: 'white' }}> Back to Camera </Text> */}
                    </Button>
                    <ScrollView style={{ flex: 1, margin: 20 }}>
                        <View
                            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View stlye={{ flex: 1 }}>
                                <Text style={{ fontSize: 20 }}>{responseText}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            )
        }
    }
}

export default KitaCamera;