import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

const Biodata = () => {
  return (
    <ScrollView contentContainerStyle={style.container}>
      <Text style={style.name}>Biodata</Text>
  
      <Image style={style.image1} source={require('./Assets/image1.jpg')}/>
      
      <Text style={style.label}>Nama Lengkap: </Text>
      <Text style={style.text}>Anggreiny Michela Nisye Sondakh</Text>

      <Text style={style.label}>Tempat, Tanggal Lahir:</Text>
      <Text style={style.text}>Berau, 28 Februari 2005</Text>

      <Text style={style.label}>Jenis Kelamin:</Text>
      <Text style={style.text}>Perempuan</Text>

      <Text style={style.label}>Alamat:</Text>
      <Text style={style.text}>Asrama Edelweiss</Text>

      <Text style={style.label}>Email:</Text>
      <Text style={style.text}>anggreinysondakh@gmail.com</Text>

      <Text style={style.label}>Hobi:</Text>
      <Text style={style.text}>Membaca</Text>
      
      <Image
      style={style.image2}
      source={{
        uri: 'https://tse1.mm.bing.net/th?id=OIP.7z5D4zEm5FrPayLl3RtedgHaHa&pid=Api&h=220&P=0.png'
      }}/>

      <Text style={style.label}>Pendidikan:</Text>
      <Text style={style.text}>S1 - Ilmu Komputer, Universitas Klabat</Text>
      <Text style={style.label}>Jurusan:</Text>
      <Text style={style.text}>Sistem Informasi</Text>
      <Image
      style={style.image3}
      source={{
        uri: 'data:image/jpeg;base64,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'
      }}/>
    </ScrollView>
  );
};

export default Biodata;

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  image1: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  image2: {
  width: 150,
  height: 150,
  resizeMode: 'contain'
  },
  image3: {
  width: 150,
  height: 150,
  resizeMode: 'contain'
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  label: {
    marginTop: 10,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: '#444',
  },
  text: {
    alignSelf: 'flex-start',
    color: '#666',
    marginBottom: 5,
  },
});


