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

// A PT 1: The number 6 will be alerted for button 5.
///// Actually, the number 6 will be alerted for all buttons
///// Why? Because i = 6 by the time button is clicked
///// loops 5 times and appends Button and number.
///// adds 1 to i and doesn't execude code in the loop loop because i > 5
///// when button is clicked, the value of i is 6

// PT 2 - How can you fix the function?

// A PT 2: With an IIFE
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

// Another solution
function createCorrectButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName('BODY')[0];
    var button = document.createElement('BUTTON');
    button.innerHTML = 'Button ' + i;
    addClickFunctionality(button, i);
    body.appendChild(button);
  }
}

function addClickFunctionality(button, num) {
  button.onclick = function() {
    alert('This is button ' + num);
  };
}

// Using the let keyword
// let makes it block scoped versus function scoped
function createYetMoreButtons() {
  for (let i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName('BODY')[0];
    var button = document.createElement('BUTTON');
    button.innerHTML = 'Button ' + i;
    button.onclick = function() {
      alert(`Button ${i} clikced!`);
    };
    body.appendChild(button);
  }
}
createYetMoreButtons();

// 5. What is a closure?
// Pt 2 - Code out a sample closure that functions as intended.
// A: A closure is an inner function that has access to
// the scope of an outer function. Used for protecting variables from being
// on the global scope like IIFE;
// A closure has access to three scopes.
// 1. It's own scope
// 2. Outer function
// 3. Global scope
// A closure also has access to:
// 1. its own parameters
// 2. Paramaters of outer functions

function greeting(first, last) {
  var intro = 'Hello! Your name is: ';
  function makeName() {
    return intro + first + ' ' + last;
  }
  return makeName();
}
greeting('Kevin', 'Kabore');

let globalVar = 'GLOBAL';
function outerFunc(param1) {
  let var1 = 'VAR ONE';
  function innerFunc(param2) {
    let var2 = 'VAR TWO';
    console.log(globalVar);
    console.log(var1);
    console.log(var2);
    console.log('param1: ' + param1);
    console.log('param2: ' + param2);
  }
  innerFunc('Param One');
}
outerFunc('Param Two');

// 6. What is the 'this' keyword? How is it used?
// A: The 'this' keyword refers to the value of the object
// that invokes the function where 'this' is used
// >> Refers to whatever object 'this' is inside of

var house = {
  price: 100000,
  squareFeet: 2000,
  owner: 'Kevin',
  getPricePerSquareFoot: function() {
    return this.price / this.squareFeet;
  }
};
console.log(house.price);
console.log(house.getPricePerSquareFoot());

// 7. Describe what variable and function hoisting is and how it works
// "Variables and functions are hoisted to the top of the scope that they are declared in."

// A: In JavaScript functions and variable declarations are automatically hoisted
// to the top of the scope in which they are declared. Either Global or function
// The process in which the JavaScript interpreter looks ahead and hoists all
// the variable and function declarations to the top and assigns their values at run time

// Function declarations are hoisted differently than function expressions.
// Function declarations (declaration and definition)are hoisted to the top.
// Function Expressions are not hoisted to the top. Only the declaration

// EX:
var color = 'red';
// really interpreted as
// var color;
// assigned: color = 'red'

// EX2:
// console.log(getProduct(2,3)); // error getProduct is not a function
var getProduct = function(a, b) {
  return a * b;
};
// what happens:
// var getProduct;
//...
// getProduct = function(a,b){return a * b}

// var is function scoped
// const, and let are block scoped.
// -block scope: For loop, if else, while loop, etc.
function getTotal() {
  // let total;
  // var multiplier;
  // console.log(total); returns error: total is not defined
  // console.log(multiplier); returns undefined

  let total = 0; // block. hoisted to top of getTotal. NOT DECLARED.

  for (var i = 0; i < 10; i++) {
    // let valueToAdd;
    let valueToAdd = i; // block. hoisted to top of for loop
    var multiplier = 2; // var function scoped. Hoisted to top of function
    total += valueToAdd * multiplier;
  }

  return total;
}
getTotal();

// 8. What will be logged out to the console when myCar.logColor() is ran
var myCar = {
  color: 'Blue',
  logColor: function() {
    var self = this; // references myCar Obj
    console.log('In logColor - this.color: ' + this.color);
    console.log('In logColor - self.color: ' + self.color);
    (function() {
      console.log('In IIFE - this.color: ' + this.color); // inside scope of new function this = global
      console.log('In IIFE - self.color: ' + self.color); // self references myCar obj
    })();
  }
};

myCar.logColor();

// In logColor - this.color: Blue
// In logColor - self.color: Blue
// In IIFE - this.color: undefined // this references global object since the IIFE is not a method on myCar
// In IIFE - self.color: Blue

// 9. What is the difference between the comparison operators == and === ?
// A: == (equals) test for abstract equality so does not test for data type
// while === (strict equals) tests for strict equality so tests for data type
console.log(7 == '7'); // returns true
// == converts both to the same type and compares them
console.log(7 === '7'); // returns false

