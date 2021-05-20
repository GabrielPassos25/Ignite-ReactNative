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
    mode: string;
}

export function InputButton({ addTask, mode }: ButtonInputProps) {
    const [task, setTask] = useState('');

    function handleAddNewTask() {
        if (task) {
            addTask(task);
        }
        setTask('');
    }

    const onChange = (taskValue: string) => setTask(taskValue);

    return (
        <View style={[styles[`inputContainer${mode}`], Platform.OS === 'ios' ? styles.iosShadow : styles.androidShadow]}>
            <TextInput style={styles[`input${mode}`]} placeholder='Adicionar novo todo...' returnKeyType='send' onChangeText={onChange} value={task} placeholderTextColor={mode === 'Light' ? colors.gray : colors.gray_darkMode} />
            <TouchableOpacity activeOpacity={0.7} style={styles[`addButton${mode}`]} onPress={handleAddNewTask}>
                <Image source={CheckIcon} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    inputContainerLight: {
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
    inputLight: {
        flex: 1,
        paddingLeft: 12,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        color: colors.black
    },
    addButtonLight: {
        backgroundColor: colors.green,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },
    inputContainerDark: {
        backgroundColor: colors.light_gray_darkMode,
        borderRadius: 5,
        marginTop: -25,
        marginHorizontal: 40,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iosShadowDark: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84
    },
    androidShadowDark: {
        elevation: 5
    },
    inputDark: {
        flex: 1,
        paddingLeft: 12,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        color: colors.white
    },
    addButtonDark: {
        backgroundColor: colors.purple,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    }
});