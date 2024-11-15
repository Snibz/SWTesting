import slice from '../src/slice';

describe('slice', () => {
  const array = [1, 2, 3, 4];

  test('returns a slice of the array from start to end indices', () => {
    expect(slice(array, 1, 3)).toEqual([2, 3]);
  });

  test('returns elements from the start index to the end of the array when end is not provided', () => {
    expect(slice(array, 2)).toEqual([3, 4]);
  });

  test('returns an empty array when start is greater than or equal to the array length', () => {
    expect(slice(array, 5)).toEqual([]);
    expect(slice(array, 4)).toEqual([]);
  });

  test('returns an empty array when end is less than or equal to start', () => {
    expect(slice(array, 3, 3)).toEqual([]);
    expect(slice(array, 4, 3)).toEqual([]);
  });

  test('handles negative start index as an offset from the end', () => {
    expect(slice(array, -2)).toEqual([3, 4]);
  });

  test('handles negative end index as an offset from the end', () => {
    expect(slice(array, 1, -1)).toEqual([2, 3]);
  });

  test('handles negative start and end indices', () => {
    expect(slice(array, -3, -1)).toEqual([2, 3]);
  });

  test('returns an empty array for null or undefined input', () => {
    expect(slice(null, 1, 3)).toEqual([]);
    expect(slice(undefined, 1, 3)).toEqual([]);
  });

  test('returns the whole array when start and end are not provided', () => {
    expect(slice(array)).toEqual([1, 2, 3, 4]);
  });

  test('works with empty arrays', () => {
    expect(slice([], 1, 3)).toEqual([]);
  });

// tests from ChatGPT
  test('ensures dense arrays are returned', () => {
    const sparseArray = [1, , 3, 4]; // Sparse array
    const result = slice(sparseArray, 0, 4);
    expect(result).toEqual([1, undefined, 3, 4]);
    expect(Object.keys(result).length).toBe(4); // Ensure dense array
  });

  test('handles extreme negative indices', () => {
    expect(slice(array, -10, -8)).toEqual([]);
  });

  test('handles extreme positive indices', () => {
    expect(slice(array, 10, 12)).toEqual([]);
  });
});