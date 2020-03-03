import axios from 'axios';

class pokeApiWrapper {
  constructor() {}

  async getPokedexEntries(region) {
    let pokedexId = 0;

    switch (region) {
      case 'kanto':
        pokedexId = 2;
        break;
      case 'johto':
        pokedexId = 3;
        break;
      case 'hoenn':
        pokedexId = 4;
        break;
      case 'sinnoh':
        pokedexId = 5;
        break;
      case 'unova':
        pokedexId = 6;
        break;
      case 'kalos-central':
        pokedexId = 12;
        break;
      case 'kalos-coastal':
        pokedexId = 13;
        break;
      case 'kalos-mountain':
        pokedexId = 14;
        break;
    }

    const api = axios.create();
    const pokedexInfo = await api.get(
      'https://pokeapi.co/api/v2/pokedex/' + pokedexId
    );
    const entries = pokedexInfo.data.pokemon_entries;

    let pokemons = [];
    await Promise.all(
      entries.map(async (entry, index) => {
        axios.get(entry.pokemon_species.url).then(async pokemon_species => {
          let pokemon_data = await axios.get(
            'https://pokeapi.co/api/v2/pokemon/' + pokemon_species.data.id
          );
          pokemons[index] = {
            id: entry.entry_number,
            name: pokemon_data.data.name,
            sprites: pokemon_data.data.sprites,
            types: pokemon_data.data.types,
            color: pokemon_species.data.color.name
          };
        });
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
