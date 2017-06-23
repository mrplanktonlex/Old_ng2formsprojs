//eg.3.
class Addition{
  v1:number; v2:number; v3:number; v4:number;
  constructor(v1, v2)
  constructor(v1, v2, v3?)
  constructor(v1, v2, v3?, v4?)
  constructor(v1, v2, v3?, v4?){
       let xxx = v1 + v2;
       if (v3) { xxx += v3 }
       if (v4) { xxx += v4 }
         console.log(xxx);
  }
} //Addition class ends

// let o1 = new Addition; //params r required. WONT WORK
let o1 = new Addition(10,10); //params r required.
let o2 = new Addition(10,10, 10); //params r required.
let o3 = new Addition(10,10, 10, 10); //params r required.
