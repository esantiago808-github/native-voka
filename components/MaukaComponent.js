import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Card, Text } from "react-native-elements";

class Mauka extends Component {
  static navigationOptions = {
    title: " Mauka Banquet Rental",
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView>
        <Text h4 style={{ textAlign: "center", marginTop: 5 }}>
          Mauka Banquet Room Rental Information
        </Text>
        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: 'bold', marginTop: 5 }}>
          Weekend Rental Prices and Fees
        </Text>
        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: 'bold' }}>
          Revised March 2020
        </Text>

        <Card title="Security Deposit"
            image={require("../shared/images/mauka-banquet-map.png")}>
          <View style={{ flex: 2, flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18 }}>Description:</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18 }}>
                Required to hold reservation. The balance is due 2-weeks before
                party date.
              </Text>
            </View>
          </View>
          <View style={{ flex: 2, flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18 }}>Rate:</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18 }}>$250</Text>
            </View>
          </View>
        </Card>

        <Card 
          title="Lunch Rates"
          image={require("../shared/images/mauka-banquet-room.jpg")}
        >
          <View style={{ flex: 2, flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18 }}>Description:</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18, marginBottom: 5 }}>
                9:00 am - 2:00 pm
              </Text>
              <Text style={{ fontSize: 18, marginBottom: 5 }}>
                First hour set-up, last hour clean-up;
              </Text>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}
              >
                Party time is 10:00 am - 1:00 pm
              </Text>
              <Text style={{ fontSize: 18 }}>Full hall capacity = 240</Text>
            </View>
          </View>
          <View style={{ flex: 2, flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18 }}>Rate:</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18 }}>$425</Text>
            </View>
          </View>
        </Card>

        <Card 
          title="Honolulu Police Department - Lunch Rates"
          image={require("../shared/images/mauka-half-banquet.jpg")}
        >
          <Text style={{textAlign: 'center'}}> 
            Renting half a banquet room also available
          </Text>
          <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                No alcohol
              </Text>
            </View>
          </View>
          <View style={{ flex: 2, flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18, textAlign: "center" }}>$219</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18 }}>100 - 199 guests</Text>
            </View>
          </View>
          <View style={{ flex: 2, flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18, textAlign: "center" }}>$426</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18 }}>200 - 240 guests</Text>
            </View>
          </View>
          <View style={{ flex: 2, flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                With alcohol
              </Text>
            </View>
          </View>
          <View style={{ flex: 2, flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18, textAlign: "center" }}>$259</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18 }}>1 - 99 guests</Text>
            </View>
          </View>
          <View style={{ flex: 2, flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18, textAlign: "center" }}>$506</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18 }}>100 - 240 guests</Text>
            </View>
          </View>
          <View style={{ flex: 2, flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                (Based on HPDs prevailing rates; subject to change at any time)
              </Text>
            </View>
          </View>
        </Card>

        <Card 
          title="Dinner Rates"
          image={require("../shared/images/banquet-setup-2.jpg")}
        >
          <View style={{ flex: 2, flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18 }}>Description:</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18, marginBottom: 5 }}>
                3:00 p.m. - 10:00 p.m.
              </Text>
              <Text style={{ fontSize: 18, marginBottom: 5 }}>
                First hour set-up, last hour clean-up;
              </Text>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}
              >
                Party time is 4:00 p.m. - 9:00 p.m.
              </Text>
              <Text style={{ fontSize: 18 }}>Full hall capacity = 240</Text>
            </View>
          </View>
          <View style={{ flex: 2, flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18 }}>Rate:</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18 }}>$510</Text>
            </View>
          </View>
        </Card>

        <Card 
          title="Honolulu Police Department - Dinner Rates"
          image={require("../shared/images/kapolei_mauka_grounds.jpg")}
        >
          <Text style={{textAlign: 'center'}}>
            Mauka banquet room located across the street from the pool and main office
          </Text>
          <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                No alcohol
              </Text>
            </View>
          </View>
          <View style={{ flex: 2, flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18, textAlign: "center" }}>$319</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18 }}>100 - 199 guests</Text>
            </View>
          </View>
          <View style={{ flex: 2, flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18, textAlign: "center" }}>$626</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18 }}>200 - 240 guests</Text>
            </View>
          </View>
          <View style={{ flex: 2, flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                With alcohol
              </Text>
            </View>
          </View>
          <View style={{ flex: 2, flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18, textAlign: "center" }}>$379</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18 }}>1 - 99 guests</Text>
            </View>
          </View>
          <View style={{ flex: 2, flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18, textAlign: "center" }}>$746</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18 }}>100 - 240 guests</Text>
            </View>
          </View>
          <View style={{ flex: 2, flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                (Based on HPDs prevailing rates; subject to change at any time)
              </Text>
            </View>
          </View>
        </Card>
      </ScrollView>
    );
  }
}

export default Mauka;
