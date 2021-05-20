//Imports
import React from 'react';
import { StatusBar } from 'react-native';

//Pages
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
}