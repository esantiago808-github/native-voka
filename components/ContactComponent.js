import React, { Component } from 'react';
import { Card, Text} from 'react-native-elements';
import { ScrollView } from 'react-native';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render(){
        return (
            <ScrollView>
            <Card 
                title='Contact Information'
                wrapperStyle={{margin: 20}}>
                <Text>91-1111 Kamaaha Loop </Text>
                <Text>Kapolei, HI 96707</Text> 
                <Text marginBottom={{margin: 10}} >Phone: (808) 674-4444 </Text> 
                <Text>Email: association@villagesofkapolei.com </Text> 
            </Card>
            <Card title='Office Hours'>
                <Text>{`
                Monday through Friday
                8:00 a.m. to 5:00 p.m.
                Closed Weekends and Holidays
                    `}
                </Text>
            </Card>
            </ScrollView>
        );
    }
}

export default Contact;