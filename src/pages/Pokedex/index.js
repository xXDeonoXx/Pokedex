import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import PokemonCard from '../../components/PokemonCard';
import api from '../../Services/pokeApiWrapper';

export default function index(props) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function loadPokemons() {
      const data = await api.getPokedexEntries(props.region);
      setPokemons(data);
      console.log(data);
    }
    loadPokemons();
  }, []);

  return (
    <View style={styles.container}>
      {pokemons.map(pokemon => {
        return <PokemonCard key={pokemon.name} />;
      })}
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
