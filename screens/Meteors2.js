import { Text, View } from "react-native";
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

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>MeteorScreen "Pantalla de Meteoritos"</Text>
      </View>
    );
  }
}
