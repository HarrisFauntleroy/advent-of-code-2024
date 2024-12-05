import { reportsSimple } from "./data";
import { safeReports, countSafeReports } from "./part01";
import { describe, expect, it } from "bun:test";

describe("safeReports", () => {
  it("should correctly evaluate reports", () => {
    const expected = [true, false, false, false, false, true];

    expect(safeReports(reportsSimple)).toEqual(expected);
  });
});

describe("totalSafeReports", () => {
  it("should correctly count safe reports", () => {
    const expected = 2;

    expect(countSafeReports(reportsSimple)).toEqual(expected);
  });
});
