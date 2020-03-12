import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function index(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={doOnPressAction}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );

  function doOnPressAction() {
    return props.onPress(props.option);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff7d81',
    borderBottomColor: '#00d9a8',
    borderBottomWidth: 5,
    paddingBottom: 5
  },
  text: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'monospace',
    padding: 8,
    textAlign: 'center'
  }
});
