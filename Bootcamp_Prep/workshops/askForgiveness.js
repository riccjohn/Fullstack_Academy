var graceHopperQuote = 'It\'s easier to ask forgiveness than it is to get permission.';

// YOUR CODE HERE

let summary = graceHopperQuote.toUpperCase().split(' ').filter(function(word) {
  return word !== "IT'S" && word !== "IS" && word !== "IT";
}).join(' ');

console.log(summary); // EASIER TO ASK FORGIVENESS THAN TO GET PERMISSION.
// console.log('typeof =>', typeof summary); // string
