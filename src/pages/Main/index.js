import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';
import RegionCard from '../../components/RegionCard';

export default function index({ navigation }) {
  return (
    <ImageBackground
      source={require('../../../assets/pokeball.jpeg')}
      style={styles.imageBackground}
      imageStyle={{ opacity: 0.3 }}
    >
      <View style={styles.container}>
        <RegionCard
          region='Kanto'
          idRange='0-151'
          cover='https://ya-webdesign.com/transparent250_/pokemon-starters-png-1.png'
          onPress={() => navigation.navigate('Pokedex', { region: 'kanto' })}
        />
        <RegionCard
          region='Johto'
          idRange='152-251'
          cover='https://i.ya-webdesign.com/images/pokemon-starters-png-14.png'
          onPress={() => navigation.navigate('Pokedex', { region: 'johto' })}
        />
        <RegionCard
          region='Hoenn'
          idRange='252-386'
          cover='https://ya-webdesign.com/transparent250_/pokemon-starters-png-10.png'
          onPress={() => navigation.navigate('Pokedex', { region: 'hoenn' })}
        />
        <RegionCard
          region='Sinnoh'
          idRange='387-493'
          cover='https://ya-webdesign.com/transparent250_/pokemon-starters-png-7.png'
          onPress={() => navigation.navigate('Pokedex', { region: 'sinnoh' })}
        />
        <RegionCard
          region='Unova'
          idRange='494-649'
          cover='https://ya-webdesign.com/transparent250_/pokemon-starters-png-16.png'
          onPress={() => navigation.navigate('Pokedex', { region: 'unova' })}
        />
        <RegionCard
          region='Kalos Central'
          idRange='???'
          cover='https://ya-webdesign.com/transparent250_/pokemon-starters-png-3.png'
          onPress={() =>
            navigation.navigate('Pokedex', { region: 'kalos-central' })
          }
        />
        <RegionCard
          region='Kalos Coastal'
          idRange='???'
          cover='https://ya-webdesign.com/transparent250_/pokemon-starters-png-3.png'
          onPress={() =>
            navigation.navigate('Pokedex', { region: 'kalos-coastal' })
          }
        />
        <RegionCard
          region='Kalos Mountain'
          idRange='???'
          cover='https://ya-webdesign.com/transparent250_/pokemon-starters-png-3.png'
          onPress={() =>
            navigation.navigate('Pokedex', { region: 'kalos-mountain' })
          }
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxHeight: 0,
    backgroundColor: 'rgba(255,0,0,0.5)'
  },
  imageBackground: {
    width: '100%',
    height: '100%'
  }
});
