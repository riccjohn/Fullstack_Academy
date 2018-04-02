var arr = [1,2,3,4];

let myReduce = (array, cb, startVal) => {
  let result = startVal;
  for (let i = 0; i < array.length; i++) {
    result = cb(result, array[i]);
  }
  return result;
}

var sum = myReduce(arr, function(a, b) {
  return a + b;
}, 0);

console.log(sum)    // 10
console.log(arr)    // [1,2,3,4]
