import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Notes App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'coral',
        height: 60,
        paddingTop: 15
    },
    title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
});