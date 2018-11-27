import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';



// const api_key = 'SEM313596C964C5FE4B181C087525613E066';
// const api_secret = 'MzZiNWFhZTcwNDUwMGE3Nzg3N2JlNDA2YWJmZmMxMDg';
// const sem3 = require('semantics3-node')('SEM313596C964C5FE4B181C087525613E066', 'MzZiNWFhZTcwNDUwMGE3Nzg3N2JlNDA2YWJmZmMxMDg');

export default class BarCodeScannerExample extends React.Component {
    state = {
        hasCameraPermission: null,
    }


    async componentDidMount() {
        console.log('barcode console log')
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    render() {
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        }
        return (
            <View style={{ flex: 1 }}>
                <BarCodeScanner
                    onBarCodeScanned={this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFill}
                />
            </View>
        );
    }

    handleBarCodeScanned = ({ type, data }) => {
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
 
        //call api with data variable
        //receive Response
        //speak response
        Expo.Speech.speak(data);
        //navigate back to home page
        // const fetchData = (sem3.products.products_field('upc', '883974958450')) => {
 
        // }.then((products) => JSON.stringify(products))
 
 
 
    }
 
 }
   
   
   //**************************************** */
//     export default class App extends Component {
//         state = {
//             data: []
//         };
//      componentDidMount() {
//          this.fetchData();
//      }   
//      fetchData = async () => {
//          const response = await fetch("https://");
//          const json = await response.json();
//          this.setState({ data: json.results});
//      };
//     }
//     //receive Response
//     function getBarCodeScannerFromApiAsync() {
//         return fetch('https://')
//           .then((response) => response.json())
//           .then((responseJson) => {
//             return responseJson.BarCodeScanner;
//           })
//           .catch((error) => {
//             console.error(error);
//           });
//       }
    
//     //speak response
//     //navigate back to home page 
//     class DetailsScreen extends React.Component {
//         render() {
//           return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//               <Text>Details Screen</Text>
//               <Button
//                 title="Go to Details... again"
//                 onPress={() => this.props.navigation.push('Details')}
//               />
//               <Button
//                 title="Go to HomeScreen"
//                 onPress={() => this.props.navigation.navigate('HomeScreen')}
//               />
//               <Button
//                 title="Go back"
//                 onPress={() => this.props.navigation.goBack()}
//               />
//             </View>
//           );
//         }
//       }   

//     }
// }