const mostVowels = (str) => {
  let wordArr = str
    .split(',')
    .join('')
    .split('.')
    .join('')
    .split(' ');
  const vowels = 'aeiouAEIOU'

  let maxVowelCount = 0;
  let maxWord = '';

  for (let i = 0; i < wordArr.length; i++) {
    const currentWord = wordArr[i];
    let currentVowelCount = 0;

    for (let j = 0; j < currentWord.length; j++) {
      const currentLetter = currentWord[j];

      if (vowels.indexOf(currentLetter) !== -1) {
        currentVowelCount ++;
      }
    }
    if (currentVowelCount > maxVowelCount) {
      maxVowelCount = currentVowelCount;
      maxWord = currentWord;
    }
  }
  return maxWord;
}
