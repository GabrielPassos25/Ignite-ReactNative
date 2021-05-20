//Imports
import React, { useState } from 'react';
import { View, TouchableOpacity, Platform, Image, StyleSheet, TextInput } from 'react-native';

//Assets
import CheckIcon from '../assets/Check.png'

//Styles
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonInputProps {
    addTask: (task: string) => void;
}

export function InputButton({ addTask }: ButtonInputProps) {
    const [task, setTask] = useState('');

    function handleAddNewTask() {
        if (task) {
            addTask(task);
        }
        setTask('');
    }

    const onChange = (taskValue: string) => setTask(taskValue);

    return (
        <View style={[styles.inputContainer, Platform.OS === 'ios' ? styles.iosShadow : styles.androidShadow]}>
            <TextInput style={styles.input} placeholder='Adicionar novo todo...' returnKeyType='send' onChangeText={onChange} value={task} />
            <TouchableOpacity activeOpacity={0.7} style={styles.addButton} onPress={handleAddNewTask}>
                <Image source={CheckIcon} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: colors.light_gray,
        borderRadius: 5,
        marginTop: -25,
        marginHorizontal: 40,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iosShadow: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84
    },
    androidShadow: {
        elevation: 5
    },
    input: {
        flex: 1,
        paddingLeft: 12,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    addButton: {
        backgroundColor: colors.green,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    }
});