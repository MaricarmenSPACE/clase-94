import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./screens/Home"
import IssLocationScreen from './screens/IssLocation'
import MeteorScreen from './screens/Meteors'
import UpdateScreen from './screens/Updates'

export default function App() {
  return (
    <View style={styles.container}>
      
      <UpdateScreen/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
