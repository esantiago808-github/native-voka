import React, { Component } from 'react';
import { Card, Text} from 'react-native-elements';
import { ScrollView, View } from 'react-native';

class Monday extends Component {

    static navigationOptions = {
        title: 'Monday - Activity Schedule'
    }

    render(){
        return (
            <ScrollView>
                <Card title='Monday'> 
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
                                9:00 a.m.
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                1 hour
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                Aqua Jogging
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                Pool
                            </Text>
                        </View>
                    </View>

                    <View style={{ flex: 4, flexDirection: "row", marginTop: 10  }}>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                4:00 p.m.
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                tbd
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                Kick Boxing Fitness
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
                                4:00 p.m.
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                1 1/2 hours
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                Swim Team
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                Pool
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
                                1 1/2 hours
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                KPOK - Keikis
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
                                7:00 p.m.
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                1 1/2 hours
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                KPOK - Adults
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
                                7:00 p.m.
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                1 1/2 hours
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                Zumba and Pound Fitness
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
                                8:00 p.m.
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                1 hour
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                Orbix Fitness
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                Rec 2
                            </Text>
                        </View>
                    </View>

                </Card>
            </ScrollView>
        );
    }
}

export default Monday;