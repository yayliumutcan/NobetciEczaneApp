import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, Image, TextInput, ActivityIndicator, FlatList, SafeAreaView, Dimensions } from 'react-native';
import axios from 'axios';
import styles from './Health.style';
import HealthCard from '../../card/HealthCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Health({ route }) {
  const { name } = route.params;
  const [city, setCity] = useState('');
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const api = {
    key: 'jL8oA7zqTJKV3sZZCiCeiHSDp31tLmNBo9p36pNUbDkUjJfeYLA1yVlOA19i',
  };

  const img_URL='../../assets/banner.jpeg';

  useEffect(() => {
    setCity(name);
    fetchData();
  }, []);

  async function fetchData() {
    const response = await axios.get(`https://www.nosyapi.com/apiv2/pharmacyLink?city=${name}&apikey=${api.key}`);
    setData(response.data);
  }

  const fetchDataHandler = useCallback(() => {
    setData('')
    setCity(input)
    setLoading(true);
    setInput('');
    axios({
      method: 'GET',
      url: `https://www.nosyapi.com/apiv2/pharmacyLink?city=${input}&apikey=${api.key}`,
    })
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.dir(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [input, api.key]);

  const renderHealthItem = ({ item }) => (<HealthCard card={item} />)

  return (
    <SafeAreaView style={styles.root}>
      <Image resizeMode='cover' style={{ width: Dimensions.get('window').width, height: 150, paddingHorizontal: 5 }} source={require(img_URL)} />
      <TextInput
        placeholder="Şehir ismi giriniz.."
        style={styles.textInput}
        onChangeText={text => setInput(text)}
        placeholderTextColor={'#000'}
        onSubmitEditing={fetchDataHandler}
        value={input}
      />
      <View style={styles.City_Container}>
        <Icon name="subdirectory-arrow-right" size={25} style={styles.Icon} />
        <Text style={styles.City_Text}>{city}</Text>
      </View>
      {loading && (
        <View style={styles.Loading}>
          <ActivityIndicator size={'large'} color={'lightblue'} />
        </View>
      )}
      {!loading && <FlatList
        data={data.data}
        keyExtractor={(item) => item.Adresi}
        renderItem={renderHealthItem}
      />}

    </SafeAreaView>
  );
};

export default Health;
