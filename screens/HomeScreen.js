import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from '../components/Card';
import CardLoanShortList from '../components/CardLoanShortList';

import ShortLoanDataItem from '../components/ShortLoanDataItem';

import { USER_DATA } from '../data/user-data';

const HomeScreen = ({navigation}) => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <Card title="Podsumowanko">
                    <Text>Witaj {USER_DATA.shortInfo.name}!</Text>
                    <View style={styles.summary}>
                        <Text>Sumarycznie inni są Tobie winni:</Text>
                        <Text>{USER_DATA.shortInfo.moneyToGet} zł</Text>
                    </View>
                    <View style={styles.summary}>
                        <Text>Ty jesteś winny innym:</Text>
                        <Text>{USER_DATA.shortInfo.moneyToGive} zł</Text>
                    </View>
                </Card>

                <CardLoanShortList
                    title="Największe kwoty do oddania"
                    onSectionPress={() => navigation.navigate('DebtToGiveList')}
                    list={USER_DATA.peopleToGiveMoneyList}
                />

                <CardLoanShortList
                    title="Największe kwoty do odzyskania"
                    onSectionPress={() => console.log("Sekcja 2")}
                    list={USER_DATA.peopleToGetMoneyList}
                />
            </View >
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        alignItems: 'center'
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listSectionButton: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 10,
        textDecorationLine: 'underline'
    }
});

export default HomeScreen;
