import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { StyleSheet} from 'react-native';

import Home from './pages/Home';
import Curso from './pages/Curso';
import NavBar from './components/navbar/NavBar';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                 name="home"
                 component={Home}
                 options={{
                    title: 'HOME',
                    backgroundColor: 'red',
                    headerTitleStyle:{
                        fontFamily: 'Montserrat_700Bold',
                    },
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}}>                     
                            <Feather
                             name="arrow-right"
                             size={24}
                             color="black"
                            />
                        </TouchableOpacity>
                    )
                }}
                />
                
                <Stack.Screen
                 name="curso"
                 component={Curso}
                 options={{
                    title: 'Curso',
                    headerTitleStyle:{
                        fontFamily: 'Montserrat_700Bold',
                    },
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}}>
                            <Feather
                             name="arrow-right"
                             size={24}
                             color="black"
                            />
                        </TouchableOpacity>
                    )
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;

const styles = StyleSheet.create({
    rotas: {
        backgroundColor: '#ff9932'
    }
});