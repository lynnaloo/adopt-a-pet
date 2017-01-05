# Adopt-a-Pet

Adopt-a-Pet API Client for Node

## Setup

[Get API keys](http://www.adoptapet.com/shelter/portable_pet_list_api) for your shelter:

*   Shelter ID
*   API Key

## Installation

```
npm install adopt-a-pet
```

## Usage:

```javascript
const AdoptPet = require('adopt-a-pet')
// Instantiate the adopt-a-pet API Client with your API keys
// You may also set these environment variables: SHELTER_ID and ADOPT_API_KEY
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
// Get pet details using a petId and boolean to limit details
//
adoptPet.getPetDetails(petId, true)
.then((pet) => {
  // returns detailed pet object
  return pet;
});
```
