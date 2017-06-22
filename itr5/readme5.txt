eg.1.

error msgs using 
    ngIf + BS help-block + #x = (ngModel)
<input class="form-control" type="text" placeholder="enter email"
        ngModel name="uemail" required email
        #x="ngModel"    <<<========
        ><br>
        <div *ngIf="!x.valid">     <<<======== all other ng-classes like .invalid, .dirty can be accessed as well
          <span class="help-block">Email is not valid</span>
        </div>

eg.2. 
Right now the select does not have any default value. 
To set a default value to it, we will have to use: ngModel + property binding.

.html
<select class="form-control select_reduce_width"
        name="ugender" id="ugender"
        [ngModel] = default_gender   <<<==========
        >
          <option value="nothing"></option>
          <option value="umale">Male</option>
          <option value="ufemale">Female</option>
        </select>
        
 .ts
export class AddProductComponent implements OnInit {
 @ViewChild('f') signupform:NgForm;
 default_gender = 'umale'; <<<====== umale is the key for the option we want as default VIMP !!!!
