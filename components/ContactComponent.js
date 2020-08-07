import React, { Component } from 'react';
import { Card, Text} from 'react-native-elements';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render(){
        return (
            <Card title='Contact Information'>
                <Text>91-1111 Kamaaha Loop </Text>
                <Text>Kapolei, HI 96707</Text> 
                <Text> </Text>

                <Text>Phone: (808) 674-4444 </Text> 
                <Text>Email: association@villagesofkapolei.com </Text> 
                <Text> </Text>

                <Text style={{ fontWeight: 'bold' }}>Office Hours </Text> 
                <Text>Monday through Friday </Text> 
                <Text>8:00 a.m. to 5:00 p.m. </Text> 
                <Text>Closed Weekends and Holidays </Text>
            </Card>
        );
    }
}

export default Contact;