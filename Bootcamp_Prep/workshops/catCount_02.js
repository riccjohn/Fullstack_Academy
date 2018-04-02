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
let isCat = (accumulator, currentValue) => {
  if (specialPets.species === 'cat') {
  currentValue ++;
  }
}

let catCount = specialPets.reduce(isCat, 0);


console.log(catCount);
// 2
