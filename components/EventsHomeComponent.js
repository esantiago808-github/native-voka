import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Events extends Component {

    static navigationOptions = {
        title: 'Events'
    }

    render() {
        return (
            <View>
                <Text>Program Activities at the Villages of Kapolei</Text>
            </View>
        );
    }
}

export default Events;