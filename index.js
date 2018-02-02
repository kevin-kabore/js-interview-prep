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

// tripleAdd is the curried version of tripleAdd1
function tripleAdd1(num1, num2, num3) {
  return num1 + num2 + num3;
}
tripleAdd1(10, 20, 30);

// Another curried function
// still a sequence of functions even though takes one or multiple arguments
function quadrupleAdd(num1) {
  return function(num2) {
    return function(num, num4) {
      return num1 + num2 + num3 + num4;
    };
  };
}
quadrupleAdd(10)(20)(30, 40);
