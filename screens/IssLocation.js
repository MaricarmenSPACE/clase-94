import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Image,
  Alert
} from "react-native";
import React, { Component } from "react";
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import IssInfo from "./IssInfo";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class IssLocationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
    };
  }

  componentDidMount() {
    this.getIssLocation();
  }

  //1.-axios.get() para obtener los datos de la API y establecer la respuesta a la localización
  //2.-declarada como una matríz de estado en Constructor
  //3.-Catch detectaremos cualquier error y se mostrará como un mensaje
  //4.-Llamaremos a esta función en componentDidMount() para que se ejecute una vez que se cargue la pantalla

  getIssLocation = () => {
    axios
      .get("https://api.wheretheiss.at/v1/satellites/25544")
      .then((response) => {
        this.setState({ location: response.data });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  render() {

    if (Object.keys(this.state.location).length === 0) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Cargando</Text>
            </View>
        )
    } else {
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

          <View style={styles.refeshContainer}>

             <TouchableOpacity style={{ width: 100, height: "100%", alignItems: "center" }} onPress={() =>
                     this.setState({})}>

                <Image source={require("../assets/refresh_icon.jpg")} style={{ width: 50, height: 50 }}></Image>

             </TouchableOpacity>

         </View>



          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              region={{
                latitude: this.state.location.latitude,
                longitude: this.state.location.longitude,
                latitudeDelta: 100,
                longitudeDelta: 100,
              }}
            >
              <Marker
                coordinate={{
                  latitude: this.state.location.latitude,
                  longitude: this.state.location.longitude,
                }}
              >
                <Image
                  source={require("../assets/iss_icon.png")}
                  style={{ height: 50, width: 50 }}
                />
              </Marker>
            </MapView>
          </View>
          <IssInfo />
        </ImageBackground>
      </View>
    );
  }
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
  refeshContainer:{
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center"

  }
});
