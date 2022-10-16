import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  FlatList,
  StatusBar,
  Image
} from "react-native";
import React, { Component } from "react";
import axios from "axios";

export default class MeteorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meteors: {},
    };
  }

  componentDidMount() {
    this.getMeteors();
  }

  getMeteors = () => {
    axios
      .get(
        "https://api.nasa.gov/neo/rest/v1/feed?&api_key=aD8R48pXQdBElV8RZswzI8e2wPdjigBO9ui1WZa2"
      )
      .then((response) => {
        this.setState({ meteors: response.data.near_earth_objects });
        console.log(Object.keys(this.state.meteors));
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => {
    let meteor = item
    let bg_img, speed, size;
    if (meteor.threat_score <= 30) {
        bg_img = require("../assets/meteor_bg1.png")
        speed = require("../assets/meteor_speed3.gif")
        size = 100
    } else if (meteor.threat_score <= 75) {
        bg_img = require("../assets/meteor_bg2.png")
        speed = require("../assets/meteor_speed3.gif")
        size = 150
    } else {
        bg_img = require("../assets/meteor_bg3.png")
        speed = require("../assets/meteor_speed3.gif")
        size = 200
    }
    
};

  render() {
    if (Object.keys(this.state.meteors).length === 0) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Cargando</Text>
        </View>
      );
    } else {
      let meteors_arr = Object.keys(this.state.meteors).map((meteor_date) => {
        return this.state.meteors[meteor_date];
      });

      let meteors = [].concat.apply([], meteors_arr);

      meteors.forEach(function (element) {
        let diameter =
          (element.estimated_diameter.kilometers.estimated_diameter_min +
            element.estimated_diameter.kilometers.estimated_diameter_max) /
          2;
        let threatScore =
          (diameter / element.close_approach_data[0].miss_distance.kilometers) *
          1000000000;
        element.threat_score = threatScore;
      });

      meteors.sort(function (a, b) {
        return b.threat_score - a.threat_score;
      });
      meteors = meteors.slice(0, 5);

      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <Text>¡Pantalla meteoritos!</Text>

          <FlatList
            keyExtractor={this.keyExtractor}
            data={meteors}
            renderItem={this.renderItem}
            horizontal={true}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
