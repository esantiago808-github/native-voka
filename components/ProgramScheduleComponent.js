import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { Text, Card, Avatar, Accessory } from "react-native-elements";
import { createStackNavigator } from "react-navigation";
import Sunday from "./SundayCardComponent";
import Monday from "./MondayCardComponent";
import Tuesday from "./TuesdayCardComponent";
import Wednesday from "./WednesdayCardComponent";
import Thursday from "./ThursdayCardComponent";
import Friday from "./FridayCardComponent";
import Saturday from "./SaturdayCardComponent";

function Weekday(props) {
    return (
        <View>
            <Sunday />
            <Monday />
            <Tuesday />
            <Wednesday />
            <Thursday />
            <Friday />
            <Saturday />
        </View>
    );
}

class ProgramSch extends Component {

    constructor(props) {
        super(props);
        this.state = {
          sunday: Sunday,
          monday: Monday,
          tuesday: Tuesday,
          wednesday: Wednesday,
          thursday: Thursday,
          friday: Friday,
          saturday: Saturday
        };
    }

  static navigationOptions = {
    title: "Activities Schedule",
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView>
        <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
            <Text style={{backgroundColor: 'yellow', fontWeight: 'bold', textAlign: 'center', fontSize: 24, margin: 5 }}>
                All activities are cancelled due to COVID-19 state guidelines
            </Text>
        </View>

        <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
            <Avatar
                rounded
                size="medium"
                containerStyle={{margin:4}}
                source={require("../shared/images/sunday.png")}
                onPress={() => console.log("Sunday!")}
            />
            <Avatar
                rounded
                size="medium"
                containerStyle={{margin:4}}
                source={require("../shared/images/monday.png")}
                onPress={() => console.log("Monday!")}
            />
            <Avatar
                rounded
                size="medium"
                containerStyle={{margin:4}}
                source={require("../shared/images/tuesday.png")}
                onPress={() => console.log("Tuesday!")}
            />
            <Avatar
                rounded
                size="medium"
                containerStyle={{margin:4}}
                source={require("../shared/images/wednesday.png")}
                onPress={() => console.log("Wednesday!")}
            />
            <Avatar
                rounded
                size="medium"
                containerStyle={{margin:4}}
                source={require("../shared/images/thursday.png")}
                onPress={() => console.log("Thursday!")}
            />
            <Avatar
                rounded
                size="medium"
                containerStyle={{margin:4}}
                source={require("../shared/images/friday.png")}
                onPress={() => console.log("Friday!")}
            />
            <Avatar
                rounded
                size="medium"
                containerStyle={{margin:4}}
                source={require("../shared/images/saturday.png")}
                onPress={() => {this.state.saturday, console.log('Saturday!')}}
            />
        </View>

        <View>
            <Weekday />
        </View>
            
       
      </ScrollView>
    );
  }
}

export default ProgramSch;
