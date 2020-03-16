import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
  Animated
} from 'react-native';

import Type from './type';

export default class PokemonCard extends React.PureComponent {
  state = {
    viewOpacity: new Animated.Value(0)
  };
  constructor(props) {
    super(props);
    this.state = {
      viewOpacity: new Animated.Value(0)
    };
  }

  render() {
    const animatedStyles = {
      opacity: this.state.viewOpacity
    };

    Animated.timing(this.state.viewOpacity, {
      delay: 200,
      toValue: 1,
      duration: 1200
    }).start();

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          this.props.navigation.navigate('PokemonInfo', {
            pokemon: this.props.pokemon
          })
        }
      >
        <Animated.View
          style={[
            styles.body,
            { backgroundColor: this.props.pokemon.color },
            animatedStyles
          ]}
        >
          <View style={styles.sideInfo}>
            <Text style={styles.id}>#{this.props.pokemon.id}</Text>
            <Text style={styles.name}>
              {capitalizeString(this.props.pokemon.name)}
            </Text>
            <View style={styles.types}>
              {mapTypes(this.props.pokemon.types)}
            </View>
          </View>
          <Image
            style={styles.image}
            // para usar uma imagem com qualidade melhor, usar props.pokemon.defaultImage
            source={{ uri: this.props.pokemon.sprites.front_default }}
          />
        </Animated.View>
      </TouchableOpacity>
    );

    function mapTypes(types) {
      return types.map((type, index) => {
        return <Type name={type.type.name} key={index} />;
      });
    }

    function capitalizeString(s) {
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
  }
}

const styles = StyleSheet.create({
  container: {},
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
    width: '50%',
    height: '100%',
    alignItems: 'flex-end'
  },
  body: {
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
    marginLeft: 10
  },
  types: {
    flexDirection: 'row'
  }
});
