import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Detail({ navigation, route}){
    const {name,age, gender,details} = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}'s Profile</Text>
            <Text>Gander: {gender}</Text>
            <Text>Age: {age}</Text>
            <Text style={styles.details}>Detail: {details} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cadetblue',
        alignItems: 'center',
        marginTop: 10,
        padding: 15,
        // justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        fontFamily: 'sans-serif-thin',
        marginBottom: 15,
    },
    text: {

        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        fontFamily: 'sans-serif-thin',
    },
    details: {
        fontSize: 20,
        alignItems: 'block',
        justifyContent: 'center',
        fontStyle: 'italic',
    }
});
