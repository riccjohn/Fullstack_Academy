/* Use a higher-order array method to create a new array from the specialPets array that doesn't have any dogs in it. Store the new array in a variable called noDogs.*/

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
let noDogs = specialPets.filter(function(pet) {
  if (pet.species === 'cat') {
    return true;
  }
})



console.log(noDogs);
// [ { name: 'Sadie', species: 'cat' },
//   { name: 'Layla', species: 'cat' } ]
