class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name) {
        super(name)
      
      this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
  alert(rabbit.name);

  ///////anki

  function Calculator(){
        this.read = function(){
            this.a=+prompt('a value',0)
            this.b=+prompt('b?',0)
        }
  }