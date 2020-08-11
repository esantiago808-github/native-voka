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
                image={require('../shared/images/rainbow-voka.jpg')}
                wrapperStyle={{margin: 20}} >
                <Text style={{ fontSize: 20 }}>91-1111 Kamaaha Loop </Text>
                <Text style={{ fontSize: 20 }}>Kapolei, HI 96707</Text> 
                <Text marginBottom={{margin: 10}} style={{ fontSize: 20 }} >Phone: (808) 674-4444 </Text> 
                <Text style={{ fontSize: 20 }}>Email: association@villagesofkapolei.com </Text> 
            </Card>
            <Card 
                title='Office Hours' 
                image={require('../shared/images/courtyard-voka.jpg')}
                wrapperStyle={{margin: 5}} >
                <Text style={{ fontSize: 18 }}>{`
                Monday through Friday
                8:00 a.m. to 5:00 p.m.
                Closed Weekends, Holidays
                    `}
                </Text>
            </Card>
            </ScrollView>
        );
    }
}

export default Contact;