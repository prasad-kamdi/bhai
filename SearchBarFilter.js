import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native';
import data from './firstName.json';
import lastName from './lastName.json';



const SearchBarFilter = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const [searchTerm1, setSearchTerm1] = useState('');
    const [filteredData1, setFilteredData1] = useState([]);


    const handleInputChange = (event) => {
        const { value } = event.target;
        console.log('Name:' + value)
        setSearchTerm(value);
        filterData(value);
    };


    const handleInputChange1 = (event) => {
        const { value } = event.target;
        console.log('Surname:' + value)
        setSearchTerm1(value);
        filterData1(value);
        //filterData(searchTerm1);
    };

    const filterData = (searchTerm) => {
        console.log(searchTerm)
        if (searchTerm === undefined || searchTerm == null || searchTerm.length <= 0) {
            setFilteredData([]);
        } else {
            const filteredData = data.filter((item) =>
                item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
            );
            //console.log(filteredData)
            setFilteredData(filteredData);
        }
    };


    const filterData1 = (searchTerm) => {
        //console.log(searchTerm)
        if (searchTerm === undefined || searchTerm == null || searchTerm.length <= 0) {
            setFilteredData1([]);
        } else {
            const filteredData = lastName.filter((item) =>
                item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
            );
            //console.log(filteredData)
            setFilteredData1(filteredData);
        }
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Enter 1st letter of your name"
                value={searchTerm}
                onChange={handleInputChange}
                maxLength={100}
            />

            <TextInput
                style={styles.input}
                placeholder="Enter 1st letter of your surname"
                value={searchTerm1}
                onChange={handleInputChange1}
                maxLength={100}
            />
            <Text style={styles.baseText}>New Name</Text>
            <Text style={styles.baseText}>
                {filteredData.map((item) => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </Text>

            <Text style={styles.baseText}>
                {filteredData1.map((item) => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        padding: 10,
    },
    baseText: {
        fontWeight: 'bold',
        color: 'red',
        fontSize: 20,
    }
});

export default SearchBarFilter;