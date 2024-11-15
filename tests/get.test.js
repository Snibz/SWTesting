import get from '../src/get.js';

describe('get', () => {
  const testObject = { a: [{ b: { c: 3 } }], d: null };

  test('retrieves the value at a valid string path', () => {
    expect(get(testObject, 'a[0].b.c')).toBe(3);
  });

  test('retrieves the value at a valid array path', () => {
    expect(get(testObject, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('returns default value for invalid string path', () => {
    expect(get(testObject, 'a.b.c', 'default')).toBe('default');
  });

  test('returns undefined for invalid string path without default value', () => {
    expect(get(testObject, 'a.b.c')).toBeUndefined();
  });

  test('handles null object gracefully', () => {
    expect(get(null, 'a.b.c', 'default')).toBe('default');
  });

  test('handles undefined object gracefully', () => {
    expect(get(undefined, 'a.b.c', 'default')).toBe('default');
  });

  test('retrieves `null` values without replacing them with default', () => {
    expect(get(testObject, 'd', 'default')).toBe(null);
  });

  test('retrieves values when path contains numeric indices as strings', () => {
    expect(get(testObject, 'a.0.b.c')).toBe(3);
  });

  test('returns default value if path leads to `undefined`', () => {
    expect(get(testObject, 'a[1].b', 'default')).toBe('default');
  });
});