import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import Main from '../pages/Main';
import Pokedex from '../pages/Pokedex';
import PokemonInfo from '../pages/PokemonInfo';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackground: props => (
            <LinearGradient
              colors={['#ff4b4b', '#f72f2f']}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: '100%'
              }}
              start={[1, 0]}
            />
          ),
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'monospace',
            fontSize: 25
          }
        }}
      >
        <Stack.Screen name='Regions' component={Main} />
        <Stack.Screen name='Pokedex' component={Pokedex} />
        <Stack.Screen name='PokemonInfo' component={PokemonInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
