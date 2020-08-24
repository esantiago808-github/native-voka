import React, { Component } from 'react';
import { Card, Text} from 'react-native-elements';
import { ScrollView, View } from 'react-native';

class Test extends Component {

    static navigationOptions = {
        title: 'Test Activities Schedule'
    }

    render(){
        return (
            <ScrollView>
                <Card title='Yoga Plain and Simple'> 
                    <View style={{ flex: 4, flexDirection: "row" }}>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18 }}>
                                Days: 
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18 }}>
                                Saturdays
                            </Text>
                        </View>
                    </View>

                    <View style={{ flex: 4, flexDirection: "row", marginTop: 10  }}>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18 }}>
                                Time: 
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18 }}>
                                8:00 a.m. - 9:00 a.m.
                            </Text>
                        </View>
                    </View>

                    <View style={{ flex: 4, flexDirection: "row", marginTop: 10  }}>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18 }}>
                                Location: 
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18 }}>
                                Rec 1
                            
                            </Text>
                        </View>
                    </View>

                    <View style={{ flex: 4, flexDirection: "row", marginTop: 10  }}>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18 }}>
                                Fee: 
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18 }}>
                                $5.00 per class or $20.00 per month
                            </Text>
                        </View>
                    </View>

                    <View style={{ flex: 4, flexDirection: "row", marginTop: 10  }}>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18 }}>
                                Instructor: 
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18 }}>
                                Harry Winfield
                            </Text>
                        </View>
                    </View>

                    <View style={{ flex: 4, flexDirection: "row", marginTop: 10  }}>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18 }}>
                                Description: 
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18 }}>
                                Increase flexibility, balance, alignment and strength. Bring a yoga mat, large towel, and bottled water.
                            </Text>
                        </View>
                    </View>

                </Card>
            </ScrollView>
        );
    }
}

export default Test;