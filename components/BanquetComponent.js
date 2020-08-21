import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from "react-navigation";


class Banquet extends Component {

    static navigationOptions = {
        title: 'Banquet Rentals'
    }

    render() {
        return (
            <View>
                <Text h3>Banquet Rentals</Text>
            </View>
        )
    }
}

export default Banquet;

