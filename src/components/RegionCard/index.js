import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default function RegionCard() {
  return (
    <View style={styles.body}>
      <View style={styles.sideInfo}>
        <Text style={styles.id}>0-151</Text>
        <Text style={styles.name}>Kanto</Text>
      </View>
      <Image
        style={styles.image}
        source='https://ya-webdesign.com/transparent250_/pokemon-starters-png-1.png'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  id: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold'
  },
  name: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    width: 150,
    height: 100
  },
  body: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    textAlign: 'center',

    borderRadius: 10,
    marginBottom: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    width: 250
  },
  sideInfo: {
    justifyContent: 'center',
    marginLeft: '10px'
  },
  types: {
    flexDirection: 'row'
  }
});
