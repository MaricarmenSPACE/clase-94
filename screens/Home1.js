import { Text, View } from "react-native";
import React, { Component } from "react";

export default class HomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>HomeScreen "pantalla de inicio"</Text>
      </View>
    );
  }
}
