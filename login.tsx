import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextInput from './components/TextInput';
import Button from './components/Button';

const Login = () => {
  // let title = 'Welcome';
  const [title, setTitle] = useState('Registration');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const onSignIn = () => {
    // title = 'Selamat Datang';
    setTitle(`Selamat Datang ${email}`);
    useState({name, username, email, address, phone});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder="Masukan nama lengkap anda"
        onChangeText={e => setName(e)}
      />
      <Text style={styles.label}>Username</Text>
      <TextInput
        placeholder="Masukan username anda"
        onChangeText={e => setUsername(e)}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Masukan email anda"
        onChangeText={e => setEmail(e)}
      />
      <Text style={styles.label}>Address</Text>
      <TextInput
        placeholder="Masukan alamat anda"
        onChangeText={e => setAddress(e)}
      />
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        placeholder="Masukan Nomor telepon anda"
        onChangeText={e => setPhone(e)}
      />
      <Button text="Register" onPress={onSignIn} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 10,
  }
});