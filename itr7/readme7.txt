this.signupform.setValue({ })
this.signupform.form.patchValue({ })

eg. 
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

  }

Now, when u click submit, name will be set to default name i.e. Batman
