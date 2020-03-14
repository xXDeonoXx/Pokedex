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
    console.log('pegou informações da pokedex');
    const entries = pokedexInfo.data.pokemon_entries;

    let pokemons = [];
    await Promise.all(
      entries.map(async (entry, index) => {
        api.get(entry.pokemon_species.url).then(async pokemon_species => {
          console.log('Fez uma req');
          let pokemon_data = await axios.get(
            'https://pokeapi.co/api/v2/pokemon/' + pokemon_species.data.id
          );
          pokemons[index] = {
            id: entry.entry_number,
            name: this.capitalizeString(pokemon_data.data.name),
            sprites: pokemon_data.data.sprites,
            defaultImage:
              'https://pokeres.bastionbot.org/images/pokemon/' +
              pokemon_species.data.id +
              '.png',
            types: pokemon_data.data.types,
            color: this.setPokemonColor(pokemon_species.data.color.name),
            description: pokemon_species.data.flavor_text_entries.find(
              flavor_text => {
                return flavor_text.language.name == 'en';
              }
            ).flavor_text
          };
        });
      })
    );
    return pokemons;
  }

  capitalizeString(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  setPokemonColor(color) {
    const colors = {
      green: '#43c466',
      red: '#f2655c',
      blue: '#5cb3f2',
      white: '#f0f0f0',
      brown: '#A0522D',
      purple: '#8E44AD',
      yellow: '#edc907',
      pink: '#FFCBDB',
      gray: '#a0a0a0',
      black: '#2b2b2b'
    };

    let pokemonColor = '';

    switch (color) {
      case 'green':
        pokemonColor = colors.green;
        break;

      case 'red':
        pokemonColor = colors.red;
        break;

      case 'blue':
        pokemonColor = colors.blue;
        break;

      case 'white':
        pokemonColor = colors.white;
        break;

      case 'brown':
        pokemonColor = colors.brown;
        break;

      case 'purple':
        pokemonColor = colors.purple;
        break;

      case 'yellow':
        pokemonColor = colors.yellow;
        break;

      case 'pink':
        pokemonColor = colors.pink;
        break;

      case 'gray':
        pokemonColor = colors.gray;
        break;

      case 'black':
        pokemonColor = colors.black;
        break;

      default:
        pokemonColor = color;
        break;
    }
    return pokemonColor;
  }
}

export default new pokeApiWrapper();

/**
 *    id: 0,
      name = '',
      sprites = {},
      types = [],
 */
