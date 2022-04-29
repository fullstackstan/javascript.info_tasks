// Does a function pickup latest changes?
// importance: 5
// The function sayHi uses an external variable name. When the function runs, which value is it going to use?

// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi(); // what will it show: "John" or "Pete"?
// // Such situations are common both in browser and server-side development. A function may be scheduled to execute later than it is created, for instance after a user action or a network request.

// // So, the question is: does it pick up the latest changes?
// The answer is: Pete.

// A function gets outer variables as they are now, it uses the most recent values.

// Old variable values are not saved anywhere. When a function wants a variable, it takes the current value from its own Lexical Environment or the outer one.


// Which variables are available?
// importance: 5
// The function makeWorker below makes another function and returns it. That new function can be called from somewhere else.

// Will it have access to the outer variables from its creation place, or the invocation place, or both?

function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show?
// Which value it will show? “Pete” or “John”?









// Are counters independent?
// importance: 5
// Here we make two counters: counter and counter2 using the same makeCounter function.

// Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?
alert( counter2() ); // ?
// solution





// Write function sum that works like this: sum(a)(b) = a+b.

// Yes, exactly this way, using double parentheses (not a mistype).

// For instance:

// sum(1)(2) = 3
//  = 4

function sum(a){

    return function(b){
       return a+b
    }
}
sum(5)(-1)