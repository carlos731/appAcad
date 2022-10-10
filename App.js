import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import { Drawer } from 'react-native-paper';

import Routes from './src/router';
import NavBar from './src/components/navbar/NavBar';
import ButtonNavigation from './src/components/ButtonNavigation/ButtonNavigation';
import SideNav from './src/components/sideNav/SideBar';

export default function App(){
  
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
  });
  /*
  if(!fontsLoaded){
    return <AppLoading/>;
  }
  */
  return(
    <>
      <NavBar></NavBar>
      <StatusBar style="black" backgroundColor="#000" translucent={false}></StatusBar>
      <Routes></Routes>
    </>
  )
}

//<ButtonNavigation></ButtonNavigation>


const styles = StyleSheet.create({
  ButtonNavigation: {
      backgroundColor: '#00315a'
  }
});