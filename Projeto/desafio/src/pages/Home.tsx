//Imports
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Platform, TouchableOpacity, Image, FlatList } from 'react-native';

//Pages
import { Header } from '../components/Header';
import { InputButton } from '../components/InputButton';
import { Card } from '../components/Card';

//Styles
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Task {
    id: number;
    title: string;
    done: boolean;
}

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);
    function handleAddTask(newTaskTitle: string) {
        const data = {
            id: new Date().getTime(),
            title: newTaskTitle,
            done: false
        } as Task;
        setTasks(oldstate => [...oldstate, data]);
    }

    function handleMarkTaskAsDone(id: number) {
        tasks[id] = {
            id: tasks[id].id,
            title: tasks[id].title,
            done: !tasks[id].done
        }
        setTasks(tasks.filter(() => true));
    }

    function handleRemoveTask(id: number) {
        setTasks(oldState => oldState.filter(task => task.id !== id));
    }
    return (
        <View style={styles.container}>
            <Header />
            <InputButton addTask={handleAddTask} />
            <Text style={styles.title}>
                Minhas Tasks
            </Text>
            <Card tasks={tasks} onPress={handleMarkTaskAsDone} onLongPress={handleRemoveTask} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 40
    },
    title: {
        fontSize: 24,
        fontFamily: fonts.heading,
        color: colors.title,
        paddingHorizontal: 20,
        marginTop: 40,
    }
});