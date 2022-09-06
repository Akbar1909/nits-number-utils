const { createRangeAndDoSomething } = require("./createRangeDoSomething");

test("get sum of [1-3] with the help of createRangeDoSomething", () => {
  let sum = 0;

  const cb = jest.fn((i: number) => (sum += i));

  createRangeAndDoSomething(1, 3, cb);

  expect(sum).toBe(6);
  expect(cb).toBeCalledTimes(3);
  expect(cb.mock.calls).toEqual([[1], [2], [3]]);
});
