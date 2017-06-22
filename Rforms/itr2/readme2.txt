using FormBuilder

itr1 has too many things to type. 
ng provides us with form builder which makes us type lesss code.

.ts
import {ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
...
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
  
.html
<div class="form-group">
  <form [formGroup] = "cricform" (ngSubmit)="myCricSubmit()">
    <label>Cricketer Name:</label>
    <input type="text" formControlName="cric_name" class="form-control">
    <label>Cricketer City:</label>
    <input type="text" formControlName="cric_city" class="form-control">
    <label>Cricketer Email:</label>
    <input type="text" formControlName="cric_email" class="form-control">
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>

Even if u use FormBuilder, u still need:
- [formGroup] = "cricform" to bind html with model
- (ngSubmit)="myCricSubmit()" for submitting the form
- formControlName="cric_city" for naming the sub-elements
