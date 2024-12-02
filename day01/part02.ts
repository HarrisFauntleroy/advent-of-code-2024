/**
 * Calculates a similarity score by finding matching numbers between arrays.
 * For each number in the left array, multiplies it by how many times it appears in the right array. The sum of these products is the similarity score.
 * 
 * @example
 * similarityScore([[3,4], [4,3], [3,3]]) // returns 16
 * First 3: appears twice on right side: 3 * 2 = 6
 * 4: appears once on right side: 4 * 1 = 4
 * Second 3: appears twice on right side: 3 * 2 = 6
 * Total score = 16
 * 
 * @param locationIds Array of number pairs to compare
 * @returns Sum of (left number × frequency in right array) for all left numbers
 */
export const similarityScore = (locationIds: number[][]): number => {
  const leftNumbers = locationIds.map(([left]) => left);
  const rightNumbers = locationIds.map(([, right]) => right);
  
  return leftNumbers.reduce((totalScore, leftNum) => {
    const rightOccurrences = rightNumbers.filter(num => num === leftNum).length;
    return totalScore + (leftNum * rightOccurrences);
  }, 0);
};
