# Adopt-a-Pet

Adopt-a-Pet API Client for Node

## Installation

*   Install [Node](https://nodejs.org/)
*   Install [Yarn](https://yarnpkg.com/en/docs/install#alternatives-tab)

```
yarn add adopt-a-pet
```

## Setup

*   [Get API keys](http://www.adoptapet.com/shelter/portable_pet_list_api) for your shelter
*   Set API key and ShelterId to environment variables: (optional)

```
  export ADOPT_API_KEY=xxx
  export SHELTER_ID=90641
```

## Usage:

```javascript
const AdoptPet = require('adopt-a-pet')

// Instantiate the adopt-a-pet API Client
// Parameters are not required if environment variables are set
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
