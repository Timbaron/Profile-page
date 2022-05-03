import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function  Item({ navigation, route, item })
{
    return (
        <View style={styles.container}>
            <Text><Text style={styles.title}>Name:</Text> {item.name}</Text>
            <Text><Text style={styles.title}>Details: </Text>{item.details}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'chartreuse',
        // alignItems: 'center',
        // justifyContent: 'center',
        margin:20,
        padding:15,
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