import { describe, expect, it } from "bun:test";
import { findXPatterns } from "./part02";

describe("day04/part02", () => {
  it("example", () => {
    const example = `
    MMMSXXMASM
    MSAMXMSMSA
    AMXSXMAAMM
    MSAMASMSMX
    XMASAMXAMM
    XXAMMXXAMA
    SMSMSASXSS
    SAXAMASAAA
    MAMMMXMMMM
    MXMXAXMASX
    `;

    const expected = 9;

    const actual = findXPatterns(example);

    expect(actual).toEqual(expected);
  });

  it("simple X", () => {
    const example = `
    MBMBM
    BABAB
    SBSBS
    BABBB
    MBMBB
    `;

    const expected = 3;

    const actual = findXPatterns(example);

    expect(actual).toEqual(expected);
  });
});
