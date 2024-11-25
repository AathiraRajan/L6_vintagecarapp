import React from 'react';
import { View, Text, Image, TouchableOpacity, SectionList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { carData } from './Data';

const Home = ({ navigation }) => {
    const renderCarItem = ({ item, section }) => (
        <TouchableOpacity
            style={styles.carItem}
            onPress={() =>
                navigation.navigate('Edit', {
                    name: item.name,
                    imageUrl: item.imageUrl,
                    sectionTitle: section.title,
                })
            }
        >
            <Image source={{ uri: item.imageUrl }} style={styles.carImage} />
            <Text style={styles.carName}>{item.name}</Text>
        </TouchableOpacity>
    );

    const renderSectionHeader = ({ section }) => (
        <View style={[styles.sectionHeader, { backgroundColor: section.color }]}>
            <Icon name={section.icon} size={20} color="#fff" style={styles.sectionIcon} />
            <Text style={styles.sectionTitle}>{section.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('Add')}
            >
                <Text style={styles.addButtonText}>ADD CAR</Text>
            </TouchableOpacity>
            <SectionList
                sections={carData}
                keyExtractor={(item, index) => item.name + index}
                renderItem={renderCarItem}
                renderSectionHeader={renderSectionHeader}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#FAF3E3',
    },
    addButton: {
        backgroundColor: '#3D85C6',
        paddingVertical: 12,
        marginHorizontal: 20,
        marginBottom: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingLeft: 20,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    sectionIcon: {
        marginRight: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
    },
    carItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    carName: {
        flex: 1,
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 15,
    },
    carImage: {
        width: 100,
        height: 80,
        borderRadius: 5,
    },
});

export default Home;

