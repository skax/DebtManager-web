import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DebtToGiveListScreen from './screens/DebtToGiveListScreen';
import ScreenTransition from './navigation/ScreenTransition';

import Colors from './constants/colors';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options= {{
          headerShown: false,
        }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Debt Manager",
          ...ScreenTransition
          }} />
          <Stack.Screen
          name="DebtToGiveList"
          component={DebtToGiveListScreen}
          options={{
            title: "List",
            ...ScreenTransition
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

