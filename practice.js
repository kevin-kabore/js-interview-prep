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

// 15. Call & Apply Methods
// Describe the JavaScript call() and apply() methods
// 1. How do they function?
// 2. What arguments to they take?
// 3. How are they different

// 16. What will list 2 contain when logged
const list1 = [1, 2, 3, 4, 5];
const list2 = list1;
list1.push(6, 7, 8);

console.log(list2);

// 17. How can we set list2 equal to same data as list1 without referencing
const list1 = [1, 2, 3, 4, 5];
const list2 = list1;
list1.push(6, 7, 8);

console.log(list2);

// 18. Singly or Double invoked
// Create a function getTotal that can be singly or double invoked
// getTotal(10,20) > 30
// getTotal(10)(20) > 30

function getTotal() {
  if (arguments.length === 2) {
    let total = [].slice.call(arguments).reduce((acc, next) => {
      return acc + next;
    });
    return total;
  } else if (arguments.length === 1) {
    let a = arguments[0];
    return function(b) {
      return a + b;
    };
  }
}

console.log(getTotal(10, 20));
console.log(getTotal(10)(21));

// 19. JSON
// 1. Describe what JSON format is.
// > JavaScript Object Notation
// > Light-weight format for transferring data
// > Used because:
// > > Easy for humans to understand,
// > > Easy for computer to parse & generate
// > Must wrap all property names in double quotes
// 2. Delete the data types not permitted in JSON.
// Undefined, and Functions are not permitted in JSON
// JSON used to transfer data, not compute logic so no functions
// 3. Replace placeholder-text with the corresponding data type,
//    properly formatted as JSON.

const myJsonObj = {
  myString: 'Some String',
  myNumber: 10.5,
  myNull: null,
  myBoolean: true,
  myArray: [1, 2, 3],
  // myUndefined: [some undefined]
  // myFunction: [some function],
  myObject: { name: 'Kevin', age: 23 }
};

// const myJsonObj = {
//   "myString": "hello world",
//   "myNumber": 12345.6789,
//   "myNull": null,
//   "myBoolean": true,
//   "myArray": [20, 30, "orange"],
//   "myObject": {
//     "name": "Sam",
//     "age": 30
//   }
// };

// 20. What is going to be logged out in the console and in what order?

function logNumbers() {
  console.log(1);
  setTimeout(function() {
    console.log(2);
  }, 1000);
  setTimeout(function() {
    console.log(3);
  }, 0);
  console.log(4);
}

logNumbers();
// 1
// 4
// 3
// 2

// Event loop
// > queue where all events in browser are placed
// > ex. click, setTimeout, callbacks
// Pushed into queue and processed in order
// pushed callbakc fn into event loop
// log(4) runs bc not placed in event loop
// then log(2) runs

// 21. 3 different ways to create an object
// 1. Using literal syntax
// > Main way of making objects
var myObj1 = { number: 1 };
console.log(myObj1);

// 2. Using new keyword and Object constructor
var myObj2 = new Object();
myObj2.number = 2;
console.log(myObj2);

// 3. Using a constructor function
// > Main way to make objects of the same class
function Car(color, brand, year) {
  this.color = color;
  this.brand = brand;
  this.year = year;
}
// Can add methods or other properties to the prototype
Car.prototype.getColor = function() {
  return this.color;
};

const myCar = new Car('black', 'Jaguar', '2018');
const djsCar = new Car('blue', 'BMW', '2015');
console.log(myCar);
console.log(djsCar);
console.log(myCar.getColor());
console.log(djsCar.getColor());

// 22. Type of data types
// What will be logged to the console?
console.log(typeof null); // object. Js feature
console.log(typeof undefined); // undefined. Js feature
console.log(typeof {}); // object
console.log(typeof []); // object. In js Arrays are of type Object

// 23. The Bind Method
// Describe the bind method
// 1. Describe how it works
// Binds methods or properties to a specified object or 'this'
// 2. Explain the parameters that it takes
// Takes in thisArg to specify an object
// 3. Code out an example of how bind() is used
function sayHello() {
  console.log(`Hi ${this.name}`);
}

var person = {
  name: 'Kevin',
  age: 23
};

sayHello.bind(person);
person.sayHello();

// 24. Two objects
// What will be logged to the console?

// Solution:
// False both times because in JavaScript, pass objects by reference, not by value
// Both variables referencing different objects in memory
// setting user1 = user2 would however reference same object.

// Can compare properties by JSON.stringify()
// JSON.stringify turns JSON into Object into String
// compage two strings
const user1 = {
  name: 'Jane',
  age: 23
};

const user2 = {
  name: 'Jane',
  age: 23
};

console.log(user1 == user2); // false
console.log(user1 === user2); // false
console.log(JSON.stringify(user1) === JSON.stringify(user2)); // true. Strings passed by value. Not by reference.
console.log([] == []); // false
console.log(JSON.stringify([]) === JSON.stringify([])); // true. Arrays are objects

// 25. Array Constructor
// What will be logged out to the console?
var arr1 = [];
var arr2 = new Array(50);
var arr3 = new Array(1, 2, 'three', 4, 'five');
var arr4 = new Array([1, 2, 3, 4, 5]);

console.log('arr1: ', arr1); // 'arr1: []'
console.log('arr2: ', arr2); // 'arr2: [<50 empty items>]'
console.log('arr3: ', arr3); // 'arr3: [1, 2, 'three', 4, 'five']'
console.log('arr4: ', arr4); // 'arr1: [[1,2,3,4, 5]]'
