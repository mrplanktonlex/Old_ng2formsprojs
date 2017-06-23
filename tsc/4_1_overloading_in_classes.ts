//eg.2.
class Addition{
  constructor(){}

  //NOTE: the function keyword SHOULD NOT Be there.
  add(x:number, y:number)             //; may or maynot be used. its optional
  add(x:number, y:number, z?:number)  //; may or maynot be used. its optional
  add(x:number, y:number, z?:number, a?:number)   //; may or maynot be used. its optional
  add(x:number, y:number, z?:number, a?:number){  //the prev. declaration is the 1st line of the definition
    let xxx = x + y;
    if (z) { xxx += z }
    if (a) { xxx += a }
    console.log(xxx);
    return (x + y);
  }

}

let c1 = new Addition;
c1.add(10, 10);
c1.add(10, 10, 10);
c1.add(10, 10, 10, 10); //all calls work.
