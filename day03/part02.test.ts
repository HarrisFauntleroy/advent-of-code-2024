import { describe, expect, it } from "bun:test";
import { mulInstructionsWithControls } from "./part02";

describe("day03/part02", () => {
  it("should return 48 for input", () => {
    const expected = 48;

    const actual = mulInstructionsWithControls(
      "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))",
    );

    expect(actual).toEqual(expected);
  });
});
