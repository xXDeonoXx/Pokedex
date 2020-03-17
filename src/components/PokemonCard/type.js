import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Type(props) {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.type,
          { backgroundColor: setTypeBackgroundColor(props.name) }
        ]}
      >
        {props.name}
      </Text>
    </View>
  );
}

function setTypeBackgroundColor(type) {
  const types = {
    bug: '#A8B820',
    dark: '#705848',
    dragon: '#7038F8',
    electric: '#ccac00',
    fairy: '#EE99AC',
    fighting: '#C03028',
    fire: '#dd6510',
    flying: '#A890F0',
    ghost: '#705898',
    grass: '#4E8234',
    ground: '#E0C068',
    ice: '#98D8D8',
    normal: '#A8A878',
    poison: '#A040A0',
    psychic: '#F85888',
    rock: '#B8A038',
    steel: '#B8B8D0',
    water: '#517fee'
  };

  let typeColor = types[type] || type;

  return typeColor;
}

const styles = StyleSheet.create({
  container: { paddingRight: 5 },
  type: {
    color: '#fff',
    backgroundColor: '#000',
    borderRadius: 10,
    alignSelf: 'flex-start',
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    fontSize: 15,
    textTransform: 'capitalize',
    fontFamily: 'monospace',

    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 7
  }
});
