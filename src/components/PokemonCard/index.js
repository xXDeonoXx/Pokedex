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
        <Text style={styles.name}>{capitalizeString(props.pokemon.name)}</Text>
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

function capitalizeString(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function setPokemonColor(color) {
  const colors = {
    green: '#43c466',
    red: '#f2655c',
    blue: '#5cb3f2',
    white: '#f0f0f0',
    brown: '#A0522D',
    purple: '#8E44AD',
    yellow: '#FFD700',
    pink: '#FFCBDB',
    gray: '#a0a0a0',
    black: '#2b2b2b'
  };

  let pokemonColor = '';

  switch (color) {
    case 'green':
      pokemonColor = colors.green;
      break;

    case 'red':
      pokemonColor = colors.red;
      break;

    case 'blue':
      pokemonColor = colors.blue;
      break;

    case 'white':
      pokemonColor = colors.white;
      break;

    case 'brown':
      pokemonColor = colors.brown;
      break;

    case 'purple':
      pokemonColor = colors.purple;
      break;

    case 'yellow':
      pokemonColor = colors.yellow;
      break;

    case 'pink':
      pokemonColor = colors.pink;
      break;

    case 'gray':
      pokemonColor = colors.gray;
      break;

    case 'black':
      pokemonColor = colors.black;
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
