//Imports
import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface MyTasksListProps {
    tasks: {
        id: number;
        title: string;
        done: boolean;
    }[];
    mode: string;
    onPress: (id: number) => void;
    onLongPress: (id: number) => void;
}

export function Card({ tasks, mode, onPress, onLongPress }: MyTasksListProps) {
    return (
        <>
            <Text style={styles[`title${mode}`]}>
                Minhas Tasks
            </Text>
            <FlatList data={tasks} keyExtractor={item => String(item.id)} renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity activeOpacity={0.7} onPress={() => onPress(index)} onLongPress={() => onLongPress(item.id)}>
                        {
                            item.done ?
                                <View style={styles[`taskButtonDone${mode}`]}>
                                    <FontAwesome name="circle" size={24} color={mode === 'Light' ? colors.blue : colors.purple} />
                                    <Text style={styles[`taskTextDone${mode}`]}>
                                        {item.title}
                                    </Text>
                                </View>
                                :
                                <View style={styles[`taskButton${mode}`]}>
                                    <FontAwesome name="circle-o" size={24} color={mode === 'Light' ? colors.blue : colors.purple} />
                                    <Text style={styles[`taskText${mode}`]}>
                                        {item.title}
                                    </Text>
                                </View>
                        }
                    </TouchableOpacity>);
            }} style={{ marginHorizontal: 24, marginTop: 32 }} />
        </>
    );
}

const styles = StyleSheet.create({
    taskButtonLight: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 12,
        marginBottom: 4,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    taskButtonDoneLight: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 12,
        marginBottom: 4,
        borderRadius: 4,
        backgroundColor: 'rgba(25, 61, 223, 0.1)',
        flexDirection: 'row',
        alignItems: 'center',
    },
    taskTextLight: {
        color: colors.title,
        paddingLeft: 5,
        fontSize: 16
    },
    taskTextDoneLight: {
        color: colors.gray,
        paddingLeft: 5,
        textDecorationLine: 'line-through',
        fontSize: 16
    },
    titleLight: {
        fontSize: 24,
        fontFamily: fonts.heading,
        color: colors.title,
        paddingHorizontal: 20,
        marginTop: 40,
    },
    taskButtonDark: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 12,
        marginBottom: 4,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    taskButtonDoneDark: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 12,
        marginBottom: 4,
        borderRadius: 4,
        backgroundColor: 'rgba(33, 33, 54, 0.5)',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 16
    },
    taskTextDark: {
        color: colors.gray_darkMode,
        paddingLeft: 5,
        fontSize: 16
    },
    taskTextDoneDark: {
        color: colors.gray,
        paddingLeft: 5,
        textDecorationLine: 'line-through'
    },
    titleDark: {
        fontSize: 24,
        fontFamily: fonts.heading,
        color: colors.purple,
        paddingHorizontal: 20,
        marginTop: 40,
    }
})