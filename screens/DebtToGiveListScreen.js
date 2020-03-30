import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Colors from '../constants/colors';

const DebtToGiveListScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.loginText}>Lista</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  loginText: {
    color: "white"
  }
});

export default DebtToGiveListScreen;
