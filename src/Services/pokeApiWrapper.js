import axios from 'axios';

class pokeApiWrapper {
  constructor() {}

  async getPokedexEntries(region) {
    switch (region) {
      case 'kanto':
        offset = 1;
        limit = 151;
        break;
    }

    const api = axios.create();
    const data = await api.get(
      'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
    );
    const results = data.data.results;
    let pokemons = [];
    await Promise.all(
      results.map(async (entry, index) => {
        let pokemonData = await axios.get(entry.url);
        pokemonData = pokemonData.data;
        let pokemonSpecies = await axios.get(
          'https://pokeapi.co/api/v2/pokemon-species/' + pokemonData.id
        );
        pokemons[index] = {
          id: pokemonData.id,
          name: pokemonData.name,
          sprites: pokemonData.sprites,
          types: pokemonData.types,
          color: pokemonSpecies.data.color.name
        };
      })
    );
    console.log(pokemons);
    return pokemons;
  }
}

export default new pokeApiWrapper();

/**
 *    id: 0,
      name = '',
      sprites = {},
      types = [],
 */
