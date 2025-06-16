import React from 'react';
import {TextInput as Input, StyleSheet} from 'react-native';

const TextInput = ({placeholder, ...rest}) => {
  return <Input style={styles.input} placeholder={placeholder} {...rest} />;
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    height: 45,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 14,
    color: 'black',
    backgroundColor: '#fff',
  },
});