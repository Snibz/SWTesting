import isEmpty from '../src/isEmpty.js'

test('isEmpty should return true for null', () => {
    expect(isEmpty(null)).toBe(true)
})

test('isEmpty should return true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true)
})

test('isEmpty should return true for boolean values', () => {
    expect(isEmpty(true)).toBe(true)
    expect(isEmpty(false)).toBe(true)
})

test('isEmpty should return true for numbers', () => {
    expect(isEmpty(0)).toBe(true)
    expect(isEmpty(1)).toBe(true)
    expect(isEmpty(-1)).toBe(true)
})

test('isEmpty should return true for empty arrays', () => {
    expect(isEmpty([])).toBe(true)
})

test('isEmpty should return false for non-empty arrays', () => {
    expect(isEmpty([1, 2, 3])).toBe(false)
})

test('isEmpty should return true for empty strings', () => {
    expect(isEmpty('')).toBe(true)
})

test('isEmpty should return false for non-empty strings', () => {
    expect(isEmpty('abc')).toBe(false)
})

test('isEmpty should return true for empty objects', () => {
    expect(isEmpty({})).toBe(true)
})

test('isEmpty should return false for non-empty objects', () => {
    expect(isEmpty({ 'a': 1 })).toBe(false)
})

test('isEmpty should return true for empty Map', () => {
    expect(isEmpty(new Map())).toBe(true)
})
test('isEmpty should return true for null', () => {
    expect(isEmpty(null)).toBe(true)
})

test('isEmpty should return true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true)
})

test('isEmpty should return true for boolean values', () => {
    expect(isEmpty(true)).toBe(true)
    expect(isEmpty(false)).toBe(true)
})

test('isEmpty should return true for numbers', () => {
    expect(isEmpty(0)).toBe(true)
    expect(isEmpty(1)).toBe(true)
    expect(isEmpty(-1)).toBe(true)
})

test('isEmpty should return true for empty arrays', () => {
    expect(isEmpty([])).toBe(true)
})

test('isEmpty should return false for non-empty arrays', () => {
    expect(isEmpty([1, 2, 3])).toBe(false)
})

test('isEmpty should return true for empty strings', () => {
    expect(isEmpty('')).toBe(true)
})

test('isEmpty should return false for non-empty strings', () => {
    expect(isEmpty('abc')).toBe(false)
})

test('isEmpty should return true for empty objects', () => {
    expect(isEmpty({})).toBe(true)
})

test('isEmpty should return false for non-empty objects', () => {
    expect(isEmpty({ 'a': 1 })).toBe(false)
})

test('isEmpty should return true for empty Map', () => {
    expect(isEmpty(new Map())).toBe(true)
})

test('isEmpty should return false for non-empty Map', () => {
    const map = new Map()
    map.set('key', 'value')
    expect(isEmpty(map)).toBe(false)
})

test('isEmpty should return true for empty Set', () => {
    expect(isEmpty(new Set())).toBe(true)
})

test('isEmpty should return false for non-empty Set', () => {
    const set = new Set()
    set.add(1)
    expect(isEmpty(set)).toBe(false)
})

test('isEmpty should return true for empty buffer', () => {
    expect(isEmpty(Buffer.alloc(0))).toBe(true)
})

test('isEmpty should return false for non-empty buffer', () => {
    expect(isEmpty(Buffer.alloc(1))).toBe(false)
})

test('isEmpty should return true for empty arguments object', () => {
    (function() {
        expect(isEmpty(arguments)).toBe(true)
    })()
})

test('isEmpty should return false for non-empty arguments object', () => {
    (function(a, b, c) {
        expect(isEmpty(arguments)).toBe(false)
    })(1, 2, 3)
})

// Prototype tests courtesy of ChatGPT. For some reason the proto row of isEmpty
//  remains uncovered even with all this.

test('isEmpty should return true for object with only prototype properties', () => {
    function Foo() {}
    Foo.prototype.a = 1
    expect(isEmpty(new Foo())).toBe(true)
})

test('isEmpty should return true for an object directly inheriting from its prototype with no own properties', () => {
    function Foo() {}
    Foo.prototype.a = 1; // Add a prototype property
    const obj = Object.create(Foo.prototype); // Create an object inheriting from Foo.prototype
    expect(isEmpty(obj)).toBe(true); // No own properties, should be treated as empty
})

test('isEmpty should return false for a prototype with its own enumerable properties', () => {
    function Foo() {}
    Foo.prototype.a = 1; // Prototype property
    const obj = Object.create(Foo.prototype); // Create an object inheriting from Foo.prototype
    obj.b = 2; // Add an own enumerable property to the object
    expect(isEmpty(obj)).toBe(false); // Object has own enumerable property, not empty
});

test('isEmpty should return true for an object created with a prototype and no own properties', () => {
    function CustomProto() {}
    const obj = Object.create(CustomProto.prototype); // Object created with CustomProto prototype
    expect(isEmpty(obj)).toBe(true); // obj should be considered empty
  });

test('isEmpty should return true for Object.prototype', () => {
    expect(isEmpty(Object.prototype)).toBe(true);
  });

  test('isEmpty should return false for an object with its own properties, even if it has a prototype', () => {
    function CustomProto() {}
    CustomProto.prototype.a = 1; // Prototype property
    const obj = Object.create(CustomProto.prototype);
    obj.b = 2; // Own property
    expect(isEmpty(obj)).toBe(false); // obj has an own property, so it's not empty
  });