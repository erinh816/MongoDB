import React from 'react';
import { Text, View, Button } from 'react-native';

export default ({ history }) => <View>
    <Text style={{ marginTop: 50 }}>This is the projects page</Text>
    <Button title="Create Produce" onPress={() => history.pushState('/new-product')} />
</View>

