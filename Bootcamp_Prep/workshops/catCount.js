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
/*let catCount = specialPets.filter(function(pet) {
  if (pet.species === 'cat') {
    return true;
  }
}).length;*/

let catCount = specialPets.reduce(reducer, 0)

function reducer(count, pet){
  if (pet.species === 'cat') {
    count++;
  }
  return count;
}

console.log(catCount);
// 2



// ---------- OFFICIAL SOLUTION ---------- //
/*var catCount = specialPets.reduce(incrementCountIfCat, 0);

function incrementCountIfCat(count, pet) {
  if (pet.species === 'cat') {
    count++;
  }

  return count;
}

console.log(catCount);*/
