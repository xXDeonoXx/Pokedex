import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PokeCard from './src/components/PokemonCard';
import Navigator from './src/routes/mainStack';

export default function App() {
  return <Navigator />;
}

const styles = StyleSheet.create({});

// continuar em https://youtu.be/cS4PgI3zBzY?t=530
