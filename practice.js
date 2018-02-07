// 1. Implement the tripleAdd function
tripleAdd(10)(20)(30); // returns 60

function tripleAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

// 2. What is an IIFE and why are they used?
// IIFE = Immediately Invoked Function Expression
// Used for separating and preserving scope. Can wrap entire file in IIFE

// 3. Code out an example IIFE that functions properly
var name = 'random';
(function() {
  var $ = 'Not equal to jQuery';
  var name = 'Kevin';
  console.log(`${name} is inside IIFE and not equal to random`);
  console.log($);
})();
// 4. Button 5

// Code is adding 5 buttons to the page and an alert onClick

// PT 1 - What will be alerted to the screen when
// button number 5 is clicked, and why is that data alerted
// A: the number 6 will appear when clicked. It will for all buttons
// by the time it is clicked value of i is 6 because loop has finished executing at 5.

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
// can fix function with an IIFE, passing in the value of i as a param and arg
// Answer:
function createButtonsCorrectly() {
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
createButtonsCorrectly();

// 5. What is a closure?
// Pt 2 - Code out a sample closure that functions as intended.
// a closure is created when a function exists within an outer function
// the inner function has access to the variables in the global scope, outer scope
// and own scope
// used for protecting variables from the global scope
// A closure also has access to:
// 1. its own parameters
// 2. Paramaters of outer functions

function sayHi(firstName) {
  var age = 23;
  function greeting() {
    console.log(`Hello ${firstName}. You are ${age} years old!`);
  }
  return greeting();
}
sayHi('Kevin');

// 6. What is the 'this' keyword? How is it used?
// the this keyword refers to the object from which 'this' is called.
// ex use:
var person = {
  name: 'Kevin',
  age: 23,
  introduction: function() {
    return `${this.name} is ${this.age} years old`;
  }
};
person.introduction();

// 7. Describe what variable and function hoisting is and how it works
// Javascript hoisting variable and function declarations to
// the top of the scope they are declared in
// assigns their values at runtime.

// example
function exampleFn() {
  var car = 'Ford';
  var color = 'Blue';
  return `${color} ${car}`;
}
// what happens when javascript executes:
function exampleFn1() {
  var car;
  var color;
  car = 'Ford';
  color = 'Blue';
  return `${color} ${car}`;
}

// 8. What will be logged out to the console when myCar.logColor() is ran
var myCar = {
  color: 'Blue',
  logColor: function() {
    var self = this;
    console.log('In logColor - this.color: ' + this.color);
    console.log('In logColor - self.color: ' + self.color);
    (function() {
      console.log('In IIFE - this.color: ' + this.color);
      console.log('In IIFE - self.color: ' + self.color);
    })();
  }
};

myCar.logColor();
// In logColor - this.color: Blue
// In logColor - self.color: Blue
// In IIFE - this.color: undefined // this refers to the global scope since IIFE is not method
// In IIFE - self.color: Blue

// 9. What is the difference between the comparison operators == and === ?
// Double equal is a general comparison while === or 'strict equals' compares for type as well
// js will convert types before comparing.
console.log(7 == '7'); // returns true
console.log(7 === '7'); // returns false

// 10. What will be logged out to the console when logNumber is ran?
var num = 50;

function logNumber() {
  console.log(num);
  var num = 100;
}

logNumber(); // will return undefined. No error

// 11. What is 'use strict' and what are benefits of using it?
// use strict is used for enforcing stricter parsing and error handling
// to code including scope restrictions.
// Ex.
// 1. No global vars
// 2. No same name params
// 3. Can't delete properties on prototype

// 12. Curry the function getProduct
function getProduct(num1, num2) {
  return num1 * num2;
}
function getProductCurried(num1) {
  return function(num2) {
    return num1 * num2;
  };
}

// 13. Write a function that keeps track of how many times it was called
// and returns that number
// All functionality should be inside of the function
function myFunc() {
  // fill in here
  var count = 0;
  return function() {
    count++;
    return count;
  };
}
const instanceOne = myFunc();
const instanceTwo = myFunc();

console.log(myFunc()); // returns 1
console.log(myFunc()); // returns 2

// 14. Logging X and Y
// What will the value of X and Y be when logged?
(function() {
  var x = (y = 200);
})();
console.log('y: ' + y); // 200
console.log('x: ' + x); // undefined
// var y; in global scope
// x is undefined because it is in the IIFE scope
