import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
@ViewChild('f') signupform:NgForm;

  constructor() { }

  ngOnInit() {
  }

  myOnSubmit(formobj){
    console.log('submitted');
    // console.log(formobj);
    console.log(this.signupform);
  }

}
