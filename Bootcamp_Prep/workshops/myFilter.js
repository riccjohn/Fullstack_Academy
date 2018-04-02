var arr = [1, 2, 3, 4, 5, 6];

function isEven(num) {
  return num % 2 === 0;
}

let myFilter = (array, cb) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

var filtered = myFilter(arr, isEven);

console.log(filtered);   // [2, 4, 6]
console.log(arr);     // [1, 2, 3, 4, 5, 6]
