import React, { Component } from 'react';
import Home from './HomeComponent';
import Events from './EventsHomeComponent';
import HoaDues from './HOADuesComponent';
import News from './NewsLetterComponent';
import Contact from './ContactComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#72B4AC'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HoaNavigator = createStackNavigator(
    {
        HoaDues: { screen: HoaDues }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#72B4AC'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const EventsNavigator = createStackNavigator(
    {
        Events: { screen: Events }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#72B4AC'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const NewsNavigator = createStackNavigator(
    {
        News: { screen: News }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#72B4AC'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#72B4AC'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        HOA: { screen: HoaNavigator },
        Events: { screen: EventsNavigator },
        News: { screen: NewsNavigator },
        Contact: { screen: ContactNavigator }
    },
    {
        drawerBackgroundColor: '#72B4AC'
    }
);

class Main extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <MainNavigator />
            </View>
        );
    }
}

export default Main;
