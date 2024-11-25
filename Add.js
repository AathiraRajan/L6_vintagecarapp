import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { carData } from './Data';

const Add = ({ navigation }) => {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [sectionTitle, setSectionTitle] = useState('Chevrolet');

    const addCar = () => {
        if (!name || !imageUrl) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        const section = carData.find((section) => section.title === sectionTitle);
        section.data.push({ name, imageUrl });
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Car Name:</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} />
            <Text style={styles.label}>Image URL:</Text>
            <TextInput style={styles.input} value={imageUrl} onChangeText={setImageUrl} />
            <Text style={styles.label}>Manufacturer:</Text>
            <RNPickerSelect
                value={sectionTitle}
                onValueChange={setSectionTitle}
                items={carData.map((section) => ({
                    label: section.title,
                    value: section.title,
                }))}
            />
            <Button title="ADD CAR" onPress={addCar} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#FAF3E3' },
    label: { fontSize: 16, fontWeight: 'bold', marginVertical: 5 },
    input: { borderWidth: 1, borderColor: '#ddd', padding: 10, marginBottom: 10, borderRadius: 5 },
});

export default Add;
