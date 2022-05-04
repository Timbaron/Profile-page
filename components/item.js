import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Detail from "./details";

export default function Item({ navigation, route, item }) {
    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate('Details', {
                name: item.name,
                age: item.age,
                gender: item.gender,
                details: item.details,
                navigation: navigation
            })}
        >
            <View style={styles.container}>
                <Text><Text style={styles.title}>Name:</Text> {item.name}</Text>
                <Text ellipsizeMode='tail' numberOfLines={2}><Text style={styles.title}>Details: </Text>{item.details}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'chartreuse',
        // alignItems: 'center',
        // justifyContent: 'center',
        margin: 20,
        padding: 15,
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        fontFamily: 'sans-serif-thin',
    },
    title: {
        fontWeight: 'bold',
    }
});