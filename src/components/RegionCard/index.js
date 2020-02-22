import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default function RegionCard() {
  return (
    <View style={styles.body}>
      <View style={styles.sideInfo}>
        <Text style={styles.idRange}>0-151</Text>
        <Text style={styles.regionName}>Kanto</Text>
      </View>
      <Image
        style={styles.image}
        source='https://ya-webdesign.com/transparent250_/pokemon-starters-png-1.png'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  idRange: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  regionName: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
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

    borderRadius: 10,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
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
