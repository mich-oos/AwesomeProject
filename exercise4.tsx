import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TextInput from './components/TextInput';
import Button from './components/Button';
import Title from './components/Title';

const Login = () => {
  return (
    <View style={styles.container}>
      <Title>Welcome</Title>
      <Title>Username</Title>
      <TextInput placeholder="Masukan email anda" />
      <Title>Password</Title>
      <TextInput placeholder="Masukan password anda" secureTextEntry={true} />
      <Button text="Sign In" />
      <Button text="Sign In Google" color="red" textColor="white" />
      <Button text="Sign In Facebook" color="blue" textColor="white" />
      <Button text="Sign In Apple" color="black" textColor="white" />
      
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
});