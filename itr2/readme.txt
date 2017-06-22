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

