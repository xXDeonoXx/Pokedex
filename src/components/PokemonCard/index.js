import React from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';

import Type from './type';

export default function PokemonCard(props) {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('PokemonInfo', { pokemon: props.pokemon })
      }
    >
      <View style={[styles.body, { backgroundColor: props.pokemon.color }]}>
        <View style={styles.sideInfo}>
          <Text style={styles.id}>#{props.pokemon.id}</Text>
          <Text style={styles.name}>
            {capitalizeString(props.pokemon.name)}
          </Text>
          <View style={styles.types}>{mapTypes(props.pokemon.types)}</View>
        </View>
        <Image
          style={styles.image}
          // para usar uma imagem com qualidade melhor, usar props.pokemon.defaultImage
          source={props.pokemon.sprites.front_default}
        />
      </View>
    </TouchableOpacity>
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

const styles = StyleSheet.create({
  id: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'monospace'
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 5, height: 1 },
    textShadowRadius: 10,
    fontFamily: 'monospace'
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
