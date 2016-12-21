'use strict';

const request = require('request');
const _ = require('lodash');
const Pet = require('./pet');
const debug = require('debug')('adopt-a-pet');

class AdoptPet {
  constructor(shelterId, apiKey) {
    if (!shelterId || !apiKey) {
      debug('No shelterId or apiKey');
      throw new Error();
    }
    this.shelterId = shelterId;
    this.apiKey = apiKey;
  }

  getPets() {
    const options = {
      url: 'http://api.adoptapet.com/search/pets_at_shelter',
      qs: {
        key: this.apiKey,
        shelter_id: this.shelterId, // TODO: multiple shelters
        output: 'json'
      },
      json: true
    };

    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          debug('pets', _.get(body, 'pets', {}));
          return resolve(_.get(body, 'pets', {})); // returns pets array
        }
        return reject(new Error(`Problem fetching Pets at Shelter.
          Status Code: ${response.statusCode}. Error: ${error}`));
      });
    });
  }

  getPetDetails(petId, limited) {
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
        return reject(new Error(`Problem fetching Pet Details.
          Status Code: ${response.statusCode}. Error: ${error}`));
      });
    });
  }

  getRandomPet() {
    return this.getPets()
    .then((pets) => {
      debug('pets', pets);
      const randomPet = _.sample(pets);
      debug('randomPet', randomPet);
      return this.getPetDetails(randomPet.pet_id);
    })
    .then((pet) => {
      return pet;
    });
  }
}

module.exports = AdoptPet;
