'use strict';

class Pet {
  constructor(data) {
    this.data = data;
  }

  get id() {
    return this.data.pet_id;
  }

  get code() {
    return this.data.pet_code;
  }

  get name() {
    return this.data.pet_name;
  }

  get breed() {
    return this.data.primary_breed;
  }

  get species() {
    return this.data.species;
  }

  get city() {
    return this.data.addr_city;
  }

  get state() {
    this.data.addr_state_code;
  }

  get age() {
    return this.data.age;
  }

  get color() {
    return this.data.color;
  }

  get declawed() {
    return this.data.declawed;
  }

  get hair() {
    return this.data.hair_length;
  }

  get housetrained() {
    return this.data.housetrained;
  }

  get purebred() {
    return this.data.purebred;
  }

  get sex() {
    return this.data.sex;
  }

  get size() {
    return this.data.size;
  }

  get url() {
    return this.data.pet_details_url || this.data.details_url;
  }

  get shelter() {
    return this.data.shelter_name;
  }

  get email() {
    return this.data.email;
  }

  get goodWithDogs() {
    return this.data.good_with_dogs ? 'yes' : 'no';
  }

  get goodWithKids() {
    return this.data.good_with_kids ? 'yes' : 'no';
  }

  get description() {
    return this.data.description;
  }

  get altered() {
    this.data.spayed_neutered ? 'yes' : 'no';
  }

  get imageHeight() {
    if (this.data.images) {
      return this.data.images[0].original_height;
    }
    return this.data.large_results_photo_height;
  }

  get imageWidth() {
    if (this.data.images) {
      return this.data.images[0].original_width;
    }
    this.data.large_results_photo_width;
  }

  get imageUrl() {
    if (this.data.images) {
      return this.data.images[0].original_url;
    }
    return this.data.large_results_photo_url;
  }
}

module.exports = Pet;
