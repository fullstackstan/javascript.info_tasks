class Rabbit extends Object {
    constructor(name) {
        super(name)
      this.name = name;
    }
  }
  
  let rabbit = new Rabbit("Rab");
  
  alert( rabbit.hasOwnProperty('name') ); // Error