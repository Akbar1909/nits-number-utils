const { addSpaceEvery3Char } = require("./addSpaceEvery3Char");

test("addSpaceEvery3Char with correct values", () => {
  const result = addSpaceEvery3Char({ num: 1234, count: 1 });
  expect(result).toBe("1 234,0");
});

test("addSpaceEvery3Char with decimal argument", () => {
  const result = addSpaceEvery3Char({ num: 1234, count: 1, decimal: "/" });
  expect(result).toBe("1 234/0");
});

test("addSpaceEvery3Char with separator argument", () => {
  const result = addSpaceEvery3Char({ num: 1234, separator: "_" });
  expect(result).toBe("1_234,0");
});

test("addSpaceEvery3Char with both separator and decimal arguments and minus value", () => {
  const result = addSpaceEvery3Char({
    num: -1234,
    decimal: "/",
    separator: "{",
  });
  expect(result).toBe("-1{234/0");
});

test("addSpaceEvery3Char check for invalid value", () => {
  const result = addSpaceEvery3Char({ num: [] });
  expect(result).toBe("invalid number");
});

test("addSpaceEvery3Char check for defaultValue", () => {
  const result = addSpaceEvery3Char({ num: [], defaultValue: "this is array" });
  expect(result).toBe("this is array");
});
