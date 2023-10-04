const { describe, expect, test } = require("@jest/globals");
const keymark = require("../dist/index.cjs.js");
describe(`highlighting a specific key in a string`, () => {
  test("Random String ok", () => {
    expect(keymark("Random String ok", "ok")).toBe(
      "Random String ok\n              ^^"
    );
  });
});
