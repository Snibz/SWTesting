import reduce from '../src/reduce.js'

describe('reduce', () => {
    test('should sum up array values', () => {
        const array = [1, 2, 3, 4]
        const result = reduce(array, (sum, n) => sum + n, 0)
        expect(result).toBe(10)
    })

    test('should handle object values', () => {
        const object = { 'a': 1, 'b': 2, 'c': 1 }
        const result = reduce(object, (result, value, key) => {
            (result[value] || (result[value] = [])).push(key)
            return result
        }, {})
        expect(result).toEqual({ '1': ['a', 'c'], '2': ['b'] })
    })

    test('should use first element as accumulator if not provided', () => {
        const array = [1, 2, 3, 4]
        const result = reduce(array, (sum, n) => sum + n)
        expect(result).toBe(10)
    })

    test('should return undefined for empty array without accumulator', () => {
        const array = []
        const result = reduce(array, (sum, n) => sum + n)
        expect(result).toBeUndefined()
    })

    test('should return initial accumulator for empty array', () => {
        const array = []
        const result = reduce(array, (sum, n) => sum + n, 0)
        expect(result).toBe(0)
    })

    test('should handle string concatenation', () => {
        const array = ['a', 'b', 'c']
        const result = reduce(array, (acc, val) => acc + val, '')
        expect(result).toBe('abc')
    })
})