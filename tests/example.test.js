const { multiply } = require('../src/example');

test('multiplies 2 by 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});