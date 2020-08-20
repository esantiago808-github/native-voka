import React, { Component } from 'react';
import { ScrollView, View, Linking } from 'react-native';
import { Text, Card, Icon } from 'react-native-elements';


class HoaDues extends Component {

    static navigationOptions = {
        title: 'HOA'
    }

    render() {
        return (
            <ScrollView>
                <Card 
                    title='Home Owners Association'
                    titleStyle={{ fontWeight: "bold", fontSize: 24 }}
                    image={require("../shared/images/villagesofkapolei-aerial.jpg")}
                >
                    <Text style={{ fontSize: 18, margin: 20 }}>
                        The pride of ownership of the Villages of Kapolei are paid for by our homeowners. These dues ensure that trees, roads, sidewalks, parks, recreational facilities, to name a few, are well maintained to be enjoyed by our families and guests.
                    </Text>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                        <Icon 
                            name='credit-card'
                            type='font-awesome'
                            color='#017f1b'
                            raised
                            reverse
                            onPress={() => Linking.openURL('https://owner.topssoft.com/VillagesofKapolei/Account/Login')}
                        />
                    </View>
                    <Text style={{ flex: 1, flexDirection: "row", textAlign: 'center' }}
                            onPress={() => Linking.openURL('https://owner.topssoft.com/VillagesofKapolei/Account/Login')}>
                        HOA Payment
                    </Text>
                </Card>

                <Card 
                    title='Covenants and Design Rules'
                    titleStyle={{ fontWeight: "bold", fontSize: 24 }}
                    image={require("../shared/images/villagesofkapolei-aerial.jpg")}
                >
                    <Text style={{ fontSize: 18, margin: 20 }}>
                        Please visit our website for Covenants and Design Rules
                    </Text> 
                    <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                        <Icon 
                            name='list-alt'
                            type='font-awesome'
                            color='#e8873a'
                            raised
                            reverse
                            onPress={() => Linking.openURL('https://edith-nucamp-projects.s3-us-west-1.amazonaws.com/VOKA/residents.html')}
                        />
                    </View>
                    <Text style={{ flex: 1, flexDirection: "row", textAlign: 'center' }}
                            onPress={() => Linking.openURL('https://edith-nucamp-projects.s3-us-west-1.amazonaws.com/VOKA/residents.html')}>
                        Covenants and Design Rules
                    </Text>
                   
                </Card>

                <Card 
                    title='Board of Directors'
                    titleStyle={{ fontWeight: "bold", fontSize: 18 }}
                    image={require("../shared/images/villagesofkapolei-aerial.jpg")}
                >
                    <Text style={{ fontSize: 18, margin: 20 }}>
                        Vanessa Lum, 2020 President
                    </Text>
                    <Text style={{ fontSize: 18, margin: 20 }}>
                        Nathan Napihaa, 2022 Vice President
                    </Text>
                    <Text style={{ fontSize: 18, margin: 20 }}>
                        David Luegen, 2022 Secretary
                    </Text>
                    <Text style={{ fontSize: 18, margin: 20 }}>
                        Carol Lagapa, 2021 Treasurer
                    </Text>
                    <Text style={{ fontSize: 18, margin: 20 }}>
                        Rudy Amasol, 2021 Director
                    </Text>
                    <Text style={{ fontSize: 18, margin: 20 }}>
                        Scarlet Godinez-Dumadag, 2020 Director
                    </Text>
                    <Text style={{ fontSize: 18, margin: 20 }}>
                        Leo Domingo, 2020 Director
                    </Text>
                </Card>
            </ScrollView>
        );
    }
}

export default HoaDues;