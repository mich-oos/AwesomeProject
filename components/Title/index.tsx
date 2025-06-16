import React from "react";
import {Text, StyleSheet} from "react-native";

const Title = ({children}) => {
    return (
        <Text style={style.title}>{children}</Text>
    );
};

export default Title;

const style= StyleSheet.create({
    title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
});