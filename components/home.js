import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
            <Button color="#00ffff" title="Go to Profile" onPress={() => navigation.navigate('Profile',{ name: 'Timothy' })} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cadetblue',
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
