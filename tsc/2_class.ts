class Vehicle {
  static num1 = 100;
  // constructor(){} //for 1 n 2
  // constructor(){ console.log(Vehicle.num1); } //for 3. See how Vehicle.num1 is used.
  constructor(){} //for 4

  // static vroom(){ console.log('vroom');}
  static vroom(){  //for 4
    console.log('vroom');
    console.log( Vehicle.num1);
    console.log('-------');
  }

  public publicvroom(){console.log('publicvroom');}
}


//1.
//1a. Vehicle.vroom();           //works
//1b. console.log(Vehicle.num1); // works

//2.
//2a. Vehicle.publicvroom(); //not possible until an instance is created
//2b. let x2 = new Vehicle();
      // x2.publicvroom(); //works.

//3. let x3 = new Vehicle; //works. constructor is auto-called n c.log is auto printed in this line
      //See how Vehicle.num1 is used.

//4. Vehicle.vroom(); //works. constructor is auto-called n c.log is auto printed in this line
