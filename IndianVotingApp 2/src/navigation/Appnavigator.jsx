// navigation/AppNavigator.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import VoterIDScreen from '../screens/VoterIdScreen';
import VoteScreen from '../screens/VoteScreen';
import AcknowledgmentScreen from '../screens/AcknowledgmentScreen';

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="VoterId" component={VoterIDScreen} />
      <Stack.Screen name="Vote" component={VoteScreen} />
      <Stack.Screen name="Acknowledgment" component={AcknowledgmentScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
