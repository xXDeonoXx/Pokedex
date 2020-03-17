import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';

export default function index(props) {
    return (
      <View style={styles.container}>       
          <Text style={styles.name}>{capitalizeString(props.name)}</Text> 
          <Text style={styles.level}>{props.levelLearned}</Text>   
          <Text style={styles.method}>{props.learnMethod}</Text>
      </View>
    )
}

function capitalizeString(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const styles = StyleSheet.create({
    container: {
      padding: 5,
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    name: {
      color: '#000',
      fontSize: 15,
      fontFamily: 'monospace',
      padding: 2,
      textAlign: 'center'
    },
    level: {
      color: '#000',
      fontSize: 15,
      fontFamily: 'monospace',
      padding: 2,

    },
    method: {
      color: '#000',
      fontSize: 15,
      fontFamily: 'monospace',
      padding: 2,
      textAlign: 'center'
    },    
  });
  