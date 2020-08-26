import React, { Component } from 'react';
import { Card, Text} from 'react-native-elements';
import { ScrollView } from 'react-native';

class Sunday extends Component {

    static navigationOptions = {
        title: 'Sunday - Activity Schedule'
    }

    render(){
        return (
            <ScrollView>
                <Card 
                    title='Sunday' 
                    wrapperStyle={{margin: 5}} >
                    <Text style={{ fontSize: 18, textAlign: 'center'}}>
                        No Scheduled Recreational Activities
                    </Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Sunday;