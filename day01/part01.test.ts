import { locationIdsSimple } from "./data.ts";
import { sortList, totalDistance } from "./part01.ts";
import { describe, expect, it } from "bun:test";

describe("sortList", () => {
  it("should match the smallest number with the smallest number", () => {
    const expected = [
      [1, 3],
      [2, 3],
      [3, 3],
      [3, 4],
      [3, 5],
      [4, 9],
    ];

    expect(sortList(locationIdsSimple)).toEqual(expected);
  });
});

describe("totalDistance", () => {
  it("should return 11", () => {
    const expected = 11;

    expect(totalDistance(locationIdsSimple)).toEqual(expected);
  });
});
