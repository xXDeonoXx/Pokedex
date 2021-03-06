import React from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';

export default function RegionCard(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.body}>
        <View style={styles.sideInfo}>
          <Text style={styles.idRange}>{props.idRange}</Text>
          <Text style={styles.regionName}>{props.region}</Text>
        </View>
        <Image style={styles.image} source={{ uri: props.cover }} />
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
    paddingTop: 5,
    fontFamily: 'monospace'
  },
  regionName: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'monospace'
  },
  image: {
    width: 200,
    height: 100
  },
  body: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    width: 150,
    height: 170,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    width: 250,
    alignItems: 'center'
  },
  sideInfo: {
    justifyContent: 'center',
    marginLeft: 10
  },
  types: {
    flexDirection: 'row'
  }
});
