import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';
import PokemonCard from '../../components/PokemonCard';
import api from '../../Services/pokeApiWrapper';

export default function index(props) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPokemons() {
      let data = await api.getPokedexEntries(props.route.params.region);
      await setPokemons(data);
      await setLoading(false);
    }
    loadPokemons();
  }, []);

  if (loading) {
    return (
      <ImageBackground
        source={require('../../../assets/pokeball.jpeg')}
        style={styles.imageBackground}
        imageStyle={{ opacity: 0.3 }}
      >
        <View style={styles.container}>
          <Text>Carregando...</Text>
        </View>
      </ImageBackground>
    );
  }

  // Render principal da tela
  // return <View style={styles.container}>{mapPokemons()}</View>;
  return (
    <ImageBackground
      source={require('../../../assets/pokeball.jpeg')}
      style={styles.imageBackground}
      imageStyle={{ opacity: 0.3 }}
    >
      <FlatList
        data={pokemons}
        renderItem={({ item: pokemon, index }) => (
          <PokemonCard id={pokemon.id.toString()} pokemon={pokemon} />
        )}
        keyExtractor={pokemon => pokemon.id.toString()}
        numColumns='2'
        columnWrapperStyle={styles.list}
      />
    </ImageBackground>
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
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxHeight: 0
  },
  list: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  imageBackground: {
    width: '100%',
    height: '100%'
  }
});
