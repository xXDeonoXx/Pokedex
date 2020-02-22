import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';

export default function RegionCard(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
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
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  idRange: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5
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
