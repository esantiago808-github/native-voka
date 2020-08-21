import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { createStackNavigator } from "react-navigation";
 
class ProgramSch extends Component {

    static navigationOptions = {
        title: 'Activities Schedule'
    }

    render() {
        return (
            <View>
                <Text h3>Program Schedule</Text>
            </View>
        )
    }
}

export default ProgramSch;
