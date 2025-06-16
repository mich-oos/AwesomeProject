import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ambil data dari API saat komponen pertama kali di-load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users?page=1', {
          headers: {
            'x-api-key': 'reqres-free-v1',
          },
        });

        setUsers(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>
          <Text style={{ fontWeight: 'bold' }}>{item.last_name}</Text> {item.first_name}
        </Text>
        <Text>{item.email}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>User List</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#333" style={{ marginTop: 30 }} />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
  card: {
  flexDirection: 'row',
  padding: 20,                 // Padding besar (biar isi card lega)
  marginVertical: 12,         // Jarak antar card seperti di gambar
  marginHorizontal: 16,
  backgroundColor: '#fff',
  borderRadius: 24,           // Radius besar, sesuai di gambar
  borderWidth: 3,             // Border tebal seperti yang diminta
  borderColor: '#e0e0e0',     // Warna abu terang
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.15,
  shadowRadius: 6,
  elevation: 4,               // Bayangan Android lebih halus
  alignItems: 'center',
  },
  avatar: {
  width: 72,           // Lebih besar dari sebelumnya
  height: 72,
  borderRadius: 36,    // Bulat sempurna
  marginRight: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default App;
