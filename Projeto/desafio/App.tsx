//Imports
import React from 'react';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading'
//Pages
import { Home } from './src/pages/Home'

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold });

  if (!fontsLoaded) return <AppLoading />
  return (
    <Home />
  );
}