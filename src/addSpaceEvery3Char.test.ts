const { addSpaceEvery3Char } = require("./addSpaceEvery3Char");

test("addSpaceEvery3Char with correct values", () => {
  const result = addSpaceEvery3Char({ num: 1234, count: 1 });
  expect(result).toBe("1 234,0");
});
