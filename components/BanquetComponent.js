import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Tile } from "react-native-elements";
import Makai from "./MakaiComponent";
import Mauka from "./MaukaComponent";
import * as Animatable from "react-native-animatable";

class Banquet extends Component {
  static navigationOptions = {
    title: "Banquet Rentals",
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView>
        <Animatable.View animation="slideInDown" duration={3000}>
          <Tile
            imageSrc={require("../shared/images/makai_banquet_external.jpg")}
            title="Makai Banquet Room"
            featured
            caption="Rec Center 1"
            onPress={() => navigate("Makai")}
          />
        </Animatable.View>
        
        <Animatable.View animation="slideInUp" duration={3000}>
          <Tile
            imageSrc={require("../shared/images/kapolei_mauka_grounds.jpg")}
            title="Mauka Banquet Room"
            featured
            caption="Rec Center 2"
            onPress={() => navigate("Mauka")}
          />
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Banquet;
