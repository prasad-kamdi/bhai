import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import nameData from './firstName.json';
import surnameData from './lastName.json';

const Test = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [gansta, setGansta] = useState('');

    const onPressLogin = () => {
        const filteredName = nameData.filter((item) =>
            name.toLowerCase().startsWith(item.name.toLowerCase())
        );
        console.log('filteredName :' + filteredName);

        const filteredLastName = surnameData.filter((item1) =>
            surname.toLowerCase().startsWith(item1.name.toLowerCase())
        );
        console.log('filteredLastName :' + filteredLastName);

        if (filteredName[0] === undefined || filteredName[0] == null || filteredName[0].length <= 0
            || filteredLastName[0] === undefined || filteredLastName[0] == null || filteredLastName[0].length <= 0
        ) {
            setGansta(name + ' ' + surname);
            //setName('');
            //setSurname('');
        } else {
            setGansta(filteredName[0].value + ' ' + filteredLastName[0].value);
        }

    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Find Your Gangsta Name 🥷🏻</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="First Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setName(text)} />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Surname"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setSurname(text)} />
            </View>

            <TouchableOpacity
                onPress={onPressLogin}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>Get Name</Text>
            </TouchableOpacity>

            <Text style={styles.title1}>Your Gangsta Name is:</Text>
            <Text style={styles.title}>{gansta}</Text>
            <Text style={styles.title1}>By Dhinachak Bhai 🦸🏻‍♂️</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EDEDED',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 40,
    },
    inputView: {
        width: "80%",
        backgroundColor: "#3AB4BA",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    forgotAndSignUpText: {
        color: "white",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    title1: {
        fontWeight: "bold",
        fontSize: 25,
        color: "green",
        marginBottom: 40,
    },
});
export default Test;