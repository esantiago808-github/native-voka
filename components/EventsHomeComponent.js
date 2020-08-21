import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Avatar, Accessory, ListItem, Text, Tile } from 'react-native-elements';
import Banquet from "./BanquetComponent";
import ProgramSch from "./ProgramScheduleComponent";


class Events extends Component {

    static navigationOptions = {
        title: 'Events'
    }

    render() {
        return (
            <ScrollView>
                <Text h3>Program Activities at the Villages of Kapolei</Text>
                <Tile
                    title={'Activities Schedule'}
                    onPress={() => navigate('ProgramSch')}
                    imageSrc={require('../shared/images/pool.jpg')}
                    featured
                />
                <Tile
                    title={'Banquet Rental'}
                    onPress={() => navigate('Banquet')}
                    imageSrc={require('../shared/images/banquet-setup.jpg')}
                    featured
                />
            </ScrollView>
        );
    }
}

export default Events;