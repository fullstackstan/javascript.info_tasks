// What’s the output of the code below?

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

//the alert is going show 1. once a promise is settled, its settled. 
///////////////////////////////////////////////

// The built-in function setTimeout uses callbacks. Create a promise-based alternative.

// The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

function delay(ms) {
  return new Promise(function(resolve,reject){
    setTimeout(resolve,ms)
  })
}

delay(3000).then(() => alert('runs after 3 seconds'));