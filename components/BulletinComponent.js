import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from "react-navigation";


class Bulletin extends Component {

    static navigationOptions = {
        title: 'Bulletin Board'
    }

    render() {
        return (
            <View>
                <Text h3>Bulletin Board</Text>
            </View>
        )
    }
}

export default Bulletin;
