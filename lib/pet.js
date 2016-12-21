'use strict';

class Pet {
  constructor(data) {
    this.data = data;
  }

  getData() {
    const pet = {};
    pet.id = this.data.pet_id;
    pet.code = this.data.pet_code;
    pet.name = this.data.pet_name;
    pet.breed = this.data.primary_breed;
    pet.species = this.data.species;
    pet.city = this.data.addr_city;
    pet.state = this.data.addr_state_code;
    pet.age = this.data.age;
    pet.color = this.data.color;
    pet.declawed = this.data.declawed;
    pet.hair = this.data.hair_length;
    pet.housetrained = this.data.housetrained;
    pet.purebred = this.data.purbred;
    pet.sex = this.data.sex;
    pet.size = this.data.size;
    pet.url = this.data.pet_details_url || this.data.details_url;
    pet.shelter = this.data.shelter_name;
    pet.email = this.data.email;
    pet.goodDogs = this.data.good_with_dogs ? 'yes' : 'no';
    pet.description = this.data.description;
    pet.spayed_neutered = this.data.spayed_neutered ? 'yes' : 'no';
    pet.goodKids = this.data.good_with_kids ? 'yes' : 'no';
    pet.image_url = this.data.large_results_photo_url;
    pet.image_height = this.data.large_results_photo_height;
    pet.image_width = this.data.large_results_photo_width;

    if (this.data.images) {
      pet.image_height = this.data.images[0].original_height;
      pet.image_width = this.data.images[0].original_width;
      pet.image_url = this.data.images[0].original_url;
    }

    return pet;
  }
}

module.exports = Pet;
