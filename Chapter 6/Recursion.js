// Sum all numbers till the given one
// importance: 5
// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// For instance:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Make 3 solution variants:

// Using a for loop.



// function sumTo(number){
//     if (number == 1){
//         return 1
//     }
//     let sum=0
//     for (let i=0;number>0;number--){
//         sum+=number
//     };
//     return sum
// }
// sumTo(4)

// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.

function sumTo(n){
        if (n==1){return 1}  //dont forget the base case!
        return  n + sumTo(n-1)
    }
sumTo(4)

// Using the arithmetic progression formula.




// ///////////////////////
// Calculate factorial
// importance: 4
// The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!

// We can write a definition of factorial like this:

// n! = n * (n - 1) * (n - 2) * ...*1
// Values of factorials for different n:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// The task is to write a function factorial(n) that calculates n! using recursive calls.

// alert( factorial(5) ); // 120
// P.S. Hint: n! can be written as n * (n-1)! For instance: 3! = 3*2! = 3*2*1! = 6

function factorial(n){
    if (n==1){
        return 1
    }
    return n*(factorial(n-1))
}
factorial(5)

/// wrote it without have to look!

