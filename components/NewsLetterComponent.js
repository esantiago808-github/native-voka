import React, { Component } from 'react';
import { View, Text } from 'react-native';

class News extends Component {

    static navigationOptions = {
        title: 'News'
    }

    render() {
        return (
            <View>
                <Text>Villages of Kapolei News</Text>
            </View>
        );
    }
}

export default News;