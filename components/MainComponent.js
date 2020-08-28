import React, { Component } from 'react';
import Home from './HomeComponent';
import HoaDues from './HOADuesComponent';
import News from './NewsLetterComponent';
import Contact from './ContactComponent';
import Bulletin from "./BulletinComponent";
import Banquet from "./BanquetComponent";
import Makai from "./MakaiComponent";
import Mauka from "./MaukaComponent";
import ProgramSch from './ProgramScheduleComponent';
import Sunday from "./SundayCardComponent";
import Monday from "./MondayCardComponent";
import Tuesday from "./TuesdayCardComponent";
import Wednesday from "./WednesdayCardComponent";
import Thursday from "./ThursdayCardComponent";
import Friday from "./FridayCardComponent";
import Saturday from "./SaturdayCardComponent";

import { View, Platform, StyleSheet, Text, ScrollView, Image  } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon, Avatar, withTheme } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#72B4AC'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const HoaNavigator = createStackNavigator(
    {
        HoaDues: { screen: HoaDues }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#72B4AC'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='info-circle'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const ProgramSchNavigator = createStackNavigator(
    {
        ProgramSch: { 
            screen: ProgramSch,
            navigationOptions: ({navigation}) => ({
                headerStyle: {
                    backgroundColor: '#72B4AC'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                },
                headerLeft: <Icon
                    name='calendar'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        Sunday: { screen: Sunday },
        Monday: { screen: Monday },
        Tuesday: { screen: Tuesday },
        Wednesday: { screen: Wednesday },
        Thursday: { screen: Thursday },
        Friday: { screen: Friday },
        Saturday: { screen: Saturday }
    }, 
    {
        initialRouteName: 'ProgramSch',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#72B4AC'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        },
    }
);

const BulletinNavigator = createStackNavigator(
    {
        Bulletin: { 
            screen: Bulletin,
            navigationOptions: ({navigation}) => ({
                headerStyle: {
                    backgroundColor: '#72B4AC'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                },
                headerLeft: <Icon
                    name='list-alt'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
    }
);

const BanquetNavigator = createStackNavigator(
    {
        Banquet: { 
            screen: Banquet,
            navigationOptions: ({navigation}) => ({
                headerStyle: {
                    backgroundColor: '#72B4AC'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                },
                headerLeft: <Icon
                    name='cutlery'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        Makai: { screen: Makai },
        Mauka: { screen: Mauka }
    }, 
    {
        initialRouteName: 'Banquet',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#72B4AC'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        },
    }
);

const NewsNavigator = createStackNavigator(
    {
        News: { screen: News }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#72B4AC'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='newspaper-o'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#72B4AC'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='address-card'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView 
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('../shared/images/voka-icon-25.jpg')} style={styles.drawerImage} />
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>Villages of Kapolei</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { 
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
         },
        HOA: { 
            screen: HoaNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
         },
        Schedule: { 
            screen: ProgramSchNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='calendar'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Banquet: { 
            screen: BanquetNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='cutlery'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            },
        },
        News: { 
            screen: NewsNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='newspaper-o'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Bulletin: { 
            screen: BulletinNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='list-alt'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },

        Contact: { 
            screen: ContactNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='address-card'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        }
    },
    {
        drawerBackgroundColor: '#72B4AC',
        contentComponent: CustomDrawerContentComponent
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: 'white',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});


export default Main;
