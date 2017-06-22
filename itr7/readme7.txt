this.signupform.setValue({ })
this.signupform.form.patchValue({ })
this.signupform.value.<htmlcontrlname>

eg. 1.
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


eg.2.

  console.log(this.signupform.value.ugender,
                this.signupform.value.userData.uname,
                this.signupform.value.userData.uemail
              );
