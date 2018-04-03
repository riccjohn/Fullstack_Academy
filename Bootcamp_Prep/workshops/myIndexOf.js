const myIndexOf = (source, searchValue, startIdx) => {
  if (!startIdx) startIdx = 0;

  for (let i = startIdx; i < source.length; i++) {
    const currTerm = source.slice(i, i + searchValue.length);
    if (currTerm === searchValue) {
      return i;
    }
  }
  return -1;
}
