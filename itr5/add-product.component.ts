import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
@ViewChild('f') signupform:NgForm;
default_gender = 'umale';

  constructor() { }
  ngOnInit() {}

  myOnSubmit(formobj){
    console.log(this.signupform);
  }

} //AddProductComponent ends
