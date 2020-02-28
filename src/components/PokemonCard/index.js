import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import Type from './type';

export default function PokemonCard(props) {
  return (
    <View
      style={[
        styles.body,
        { backgroundColor: setPokemonColor(props.pokemon.color) }
      ]}
    >
      <View style={styles.sideInfo}>
        <Text style={styles.id}>#{props.pokemon.id}</Text>
        <Text style={styles.name}>{props.pokemon.name}</Text>
        <View style={styles.types}>{mapTypes(props.pokemon.types)}</View>
      </View>
      <Image
        style={styles.image}
        source={props.pokemon.sprites.front_default}
      />
    </View>
  );
}

function mapTypes(types) {
  return types.map((type, index) => {
    return <Type name={type.type.name} key={index} />;
  });
}

function setPokemonColor(color) {
  const colors = {
    green: '#32a852',
    orange: '#e68c2c'
  };

  let pokemonColor = '';

  switch (color) {
    case 'green':
      pokemonColor = colors.green;
      break;

    default:
      pokemonColor = color;
      break;
  }
  return pokemonColor;
}

const styles = StyleSheet.create({
  id: {
    color: '#fff',
    fontSize: 15
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 5, height: 1 },
    textShadowRadius: 10
  },
  image: {
    width: 150,
    height: 150,
    alignItems: 'flex-end'
  },
  body: {
    backgroundColor: '#32a852',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginBottom: 10,
    margin: 10,
    width: 270,
    height: 150,

    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65
  },
  sideInfo: {
    justifyContent: 'center',
    marginLeft: '10px'
  },
  types: {
    flexDirection: 'row'
  }
});
