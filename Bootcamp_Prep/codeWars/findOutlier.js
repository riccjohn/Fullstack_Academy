function findOutlier(integers){
  let outlier = null;
  const oddOrEven = (arr) => {
    let oddCount = 0;
    let evenCount = 0;
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) {
        evenCount ++;
      } else {
        oddCount ++;
      }
    }
    if (oddCount > evenCount) {
      return 'odd';
    } else if (evenCount > oddCount) {
      return 'even';
    }
  }
  if (oddOrEven(integers) === 'odd') {
    for (j = 0; j < integers.length; j++) {
      if (integers[j] % 2 === 0) {
        outlier = integers[j];
        break;
      }
    }
  } else if (oddOrEven(integers) === 'even') {
    for (k = 0; k < integers.length; k++) {
    if (integers[k] % 2 !== 0) {
        outlier = integers[k];
      }
    }
  }
return outlier;
}
