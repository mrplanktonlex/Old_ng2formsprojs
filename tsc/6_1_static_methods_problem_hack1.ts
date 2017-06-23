class vehicle{
  constructor(private xdate = new Date()){}

  vroom(){  //this is an instance method.
      console.log(this.xdate);
      console.log(typeof(this)); //object i.e. class instance
  }
  static staticvroom(){
    console.log(typeof(this)); //function i.e. class. different from this in vroom()
// console.log(this.xdate); //not possible.  //Error: Property 'date' does not exist on type 'typeof vehicle'.
//VIMP: You cannot access it.
// Since "this" inside static members refers to the class itself instead of the class instance.
//Static methods can not access any non-static parts(xdate is non-static) of that class' instances by design.
//https://stackoverflow.com/questions/21118952/javascript-create-and-destroy-class-instance-through-class-method 
//(how to set references to null and delete eventually)
    //UglyHack# 1. this works. But doesnt seem advisable.
    // let x = new vehicle;
    // console.log(x.xdate); -OR- u can shorten it like this:
    console.log('-------');
    console.log((new vehicle).xdate) ; //NOTE: DATE HAS CHANGED here slightly.
  } //staticvroom ends
} //vehicle ends

let v1 = new vehicle;
v1.vroom(); //works

vehicle.staticvroom(); //undefined
//works with UglyHack#1





/*
D:\js\Ang2\proj2\myforms\tsc_cRAP>tsc 7_abstract_classes_n_methods.ts
7_abstract_classes_n_methods.ts(18,42): error TS2339: Property 'xdate' does not exist on type 'typeof vehicle'.

D:\js\Ang2\proj2\myforms\tsc_cRAP>node 7_abstract_classes_n_methods.js
2017-06-23T09:17:41.365Z
undefined

*/
