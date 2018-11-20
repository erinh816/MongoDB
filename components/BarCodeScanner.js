//Require camera from react-native

var React = require("react-native");
var Camera = require("react-native-camera");

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AlertIOS,
} = React;
//Show camera in rear view mode
var ReactProject = React.createClass({

    getInitialState: function() {
        return {
            showCamera: true,
            cameraType: Camera.constants.Type.back
        }
    },
//If ShowCamera state becomes false an empty view will be shown, otherwise the camera will show 
    renderCamera: function() {
        if(this.state.showCamera) {
            return (
                <Camera
                    ref="cam"
                    style={styles.container}
                    onBarCodeRead={this._onBarCodeRead}
                    type={this.state.cameraType}>
                </Camera>
            );
        } else {
            return (
                <View></View>
            );
        }
    },

    render: function() {
        return (
            this.renderCamera()
        );
    },

    _onBarCodeRead: function(e) {
        this.setState({showCamera: false});
        AlertIOS.alert(
            "Barcode Found!",
            "Type: " + e.type + "\nData: " + e.data
        );
    }

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    }
});

AppRegistry.registerComponent('ReactProject', () => ReactProject);


