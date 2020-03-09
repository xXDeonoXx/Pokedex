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

  let typeColor = '';
  switch (type) {
    case 'bug':
      typeColor = types.bug;
      break;
    case 'dark':
      typeColor = types.dark;
      break;
    case 'dragon':
      typeColor = types.dragon;
      break;
    case 'electric':
      typeColor = types.electric;
      break;
    case 'fairy':
      typeColor = types.fairy;
      break;
    case 'fighting':
      typeColor = types.fighting;
      break;
    case 'fire':
      typeColor = types.fire;
      break;
    case 'flying':
      typeColor = types.flying;
      break;
    case 'ghost':
      typeColor = types.ghost;
      break;
    case 'grass':
      typeColor = types.grass;
      break;
    case 'ground':
      typeColor = types.ground;
      break;
    case 'ice':
      typeColor = types.ice;
      break;
    case 'normal':
      typeColor = types.normal;
      break;
    case 'poison':
      typeColor = types.poison;
      break;
    case 'psychic':
      typeColor = types.psychic;
      break;
    case 'rock':
      typeColor = types.rock;
      break;
    case 'steel':
      typeColor = types.steel;
      break;
    case 'water':
      typeColor = types.water;
      break;

    default:
      typeColor = type;
      break;
  }
  return typeColor;
}

const styles = StyleSheet.create({
  container: {},
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
