// 1. Implement the tripleAdd function
tripleAdd(10)(20)(30); // returns 60

// Key Concept: Currying
// - translating one function that takes multiple args into a sequence
// of functions that each take a single OR multiple arguments

// Solution
function tripleAdd(n1) {
  return function(n2) {
    return function(n3) {
      return n1 + n2 + n3;
    };
  };
}
console.log('Question 1');
console.log(tripleAdd(10)(20)(30));
// tripleAdd is the curried version of tripleAdd1
function tripleAdd1(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(tripleAdd1(10, 20, 30));

// Another curried function
// still a sequence of functions even though takes one or multiple arguments
function quadrupleAdd(num1) {
  return function(num2) {
    return function(num3, num4) {
      return num1 + num2 + num3 + num4;
    };
  };
}
console.log(quadrupleAdd(10)(20)(30, 40));

// 2. What is an IIFE and why are they used?
// - An IIFE is an Immediately Invoked Functon Expression
// - A function that is invoked right after it is created
// - Main reason: Can be used to preserve a private scope within your function or file.
// Can wrap entire file inside IIFE to preserve scope
(function() {
  function sayHi() {
    console.log('Hi');
  }
  var $ = 'Not jQuery';

  if (true) {
    console.log('In the IIFE');
  }
});

// 3. Code out an example IIFE that functions properly

console.log('Question 2');
(function sayHi(name) {
  console.log(`Hi ${name} it's nice to meet you!`);
})('Kevin');

(function doubleNumber(n) {
  return n * 2;
})(5);
