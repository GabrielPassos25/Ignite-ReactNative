//Imports
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

//Styles
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ChangeTheme {
    onPress: (mode: string) => void;
    mode: string;
}

export function Header({ onPress, mode }: ChangeTheme) {

    return (
        <SafeAreaView style={styles[`statusBar${mode}`]}>
            <View style={styles[`header${mode}`]}>
                <TouchableOpacity onPress={() => onPress(mode)}>
                    <Text style={[styles[`textHeader${mode}`], { fontFamily: fonts.text }]}>to.<Text style={[styles[`textHeader${mode}`], { fontFamily: fonts.heading }]}>do</Text></Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    statusBarLight: {
        backgroundColor: colors.blue,
    },
    headerLight: {
        paddingBottom: 44,
        backgroundColor: colors.blue,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textHeaderLight: {
        fontSize: 24,
        color: colors.white
    },
    statusBarDark: {
        backgroundColor: colors.blue_darkMode,
    },
    headerDark: {
        paddingBottom: 44,
        backgroundColor: colors.blue_darkMode,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textHeaderDark: {
        fontSize: 24,
        color: colors.gray_darkMode
    }
});