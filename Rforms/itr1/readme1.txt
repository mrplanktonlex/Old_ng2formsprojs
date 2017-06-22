app.module.ts
- import ReactiveFormsModule
- Add ReactiveFormsModule to imports[]

import {ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
...
create a new var for the form eg. signupform
	signupform = new FormGroup({
		firstname: new FormControl(),
		lastname: new FormControl(),
		email:new FormControl(null, [Validators.required, Validators.email])  ,
		address: new FormControl()
	  });
	  
	  
.html 
- add [formGroup] = "signupform" to <form to link it with model code
- in all sub-elements, name is replaced with formControlName eg. formControlName="" 

<div class="form-group">

<!--  no local refs used -->
<form [formGroup] = "signupform" (ngSubmit) = myOnSubmit()>
  <label>Firstname:</label>
  <input type="text" formControlName="firstname" class="form-control"><br>
  <label>Lastname:</label>
  <input type="text" formControlName="lastname" class="form-control"><br>
  <label>Email:</label>
  <input type="text" formControlName="email" class="form-control"><br>
  <label>Address:</label>
  <input type="text" formControlName="address" class="form-control">
  <button type="submit">Submit</button>
</form>
</div>
	  
