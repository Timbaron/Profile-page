import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import Item from './item';

export default function Home({ navigation }) {
    const [data, setData] = useState([
        { name: "Timothy", age: 28, gender: "Male", key: 1, details: "Timothy is a student at the University of Texas at Austin.Timothy is a student at the University of Texas at Austin,Timothy is a student at the University of Texas at Austin." },
        { name: "Travis", age: 20, gender: "Female", key: 2, details: "Travis is a student at the University of LA at United States,Travis is a student at the University of LA at United States,Travis is a student at the University of LA at United States." },
        { name: "Doron", age: 38, gender: "Male", key: 3, details: "Trevor is a CTO at the Per Diam in Isreal, He gave me a little opportunity to join the team" },
        { name: "Hanna", age: 18, gender: "Female", key: 4, details: "Hanna is a Reorter who reported on the Harry Potter series, she gave an intensive report on the movie." }

    ]);

    const submitHandler = (jsonData) => {
        const newData = JSON.parse(jsonData);
        setData((prevData) => {
            return [
                { name: newData.name, age: newData.age, gender: newData.gender, key: Math.random().toString(), details: newData.description },
                ...prevData,
            ]
        });
        navigation.navigate('Home');

    }
    const _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('data');
            if (value !== null) {
                // We have data!!
                console.log(value);
            }
        } catch (error) {
            // Error retrieving data
            console.log(error);
        }
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Item navigation={navigation} item={item} />
                )}
            />
            <View style={styles.button}>
                <Button color="#00ffff" title="Add new Record" onPress={() => navigation.navigate('Form', { submitHandler })} />
            </View>
            <View style={styles.button}>
                <Button color="#00ffff" title="Go to Profile" onPress={() => navigation.navigate('Profile', { name: 'Timothy', setData })} />
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
        margin: 10,
    }
});
