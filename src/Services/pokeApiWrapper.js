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

    const api = axios.create({ baseURL: 'https://pokeapi.co/api/v2/' });
    const data = await api.get('pokemon?limit=151&offset=0');
    return data.data.results;
  }
}

export default new pokeApiWrapper();
