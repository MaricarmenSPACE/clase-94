import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  FlatList,
  StatusBar,
  Image,
  ImageBackground,
  Dimensions,
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
    let meteor = item;
    let bg_img, speed, size;
    if (meteor.threat_score <= 30) {
      bg_img = require("../assets/meteor_bg1.png");
      speed = require("../assets/meteor_speed3.gif");
      size = 100;
    } else if (meteor.threat_score <= 75) {
      bg_img = require("../assets/meteor_bg2.png");
      speed = require("../assets/meteor_speed3.gif");
      size = 150;
    } else {
      bg_img = require("../assets/meteor_bg3.png");
      speed = require("../assets/meteor_speed3.gif");
      size = 200;
    }
    return (
      <View>
        <ImageBackground source={bg_img} style={styles.backgroundImage}>
          <View style={styles.giftContainer}>
            <Image
              source={speed}
              style={{ width: size, height: size, alignSelf: "center" }}
            ></Image>
            <View>

              <Text
                style={[styles.cardTitle, { marginTop: 200, marginLeft: 50 }]}
              >
                {item.name}

              </Text>

              <Text
                style={[styles.cardText, { marginTop: 20, marginLeft: 50 }]}
              >
                M??s Cercano a la Tierra----
                {item.close_approach_data[0].close_approach_date_full}

              </Text>

              <Text
                style={[styles.cardText, { marginTop: 5, marginLeft: 50 }]}
              >
                Di??metro m??nimo (KM)--------
                {item.estimated_diameter.kilometers.estimated_diameter_min}

              </Text>

              <Text
                style={[styles.cardText, { marginTop: 5, marginLeft: 50 }]}
              >
                Di??metro m??ximo (KM)--------
                {item.estimated_diameter.kilometers.estimated_diameter_max}

              </Text>

              <Text

                style={[styles.cardText, { marginTop: 5, marginLeft: 50 }]}
              >
                Velocidad (KM/H)------------
                {
                  item.close_approach_data[0].relative_velocity
                    .kilometers_per_hour
                }

              </Text>

              <Text
                style={[styles.cardText, { marginTop: 5, marginLeft: 50 }]}
              >
                Alej??ndose de la Tierra por (KM)---
                {item.close_approach_data[0].miss_distance.kilometers}

              </Text>

            </View>
          </View>
        </ImageBackground>
      </View>
    );
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
          <Text>??Pantalla meteoritos!</Text>

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

  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  gifContainer: {
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: "bold",
    color: "white",
  },
  cardText:{
    color:"white"
  }

});
