import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = props => {
    return (
        <View style={styles.card}>
                <Text style = {styles.cardTitle}>{props.title}</Text>
                {props.children}
            </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        padding: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 10,
        backgroundColor: 'white',
        borderRadius: 10 
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10
    }
});

export default Card;