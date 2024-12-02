import { locationIdsSimple } from "./data";
import { similarityScore } from "./part02";
import { describe, expect, it } from "bun:test";

describe("similarityScore", () => {
  it("should return a score of 31", () => {
    const expected = 31;

    expect(similarityScore(locationIdsSimple)).toEqual(expected);
  });
});
