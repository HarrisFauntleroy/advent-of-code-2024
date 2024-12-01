import { locationIds } from './data.ts';

// Should return 31
export const locationIdsSimple = [
  [3, 4],
  [4, 3],
  [2, 5],
  [1, 3],
  [3, 9],
  [3, 3],
]

const getSimilarityScore = (locationIds: number[][]) => {
  const leftNumbers = locationIds.map(([left]) => left);
  const rightNumbers = locationIds.map(([, right]) => right);
  
  return leftNumbers.reduce((totalScore, leftNum) => {
    const rightOccurrences = rightNumbers.filter(num => num === leftNum).length;
    return totalScore + (leftNum * rightOccurrences);
  }, 0);
};

console.log(getSimilarityScore(locationIds))
