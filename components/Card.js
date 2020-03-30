import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Card = props => {

    let title = null

    if (props.title) {
        title = <Text style={styles.cardTitle}>{props.title}</Text>;
    }

    return (
        <View style={styles.card}>
            {title}
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        padding: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15
    }
});

export default Card; 