// 1. Implement the tripleAdd function
tripleAdd(10)(20)(30); // returns 60

// 2. What is an IIFE and why are they used?

// 3. Code out an example IIFE that functions properly

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

// PT 2 - How can you fix the function?

// 5. What is a closure?
// Pt 2 - Code out a sample closure that functions as intended.

// 6. What is the 'this' keyword? How is it used?

// 7. Describe what variable and function hoisting is and how it works

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

// 9. What is the difference between the comparison operators == and === ?

// 10. What will be logged out to the console when logNumber is ran?
var num = 50;

function logNumber() {
  console.log(num);
  var num = 100;
}

logNumber();

// 11. What is 'use strict' and what are benefits of using it?

// 12. Curry the function getProduct
function getProduct(num1, num2) {
  return num1 * num2;
}

// 13. Write a function that keeps track of how many times it was called
// and returns that number
// All functionality should be inside of the function
function myFunc() {
  // fill in here
}
console.log(myFunc()); // returns 1
console.log(myFunc()); // returns 2

// 14. Logging X and Y
// What will the value of X and Y be when logged?
(function() {
  var x = (y = 200);
})();
console.log('y: ' + y);
console.log('x: ' + x);

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

// 18. Singly or Double invoked
// Create a function getTotal that can be singly or double invoked
// getTotal(10,20) > 30
// getTotal(10)(20) > 30

// 19. Define JSON
// 1. Describe what JSON format is.
// 2. Delete the data types not permitted in JSON.
// 3. Replace placeholder-text with the corresponding data type,
//    properly formatted as JSON.

// const myJsonObj = {
//   myString: [some string],
//   myNumber: [some number],
//   myNull: [null],
//   myBoolean: [false],
//   myUndefined: [undefined],
//   myArray: [some array],
//   myFunction: [some function],
//   myObject: [some object]
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

// 21. 3 different ways to create an object

// 22. Type of data types
// What will be logged to the console?
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof []);

// 23. The Bind Method
// Describe the bind method
// 1. Describe how it works
// 2. Explain the parameters that it takes
// 3. Code out an example of how bind() is used

// 24. Two objects
// What will be logged to the console?
const user1 = {
  name: 'Jane',
  age: 23
};

const user2 = {
  name: 'Jane',
  age: 23
};

console.log(user1 == user2);
console.log(user1 === user2);

// 25. Array Constructor
// What will be logged out to the console?
var arr1 = [];
var arr2 = new Array(50);
var arr3 = new Array(1, 2, 'three', 4, 'five');
var arr4 = new Array([1, 2, 3, 4, 5]);

console.log('arr1: ', arr1);
console.log('arr2: ', arr2);
console.log('arr3: ', arr3);
console.log('arr4: ', arr4);

// 26. Array IndexOf
// What will be logged out to the console?

console.log([10, 20, 30, 40, 50].indexOf(30));
console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' }));
console.log('hello world'.indexOf('o'));
console.log([[1], [2], [3], [4]].indexOf([2]));

// 27. Equivalent Numbers
// What will be logged?
// How can you circumvent?
console.log(900.9 === 300.3 * 3);

// 28. Objects & Strings
// What will be logged out to the console?
var string1 = 'Tampa';
var string2 = string1;
string1 = 'Venice';

console.log(string2);

////////////////////////////////

var person1 = {
  name: 'Alex',
  age: 30
};

var person2 = person1;

person2.name = 'Kyle';

console.log(person1);
