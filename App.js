import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PokeCard from './src/components/PokemonCard';

export default function App() {
  return (
    <View style={styles.container}>
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxHeight: 0
  }
});
