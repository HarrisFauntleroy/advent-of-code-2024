import { locationIds } from './data.ts';

// This should return a total distance of 11
export const locationIdsSimple = [
  [3, 4],
  [4, 3],
  [2, 5],
  [1, 3],
  [3, 9],
  [3, 3],
]

export const sortList = (list: number[][]): number[][] => {
  const [left, right] = [
    [...list].map(([a]) => a).sort((a, b) => a - b),
    [...list].map(([, b]) => b).sort((a, b) => a - b)
  ];
  return left.map((a, i) => [a, right[i]]);
};

export const totalDistance = (ids: number[][]) => {
  return sortList(ids).reduce((acc, [a, b]) => acc + Math.abs(a - b), 0)
}

console.log(totalDistance(locationIds));
