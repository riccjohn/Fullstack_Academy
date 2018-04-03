let crazyCaps = (str) => {
  let returnString = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      str = str.toLowerCase();
      returnString += str[i]
    } else {
      str = str.toUpperCase();
      returnString += str[i]
    }
  }
  return returnString;
}
