import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Colors from '../constants/colors';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.loginText}>Login</Text>
      <Button title="Przejdz dalej" onPress={() => navigation.replace('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  loginText: {
    color: "white"
  }
});

export default LoginScreen;
