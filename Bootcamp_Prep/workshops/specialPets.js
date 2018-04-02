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
let niceNames = specialPets.map(function(animal) {
  return animal.name;
})



console.log(niceNames);
// ['Sadie', 'Layla', 'Bogie']
