import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'native-base';

export const rootText = props => {

    let { navigate } = props.navigation;
    let targetArray = props.navigation.state.params.labels || 'Text not recognized';
    let responseText = "";
    targetArray.forEach(label => responseText += label.description);
    Expo.Speech.speak(responseText);

    return (
        <View style={{ flex: 1, marginTop: 20 }}>
            <Button
                block
                primary
                onPress={() => {
                    Expo.Speech.stop();
                    navigate('rootCameraContainer');
                }}>
                <Text style={{ color: 'white' }}> Back to Camera </Text>
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
    );
};

export default rootText;