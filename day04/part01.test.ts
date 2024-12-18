import { describe, expect, it } from "bun:test";
import { findWord } from "./part01";

describe("day04/part01", () => {
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

    const actual = findWord("XMAS", example);

    expect(actual).toEqual(expected);
  });

  it("wordN", () => {
    const wordN = `
      BBSBB
      SBABS
      ABMBA
      MBXBM
      XBBBX
    `;

    const expected = 3;

    const actual = findWord("XMAS", wordN);

    expect(actual).toEqual(expected);
  });

  it("wordNE", () => {
    const wordNE = `
      BBBSB
      BBASB
      BMABB
      XMBBB
      XBBBB
    `;

    const expected = 2;

    const actual = findWord("XMAS", wordNE);

    expect(actual).toEqual(expected);
  });

  it("wordE", () => {
    const wordE = `
      XMASB
      BBBBB
      BBBBB
      BXMAS
      BBBBB
    `;

    const expected = 2;

    const actual = findWord("XMAS", wordE);

    expect(actual).toEqual(expected);
  });

  it("wordSE", () => {
    const wordSE = `
      BBBBB
      XBBBB
      BMBBB
      BBABB
      BBBSB
    `;

    const expected = 1;

    const actual = findWord("XMAS", wordSE);

    expect(actual).toEqual(expected);
  });

  it("wordS", () => {
    const wordS = `
      BBXBB
      BBMBB
      BBABB
      BBSBB
      BBBBB
    `;

    const expected = 1;

    const actual = findWord("XMAS", wordS);

    expect(actual).toEqual(expected);
  });

  it("wordSW", () => {
    const wordSW = `
      BBBBX
      BBBMB
      BBABB
      BSBBB
      BBBBB
    `;

    const expected = 1;

    const actual = findWord("XMAS", wordSW);

    expect(actual).toEqual(expected);
  });

  it("wordW", () => {
    const wordW = `
      BBBBB
      BBBBB
      BSAMX
      BBBBB
      BBBBB
    `;

    const expected = 1;

    const actual = findWord("XMAS", wordW);

    expect(actual).toEqual(expected);
  });

  it("wordNW", () => {
    const wordNW = `
      BBBBB
      BSBBB
      BBABB
      BBBMB
      BBBBX
    `;

    const expected = 1;

    const actual = findWord("XMAS", wordNW);

    expect(actual).toEqual(expected);
  });
});
