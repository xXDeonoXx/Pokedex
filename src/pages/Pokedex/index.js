import React, { useState, useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import PokemonCard from '../../components/PokemonCard';
import api from '../../Services/pokeApiWrapper';

export default function index(props) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPokemons() {
      let data = await api.getPokedexEntries(props.region);
      await setPokemons(data);
      await setLoading(false);
    }
    loadPokemons();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  // Render principal da tela
  // return <View style={styles.container}>{mapPokemons()}</View>;
  return (
    <FlatList
      data={pokemons}
      renderItem={({ item: pokemon, index }) => (
        <PokemonCard id={pokemon.id.toString()} pokemon={pokemon} />
      )}
      keyExtractor={pokemon => pokemon.id.toString()}
      numColumns='4'
      columnWrapperStyle={styles.list}
    />
  );

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
  },
  list: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
