import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import RegionCard from '../../components/RegionCard';

const index = () => {
  return (
    <View>
      <View style={styles.container}>
        <RegionCard />
        <RegionCard />
        <RegionCard />
        <RegionCard />
      </View>
    </View>
  );
};

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

export default index;
