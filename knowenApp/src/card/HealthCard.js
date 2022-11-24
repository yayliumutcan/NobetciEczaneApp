import React, { useState } from 'react';
import styles from './HealthCard.style';
import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HealthCard = ({ card }) => {
  const latitude = card.latitude;
  const longitude = card.longitude;
  const label = card.EczaneAdi + card.Sehir + card.ilce;

  const url = Platform.select({
    ios: "maps:" + latitude + "," + longitude + "?q=" + label,
    android: "geo:" + latitude + "," + longitude + "?q=" + label
  });

  return (
    <View style={styles.Card_Container}>
      <View style={styles.Header_Container}>
        <Image source={require('../assets/card.jpg')} resizeMode='cover' style={styles.Header_Image} />
        <Text style={styles.Header_Text}>{card.EczaneAdi}</Text>
      </View>
      <View style={styles.Inner_Container}>
        <Text style={styles.Adress_Text}>Adres : <Text style={styles.Adress_Text_Inner}>{card.Adresi}</Text></Text>
        <Text style={styles.Telephone_Text}>Telefon : <Text style={styles.Telephone_Text_Inner}>{card.Telefon}</Text></Text>
      </View>
      <View style={styles.Contact_Container}>
        <TouchableOpacity onPress={() => Linking.openURL(url) } style={styles.Map_Button_Container}>
          <Icon name="google-maps" size={25} style={styles.Map_Icon}/>
          <Text style={styles.Map_Text}>Yol Tarifi</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { Linking.openURL(`tel:${card.Telefon}`) }} style={styles.Phone_Button_Container}>
          <Icon name="phone" size={25} style={styles.Phone_Icon}/>
          <Text style={styles.Phone_Text}>{card.Telefon}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HealthCard