import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import Routes from './src/router';
import NavBar from './src/components/navbar/NavBar';
import ButtonNavigation from './src/components/ButtonNavigation/ButtonNavigation';
import Index from './src/pages/Index';

const Index = () => (
    <>
        <NavBar></NavBar>        
        <Routes></Routes>
    </>
);

export default Index;
