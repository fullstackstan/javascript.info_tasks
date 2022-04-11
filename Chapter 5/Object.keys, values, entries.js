// Sum the properties
// importance: 5
// There is a salaries object with arbitrary number of salaries.

// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

// If salaries is empty, then the result must be 0.

// For instance:

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  function sumSalaries(salaries){
      let sum=0
      for (let value of Object.values(salaries)){
          sum+=value
          console.log(value)
      }  return sum
  }

  alert( sumSalaries(salaries) ); // 650





  ///////////

//   Write a function count(obj) that returns the number of properties in the object:

let user = {
  name: 'John',
  age: 30
};
let count

function count(obj){
    for(let counter in Object.keys(user)){
        
    }return counter+1
}

alert( count(user) ); // 2