// WITHOUT RECURSION //
/*let fibonacci = (num) => {
  let arr = [1, 1];
  for (let i = 2; i < num; i++) {
    arr.push((arr[i - 1]) + (arr[i - 2]));
  }
  return arr[num - 1];
}*/

// WITH RECURSION //
let fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);

}

fibonacci(6)  // => 8


/*

1, 1, 2, 3, 5, 8


*/
