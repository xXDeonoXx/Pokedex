import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import Main from '../pages/Main';
import Pokedex from '../pages/Pokedex';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackground: props => (
            <LinearGradient
              colors={['#38ef7d', '#11998e']}
              style={{ padding: 30, alignItems: 'center', borderRadius: 0 }}
              start={[1, 0]}
            />
          ),
          headerStyle: {
            backgroundColor: '#f00000'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen name='Regions' component={Main} />
        <Stack.Screen name='Pokedex' component={Pokedex} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
