import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Alert } from 'react-native';
import { carData } from './Data';

const Edit = ({ navigation, route }) => {
    const { name: initialName, imageUrl: initialImageUrl, sectionTitle } = route.params;
    const [name, setName] = useState(initialName);
    const [imageUrl, setImageUrl] = useState(initialImageUrl);

    const saveCar = () => {
        const section = carData.find((section) => section.title === sectionTitle);
        const car = section.data.find((car) => car.name === initialName);
        car.name = name;
        car.imageUrl = imageUrl;
        navigation.navigate('Home');
    };

    const deleteCar = () => {
        const section = carData.find((section) => section.title === sectionTitle);
        section.data = section.data.filter((car) => car.name !== initialName);
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Edit Car Name:</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} />
            <Text style={styles.label}>Edit Image URL:</Text>
            <TextInput style={styles.input} value={imageUrl} onChangeText={setImageUrl} />
            <Button title="SAVE CHANGES" onPress={saveCar} />
            <Button title="DELETE CAR" color="red" onPress={deleteCar} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#FAF3E3' },
    label: { fontSize: 16, fontWeight: 'bold', marginVertical: 5 },
    input: { borderWidth: 1, borderColor: '#ddd', padding: 10, marginBottom: 10, borderRadius: 5 },
});

export default Edit;
