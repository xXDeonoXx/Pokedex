import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';

import PokemonMove from '../../../components/PokemonMove';

export default function index(props) {
  return (
    <View style={styles.container}>
      <View style={{ height: 200 }}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={styles.topBar}>
            <Text style={styles.topBarText}>Move</Text>
            <Text style={styles.topBarText}>Lv. Learned</Text>
            <Text style={styles.topBarText}>Method</Text>
          </View>
          <View>{mapMoves(props.moves)}</View>
        </ScrollView>
      </View>
    </View>
  );
}

function mapMoves(moves) {
  // Agora ordenamos os metodos, queremos o level-up primeiro
  moves.sort((a, b) => {
    return b.version_group_details[0].move_learn_method.name == 'level-up'
      ? -1
      : 1;
    return 0;
  });

  // Primeiro ordenaremos os moves em ordem crescente de Level
  moves.sort(
    (a, b) =>
      a.version_group_details[0].level_learned_at -
      b.version_group_details[0].level_learned_at
  );

  return moves.map((move, index) => {
    return (
      <PokemonMove
        key={index}
        name={move.move.name}
        levelLearned={move.version_group_details[0].level_learned_at}
        learnMethod={move.version_group_details[0].move_learn_method.name}
      />
    );
  });
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
    borderRadius: 15
  },
  topBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ff80c0',
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 0.3
  },
  topBarText: {
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: 17,
    fontWeight: 'bold',
    width: '33%',
    paddingBottom: 10,
    paddingTop: 10
  }
});
