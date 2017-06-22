import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'radd-product',
  templateUrl: './radd-product.component.html',
  styleUrls: ['./radd-product.component.css']
})

export class RaddProductComponent implements OnInit {
  constructor() { }
  ngOnInit() { }

  signupform = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email:new FormControl(null, [Validators.required, Validators.email])  ,
    address: new FormControl()
  });

 // console.log(this.signupform.value.firstname);
  myOnSubmit(){
    console.log(this.signupform);
  }

} //RaddProductComponent ends
