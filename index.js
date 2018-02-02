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

// 4. Button 5

// Code is adding 5 buttons to the page and an alert onClick

// PT 1 - What will be alerted to the screen when
// button number 5 is clicked, and why is that data alerted

// A: The number 6 will be alerted for button 5.
///// Actually, the number 6 will be alerted for all buttons
///// Why? Because i = 6 by the time button is clicked
///// loops 5 times and appends Button and number.
///// adds 1 to i and doesn't loop because i > 5
///// when button is clicked, the value of i is 6
function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName('BODY')[0];
    var button = document.createElement('BUTTON');
    button.innerHTML = 'Button ' + i;
    button.onclick = function() {
      alert('This is button ' + i);
    };
    body.appendChild(button);
  }
}
createButtons();

// PT 2 - How can you fix the function?
// A: With an IIFE
// place the button.onclick inside the IIFE
// Invoke the IIFE with i as an argument
// Replace i with the arg passed into the function
// On each iteration, we pass the current value of i into the IIFE
// and being stored as our num arg which is now param (because it executes Immediately)
// num is encapsulated in the scope of our IIFE so num param will never change
function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName('BODY')[0];
    var button = document.createElement('BUTTON');
    button.innerHTML = 'Button ' + i;
    (function(num) {
      button.onclick = function() {
        alert('This is button ' + num);
      };
    })(i);
    body.appendChild(button);
  }
}
createButtons();
