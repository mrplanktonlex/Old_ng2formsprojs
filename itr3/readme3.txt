eg.1. 
lets use @ViewChild() decorator to access our formobj.
This is just another way to do things. We are using this decorator so that:-
- we can give the form a name eg. signupform
- we can then use this new name to refere the formobj everywhere in our code.
eg. this.signupform

.html
<form (ngSubmit) = "myOnSubmit(f)" #f="ngForm">

.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
...
export class AddProductComponent implements OnInit {
@ViewChild('f') signupform:NgForm; //notice the fcking '' single quotes. VIMP.
  ...
  myOnSubmit(formobj){
    console.log('submitted');
    // console.log(formobj);
    console.log(this.signupform); //same form object is now accessible using @ViewChild
  }
}
