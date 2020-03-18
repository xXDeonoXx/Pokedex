import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';

export default function index(props) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.name}>{capitalizeString(props.name)}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.level}>{props.levelLearned}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.method}>{props.learnMethod}</Text>
      </View>
    </View>
  );
}

function capitalizeString(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  item: {
    width: '34%'
  },
  name: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'monospace',
    textAlign: 'center'
  },
  level: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'monospace',
    textAlign: 'center'
  },
  method: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'monospace',
    textAlign: 'center'
  }
});
