import React, { Component } from 'react';
import { Card, Text} from 'react-native-elements';
import { ScrollView, View } from 'react-native';

class Thursday extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render(){
        return (
            <ScrollView>
                <Card title='Thursday'> 
                    <View style={{ flex: 4, flexDirection: "row" }}>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
                                Time
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
                                Duration
                            </Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
                                Activity
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
                                Location
                            </Text>
                        </View>
                    </View>

                    <View style={{ flex: 4, flexDirection: "row", marginTop: 10  }}>
                        <View style={{ flex: 1, flexDirection: "column"}}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                8:30 a.m.
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                3 hours
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                Keiki Steps
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                Rec 1
                            </Text>
                        </View>
                    </View>

                    <View style={{ flex: 4, flexDirection: "row", marginTop: 10  }}>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                10:00 a.m.
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                tbd
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                Seniors Club
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                Rec 1
                            </Text>
                        </View>
                    </View>

                    <View style={{ flex: 4, flexDirection: "row", marginTop: 10  }}>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                5:00 p.m.
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                50-mins
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                Feel Good Stretch
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                Rec 1
                            </Text>
                        </View>
                    </View>

                    <View style={{ flex: 4, flexDirection: "row", marginTop: 10  }}>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                5:00 p.m.
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                2 hours
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                Tropic Lightening Takewondo
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                Rec 2
                            </Text>
                        </View>
                    </View>

                    <View style={{ flex: 4, flexDirection: "row", marginTop: 10  }}>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                6:30 p.m.
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                1 hour
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                Karate - Beginners
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                Rec 1
                            </Text>
                        </View>
                    </View>

                    <View style={{ flex: 4, flexDirection: "row", marginTop: 10  }}>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                7:30 p.m.
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                1 hour
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                Karate - Advanced
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                Rec 1
                            </Text>
                        </View>
                    </View>

                </Card>
            </ScrollView>
        );
    }
}

export default Thursday;