import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';

export default function index(props) {
  return (
    <View style={styles.container}>
      <View style={{ height: 220 }}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Text style={styles.description}>{props.description}</Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#fff',
    flex: 1
  },
  description: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'monospace',
    padding: 8
  },
  scroll: {
    backgroundColor: '#dfdfdf',
    borderRadius: 15
  }
});
