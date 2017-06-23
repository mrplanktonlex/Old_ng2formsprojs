//eg. NOT COMPATIBLE
/*
When comparing types(/objects) that have private and protected members, we treat these types differently.
For two types to be considered compatible,
  if one of them has a private member,
  then the other must have a private member that ORIGINATED in the same declaration.
  note: ORIGIN has to be same.
The same applies to protected members.
Let’s look at an example to better see how this plays out in practice:
*/

class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); } //see how the subclass is using the constructor of parent
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
//animal = employee; // Error: 'Animal' and 'Employee' are not compatible. ORIGIN is not same
console.log(rhino);
