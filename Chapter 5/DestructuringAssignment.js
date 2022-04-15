//We have an object:

let user = {
  name: "John",
  years: 30
};
/*Write the destructuring assignment that reads:

name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false, if no such property)
Here’s an example of the values after your assignment:
*/
 user = { name: "John", years: 30 };

// your code to the left side:
let {name, years, isAdmin = false} = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false


/*
The maximal salary
importance: 5
There is a salaries object:
*/
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
/*
Create the function topSalary(salaries) that returns the name of the top-paid person.

If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.

// */
// function topSalary(salaries){
//    let salariesArray = Object.values(salaries)
//    console.log(salariesArray)
//    let max = salariesArray.reduce(function(a, b) {
//     return Math.max(a, b);
// }, -Infinity);
//     console.log(max)
//    }

//    topSalary(salaries)
function topSalary(salaries){
    let maxSalary = 0
    let maxName = null

    for (let [name, salary] of Object.entries(salaries)){
        if (salary>maxSalary){
            maxSalary=salary
            maxName=name
        }
    } return maxName
}

topSalary(salaries)