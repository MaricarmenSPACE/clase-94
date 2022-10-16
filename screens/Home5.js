import { Text, StyleSheet, View, SafeAreaView, Platform ,TouchableOpacity,image} from "react-native";
import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}>
          <View  style={styles.titleBar}>
            <Text  style={styles.titleText}>Aplicación Rastreador De La IEE</Text>
          </View>

          
          <TouchableOpacity style={styles.routeCard}>

            <Text>Localización de la EEI  </Text>
            <image source={require('../assets/iss_icon.png')}
             style={styles.iconImage}></image>


          </TouchableOpacity>


        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },

  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  titleBar:{
    
    flex:0.9,
    backgroundColor:"red",
    alignItems:"center",
    justifyContent:"center"
    

  },

  titleText:{

     fontSize:20,
     fontWeight:"bold",


  },
  
  routeCard:{

    flex:0.85,
    marginLeft:30,
    marginRight:30,
    marginTop:20,
    borderRadius:100,
    backgroundColor:"blue",
    justifyContent:"center",
    alignItems:"center",
    margin:10

  },

  iconImage:{
    height:200,
    width:200,
    resizeMode:'contain',
    top:-80,
    rigth:20,
   
  }
 

});
