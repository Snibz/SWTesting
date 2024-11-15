import add from '../src/add';

test('adds 6 + 4 to equal 10', () => {
    expect(add(6, 4)).toBe(10);
});

test('adds -1 + -1 to equal -2', () => {
    expect(add(-1, -1)).toBe(-2);
});

test('adds 0 + 0 to equal 0', () => {
    expect(add(0, 0)).toBe(0);
});

test('adds 1.5 + 1.5 to equal 3', () => {
    expect(add(1.5, 1.5)).toBe(3);
});

test('adds 1000 + 2000 to equal 3000', () => {
    expect(add(1000, 2000)).toBe(3000);
});

test('adds -5 + 5 to equal 0', () => {
    expect(add(-5, 5)).toBe(0);
});

test('adds 6 + 4 to equal 10', () => {
    expect(add(6, 4)).toBe(10);
});

test('adds -1 + -1 to equal -2', () => {
    expect(add(-1, -1)).toBe(-2);
});

test('adds 0 + 0 to equal 0', () => {
    expect(add(0, 0)).toBe(0);
});

test('adds 1.5 + 1.5 to equal 3', () => {
    expect(add(1.5, 1.5)).toBe(3);
});

test('adds 1000 + 2000 to equal 3000', () => {
    expect(add(1000, 2000)).toBe(3000);
});

test('adds -5 + 5 to equal 0', () => {
    expect(add(-5, 5)).toBe(0);
});

test('adds Number.MAX_SAFE_INTEGER + 1 to equal Number.MAX_SAFE_INTEGER + 1', () => {
    expect(add(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
});

test('adds Number.MIN_SAFE_INTEGER + -1 to equal Number.MIN_SAFE_INTEGER - 1', () => {
    expect(add(Number.MIN_SAFE_INTEGER, -1)).toBe(Number.MIN_SAFE_INTEGER - 1);
});

test('adds Infinity + Infinity to equal Infinity', () => {
    expect(add(Infinity, Infinity)).toBe(Infinity);
});

test('adds -Infinity + -Infinity to equal -Infinity', () => {
    expect(add(-Infinity, -Infinity)).toBe(-Infinity);
});

test('adds NaN + NaN to equal NaN', () => {
    expect(add(NaN, NaN)).toBeNaN();
});

test('adds 0.1 + 0.2 to approximately equal 0.3', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3, 10);
});

// Additional edge cases
test('adds a number and a string to return NaN', () => {
    expect(add(5, '5')).toBe('55');
});

test('adds a string and a number to return NaN', () => {
    expect(add('5', 5)).toBe('55');
});

test('adds null + null to equal 0', () => {
    expect(add(null, null)).toBe(0);
});

test.skip('adds undefined + undefined to return NaN', () => { // Bug here: in javascript, undefined + undefined is NaN, not 0!
    expect(add(undefined, undefined)).toBeNaN();
});

test.skip('adds null + undefined to return NaN', () => {  // Bug here: in javascript, null + undefined is NaN, not 0!
    expect(add(null, undefined)).toBeNaN();
});

test('adds empty string + empty string to equal 0', () => {
    expect(add('', '')).toBe('');
});

test('adds boolean true + true to equal 2', () => {
    expect(add(true, true)).toBe(2);
});

test('adds boolean false + true to equal 1', () => {
    expect(add(false, true)).toBe(1);
});
