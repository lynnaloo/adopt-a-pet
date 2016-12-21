'use strict';

const assert = require('assert');
const _ = require('lodash');
const AdoptPet = require('../lib/adopt-a-pet');
const Pet = require('../lib/pet');

describe('adopt-a-pet', () => {
  describe('instantiation', () => {
    it('can make a new AdoptPet', () => {
      const adoptPet = new AdoptPet(123, 456);
      assert(adoptPet.shelterId);
      assert(adoptPet.apiKey);
      assert(_.isFunction(adoptPet.getPets));
      assert(_.isFunction(adoptPet.getPetDetails));
      assert(_.isFunction(adoptPet.getRandomPet));
    });
  });

  describe('errors', () => {
    it('throws when passing params', (done) => {
      assert.throws(() => {
        new AdoptPet();
      }, Error);

      done();
    });
  });

  describe('pet instantiation', () => {
    it('can make a new pet object', () => {
      const pet = new Pet({ pet_id: '1234'});
      assert(pet.data);
      assert(pet.getData());
    });
  });

  describe('pet images', () => {
    it('it can handle different kinds of images', () => {
      const pet1 = new Pet({
        pet_id: '1234',
        images: [{
          original_width: 181,
          thumbnail_width: 125,
          thumbnail_url: 'https://s3.amazonaws.com/pet-uploads.adoptapet.com/8/4/9/242972694.jpg',
          thumbnail_height: 227,
          original_url: 'https://s3.amazonaws.com/pet-uploads.adoptapet.com/e/c/d/242972692.jpg',
          original_height: 329
        }],
        large_results_photo_height: 400
      });
      const pet2 = new Pet({
        pet_id: '5678',
        large_results_photo_height: 400,
        large_results_photo_width: 600,
        large_results_photo_url: 'https://s3.amazonaws.com/pet-uploads.adoptapet.com/e/c/d/242972692.jpg'
      });
      assert.equal(pet1.getData().image_height, 329);
      assert.equal(pet2.getData().image_height, 400);
    });
  });
});
