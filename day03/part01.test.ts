import { describe, expect, it } from "bun:test";
import { mulInstructions } from "./part01";

describe("mulInstructions", () => {
  it("should correctly evaluate instructions", () => {
    const expected = 161;

    const actual = mulInstructions(
      "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))",
    );

    expect(actual).toEqual(expected);
  });
});
