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
