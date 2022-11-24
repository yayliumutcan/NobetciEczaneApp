import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/LoginScreen/Login';
import Health from './src/pages/HealthScreen/Health';
import City from './src/pages/CityScreen/City';
import styles from './App.style';
import {
  SafeAreaView,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

function Home({ navigation }) {

  // function handleLogin() {
  //   navigation.navigate('LoginScreen');
  // }

  // function handleCity() {
  //   navigation.navigate('CityScreen');
  // }

  return (
    <SafeAreaView style={styles.Button_Container}>
      {/* <TouchableOpacity onPress={handleLogin}><Text style={{color:'black'}}>LoginScreen</Text></TouchableOpacity>
      <TouchableOpacity onPress={handleCity}><Text style={{color:'black'}}>CityScreen</Text></TouchableOpacity> */}
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        {/* <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="LoginScreen" component={Login} /> */}
        <Stack.Screen name="CityScreen" component={City} />
        <Stack.Screen name="HealthScreen" component={Health} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;




