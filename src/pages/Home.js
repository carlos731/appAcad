import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import New from '../components/New';
import CardCurso from '../components/cardCurso/CardCurso';
import Search from '../components/search/Search';
import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();


    return(
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#FFF', }} >
            <View style={styles.header}>
                <View>
                    <Search></Search>
                </View>
            </View>

            <View style={styles.contentNew}>
                <Text onPress={() => navigation.navigate('curso')} style={styles.title}>Cursos</Text>
            </View>
            <ScrollView>
                <CardCurso
                    name="Análise e Desenvolvimento de Sistemas"
                    description="Graduação"
                    onPress={() => navigation.navigate('curso')} style={styles.title}
                />
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
    },
    inputArea:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#FFF',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 10,
    },
    input:{
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 10,
        fontSize: 13,
        width: '90%'
    },
    contentNew:{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    title:{
        paddingHorizontal: 15,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#4fa4a',
        marginBottom: 5
    }
});