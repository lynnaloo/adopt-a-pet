# Adopt-a-Pet

Adopt-a-Pet API Client for Node

## Installation

```
npm install adopt-a-pet
```

## Usage:

```javascript
const AdoptPet = require('adopt-a-pet')

const adoptPet = new AdoptPet(shelterId, apiKey)

//
// Get all pets for current shelter
//
adoptPet.getPets()
.then((pets) => {
  // returns an array of pet objects
  return pets;
});

//
// Get a random pet from the list of current shelter pets
//
adoptPet.getRandomPet()
.then((pet) => {
  // return the random pet object
  return pet;
})

//
// Get pet details using a petId
//
adoptPet.getPetDetails(petId)
.then((pet) => {
  // returns detailed pet object
  return pet;
});
```
