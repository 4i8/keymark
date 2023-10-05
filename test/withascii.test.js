const { describe, expect, test } = require("@jest/globals");
const keymark = require("../dist/index.cjs.js");
describe(`highlighting a specific key in a string`, () => {
  test("Random String ok", () => {
    expect(keymark("\x1b[41;97mRandom\x1b[0m String ok", "ok")).toBe(
      "\x1b[41;97mRandom\x1b[0m String ok\n              ^^"
    );
  });
});
