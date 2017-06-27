//1. ///<reference path='../../../node_modules/immutable/dist/Immutable.d.ts'/> //NOT reqd.

//2.
// import * as Immutable from '../../../node_modules/immutable/dist/Immutable.d'; //NOT reqd.
//import immutable = require('immutable'); //works. Note:= DONT use initial caps like this: Immutable. DONT use.
import immutable = require('immutable');
//refer immutable.Map, immutable.List, immutable.Set, etc.

//1. Immutable.Map()
// const map1 = immutable.Map({a:1, b:2});
const map1 = immutable.Map({a:1, b:2});
// console.log(map1);
const map2 = map1.set('b', 50);

fdescribe("aaaa1", ()=>{
      let v1 = map1.get('b');
  it("x1.1", ()=>{    expect(v1).toBeTruthy();     });
  it("x1.2", ()=>{    expect(v1).toBe(2);     });

//https://facebook.github.io/immutable-js/docs/#/List
  it("emptyList", ()=>{
     let emptyList = immutable.List();
    expect(immutable.List.isList(emptyList)).toBe(true);
  });

});
