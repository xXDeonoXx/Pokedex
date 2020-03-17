import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';

import PokemonStats from '../../../components/PokemonStats';

export default function index(props) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={{ flexGrow: 1 }}>
        <View>{mapStats(props.stats)}</View>
      </ScrollView>
    </View>
  );
}

function mapStats(stats) {
  return stats.map((stat, index) => {
    return (
      <PokemonStats
        name={stat.stat.name}
        base_stat={stat.base_stat}
        key={index}
      />
    );
  });
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#fff',
    height: 210
  },
  scroll: {
    backgroundColor: '#f3f3f3',
    borderRadius: 15
  }
});
