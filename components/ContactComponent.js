import React, { Component } from "react";
import { Card, Text, SocialIcon, Icon } from "react-native-elements";
import { ScrollView, Linking, View } from "react-native";

class Contact extends Component {
  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    return (
      <ScrollView>
        <Card
          title="Contact Information"
          image={require("../shared/images/rainbow-voka.jpg")}
        >
          <Text style={{ fontSize: 20, textAlign: "center", marginTop: 20 }}>
            91-1111 Kamaaha Loop{" "}
          </Text>
          <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 20 }}>
            Kapolei, HI 96707
          </Text>
          <Text style={{ fontSize: 20, marginHorizontal: 20 }}>
            Phone: (808) 674-4444{" "}
          </Text>
          <Text style={{ fontSize: 20, marginHorizontal: 20 }}>
            Email: association@villagesofkapolei.com{" "}
          </Text>
        </Card>
        <Card
          title="Office Hours"
          image={require("../shared/images/courtyard-voka.jpg")}
        >
          <Text style={{ fontSize: 18, textAlign: "center" }}>
            {`Monday through Friday
                        \n8:00 a.m. to 5:00 p.m.
                        \nClosed Weekends, Holidays
                        `}
          </Text>
        </Card>
        <Card title="Follow Us on Social Media">
          <View style={{ flex: 1, flexDirection: "row", margin: 30 }}>
            <SocialIcon
              type="facebook"
              onPress={() =>
                Linking.openURL(
                  "https://www.facebook.com/VillagesOfKapoleiAssociation"
                )
              }
            />
            <SocialIcon
              type="instagram"
              onPress={() =>
                Linking.openURL(
                  "https://www.instagram.com/villagesofkapoleiassociation/"
                )
              }
            />
            <Icon
              name="yelp"
              type="font-awesome"
              color="#FF0000"
              raised
              reverse
              onPress={() =>
                Linking.openURL(
                  "https://www.yelp.com/biz/villages-of-kapolei-association-kapolei"
                )
              }
            />
            <Icon
              name="home"
              type="font-awesome"
              color="#00FF00"
              raised
              reverse
              onPress={() =>
                Linking.openURL(
                  "https://nextdoor.com/neighborhood/villagesofkapolei--kapolei--hi/"
                )
              }
            />
          </View>
        </Card>
      </ScrollView>
    );
  }
}

export default Contact;
