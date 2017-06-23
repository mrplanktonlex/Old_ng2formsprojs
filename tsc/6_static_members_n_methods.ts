//eg.6.
class Addition{
  static pi = 3.14;
  v1:number; v2:number;
  constructor(){}

  static add(v1, v2){
       let xxx = v1 + v2 + Addition.pi;
       console.log(xxx);
  }
} //Addition class ends

Addition.add(10,10); //works. 23.14
