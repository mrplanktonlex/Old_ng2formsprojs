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
    // this.signupform.setValue({ })
      //set all values on the form. rarely required.
      // uses the name of the elements in the html . skipped for now.

   //this.signupform.form.patchValue({})
    //used to keep default values on only certain elements. this is preferred.
    this.signupform.form.patchValue({
      userData:{
        uname: 'Batman'
      }
    });

    console.log(this.signupform.value.uemail );

  }

} //AddProductComponent ends
