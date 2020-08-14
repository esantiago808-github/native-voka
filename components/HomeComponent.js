import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import Events from './EventsHomeComponent';
import HoaDues from './HOADuesComponent';
import News from './NewsLetterComponent';
import Contact from './ContactComponent';
import Bulletin from './BulletinComponent';
import Banquet from './BanquetComponent';
import ProgramsList from './ProgramListComponent';
import ProgramSch from './ProgramScheduleComponent';

function About({props}) {

        return (
            <ScrollView>
                <Card
                    title='Villages of Kapolei'
                    wrapperStyle={{margin: 20}}
                    image={require('../shared/images/villagesofkapolei-aerial.jpg')}
                    >
                    <Text style={{ fontSize: 18 }}>
                        The Villages of Kapolei is a Planned Community and part of the new city located on the Ewa plains of Oahu, Hawaii. The community features single family homes, condominiums, and rental apartments, approximately 5,000 units. Our community continues to grow as Kapolei, Second City is under development. The master plan community consists of the highest rated elementary, middle and high schools in the state of Hawaii, along with churches, parks, recreation centers, nearby retail centers, restaurants, and a 4 1/2-star Golf Digest rated golf course spread over 888-acres of land.
                    </Text>
                </Card>
                <Card 
                    wrapperStyle={{margin: 20}}
                    image={require('../shared/images/kapolei-golf.jpg')}
                    >
                    <Text style={{ fontSize: 18 }}>
                        The Villages of Kapolei is comprised of 8 Villages:

                        Kumu Iki,
                        Aeloa,
                        Malanai,
                        Kekuilani,
                        Iwalani,
                        Malu’ohai,
                        Kapolei Kai,
                        Kaupe’a
                    </Text>
                </Card>
                <Card 
                    wrapperStyle={{margin: 20}}
                    image={require('../shared/images/kapolei-commons.jpg')}
                    >
                    <Text style={{ fontSize: 19 }}>
                        With many of the businesses adding a second location or moving to Kapolei, our residents are enjoying the decreased commute and improved family time.
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

        const { navigate } = this.props.navigation;

        return (
            <ScrollView>
                <Card>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon
                            raised
                            name='info-circle'
                            type='font-awesome'
                            color='#72B4AC'
                            reverse
                            onPress={() => navigate('HoaDues')}
                            containerStyle={{
                                margin: 25 
                            }} 
                        />

                        <Icon
                            raised
                            name='calendar'
                            type='font-awesome'
                            color='#3a6e93'
                            reverse
                            onPress={() => navigate('Events')}
                            containerStyle={{
                                margin: 25 
                            }} 
                        />

                        <Icon
                            raised
                            name='calendar'
                            type='font-awesome'
                            color='#e8873a'
                            reverse
                            onPress={() => navigate('ProgramSch')} 
                            containerStyle={{
                                margin: 25 
                            }} 
                        />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Text 
                            style={styles.labelText} 
                            onPress={() => navigate('HoaDues')}> 
                              HOA
                        </Text>
                        <Text 
                            style={{marginHorizontal: 20}} 
                            onPress={() => navigate('Events')}> 
                            Events 
                        </Text>
                        <Text onPress={() => navigate('ProgramSch')}>  Program Schedule </Text>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon
                            raised
                            name='address-card'
                            type='font-awesome'
                            color='#f6d65b'
                            reverse
                            onPress={() => navigate('Contact')}
                            containerStyle={{
                                margin: 25 
                            }} 
                        />

                        <Icon
                            raised
                            name='list-alt'
                            type='font-awesome'
                            color='#017f1b'
                            reverse
                            onPress={() => navigate('ProgramsList')}
                            containerStyle={{
                                margin: 25 
                            }} 
                        />

                        <Icon
                            raised
                            name='newspaper-o'
                            type='font-awesome'
                            color='#d44b19'
                            reverse
                            onPress={() => navigate('News')} 
                            containerStyle={{
                                margin: 25 
                            }} 
                        />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Text 
                            style={styles.labelText} 
                            onPress={() => navigate('Contact')}> 
                              Contact
                        </Text>
                        <Text 
                            style={{marginHorizontal: 20}} 
                            onPress={() => navigate('ProgramsList')}> 
                            Program List 
                        </Text>
                        <Text onPress={() => navigate('News')}>  Newsletter </Text>
                    </View>
                    
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Icon
                            raised
                            name='newspaper-o'
                            type='font-awesome'
                            color='#e8873a'
                            reverse
                            onPress={() => navigate('Bulletin')}
                            containerStyle={{
                                margin: 25 
                            }} 
                        />

                        <Icon
                            raised
                            name='heartbeat'
                            type='font-awesome'
                            color='#72B4AC'
                            reverse
                            onPress={() => navigate('Contact')}
                            containerStyle={{
                                margin: 25 
                            }} 
                        />

                        <Icon
                            raised
                            name='heartbeat'
                            type='font-awesome'
                            color='#3a6e93'
                            reverse
                            onPress={() => navigate('Contact')} 
                            containerStyle={{
                                margin: 25 
                            }} 
                        />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Text 
                            style={styles.labelText} 
                            onPress={() => navigate('Bulletin')}> 
                              Bulletin Board
                        </Text>
                        <Text 
                            style={{marginHorizontal: 20}} 
                            onPress={() => navigate('Contact')}> 
                            Contact
                        </Text>
                        <Text onPress={() => navigate('Contact')}>  Activity </Text>
                    </View>

                </Card>
                <About />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    labelText: {
        textAlign: 'center', 
        marginHorizontal: 25,
    }
  });

export default Home;