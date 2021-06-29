import axios from 'axios';

class RickllowApi {
  static async getAllLocations(searchTerm = '') {
    try {
      const result = await axios.get(`/api/locations${searchTerm ? `/?search_term=${searchTerm}` : ''}`);
      return result.data.locations;
    } catch(e) {
      return e.response.data.error.message;
    }
  }

  static async getLocationsByCategory(category) {
    try {
      const result = await axios.get(`/api/locations/categories/${category}`);
      return result.data.locations;
    } catch(e) {
      return e.response.data.error.message;
    }
  }

  static async getLocation(name) {
    try {
      const result = await axios.get(`/api/locations/${name}`);
      return result.data.location;
    } catch(e) {
      return e.response.data.error.message;
    }
  }
}

export default RickllowApi;