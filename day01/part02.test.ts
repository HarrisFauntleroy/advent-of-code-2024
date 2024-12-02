import { locationIdsSimple } from './data';
import { similarityScore } from './part02';

describe('similarityScore', () => {
  it('should return a score of 31', () => {
    expect(similarityScore(locationIdsSimple)).toEqual(31);
  });
})