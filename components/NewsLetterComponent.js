import React, { Component } from "react";
import { View, ScrollView, Linking } from "react-native";
import { Text, Tile } from "react-native-elements";
import * as Animatable from 'react-native-animatable';

class News extends Component {
  static navigationOptions = {
    title: "News",
  };

  render() {
    return (
      <ScrollView>
                <Animatable.View animation="fadeInRightBig" duration={1000}>

        <Text h3>Villages of Kapolei News</Text>

        <View style={{ alignItems: "center" }}>
          <Tile
            imageSrc={require("../shared/images/q3-newsletter.jpg")}
            imageContainerStyle="center"
            title="2020 3rd Quarter Newsletter"
            width={275}
            height={400}
            containerStyle={{marginBottom: 15}}
            onPress={() =>
              Linking.openURL(
                "https://villagesofkapolei.org/wp-content/uploads/2020/07/3rd-QTR-Kapolei-Newsletter-20.pdf"
              )
            }
          />

          <Tile
            imageSrc={require("../shared/images/q2-newsletter.jpg")}
            imageContainerStyle="center"
            title="2020 2nd Quarter Newsletter"
            width={275}
            height={400}
            containerStyle={{marginBottom: 15}}
            onPress={() =>
              Linking.openURL(
                "https://villagesofkapolei.org/wp-content/uploads/2020/04/2nd-Qtr-Kapolei20-web.pdf"
              )
            }
          />

          <Tile
            imageSrc={require("../shared/images/q1-newsletter.jpg")}
            imageContainerStyle="center"
            title="2020 1st Quarter Newsletter"
            width={275}
            height={400}
            containerStyle={{marginBottom: 15}}
            onPress={() =>
              Linking.openURL(
                "https://villagesofkapolei.org/wp-content/uploads/2019/12/1st-Qtr-Kapolei20.web-002.pdf"
              )
            }
          />
        </View>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default News;
