import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import Item from './item';

export default function Home({ navigation }) {
    const [data, setData] = useState([
        { name: "Timothy", key: 1, details: "Timothy is a student at the University of Texas at Austin" },
        { name: "Travis", key: 2, details: "Travis is a student at the University of LA at United States" },
        { name: "Doron", key: 3, details: "Trevor is a CTO at the Per Diam in Isreal" },
    ]);
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Item item={item} />
                )}
            />
            <View style={styles.button}>
                <Button color="#00ffff" title="Go to Profile" onPress={() => navigation.navigate('Profile', { name: 'Timothy' })} />
            </View>
            <View style={styles.button}>
                <Button color="#00ffff" title="Go to Profile" onPress={() => navigation.navigate('Profile', { name: 'Timothy' })} />
            </View>
            {/* <Text style={styles.text}>Records</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cadetblue',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    text: {

        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        fontFamily: 'sans-serif-thin',
    },
    button: {
        margin: 50,
        margin: 10,
        flexDirection: 'row',
    }
});
