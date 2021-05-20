//Imports
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

//Pages
import { Header } from '../components/Header';
import { InputButton } from '../components/InputButton';
import { Card } from '../components/Card';
import colors from '../styles/colors';

interface Task {
    id: number;
    title: string;
    done: boolean;
}

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [mode, setMode] = useState('Light');
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

    function handleThemeChange() {
        if (mode === 'Light') {
            setMode('Dark');
        }
        else {
            setMode('Light')
        }
    }

    return (
        <View style={styles[`container${mode}`]}>
            <Header onPress={handleThemeChange} mode={mode} />
            <InputButton addTask={handleAddTask} mode={mode} />
            <Card tasks={tasks} mode={mode} onPress={handleMarkTaskAsDone} onLongPress={handleRemoveTask} />
        </View>
    );
}

const styles = StyleSheet.create({
    containerLight: {
        flex: 1,
        backgroundColor: colors.white
    },
    containerDark: {
        flex: 1,
        backgroundColor: colors.black_background
    }
});