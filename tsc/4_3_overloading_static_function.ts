//eg.3.
class Addition{
  v1:number; v2:number; v3:number; v4:number;
  constructor(){}

  static add(v1, v2)
  static add(v1, v2, v3?)
  static add(v1, v2, v3?, v4?)
  static add(v1, v2, v3?, v4?){
       let xxx = v1 + v2;
       if (v3) { xxx += v3 }
       if (v4) { xxx += v4 }
         console.log(xxx);
  }
} //Addition class ends

// NOTE: no instances are created !!!
Addition.add(10,10); //params r required.
Addition.add(10,10, 10); //params r required.
Addition.add(10,10, 10, 10); //params r required.
