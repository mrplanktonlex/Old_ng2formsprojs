import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'radd-product',
  templateUrl: './radd-product.component.html',
  styleUrls: ['./radd-product.component.css']
})

export class RaddProductComponent implements OnInit {

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

//form2: code for cricketers is below
  constructor(private xform: FormBuilder) { }
  cricform: FormGroup; //declaration
  ngOnInit() {
    this.cricform = this.xform.group({
      cric_name: '',
      cric_city: [], //'' or [] both work fine
      cric_email: ['', [Validators.required, Validators.email]]
    });
  }
  myCricSubmit(){
    console.log(this.cricform);
  }

} //RaddProductComponent ends
