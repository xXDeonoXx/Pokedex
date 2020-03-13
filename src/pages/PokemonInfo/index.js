import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import { StyleSheet } from 'react-native';

import ScrollNavButton from '../../components/ScrollViewNavButton';

export default function index(props) {
  const [scrollPos, setScrollPos] = useState(0);
  const scrollRef = useRef();

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
      <Image style={styles.pokemonImage} source={{uri: pokemon.defaultImage}} />
      <Text style={styles.name}>{pokemon.name}</Text>
      <View style={styles.info}>
        <View style={styles.buttonContainer}>
          <ScrollNavButton option={0} title={'Bio'} onPress={navigateOnInfo} />
          <ScrollNavButton
            option={1}
            title={'Stats'}
            onPress={navigateOnInfo}
          />
          <ScrollNavButton
            option={2}
            title={'Abilities'}
            onPress={navigateOnInfo}
          />
          <ScrollNavButton
            option={3}
            title={'Moves'}
            onPress={navigateOnInfo}
          />
        </View>

        <ScrollView
          style={styles.scrollView}
          horizontal={true}
          pagingEnabled={true}
          scrollEnabled={true}
          ref={scrollRef}
          contentContainerStyle={{ flex: 1, flexGrow: 1 }}
        >
          <View style={styles.scrollItem}>
            <Text style={styles.description}>{pokemon.description}</Text>
          </View>
          <View style={styles.scrollItem}>
            <Text style={styles.description}>
              AQUI FICAM AS HABILIDADES, MOROU ?
            </Text>
          </View>
          <View style={styles.scrollItem}>
            <Text style={styles.description}>
              AQUI É A TERCEIRA OPÇÃO KKKKKKKK
            </Text>
          </View>
          <View style={styles.scrollItem}>
            <Text style={styles.description}>
              AQUI É A ULTIMA OPÇÃO MEU NEGO
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );

  function navigateOnInfo(option) {
    return scrollRef.current.scrollTo({
      x: Dimensions.get('window').width * option,
      y: 0,
      animated: true
    });
  }
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
    marginTop: 20,
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
    padding: 12
  },
  scrollView: { flex: 1, width: '100%', height: '100%' },
  scrollItem: {
    width: Dimensions.get('window').width
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f',
    maxHeight: 35
  }
});
