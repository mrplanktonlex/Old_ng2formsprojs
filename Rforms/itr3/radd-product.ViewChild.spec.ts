import{ ViewChild, ElementRef} from '@angular/core';
import {NgForm } from '@angular/forms';


fdescribe("yyy", ()=>{
  let form = window.document.createElement('form');
  // console.log(form); //works  
  form.setAttribute("#f", ""); //craps out . cant be unit tested as this value
  //but we should be integration-test it using TestBed later. 
  //Fck. nuke this. n move on

  let el = new ElementRef({});
  //console.log(el);

  it("yyy1", ()=>{
    expect(true).toBe(true);
  });
});
