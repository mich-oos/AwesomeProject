import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = ({ title, subtitle, image }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>Hi, {title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Image source={image} style={styles.profileImage} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 24,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    color: '#020202',
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
  },
  subtitle: {
    color: '#8D92A3',
    fontSize: 14,
    marginTop: 4,
    fontFamily: 'Poppins-Regular',
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 12,
  },
});
