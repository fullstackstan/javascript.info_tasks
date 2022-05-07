function makeCounter() {
    // instead of:
    // let count = 0
  
    function counter() {
      return counter.count++;
    };
  
    counter.count = 0;
  
    return counter;
  }
   