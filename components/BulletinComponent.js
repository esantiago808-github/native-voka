import React, { Component } from 'react';
import { View, ScrollView, Linking } from 'react-native';
import { Card, Text, Icon } from "react-native-elements";
import { createStackNavigator } from "react-navigation";


class Bulletin extends Component {

    static navigationOptions = {
        title: 'Bulletin Board'
    }

    render() {
        return (
            <ScrollView>
                <Text h4 style={{textAlign: 'center'}}>Community Bulletin Board</Text>

                <Card title="Bulk Trash Services"
                    image={require("../shared/images/opala.png")}
                >
                    <Text style={{fontSize: 18, fontStyle: 'italic', margin: 10}}>
                        Posted June 2, 2020
                    </Text>
                    <Text style={{fontSize: 18, margin: 10}}
                        onPress={() => Linking.openURL(
                              "https://villagesofkapolei.org/wp-content/uploads/2020/05/BULKY_APPT_BROCHURE.pdf")}
                    >
                        The City and County of Honolulu has changed it’s Bulky Item Collection Service. Click here to learn more.
                    </Text>
                </Card>
            </ScrollView>
        )
    }
}

export default Bulletin;
