//eg.1
function add(x:number, y:number)
function add(x:number, y:number, z?:number)
function add(x:number, y:number, z?:number, a?:number)   //
function add(x:number, y:number, z?:number, a?:number){  //the prev. declaration is the 1st line of the definition
  let xxx = x + y;
  if (z) { xxx += z }
  if (a) { xxx += a }
  console.log(xxx);
  return (x + y);
}

add(10,10);
add(10,10, 10);
add(10,10, 10, 10);
