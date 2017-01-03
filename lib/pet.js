'use strict';

class Pet {
  constructor(data) {
    this.id = data.pet_id;
    this.code = data.pet_code;
    this.name = data.pet_name;
    this.breed = data.primary_breed;
    this.species = data.species;
    this.city = data.addr_city;
    this.state = data.addr_state_code;
    this.age = data.age;
    this.color = data.color;
    this.declawed = data.declawed;
    this.hair = data.hair;
    this.housetrained = data.housetrained;
    this.purebred = data.purebred;
    this.size = data.size;
    this.shelter = data.shelter_name;
    this.email = data.email;
    this.description = data.description;

    this.sex = this.getSex(data.sex);
    this.url = this.getUrl(data.pet_details_url, data.details_url);
    this.goodWithDogs = this.getGoodWithDogs(data.good_with_dogs);
    this.goodWithKids = this.getGoodWithKids(data.good_with_kids);
    this.altered = this.getAltered(data.spayed_neutered);
    this.imageHeight = this.getImageHeight(data);
    this.imageWidth = this.getImageWidth(data);
    this.imageUrl = this.getImageUrl(data);
  }

  getSex(sex) {
    if (sex === 'f') {
      return 'Female';
    }

    if (sex === 'm') {
      return 'Male';
    }

    return sex || '';
  }

  getUrl(petDetailsUrl, detailsUrl) {
    return petDetailsUrl || detailsUrl;
  }

  getGoodWithDogs(goodDogs) {
    return goodDogs ? 'yes' : 'no';
  }

  getGoodWithKids(goodKids) {
    return goodKids ? 'yes' : 'no';
  }

  getAltered(spayed) {
    return spayed ? 'yes' : 'no';
  }

  getImageHeight(data) {
    if (data.images) {
      return data.images[0].original_height;
    }
    return data.large_results_photo_height;
  }

  getImageWidth(data) {
    if (data.images) {
      return data.images[0].original_width;
    }
    return data.large_results_photo_width;
  }

  getImageUrl(data) {
    if (data.images) {
      return data.images[0].original_url;
    }
    return data.large_results_photo_url;
  }
}

module.exports = Pet;
