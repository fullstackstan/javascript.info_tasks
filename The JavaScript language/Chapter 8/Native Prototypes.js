// function f() {
//     alert("Hello!");
//   }
  
//   Function.prototype.defer = function(ms){
//       setTimeout(this,ms)
//   }
//   f.defer(1000); // shows "Hello!" after 1 second
  

  function f(a, b) {
    alert( a + b );
  }

  Function.prototype.defer = function(ms){
      let f = this
      return function(...args) {
          setTimeout(()=>f.apply(this, args), ms)

      }
  }
  
  f.defer(1000)(1, 2); // shows 3 after 1 second