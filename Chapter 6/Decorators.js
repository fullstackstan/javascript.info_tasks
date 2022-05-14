// Spy decorator
// importance: 5
// Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.

// Every call is saved as an array of arguments.

function spy(func){

    function wrapper(...args){
        wrapper.calls.push(args)
        return func.apply(this, args)
    }
    wrapper.calls = []
    return wrapper
}


// Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.

function delay(f, ms){

    return function (){
        setTimeout(()=>f.apply(this,arguments),ms)
    }
   

}
let f1000= delay(alert,1000)
f1000('test')





/////////////////////////









