/**
 * Takes pairs of numbers and sorts both columns independently in ascending order,
 * then recombines them into new pairs. This creates pairs that minimize
 * the total distance between numbers in each pair.
 *
 * @example
 * sortList([[3,4], [1,3], [2,5]]) // returns [[1,3], [2,4], [3,5]]
 *
 * @param list Array of number pairs to be sorted
 * @returns Array of new number pairs after independent sorting
 */
export const sortList = (list: number[][]): number[][] => {
  const [left, right] = [
    [...list].map(([a]) => a).sort((a, b) => a - b),
    [...list].map(([, b]) => b).sort((a, b) => a - b),
  ];
  return left.map((a, i) => [a, right[i]]);
};

/**
 * Calculates the total distance between numbers in each pair after sorting them
 * to minimize the total distance. Distance is the absolute difference between
 * numbers in each pair. The total distance is the sum of all these differences.
 *
 * @example
 * totalDistance([[3,4], [1,3], [2,5]]) // returns sum of |1-3| + |2-4| + |3-5|
 *
 * @param ids Array of number pairs to calculate total distance for
 * @returns Sum of absolute differences between each sorted pair
 */
export const totalDistance = (ids: number[][]): number => {
  return sortList(ids).reduce((acc, [a, b]) => acc + Math.abs(a - b), 0);
};
