import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, Text } from 'react-native-elements';


function About(props) {
        return (
            <ScrollView>
                <Card
                    title='Villages of Kapolei'
                    wrapperStyle={{margin: 20}}>
                    <Text>
                        The Villages of Kapolei is a Planned Community and part of the new city located on the Ewa plains of Oahu, Hawaii. The community features single family homes, condominiums, and rental apartments, approximately 5,000 units. Our community continues to grow as Kapolei, Second City is under development. The master plan community consists of the highest rated elementary, middle and high schools in the state of Hawaii, along with churches, parks, recreation centers, nearby retail centers, restaurants, and a 4 1/2-star Golf Digest rated golf course spread over 888-acres of land.
                    </Text>
                </Card>
                <Card wrapperStyle={{margin: 20}}>
                    <Text>
                    The Villages of Kapolei is comprised of 8 Villages:

                    Kumu Iki
                    Aeloa
                    Malanai
                    Kekuilani
                    Iwalani
                    Malu’ohai
                    Kapolei Kai
                    Kaupe’a
                    </Text>
                </Card>
                <Card wrapperStyle={{margin: 20}}>
                    <Text>
                    With many of the businesses adding a second location or moving to Kapolei decreasing commute time to under 15-minutes allowing for increased and improved family time.
                    </Text>
                </Card>
            </ScrollView>
        );
    }


class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <About />
            </ScrollView>
        );
    }
}

export default Home;