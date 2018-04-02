let genLoggers = (length) => {
  let newArray = [];
  let placePosition = (num) => {
    newArray.push(function() {
      console.log(num);
    })
  }

  for (let i = 0; i < length; i++) {
    placePosition(i);
  }

  return newArray;
}

var loggerArray = genLoggers(5);
loggerArray[0]();    // 0
loggerArray[4]();    // 4
