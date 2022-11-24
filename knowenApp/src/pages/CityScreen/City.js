import React, { useState } from 'react';
import { city_data } from '../../data/data'
import styles from './City.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    SafeAreaView,
    View,
    Text,
    FlatList,
    Dimensions,
    TouchableOpacity
} from 'react-native';

const City = ({ navigation }) => {
    const renderCity = ({ item }) => (
        <View style={styles.City_Container}>
            <TouchableOpacity onPress={() => navigation.navigate("HealthScreen", { name: item.name })} style={{ padding: 20, flexDirection:'row', width: Dimensions.get('window').width, borderBottomWidth: 1, borderColor: '#404258' }}>
                <Icon name="search" size={25} color={'#404258'}/>
                <Text style={styles.Button_Text}>{item.id}-{item.name}</Text>
            </TouchableOpacity>
        </View>
    );
    return (
        <SafeAreaView style={styles.Container}>
            <Text style={styles.Header_Text}>Şehir Seçiniz</Text>
            <FlatList
                data={city_data}
                renderItem={renderCity}
                keyExtractor={(item) => item.name}
            />
        </SafeAreaView>
    );
};
export default City