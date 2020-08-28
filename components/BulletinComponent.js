import React, { Component } from "react";
import { View, ScrollView, Linking, Share } from "react-native";
import { Card, Text, Icon } from "react-native-elements";
import { createStackNavigator } from "react-navigation";
import * as Animatable from "react-native-animatable";

class Bulletin extends Component {
  static navigationOptions = {
    title: "Bulletin Board",
  };

  render() {
    return (
      <ScrollView>
        <Animatable.View animation="jello" duration={3000}>
          <Text h4 style={{ textAlign: "center" }}>
            Community Bulletin Board
          </Text>

          <Card
            title="COVID-19 Updates"
            image={require("../shared/images/hawaii-doh-covid.png")}
          >
            <Text style={{ fontSize: 18, fontStyle: "italic", margin: 10 }}>
              Posted August 20, 2020
            </Text>
            <Text style={{ fontSize: 18, margin: 10 }}>
              Due to the rising Covid-19 cases, the latest mandates, and the
              growing concern for our community, our main administration office
              is currently open for essential tasks only. These include design
              applications, escrow demands and documents, and legal ledgers.
              Please call or email us for any other tasks during this time and
              we will be happy to assist you. Assessments can be dropped off in
              the after-hours box next to the main office door or paid with card
              over the phone. We will not be issuing ID cards, conducting hall
              rentals, selling tickets, offering lap swim, or having any
              recreational activities during this time. Contact us at
              (808)674-4444 or email association@villagesofkapolei.com
            </Text>
            <Text
              style={{ fontSize: 18, margin: 10, color: '#72B4AC', fontWeight: 'bold', textAlign: 'center'}}
              onPress={() =>
                Linking.openURL(
                  "https://www.staradvertiser.com/2020/08/25/breaking-news/watch-live-u-s-surgeon-general-joins-ige-caldwell-for-covid-19-briefing/"
                )
              }
            >
                Click here to read more on the news story.
              </Text>
          </Card>

          <Card
            title="Bulk Trash Services"
            image={require("../shared/images/opala.png")}
          >
            <Text style={{ fontSize: 18, fontStyle: "italic", margin: 10 }}>
              Posted June 2, 2020
            </Text>
            <Text style={{ fontSize: 18, margin: 10 }}>
              The City and County of Honolulu has changed it’s Bulky Item
              Collection Service. Click here to learn more.
            </Text>
            <Text
              style={{ fontSize: 18, margin: 10, color: '#72B4AC', fontWeight: 'bold', textAlign: 'center' }}
              onPress={() =>
                Linking.openURL(
                  "https://villagesofkapolei.org/wp-content/uploads/2020/05/BULKY_APPT_BROCHURE.pdf"
                )
              }
            >
              Click here for more information.
              </Text>
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Bulletin;
