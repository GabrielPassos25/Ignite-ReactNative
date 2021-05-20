//Imports
import React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

//Styles
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header() {
    return (
        <SafeAreaView style={styles.statusBar}>
            <View style={styles.header}>
                <Text style={[styles.textHeader, { fontFamily: fonts.text }]}>to.<Text style={[styles.textHeader, { fontFamily: fonts.heading }]}>do</Text></Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: colors.blue,
    },
    header: {
        paddingBottom: 44,
        backgroundColor: colors.blue,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textHeader: {
        fontSize: 24,
        color: colors.white
    }
});