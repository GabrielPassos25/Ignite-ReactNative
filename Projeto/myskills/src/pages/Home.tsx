//Imports
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Platform, FlatList, StatusBar } from 'react-native'

//Pages
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
    id: string;
    name: string;
}

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [greetings, setGreetings] = useState('');

    function handleAddNewSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }
        setMySkills(oldState => [...oldState, data]);
    }

    function handleRemoveSkill(id: string) {
        setMySkills(oldState => oldState.filter(skill => skill.id !== id));
    }

    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            setGreetings('Bom dia,');
        }
        else if (currentHour >= 12 && currentHour < 18) {
            setGreetings('Boa tarde,');
        }
        else {
            setGreetings('Boa noite,');
        }
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}><Text style={styles.greetings}>{greetings}</Text> Gabriel!</Text>

            <TextInput style={styles.input} placeholder="Digite o nome da Habilidade" placeholderTextColor="#555" onChangeText={setNewSkill} />

            <Button title='Adicionar' onPress={handleAddNewSkill} />

            <Text style={[styles.title, { marginVertical: 50 }]}>Suas Habilidades:</Text>

            <FlatList data={mySkills} keyExtractor={item => item.id} renderItem={({ item }) => (<SkillCard skill={item.name} onPress={() => handleRemoveSkill(item.id)} />)} showsVerticalScrollIndicator={false} />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 20,
        borderRadius: 7
    },
    greetings: {
        color: '#A370F7',
        fontSize: 24,
        fontWeight: 'bold',
    }
})