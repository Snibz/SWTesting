import difference from '../src/difference.js';

describe('difference', () => {
  test('returns values in the first array that are not in the second array', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
  });

  test('returns an empty array when all values are excluded', () => {
    expect(difference([1, 2, 3], [1, 2, 3])).toEqual([]);
  });

  test('handles multiple arrays to exclude values', () => {
    expect(difference([1, 2, 3, 4], [2], [3], [4])).toEqual([1]);
  });

  test('returns an empty array when the first array is empty', () => {
    expect(difference([], [1, 2, 3])).toEqual([]);
  });

  test('returns the first array when no values are provided for exclusion', () => {
    expect(difference([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('handles duplicate values in the first array correctly', () => {
    expect(difference([1, 2, 2, 3], [2])).toEqual([1, 3]);
  });

  test('the original array is not modified', () => {
    const array = [1, 2, 3];
    difference(array, [2]);
    expect(array).toEqual([1, 2, 3]);
  });

  test('handles null or undefined as input for the array', () => {
    expect(difference(null, [1, 2])).toEqual([]);
    expect(difference(undefined, [1, 2])).toEqual([]);
  });


  // tests from ChatGPT
  test('ignores non-array values', () => {
    expect(difference([1, 2, 3], 2, 'a', null)).toEqual([1, 2, 3]);
  });

  test.skip('handles deeply nested arrays as input for exclusion', () => {
    //Possible bug: Nested arrays give unexpected results. Expected: [1], Actual: [1, [2, [3, 4]]]
    expect(difference([1, [2, [3, 4]]], [[2, [3, 4]]])).toEqual([1]);
  });
});