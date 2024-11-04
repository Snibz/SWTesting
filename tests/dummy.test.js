// dummy.test.js
const add = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('checks if array includes specific values', () => {
  expect([1, 2, 3]).toInclude(2); // This should also work if jest-extended is set up correctly
});

test('checks if array contains specific elements', () => {
  expect([1, 2, 3]).toIncludeAnyMembers([2, 4]);
});