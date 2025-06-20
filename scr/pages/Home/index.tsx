import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Header } from '../../components/molecules';
import { Button, Gap } from '../../components/atoms';


const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header 
      title="John Doe"
      subtitle="Have you track your money today?"
      image={require('../../assets/pic.png')}
      />

      <View style={styles.balanceCard}>
        <Text style={styles.sectionTitle}>Your Balance</Text>
        <Text style={styles.balance}>Rp. 10.000.000</Text>
        
        <View style={styles.separator} />
        
        <View style={styles.row}>
          <Text style={styles.label}>Cash on Hand</Text>
          <Text style={styles.value}>Rp. 4.000.000</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Cash on Bank</Text>
          <Text style={styles.value}>Rp. 6.000.000</Text>
        </View>
      </View>

      <View style={styles.transactionBox}>
        <Text style={styles.sectionTitle}>Add Transaction</Text>
        <Button text="Cash on Hand"/>
        <Gap height={12} />
        <Button text="Cash on Bank"/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
  padding: 24,
  backgroundColor: '#ffffff',
  flexGrow: 1,
  },
  balanceCard: {
  backgroundColor: '#fff',
  borderRadius: 12,
  padding: 16,
  marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#020202',
  },
  balance: {
    fontSize: 24,
    fontWeight: '700',
    color: '#020202',
    marginTop: 4,
    marginBottom: 12,
    textAlign: 'center',
    alignSelf: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#020202', 
    marginVertical: 12,
    marginHorizontal: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    color: '#020202'
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#020202'
  },
  transactionBox: {
    backgroundColor: '#ffffff',
  borderRadius: 12,
  padding: 16,
  marginBottom: 20,
  },
});

export default App;
