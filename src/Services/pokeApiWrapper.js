import axios from 'axios';

class pokeApiWrapper {
  constructor() {}

  async getPokedexEntries(region) {
    let offset = 0;
    let limit = 0;

    switch (region) {
      case 'kanto':
        offset = 1;
        limit = 151;
        break;
      case 'johto':
        offset = 151;
        limit = 251;
        break;
      case 'hoenn':
        offset = 251;
        limit = 370;
        break;
      case 'sinnoh':
        offset = 386;
        limit = 493;
        break;
      case 'unova':
        offset = 493;
        limit = 649;
        break;
      case 'kalos':
        offset = 649;
        limit = 721;
        break;
      case 'alola':
        offset = 721;
        limit = 809;
        break;
      case 'galar':
        offset = 809;
        limit = 890;
        break;
    }

    const api = axios.create();
    const data = await api.get(
      'https://pokeapi.co/api/v2/pokemon?limit=' + limit + '&offset=' + offset
    );
    const results = data.data.results;
    let pokemons = [];
    await Promise.all(
      results.map(async (entry, index) => {
        let pokemonData = await axios.get(entry.url);
        pokemonData = pokemonData.data;
        // Existem pokemons com ids invalidas, os de mega evolução por exemnplo, case seja, retorna
        //TA BUGADO ISSO AQUI, TEM QUE CHECAR
        if (pokemonData.id > 1000) return;
        console.log('id:' + pokemonData.id + '/ Name: ' + pokemonData.name);
        let pokemonSpecies = await axios.get(
          'https://pokeapi.co/api/v2/pokemon-species/' + pokemonData.id
        );
        pokemons[index] = {
          id: index + 1,
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
