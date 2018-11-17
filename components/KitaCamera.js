import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import { Camera, Permissions, ImageManipulator } from 'expo';
import Loader from './Loader';
import config from '../config';
import axios from 'axios';
class KitaCamera extends React.Component {
    constructor(props) {
        super(props);
        this.snap = this.snap.bind(this);
        this.state = {
            hasCameraPermission: null,
            loading: false
        };
    }

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    snap = async () => {
        this.setState({ loading: true });
        const { navigate } = this.props.navigation;
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
                this.setState({ loading: false });
            } catch (err) {
                this.setState({ loading: false });
                console.log(err);
            }
            navigate('rootText', { labels: textReceived });
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
                console.log(data);
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
        } else {
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
                        <View style={{ margin: 20, padding: 20 }}>
                            <Button bordered onPress={this.snap} light>
                                <Text>Capture</Text>
                            </Button>
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}

export default KitaCamera;