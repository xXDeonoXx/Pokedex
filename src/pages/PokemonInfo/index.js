import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { StyleSheet } from 'react-native';

export default function index(props) {
  const pokemon = props.route.params.pokemon;

  props.navigation.setOptions({
    title: props.route.params.pokemon.name
  });

  return (
    // <ImageBackground
    //   source={require('../../../assets/pokeball.jpeg')}
    //   style={styles.imageBackground}
    //   imageStyle={{ opacity: 0.3 }}
    // >

    // </ImageBackground>
    <View style={[styles.container, { backgroundColor: pokemon.color }]}>
      <Image style={styles.pokemonImage} source={pokemon.defaultImage} />
      <Text style={styles.name}>{pokemon.name}</Text>
      <View style={styles.info}>
        <Text style={styles.description}>{pokemon.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#43c466',
    paddingTop: 150
  },
  pokemonImage: {
    width: 150,
    height: 150,
    alignItems: 'flex-end'
  },
  info: {
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%'
  },
  name: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'monospace',
    paddingBottom: 10,
    paddingTop: 10
  },
  description: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'monospace',
    padding: 8
  }
});
