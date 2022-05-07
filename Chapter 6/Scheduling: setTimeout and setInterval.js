// Output every second
// importance: 5
// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// Make two variants of the solution.

// Using setInterval.
// Using nested setTimeout.




function printNumbers(from,to){
    let current = from

    let timerId = setInterval(function (){
        alert(current)
        if (current==to){
            clearInterval(timerId)
            current++
        }
    },1000)

}
printNumbers(5, 10);

function printNumbers(fromm, to){
    let current=from
    setTimeout(function count(){
        alert(current)
        if (current<to){
            setTimeout(count,1000)
        }
        current++
    },1000)
}