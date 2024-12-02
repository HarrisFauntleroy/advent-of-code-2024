import { sortList, totalDistance } from './part01.ts';

describe('sortList', () => {
  it('should match the smallest number with the smallest number', () => {
    const locationIds = [
      [3, 4],
      [4, 3],
      [2, 5],
      [1, 3],
      [3, 9],
      [3, 3],
    ];

    expect(sortList(locationIds)).toEqual([
      [1, 3],
      [2, 3],
      [3, 3],
      [3, 4],
      [3, 5],
      [4, 9],
    ]);
  });
})

describe('totalDistance', () => {
  it('should return 11', () => {
    const locationIds = [
      [3, 4],
      [4, 3],
      [2, 5],
      [1, 3],
      [3, 9],
      [3, 3],
    ];

    expect(totalDistance(locationIds)).toEqual(11);
  });
})