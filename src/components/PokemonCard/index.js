import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import Type from './type';

export default function PokemonCard() {
  return (
    <View style={styles.body}>
      <View style={styles.sideInfo}>
        <Text style={styles.id}>#001</Text>
        <Text style={styles.name}>Bulbasauro</Text>
        <View style={styles.types}>
          <Type name='poison' />
          <Type name='grass' />
        </View>
      </View>
      <Image
        style={styles.image}
        source='https://vignette.wikia.nocookie.net/pokedex-br/images/a/a2/Bulbasauro_Pose.png/revision/latest/scale-to-width-down/236?cb=20151224122219&path-prefix=pt-br'
      />
    </View>
  );
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
    width: 100,
    height: 100,
    alignItems: 'flex-end',
    margin: '20px'
  },
  body: {
    backgroundColor: '#32a852',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginBottom: 10,
    margin: 10
  },
  sideInfo: {
    justifyContent: 'center',
    marginLeft: '10px'
  },
  types: {
    flexDirection: 'row'
  }
});
