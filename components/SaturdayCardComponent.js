import React, { Component } from 'react';
import { Card, Text, Button, Image } from 'react-native-elements';
import { ScrollView, View, Alert } from 'react-native';
import Test from "./TestActivityCardComponent";

class Saturday extends Component {
  
    static navigationOptions = {
        title: 'Activities Schedule- Saturday'
    }

    render(){
        return (
            <ScrollView>
                <Card title='Saturday'> 
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
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                8:00 a.m.
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                1 hour
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text 
                                style={{ 
                                    fontSize: 18, 
                                    fontWeight: 'bold', 
                                    textAlign: 'center', 
                                    color: '#72B4AC'
                                }} 
                                onPress={() => {
                                    Alert.alert(
                                        'Yoga Plain & Simple',
                                        'Days: Saturdays' +
                                        '\nTime: 8:00 - 9:00 a.m.' +
                                        '\nLocation: Rec 1' +
                                        '\nFee: $5.00 per class or $20.00 per month' +
                                        '\nInstructor: Harry Winfield' +
                                        '\nIncrease flexibility, balance, alignment and strength. Bring a yoga mat, large towel, and bottled water.',
                                        [
                                            {
                                                text: 'OK', 
                                                style: ' cancel'
                                            }
                                        ],
                                        { cancelable: false }
                                    );
                                }}>
                                Yoga Plain and Simple
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, textAlign: 'center'}}>
                                Rec 1
                            </Text>
                        </View>
                    </View>

                </Card>
                <Card
                    title="Yoga Plain and Simple"
                    titleStyle={{ fontWeight: "bold", fontSize: 18 }}
                    image={require("../shared/images/yoga.jpg")}
                >
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

                    <View style={{ flex: 4, flexDirection: "row", marginTop: 10  }}>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18 }}>
                                Registration: 
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ fontSize: 18 }}>
                                No enrollment requirements. Participation is on a first come, first served basis
                            </Text>
                        </View>
                    </View>
                </Card>
            </ScrollView>
        );
    }
}

export default Saturday;