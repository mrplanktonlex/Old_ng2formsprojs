class vehicle{
  id:number; city:string;
  static ParentCompany = 'GM';
  constructor(x, y){
    this.id = x || 100;
    this.city = y || 'Mumbai';
  }
}

class maruti extends vehicle{
  model:string; type:string;

  // constructor(id, city, xmodel, xtype){ //works
  constructor(id:number, city:string, xmodel, xtype){ //works
    super(id, city);
    this.model = xmodel;
    this.type = xtype;
  }
}

let v1 = new vehicle(1, 'gotham');
console.log(v1);

let m1 = new maruti(2, 'Pune', 'WagonR', 'MUV');
console.log('----');
console.log(m1);
