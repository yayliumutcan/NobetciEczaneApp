import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './input.style';
import {
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

function Input({ placeholder, placeholderTextColor, imager, secureTextEntry, style, }) {
    const [isFocus, setFocus]=useState(false);
    const [isValue, setValue]=useState("")

    function handleFocus(){
        setFocus(true);
    }
    function handleClose(){
        setFocus(false);
        onRemove();
    }
    function onRemove(){
        setValue("");
    }
    return (
        <View style={[styles.Container, style]}>
            <Icon name={imager} size={25}/>
            <TextInput
                placeholder={placeholder}
                // clearButtonMode="always" IOS
                placeholderTextColor={placeholderTextColor}
                style={styles.TextInput}
                value={isValue}
                onChange={e=>setValue(e.Text)}
                onChangeText={handleFocus}
                secureTextEntry={secureTextEntry}
            />
            {isFocus && (
                <TouchableOpacity onPress={handleClose}><Icon name="close" size={25} style={styles.icons} /></TouchableOpacity>
            )}
        </View>

    );
};

export default Input;
