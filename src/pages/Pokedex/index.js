import React, { useState, useEffect, useRef } from 'react';
import { FlatList, View, Text, ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';
import PokemonCard from '../../components/PokemonCard';
import api from '../../Services/pokeApiWrapper';

export default function index(props) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  props.navigation.setOptions({
    title: capitalizeString(props.route.params.region)
  });

  useEffect(() => {
    async function loadPokemons() {
      let data = await api.getAllPokemonFromPokedex(props.route.params.region);
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

  return (
    <ImageBackground
      source={require('../../../assets/pokeball.jpeg')}
      style={styles.imageBackground}
      imageStyle={{ opacity: 0.3 }}
    >
      <FlatList
        data={pokemons}
        renderItem={({ item: pokemon, index }) => (
          <PokemonCard
            id={pokemon.id.toString()}
            pokemon={pokemon}
            navigation={props.navigation}
            indexInList={index}
          />
        )}
        keyExtractor={pokemon => pokemon.name.toString()}
        numColumns='2'
        columnWrapperStyle={styles.list}
        windowSize={5}
        initialListSize={12}
        initialNumToRender={12}
        maxToRenderPerBatch={12}
      />
    </ImageBackground>
  );

  function capitalizeString(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
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
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
});
