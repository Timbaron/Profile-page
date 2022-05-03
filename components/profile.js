import React from "react";
import { StyleSheet, Text, View , Button } from "react-native";

export default function Profile({ navigation, route }){
    return (
        <View style={styles.container}>
        <Text style={styles.text}>This is {route.params.name}'s Profile</Text>
        <Button title="Go to About" onPress={() => navigation.navigate('About')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aquamarine',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        fontFamily: 'sans-serif-thin',
    }
});