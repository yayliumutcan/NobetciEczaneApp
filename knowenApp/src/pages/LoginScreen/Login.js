import React, { useState } from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import styles from './Login.style';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Dimensions,
} from 'react-native';

function Login({ navigation }) {
  function handleLogin() {
    navigation.navigate('CityScreen')
  }
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar hidden />
      <View style={styles.Logo_Container}>
        <Image style={{
          width: Dimensions.get('window').width,
          height: 180,
        }} source={require('../../assets/logo.jpg')} />
      </View>
      <View style={styles.Input_Container}>
        <Input
          placeholder='E-posta'
          placeholderTextColor='darkgray'
          imager="account"
          secureTextEntry={false}
          style={styles.Input} />
        <Input
          placeholder='Şifre'
          placeholderTextColor='darkgray'
          imager="key"
          secureTextEntry={true}
          style={styles.Input} />
        <View style={styles.Button_Container}>
          <Button
            ButtonTitle='Giriş'
            onPress={handleLogin}
            style={styles.Button} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Login;


