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
      <Text style={styles.statBar}>==========</Text>
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
    fontSize: 15,
    color: '#000',
    paddingLeft: 8
  }
});
