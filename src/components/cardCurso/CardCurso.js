import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



export default function CardCurso(props){
    const navigation = useNavigation();
    //onPress={() => navigation.navigate('curso')}
    return(
        <Card onPress={props.onPress} style={styles.card}>
            <Card.Content>
                <Title style={styles.title}>{props.name}</Title>
                <Paragraph style={styles.paragraph}>{props.description}</Paragraph>
                <ProgressBar progress={0.5} color={MD3Colors.error50} /> 
            </Card.Content>
        </Card>
    );
}

/*
const CardCurso = () => (
    <>
        <Card onPress={() => navigation.navigate('curso')} style={styles.card}>
            <Card.Content>
                <Title style={styles.title}>ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</Title>
                <Paragraph style={styles.paragraph}>GRADUAÇÃO</Paragraph>
                <ProgressBar progress={0.5} color={MD3Colors.error50} /> 
            </Card.Content>
        </Card>
    </>
);

export default CardCurso;
*/
const styles = StyleSheet.create({
    card: {
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 20,
        width: '90%',
        alignSelf: 'center'
    },
    title: {
        fontSize: 10,
    },
    paragraph: {
        fontSize: 10,
        marginBottom: 5
    },
});