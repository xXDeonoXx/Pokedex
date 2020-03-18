import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';

export default function index(props) {
  return (
    <>
      <View style={styles.container}>
        <Text style={[styles.textInfo, { width: 200 }]}>
          {capitalizeString(props.name)}
        </Text>
        <Text style={styles.textInfo}>{props.base_stat}</Text>
      </View>
      <View style={[styles.statBar, { width: props.base_stat * 2 }]} />
    </>
  );
}

function capitalizeString(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  textInfo: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'monospace',
    margin: 8
  },
  statBar: {
    height: 20,
    backgroundColor: '#ff80c0',
    marginLeft: 8
  }
});
