import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements'

export default function todoItem({ item, pressHandler }) {
    if (item.text == "" && item.key == "") {
        return (
            <Text></Text>
        );
    } else {
        return (
            <View style={styles.item}>
                <TouchableOpacity onPress={() => pressHandler(item.key)}>
                    <Icon
                        name='delete'
                        type='material'
                        color='#517fa4'
                    />
                </TouchableOpacity>
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 10,
        borderStyle: 'dashed',
        fontSize: 15,
        flexDirection: 'row'
    },
    itemText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15
    },
});