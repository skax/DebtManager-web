import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShortLoanDataItem = props => {
    return (
        <View style={styles.item}>
            <Text>{props.loan.name}</Text>
            <Text>{props.loan.money} zł</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    }
});

export default ShortLoanDataItem; 