const mySlice = (str, startIdx, endIdx) => {
  if (!startIdx) {
    startIdx = 0;
  }
  if (!endIdx) {
    endIdx = str.length
  }
  let newString = '';
  for (let i = startIdx; i < endIdx; i++) {
    newString += str[i];
  }
  return newString;
}
