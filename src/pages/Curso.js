import React from 'react';
import { View, Text, ScrollView} from 'react-native';
import CardUcs from '../components/Ucs/CardUcs';


export default function Curso(){
    return(
        <View>
            <Text>Tela do Curso</Text>

            <ScrollView>
                <CardUcs></CardUcs>
            </ScrollView>
        </View>
    );
}