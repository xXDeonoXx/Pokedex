import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

// Componenentes
import Bio from './Bio';
import Stats from './Stats';
import Moves from './Moves'

import Type from '../../components/PokemonCard/type';

export default function index(props) {
  const pokemon = props.route.params.pokemon;

  props.navigation.setOptions({
    title: props.route.params.pokemon.name
  });

  return (
    <View style={[styles.container, { backgroundColor: pokemon.color }]}>
      <Image
        style={styles.pokemonImage}
        source={{ uri: pokemon.defaultImage }}
      />
      <Text style={styles.name}>{pokemon.name}</Text>
      <View style={styles.types}>{mapTypes(pokemon.types)}</View>
      <View style={styles.info}>
        <ScrollableTabView
          tabBarUnderlineColor='#fff'
          tabBarUnderlineStyle={{ backgroundColor: '#000' }}
          tabBarBackgroundColor='#fff'
          tabBarActiveTextColor='#000'
          tabBarInactiveTextColor='#88b0ac'
          styles={styles.scroll}
        >
          <Bio tabLabel='Bio' {...pokemon} />
          <Stats tabLabel='Stats' {...pokemon} />
          <Moves tabLabel='Moves' {...pokemon} />
          <Bio tabLabel='Evolutions' {...pokemon} />
        </ScrollableTabView>
      </View>
    </View>
  );
}

function mapTypes(types) {
  return types.map((type, index) => {
    return <Type name={type.type.name} key={index} />;
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#43c466',
    paddingTop: 150
  },
  pokemonImage: {
    width: 200,
    height: 200
  },
  info: {
    borderRadius: 30,
    marginTop: 10,
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
    paddingBottom: 1,
    paddingTop: 5
  },
  scroll: {},
  types: {
    flexDirection: 'row'
  }
});