// for == (equals)
// number vs string --> String converted to Number. Comparison made
// boolean vs non-boolean --> Non-bool converted to bool
// object vs primitive data-type --> Obj is converted to primitive data-type

// 10. What will be logged out to the console when logNumber is ran?
var num = 50;

function logNumber() {
  console.log(num);
  var num = 100;
}

logNumber();

// A: undefined. num in logNumber will be hoisted to the top of logNumber
// log will run before it is assigned 100.
// if you use let, you will get referenceError instead. num is not defined

// 11. What is 'use strict' and what are benefits of using it?
// Enforces stricter parsing and error handling in code
// 1. Prevents use of global Variables
// 2. All Paramater names for a function must be unique
// 3. Error if try to delete properties that are not deletable
// > delete Object.prototype

// 12. Curry the function getProduct
function getProduct(num1, num2) {
  return num1 * num2;
}

function getProductCurried(num1) {
  return function(num2) {
    return num1 * num2;
  };
}

let getProductCurried1 = num1 => num2 => num1 * num2;

// practical example
// used for making a general function applicable to different scenarios

function getTravelTime(distance, speed) {
  return distance / speed;
}

function getTravelTimeCurried(distance) {
  return function(speed) {
    return distance / speed;
  };
}

// want different times for different speeds
const travelTimeBosNyc = getTravelTimeCurried(400);
const travelTimeMiamiAtlanta = getTravelTimeCurried(600);

console.log(travelTimeBosNyc); // returns inner func
console.log(travelTimeBosNyc(80)); // returns 5 hours
console.log(travelTimeBosNyc(100)); // returns 4 hours

// 13. Write a function that keeps track of how many times it was called
// and returns that number
// All functionality should be inside of the function
function myFunc() {
  // fill in here
}
console.log(myFunc()); // returns 1
console.log(myFunc()); // returns 2

// SOLUTION
// Can count by using closures  creating instances
function myFuncSolution() {
  var count = 0;
  return function() {
    // in reality
    if (count < 4) {
      // some computation/functionality
    } else {
      // throw error
    }
    count++;
    return count;
  };
}
const instanceOne = muFuncSolution();
const instanceTwo = myFuncSolution();
console.log('InstanceOne: ' + instanceOne()); // 1
console.log('InstanceOne: ' + instanceOne()); // 2
console.log('InstanceOne: ' + instanceOne()); // 3
console.log('InstanceTwo: ' + instanceTwo()); // 1
console.log('InstanceTwo: ' + instanceTwo()); // 2
console.log('InstanceOne: ' + instanceOne()); // 4

// 14. Logging X and Y
// What will the value of X and Y be when logged?
(function() {
  var x = (y = 200);
})();
console.log('y: ' + y);
console.log('x: ' + x);

// SOLUTION
// y: 200 --> y is getting declared as global variable y = 200. Then setting x = y
// x: not defined --> defined within the scope of IIFE
(function() {
  y = 200;
  var x = y;
})();

// 15. Call & Apply Methods
// Describe the JavaScript call() and apply() methods
// 1. How do they function?
// 2. What arguments to they take?
// How are they different
// A: Call & apply are methods on the Function prototype
// // Function by invoking a function on a specified this argument and arguments
// call takes (thisArg, arg1, arg2, ....)
// apply takes (thisArg, [arg1, arg2, arg3])

// call(): native js method on Function prototype
// > Gives you an alternative way of calling your function
// > Gives you ability to change 'this' context
// apply(): same but takes array of args
const car1 = {
  brand: 'Porsche',
  getCarDescription: function(cost, year, color) {
    console.log(
      `This car is a ${this
        .brand}. The price is $${cost}. The year is ${year}. The color is ${color}. \n`
    );
  }
};
car1.getCarDescription(100000, 2015, 'black');

const car2 = {
  brand: 'Laborghini'
};
car1.getCarDescription.call(car2, 120000, 2018, 'blue');

const car3 = {
  brand: 'Ford'
};

car1.getCarDescription.apply(car3, [20000, 2012, 'orange']);

// 16. What will list 2 contain when logged
const list1 = [1, 2, 3, 4, 5];
const list2 = list1;
list1.push(6, 7, 8);

console.log(list2);

// A: list2 was shallow copy of list1 will have [1,2,3,4,5,6,7,8]
// Passing data by value vs reference.
// Passing data by value: Primitive data type or has no properties (ex: string or number)
// Passing data by reference: Reference another value

// 17. How can we set list2 equal to same data as list1 without referencing
const list3 = [1, 2, 3, 4, 5];
const list4 = list3.slice();
// const list4 = list3.concat([]); // concat with empty array and return new array
// use for loop
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
// object literal syntax
const myBoat = {
  length: 24,
  maxSpeed: 45,
  passengers: 14,
  getLength: function() {
    return this.length;
  }
};

// new keyword & Object constructor
const student = new Object();

student.grade = 12;
student.gradePointAverage = 3.7;
student.classes = ['English', 'Algebra', 'Chemistry'];
student.getClasses = function() {
  return this.classes;
};

