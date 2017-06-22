eg.1. using local refs.

.html
<form (ngSubmit) = "myOnSubmit(f)" #f>

.ts
  myOnSubmit(formobj){
    console.log('submitted');
    console.log(formobj); //formobj belongs to HTMLFormElement class
  }

eg.2. the formobj using simply #f is not giving much details.
So, for that we will have to use NgForm .
.ts
import {NgForm} from '@angular/forms';
.html
<form (ngSubmit) = "myOnSubmit()" #f="ngForm"> 
NOTE:= in html it is ngForm. plz note this. VIMP. in  html it should not be NgForm or ngform or something else, else it will croak

Now, u have a more complete look at the formobj using NgForm + ngForm

eg.3. 
use eg.2. above n see that form->controls is empty and none of our controls are coming there.
So, lets add ngModel attr to all our controls.

and now u can see uname, uemail, ugender come up in the form-obj under 
form->controls
form->controls->_value  will show the values of the controls.

Also, notice that form is of FormGroup and elements of FormControl class (similar to twitter bootstrap class names).
We will use those class in reactive forms soon.
