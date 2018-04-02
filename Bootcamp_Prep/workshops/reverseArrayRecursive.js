var arr = [1,2,3,4]

/*let reverseArray = (arr) => {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}*/

let reverseArray = (arr) => {
  if (arr.length <= 1) {
    return arr[arr.length - 1];
  }
  return [arr[arr.length - 1]].concat(reverseArray(arr.slice(0, arr.length - 1)));
}

var reversedArr = reverseArray(arr);

console.log(reversedArr)    // [4,3,2,1]
console.log(arr)    // [1,2,3,4]
