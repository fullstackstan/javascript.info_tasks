// Let’s try 5 array operations.

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.

let styles = ['Jazz','Blues']
styles.push('Rock-N-Roll')
styles[Math.floor(styles.length/2)]='Classics'

console.log(styles)
let shifted = styles.shift()
console.log(shifted)

console.log(styles)
styles.unshift('Rap', 'Reggae')
console.log(styles)


///////////////////

// Sum input numbers
// importance: 4
// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

function sumInput(){
    let array = []
    let usesInput
    while (true){
        userInput = prompt('please enter a value','Your Value')
        userInput ?? 'string'
    }
};