// constructor function
function Car(color, brand, year) {
  this.color = color;
  this.brand = brand;
  this.year = year;
}

Car.prototype.getColor = function() {
  return this.color;
};

const carlysCar = new Car('blue', 'ferarri', 2015);
const jimsCar = new Car('red', 'tesla', 2014);

console.log(carlysCar.getColor());
console.log(jimsCar.getColor());

// 22. Type of data types
// What will be logged to the console?
console.log(typeof null); // object. Js feature
console.log(typeof undefined); // undefined. Js feature
console.log(typeof {}); // object
console.log(typeof []); // object. In js Arrays are of type Object

// Array is of type object
// > To solve use:
// > 1. Array.isArray()
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false
// > 2. instanceof Array
console.log([] instanceof Array); // true
console.log({} instanceof Array); // false

// 23. The Bind Method
// Describe the bind method
// > Bind method allows you to bind
//   the 'this' context of a function to a particular object

// 1. Describe how it works
// > Works by getting called on the function

// 2. Explain the parameters that it takes
// takes one or more arguments.
// > 1st argument is the thisArg, second is param to the function.
// > Can pass variable params by setting it equal to a variable and calling it with the arg

// 3. Code out an example of how bind() is used
this.distance = 1000;

const roadTrip1 = {
  distance: 2000,
  getDistance: function(unit, caption) {
    return this.distance + unit + caption;
  }
};

const roadTrip2 = {
  distance: 3000
};
// const getTripDistance = roadTrip1.getDistance;
// getTripDistance(); // > 1000
const getTrip1Distance = roadTrip1.getDistance.bind(roadTrip1, 'km');
getTrip1distance('left to go'); // > 2000km left to go
getTrip1distance('in total'); // > 2000km in total
const getTrip2Distance = roadTrip1.getDistance.bind(roadTrip2, 'miles');
getTrip2Distance('to go'); // > 3000miles to go
getTrip2Distance('until the end'); // > 3000miles until the end

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
var arr2 = new Array(50); // passing 1 arg as number sets length
var arr3 = new Array(1, 2, 'three', 4, 'five');
var arr4 = new Array([1, 2, 3, 4, 5]);

console.log('arr1: ', arr1); // 'arr1: []'
console.log('arr2: ', arr2); // 'arr2: [<50 empty items>]'
console.log('arr3: ', arr3); // 'arr3: [1, 2, 'three', 4, 'five']'
console.log('arr4: ', arr4); // 'arr1: [[1,2,3,4, 5]]'

// single arg(number) => empty array of length number
// single arg(non-number) => returns arr with that arg passed in
// multiple args => new array with all arguments passed as elements

// 26. Array IndexOf
// What will be logged out to the console?
// The indexOf() method returns the first index at which a given element can
// be found in the array/string, or -1 if it is not present.

const myArray = [5];
const anotherArray = myArray;

console.log([10, 20, 30, 40, 50].indexOf(30)); // 2
console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' })); // -1
console.log('hello world'.indexOf('o')); // 4
console.log([[1], [2], [3], [4]].indexOf([2])); // -1
console.log([[1], [2], [3], myArray].indexOf(myArray)); // 4
console.log([[1], [2], [3], myArray].indexOf(anotherArray)); // 4

// two objects are never the same
// objects are passed by reference, not by value.
// arrays are objects in javascript
// But two variables that reference the same object are equal

// 27. Equivalent Numbers with decimals
// What will be logged?
console.log(900.9 === 300.3 * 3); // false
// How can you circumvent?
// 1. number.toFixed(decimal points
Number((300.3 * 3).toFixed(2)); // fix to 2 decimals returns String
// 2. number.toPrecision(decimal points)
Number((300.3 * 3).toPrecision(12));
// 3. multiply out the decimal
300.3 * 10 * 3 / 10;

// 28. Objects & Strings
// What will be logged out to the console?
var string1 = 'Tampa';
var string2 = string1; // string2 = Tampa
string1 = 'Venice'; // strings passed by value
// does not affect string2

console.log(string2);
// Tampa

////////////////////////////////

var person1 = {
  name: 'Alex',
  age: 30
};

var person2 = person1; // objects passed by reference
// person1 & person2 reference the same object

person2.name = 'Kyle';

console.log(person1);
// {name: 'Kyle', age: 30 }

// 29. Strings & Arrays
// Key concept: Using array methods on strings/
// Can only use 'read-only' methods:  filter, forEach, map, some, every, etc.
// Cannot use: push, pop, slice, shift, reverse, etc. Change string

// Explain code
// Setting data1 = string
// Using Array filter method on string by using [].filter.call
// setting this context to data1 string
// Array.prototype.filter returns array

// What will be logged as data2
const data1 = 'Jordan Smith';

// Array.prototype.filter
// takes callback with current el and index
// return true or false value
// if true, elem placed in new array
// if false, not placed
const data2 = [].filter.call(data1, function(elem, index) {
  return index > 6;
});

console.log(data2);
// ['S', 'm', 'i', 't', 'h']
