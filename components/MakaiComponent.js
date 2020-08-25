import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Tile, Card, Text } from "react-native-elements";

class Makai extends Component {
  static navigationOptions = {
    title: "Makai Banquet Rental",
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView>
        <Text h4 style={{ textAlign: "center", marginTop: 5 }}>
          Makai Banquet Room Rental Information
        </Text>
        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: 'bold', marginTop: 5 }}>
          Weekend Rental Prices and Fees
        </Text>
        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: 'bold' }}>
          Revised March 2020
        </Text>
        <Card
          title="Security Deposit"
          image={require("../shared/images/makai-banquet-map.png")}
        >
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

        <Card title="Lunch Rates"
          image={require("../shared/images/makai-lobby.jpg")}
        >
          <Text style={{textAlign: 'center'}}>
            The Makai Banquet Room has a separate lobby area from the banquet room
          </Text>
          <View style={{ flex: 2, flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18 }}>Description:</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18, marginBottom: 5 }}>
                10:00 am - 3:00 pm
              </Text>
              <Text style={{ fontSize: 18, marginBottom: 5 }}>
                First hour set-up, last hour clean-up;
              </Text>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}
              >
                Party time is 11:00 am - 2:00 pm
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

        <Card title="Honolulu Police Department - Lunch Rates"
          image={require("../shared/images/makai-banquet-setup.png")}
        >
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

        <Card title="Dinner Rates"
          image={require("../shared/images/makai-banquet-room.jpg")}
        >
          <View style={{ flex: 2, flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18 }}>Description:</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ fontSize: 18, marginBottom: 5 }}>
                4:00 p.m. - 11:00 p.m.
              </Text>
              <Text style={{ fontSize: 18, marginBottom: 5 }}>
                First hour set-up, last hour clean-up;
              </Text>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}
              >
                Party time is 5:00 p.m. - 1000 p.m.
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

        <Card title="Honolulu Police Department - Dinner Rates"
          image={require("../shared/images/pool.jpg")}
        >
          <Text style={{textAlign: 'center'}}>
            Our Makai Banquet Room has a view of the pool
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

export default Makai;
