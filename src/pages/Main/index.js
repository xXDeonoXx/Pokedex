import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import RegionCard from '../../components/RegionCard';

export default function index({ navigation }) {
  return (
    <View>
      <View style={styles.container}>
        <RegionCard
          region='kanto'
          onPress={() => navigation.navigate('Pokedex', { region: 'kanto' })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxHeight: 0
  }
});
