const findIndexes = require("../katas/kata_1.js");

test('Send undefined if word is empty', () => {
  expect(findIndexes("")).toEqual(undefined);
})

test('Returns the correct indices for "HelloWorld"', () => {
  expect(findIndexes('HelloWorld')).toEqual(["0", "5"]);
});

test('Returns the correct indices for "OpenAI"', () => {
  expect(findIndexes('OpenAI')).toEqual(["0", "4", "5"]);
});

test('Returns the correct indices for "PythonIsGreat"', () => {
  expect(findIndexes('PythonIsGreat')).toEqual(["0", "6", "8"]);
});

test('Returns the correct indices for "CHAT"', () => {
  expect(findIndexes('CHAT')).toEqual(["0", "1", "2", "3"]);
});