var sum = 0;
function addToSum(num) {
    sum += num;
}

var arr = [1,2,3];

let myForEach = (array, cb) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(cb(array[i]));
  }
  return newArray;
}


myForEach(arr, addToSum);

console.log(sum); // 6
