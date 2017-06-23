// import * as moment from './node_modules/moment/moment';
class vehicle{
  private static _instance: vehicle = new vehicle(); //access this as vehicle._instance
  //DONT write this as _instance or this._instance, thats just wrong !!!
  //its private so that instance of class does not have it. see 1_class.ts example.

  vroom(){
    console.log(vehicle._instance.xdate);
    console.log(this.xdate);
    console.log(this === this); //true
    console.log(this === vehicle._instance); //false
  }

  constructor(private xdate = new Date()){
    //logic for singleton.
    //https://stackoverflow.com/questions/30174078/how-to-define-singleton-in-typescript/31154320#31154320
        // if(vehicle._instance){
        //   // throw new Error("already exists");
        // }
        // vehicle._instance = this;
    //if u use this,     console.log(this === vehicle._instance); //true
  }

    static staticvroom(){
    console.log('-------');
    console.log(vehicle._instance.xdate); //MAIN GOAL, it should work here// works
      // console.log((new vehicle).xdate) ; //NOTE: DATE HAS CHANGED here slightly.
    } //staticvroom ends
} //vehicle ends

let v1 = new vehicle;
v1.vroom();

vehicle.staticvroom();


/*
D:\js\Ang2\proj2\myforms\tsc_cRAP>node 6_1_static_methods_problem_singleton_hack2.js
2017-06-23T12:20:54.876Z
2017-06-23T12:20:54.876Z
true
false
-------
2017-06-23T12:20:54.876Z

*/
