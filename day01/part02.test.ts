import { getSimilarityScore } from './part02';

describe('getSimilarityScore', () => {
  it('should return a score of 31', () => {
    const locationIds = [
      [3, 4],
      [4, 3],
      [2, 5],
      [1, 3],
      [3, 9],
      [3, 3],
    ];

    expect(getSimilarityScore(locationIds)).toEqual(31);
  });
})