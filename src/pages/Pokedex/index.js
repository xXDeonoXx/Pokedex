import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import PokemonCard from '../../components/PokemonCard';
import api from '../../Services/pokeApiWrapper';

export default function index(props) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPokemons() {
      let data = await api.getPokedexEntries(props.region);
      setPokemons(data);
    }
    loadPokemons();
  }, []);

  useEffect(() => {
    if (pokemons) {
      console.log('carregando');
      setLoading(false);
    }
  }, [pokemons]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return <View style={styles.container}>{mapPokemons()}</View>;

  function mapPokemons() {
    return pokemons.map((pokemon, index) => {
      return <PokemonCard key={index} id={index} pokemon={pokemon} />;
    });
  }
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
