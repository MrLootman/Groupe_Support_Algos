const replaceVowels = require("../katas/kata_2.js");

test('Returns the correct sentence for "HelloWorld"', () => {
  expect(replaceVowels("HelloWorld")).toEqual("H!ll!W!rld");
})

test('Returns the correct sentence for "WildCodeSchool"', () => {
  expect(replaceVowels("WildCodeSchool")).toEqual("W!ldC!d!Sch!!l");
})

test('Returns the correct sentence for "HELLOWORLD"', () => {
  expect(replaceVowels("HELLOWORLD")).toEqual("H!LL!W!RLD");
})