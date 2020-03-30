import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Card from './Card';
import ShortLoanDataItem from './ShortLoanDataItem';

const CardLoanShortList = props => {
    return (
        <TouchableWithoutFeedback onPress={props.onSectionPress}>
            <View>
                <Card title={props.title}>
                    {props.list.map((loan) => <ShortLoanDataItem loan={loan} />)}
                    <Text style={styles.listSectionButton}>Kliknij na sekcję, aby przejść do pełnego zestawienia</Text>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    listSectionButton: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 10,
        textDecorationLine: 'underline'
    }
});

export default CardLoanShortList; 