import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

class Events extends Component {

    static navigationOptions = {
        title: 'Events'
    }

    render() {
        return (
            <View>
                <Text h3>Program Activities at the Villages of Kapolei</Text>
            </View>
        );
    }
}

export default Events;