import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Card from '../components/Card';

const HomeScreen = props => {
    return (
        <View style={styles.screen}>
            <Card title="Podsumowanko">
                <Text>Witaj Natalcia!</Text>
                <Text>W sumie inni są Tobie winni: 10 000 zł</Text>
                <Text>W sumie jesteś winna innym: 50 zł</Text>
            </Card>
        </View >
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        alignItems: 'center'
    }
});

export default HomeScreen;
