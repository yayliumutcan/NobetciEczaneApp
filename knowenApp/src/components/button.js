import React from 'react';
import styles from './button.style'; 

import {
  Text,
  TouchableOpacity
} from 'react-native';

function Button({ButtonTitle, style, onPress}) {
  return (
      <TouchableOpacity style={[styles.Button, style]} onPress={onPress}>
        <Text style={styles.Button_Title}>{ButtonTitle}</Text>
      </TouchableOpacity>
  );
};


export default Button;
