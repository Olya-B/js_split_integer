'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(4, 2)).toEqual([2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(10, 1)).toEqual([10]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(11, 2)).toEqual([5, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(5, 10)).toEqual([0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
});
