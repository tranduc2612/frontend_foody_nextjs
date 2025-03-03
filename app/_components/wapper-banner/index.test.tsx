import "@testing-library/jest-dom";

function sum(a: number, b: number) {
  return a + b;
}

test("add 2+3", () => {
  expect(sum(2, 3)).toBe(5);
});
