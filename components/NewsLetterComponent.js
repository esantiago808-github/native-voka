import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

class News extends Component {

    static navigationOptions = {
        title: 'News'
    }

    render() {
        return (
            <View>
                <Text h3>Villages of Kapolei News</Text>
            </View>
        );
    }
}

export default News;