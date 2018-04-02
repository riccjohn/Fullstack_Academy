var specialPets = [{
    name: 'Sadie',
    species: 'cat'
  }, {
    name: 'Layla',
    species: 'cat'
  }, {
    name: 'Bogie',
    species: 'dog'
  }];

// YOUR CODE HERE

let whosASpecial = (arr) => {
  arr.forEach(function(pet) {
    console.log(pet.name, 'the', pet.species, 'is very special!');
  })
}

whosASpecial(specialPets);

// Expected output:
// Sadie the cat is very special!
// Layla the cat is very special!
// Bogie the dog is very special!
