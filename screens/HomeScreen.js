import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from '../components/Card';
import ShortLoanDataItem from '../components/ShortLoanDataItem';

import { USER_DATA } from '../data/user-data';

const HomeScreen = props => {
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

                <Card title="Największe kwoty do oddania">
                    {USER_DATA.peopleToGiveMoneyList.map((loan) => <ShortLoanDataItem loan={loan} />)}
                </Card>

                <Card title="Największe kwoty do odzyskania">
                    {USER_DATA.peopleToGetMoneyList.map((loan) => <ShortLoanDataItem loan={loan} />)}
                </Card>
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
    }
});

export default HomeScreen;
