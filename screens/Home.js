import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    Platform,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    Image
  } from "react-native";
  import React, { Component } from "react";
  
  export default class HomeScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
    
          <ImageBackground source={require('../assets/bg_image.png')}
          resizeMode="cover"
          style={styles.backgroundImage}>

          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Aplicación Rastreador de la EEI</Text>
          </View>
  
          <TouchableOpacity style={styles.routeCard} 
             onPress={() => this.props.navigation.navigate('IssLocation')}>
            <Text style={styles.routeText}>Localización de la EEI</Text>
            <Image source={require('../assets/iss_icon.png')}
            style={styles.iconImage}></Image>
          </TouchableOpacity>
  

          <TouchableOpacity style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Meteors')}>
            <Text style={styles.routeText}>Meteoritos</Text>
            <Image source={require('../assets/meteor_icon.png')}
            style={styles.iconImage}></Image>
          </TouchableOpacity>
  
  
          <TouchableOpacity style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Updates')}>
            <Text style={styles.routeText}>Actualizaciones</Text>
            <Image source={require('../assets/rocket_icon.png')}
            style={styles.iconImage}></Image>
          </TouchableOpacity>
  
          </ImageBackground>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
      
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
    backgroundImage:{
        flex:1,
    
    },

    iconImage:{

        position:'absolute',
        height:200,
        width:200,
        resizeMode:'contain',
        right:20,
        top:-80

        }
    
  });
  