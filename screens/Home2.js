import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>Aplicación Rastreador de la EEI</Text>
        </View>

        <TouchableOpacity style={styles.routeCard}>
          <Text style={styles.routeText}>Localización de la EEI</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.routeCard}>
          <Text style={styles.routeText}>Meteoritos</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.routeCard}>
          <Text style={styles.routeText}>Actualizaciones</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },

  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },

  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  titleBar: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },

  routeCard: {
    flex: 0.25,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    borderRadius: 100,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  routeText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#D11583",
    justifyContent: "center",
    alignItems: "center",
  },
});
