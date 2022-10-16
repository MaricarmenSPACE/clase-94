import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from "react-native";
import React, { Component } from "react";
import MapView from "react-native-maps";

export default class IssLocationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require("../assets/iss_bg.jpg")}
          style={styles.backgroundImage}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}> Localización de la EEI</Text>
          </View>

          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  titleContainer: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  mapContainer: {
    flex: 0.6,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
