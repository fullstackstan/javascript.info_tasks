class CoffeeMachine {

    waterAmount = 0;
  
    get waterAmount() {
      return this.#waterAmount;
    }
  
    set waterAmount(value) {
      if (value < 0) value = 0;
      this.#waterAmount = value;
    }
  }
  
  let machine = new CoffeeMachine();
  
  machine.waterAmount = 100;
  alert(machine.waterAmount()); // Error

  class MegaCoffeeMachine extends CoffeeMachine {
    method() {
      alert( waterAmount() ); // Error: can only access from CoffeeMachine
    }
  }