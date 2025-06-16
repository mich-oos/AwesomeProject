import React from "react";
import {View, Text, StyleSheet} from "react-native";

const Flexbox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.redcontainer}/>
            <View style={styles.greencontainer}/>
            
            <View style={styles.bluecontainer}/>
        </View>
    );
};

export default Flexbox;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        flex: 1,
        flexDirection: 'row', //untuk ditempatkan dari atas kebawah(column),dan kiri kekanan(row) atau mengatur main axis
        justifyContent: 'space-around',
        //untuk mengatur children(main axis), bisa diatur diatas, ditengah, dibawah, memberi jarak dan 
        // membuat jaraknya sama rata
        alignContent: 'flex-start', // untuk mengatur bagian atas atau bawah
        //untuk kiri kanan menggunakan alignItems (cross axis)

    },
    redcontainer: {
        backgroundColor: 'red',
        height: 100,
        width: 100,
    },
    greencontainer: {
        backgroundColor: 'green',
        height: 100,
        width: 100,
    },
    bluecontainer: {
        backgroundColor: 'blue',
        height: 100,
        width: 100,
    },
});
