let bacteriaTime = (currentNum, targetNum) => {
  if (targetNum < currentNum) return 'targetNum must be larger than currentNum';

  let currentTime = 0;
  let aliveBacteria = currentNum;

  while (aliveBacteria < targetNum) {
    currentTime += 20;
    aliveBacteria *= 2;
  }
  return currentTime;
}
