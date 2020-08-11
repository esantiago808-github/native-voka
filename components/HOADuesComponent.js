import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';


class HoaDues extends Component {

    static navigationOptions = {
        title: 'HOA'
    }

    render() {
        return (
            <View>
                <Text h3>Home Owners Association</Text>
            </View>
        );
    }
}

export default HoaDues;