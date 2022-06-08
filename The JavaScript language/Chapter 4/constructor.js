function Calculator (){
    this.read = function (){
        this.a = +prompt('val a', 'val a')
        this.b = +prompt('val b', 'val b')
    };
    this.sum = function(){
        return this.a+this.b
    };
    this.mul = function(){
        return this.a*this.b
    };
}





























// function Calculator (){
//     this.value1 = value1;
//     this.value2 = value2;
//     this.read = function(){
//         this.value1 = prompt('please enter val1', 'val1');
//         this.value2 = prompt('val2', 'val2')
//     };
//     this.mul = function(){};
//     this.sum = function(){};
// }

// let calculator = new Calculator();
// calculator.read();