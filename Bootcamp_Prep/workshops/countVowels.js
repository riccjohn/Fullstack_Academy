/*let countVowels = (str) => {
  let vowelCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelCount ++;
      }
    }
  }
  return vowelCount;
}*/

let countVowels = (str) => {
  let vowelCount = 0;

  if (str[0] === 'a' || str[0] === 'e' || str[0] === 'i' || str[0] === 'o' || str[0] === 'u') {
    vowelCount ++;
  }

  if (str.length <= 0) {
    return vowelCount;
  } else {
    return vowelCount + countVowels(str.slice(1));
  }
}

countVowels('Four score and seven years')    // => 9
