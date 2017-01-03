'use strict';

const request = require('request');
const _ = require('lodash');
const Pet = require('./pet');
const debug = require('debug')('adopt-a-pet');

class AdoptPet {
  constructor(shelterId, apiKey) {
    this.shelterId = shelterId || process.env.SHELTER_ID;
    this.apiKey = apiKey || process.env.ADOPT_API_KEY;
    if (!this.shelterId || !this.apiKey) {
      debug('No shelterId or apiKey');
      throw new Error('No shelterId or apiKey provided');
    }
  }

  getPets() {
    const options = {
      url: 'http://api.adoptapet.com/search/pets_at_shelter',
      qs: {
        key: this.apiKey,
        shelter_id: this.shelterId, // TODO: multiple shelters
        start_number: 1, // default 1
        end_number: 100, // default 50,
        output: 'json'
      },
      json: true
    };

    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          debug('pets', _.get(body, 'pets', []));
          return resolve(_.get(body, 'pets', [])); // returns pets array
        }
        debug(`Problem fetching Pets at Shelter.
          Status Code: ${response.statusCode}. Error: ${error}`);
        return [];
      });
    });
  }

  getPetDetails(petId, limited) {
    if (!petId) {
      debug('No petId provided for pet details');
      throw new Error('No petId provided for pet details');
    }
    const query = limited ? 'limited_pet_details' : 'pet_details';
    const options = {
      url: `http://api.adoptapet.com/search/${query}`,
      qs: {
        key: this.apiKey,
        pet_id: petId,
        output: 'json'
      },
      json: true
    };

    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          const petDetails = body || {};
          debug('pet details', petDetails);
          return resolve(new Pet(petDetails.pet));
        }
        debug(`Problem fetching pet details.
          Status Code: ${response.statusCode}. Error: ${error}`);
        return {};
      });
    });
  }

  getRandomPet() {
    return this.getPets()
    .then((pets) => {
      debug('pets', pets);
      if(!pets || _.isEmpty(pets)) {
        return Promise.reject(new Error('No pets returned from Adopt-a-Pet API'));
      }
      const randomPet = _.sample(pets);
      debug('randomPet', randomPet);
      return this.getPetDetails(randomPet.pet_id, true);
    })
    .then((pet) => {
      return pet;
    })
    .catch(function(error) {
      debug('Problem getting random pet from API:', error);
      return {};
    });
  }
}

module.exports = AdoptPet;
