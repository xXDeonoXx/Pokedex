import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Type(props) {
  return (
    <View>
      <Text style={styles.type}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  type: {
    color: '#fff',
    backgroundColor: '#6e15bd',
    borderRadius: 10,
    alignSelf: 'flex-start',
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    fontSize: 15,
    textTransform: 'capitalize',
    fontFamily: 'monospace'
  }
});
