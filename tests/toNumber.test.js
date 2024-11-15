import toNumber from '../src/toNumber.js';

describe('toNumber', () => {
    test('converts number to number', () => {
        expect(toNumber(3.2)).toBe(3.2)
        expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE)
        expect(toNumber(Infinity)).toBe(Infinity)
    })

    test('converts string to number', () => {
        expect(toNumber('3.2')).toBe(3.2)
        expect(toNumber('0')).toBe(0)
        expect(toNumber(' ')).toBe(0)
        expect(toNumber('0b10')).toBe(2)
        expect(toNumber('0o10')).toBe(8)
        expect(toNumber('0x10')).toBe(16)
    })

    test('converts object to number', () => {
        expect(toNumber({ valueOf: () => 3.2 })).toBe(3.2)
        expect(toNumber({})).toBeNaN()
    })

    test('converts symbol to NaN', () => {
        expect(toNumber(Symbol('3.2'))).toBeNaN()
    })

    test('converts null and undefined to NaN', () => {
        expect(toNumber(null)).toBe(0)
        expect(toNumber(undefined)).toBeNaN()
    })

    test('converts boolean to number', () => {
        expect(toNumber(true)).toBe(1)
        expect(toNumber(false)).toBe(0)
    })

    test('converts invalid strings to NaN', () => {
        expect(toNumber('invalid')).toBeNaN()
        expect(toNumber('0xinvalid')).toBeNaN()
    })

    test('converts empty string to 0', () => {
        expect(toNumber('')).toBe(0)
    })

    test('converts string with leading and trailing spaces to number', () => {
        expect(toNumber('  42  ')).toBe(42)
    })

    test('converts string with leading zeros to number', () => {
        expect(toNumber('007')).toBe(7)
    })

    test('converts negative numbers in string format', () => {
        expect(toNumber('-42')).toBe(-42)
    })

    test('converts positive numbers with plus sign in string format', () => {
        expect(toNumber('+42')).toBe(42)
    })

    test('trims leading and trailing spaces from string', () => {
        expect(toNumber('  42  ')).toBe(42)
        expect(toNumber('  0b1010  ')).toBe(10)
        expect(toNumber('  0o12  ')).toBe(10)
        expect(toNumber('  0x10  ')).toBe(16)
    })
    
    test('identifies binary strings correctly', () => {
        expect(toNumber('0b1010')).toBe(10)
        expect(toNumber('0b2')).toBeNaN() // Invalid binary
    })
    
    test('parses binary and octal strings correctly', () => {
        expect(toNumber('0b1010')).toBe(10)
        expect(toNumber('0o12')).toBe(10)
        expect(toNumber('0xG')).toBeNaN() // Invalid hexadecimal
    })

    // -------- coverage tests courtesy of ChatGPT
    test('converts object with valueOf method to number', () => {
        const obj = {
            valueOf: () => 42
        };
        expect(toNumber(obj)).toBe(42); // This will hit the `valueOf()` method and convert to 42
    })

    test('converts zero correctly', () => {
        expect(toNumber(0)).toBe(0); // This will hit the `value === 0` condition and return 0
    })

    test('converts bad hexadecimal strings to NaN', () => {
        expect(toNumber('0xinvalid')).toBeNaN(); // This will trigger the `reIsBadHex.test(value)` check and return NaN
    })
})