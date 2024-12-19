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

    const expected = 18;

    const actual = findXPatterns(example);

    expect(actual).toEqual(expected);
  });

  it("simple X", () => {
    const example = `
    BBBBB
    BBBBB
    SBSBB
    BABBB
    MBMBB
    `;

    const expected = 2;

    const actual = findXPatterns(example);

    expect(actual).toEqual(expected);
  });
});
