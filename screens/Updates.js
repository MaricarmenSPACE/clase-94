import { Text, View } from "react-native";
import React, { Component } from "react";

export default class UpdateScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>UpdateScreen "Pantalla de Updates"</Text>
      </View>
    );
  }
}
