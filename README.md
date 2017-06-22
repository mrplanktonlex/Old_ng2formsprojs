# ng2formsprojs

ng new formsproj01
npm install --save bootstrap
ng g c add_product

.angular-cli.json
    "styles": [
            "styles.css",
            "node_modules/bootstrap/dist/css/bootstrap.min.css"
          ]
          
 ng serve (else bootstrap changes wont be picked up)        


---

Summary:- 

FormsModule->
	<form (ngSubmit) = "myOnSubmit(f)" #f=NgForm>
		NgForm + ngForm (.html)
			- @ViewChild('f') signupform:NgForm (so that we can use this.signupform everywhere)
				this.signupform.setValue({})
				this.signupform.form.patchValue({})
				this.signupform.reset() -OR- this.signupform.reset({}) (ithink)
			- NgModelGroup="somevar" #somevar=NgModelGroup (to group elements)
				--> error msgs using <span *ngIf = "somevar.touched && !somevar.valid" > some error </span>
			- #x = (ngModel) 
                --> x.dirty, x.touched, etc. for error msgs on that html element


---          
