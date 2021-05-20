//Imports
import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../styles/colors';

interface MyTasksListProps {
    tasks: {
        id: number;
        title: string;
        done: boolean;
    }[];
    onPress: (id: number) => void;
    onLongPress: (id: number) => void;
}

export function Card({ tasks, onPress, onLongPress }: MyTasksListProps) {
    return (
        <FlatList data={tasks} keyExtractor={item => String(item.id)} renderItem={({ item, index }) => {
            return (
                <TouchableOpacity activeOpacity={0.7} onPress={() => onPress(index)} onLongPress={() => onLongPress(item.id)}>
                    {
                        item.done ?
                            <View style={styles.taskButtonDone}>
                                <FontAwesome name="circle" size={24} color={colors.blue} />
                                <Text style={styles.taskTextDone}>
                                    {item.title}
                                </Text>
                            </View>
                            :
                            <View style={styles.taskButton}>
                                <FontAwesome name="circle-o" size={24} color="black" />
                                <Text style={styles.taskText}>
                                    {item.title}
                                </Text>
                            </View>
                    }
                </TouchableOpacity>);
        }} style={{ marginHorizontal: 24, marginTop: 32 }} />
    );
}

const styles = StyleSheet.create({
    taskButton: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 12,
        marginBottom: 4,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    taskButtonDone: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 12,
        marginBottom: 4,
        borderRadius: 4,
        backgroundColor: 'rgba(25, 61, 223, 0.1)',
        flexDirection: 'row',
        alignItems: 'center',
    },
    taskText: {
        color: '#3D3D4D',
        paddingLeft: 5
    },
    taskTextDone: {
        color: '#A09CB1',
        paddingLeft: 5,
        textDecorationLine: 'line-through'
    },
})