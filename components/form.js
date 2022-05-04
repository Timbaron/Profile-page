import React,{ useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";



export default function Form({ navigation , route})
{ 
    const handler = route.params.submitHandler;
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [description, setDescription] = useState('');
    const submitHandler = () => {
        let data = {
            name: name,
            age: age,
            gender: gender,
            description: description
        };
        const jsonData = JSON.stringify(data);
        handler(jsonData)
        // try {
        //    await AsyncStorage.setItem('data', jsonData);
        // }
        // catch (error){
        //     console.log(error);
        // }
        // navigation.navigate('Home');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add new Record</Text>

            <Text>Enter Name:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(val) => setName(val)}
                value={name}
            />
            <Text>Enter Age:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(val) => setAge(val)}
                value={age}
            />
            <Text>Enter Gender:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(val) => setGender(val)}
                value={gender}
            />
            <Text>Enter Description:</Text>
            <TextInput
                style={styles.input}
                multiline
                onChangeText={(val) => setDescription(val)}
                value={description}
            />

            <Button 
                title="Add Record"
                onPress={submitHandler}

            />
        </View>
    )
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'blue',
        color: 'white',
        fontFamily: 'sans-serif-thin',
        fontStyle: 'italic',
        borderRadius: 10,
    },
});