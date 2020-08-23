import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function addTodo({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput
                placeholder='Type in here ...'
                style={styles.input}
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} color='coral' title='Add Note' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        fontSize: 20
    }
});