import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';


class ProgramSch extends Component {

    static navigationOptions = {
        title: 'HOA'
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
