import { capitalize, extractConstructorParams, isEs5Class } from '../lib/utils';

function Es5Class(id, name) {}
function Es5ClassNoParams() {}

class Es6Class {
  constructor(id, name) {}
}
class Es6ClassNoParams {
  constructor() {}
}
class Es6ClassNoConstructor {}

test('should capitalize string', () => {
  expect(capitalize('builder pattern')).toBe('Builder pattern');
});

test('should detect ES5 class', () => {
  expect(isEs5Class(Es5Class.toString())).toBe(true);
});

describe('should extract constructor params of ES5 class', () => {
  test('should return parameters', () => {
    expect(extractConstructorParams(Es5Class)).toEqual(['id', 'name']);
  });

  test('should return empty array when no parameters', () => {
    expect(extractConstructorParams(Es5ClassNoParams)).toEqual([]);
  });
});

describe('should extract constructor params of ES6 class', () => {
  test('should return parameters', () => {
    expect(extractConstructorParams(Es6Class)).toEqual(['id', 'name']);
  });

  test('should return empty array when no parameters', () => {
    expect(extractConstructorParams(Es6ClassNoParams)).toEqual([]);
  });

  test('should return empty array when no constructor', () => {
    expect(extractConstructorParams(Es6ClassNoConstructor)).toEqual([]);
  });
});
