error msgs using ngIf + BS help-block + #x = (ngModel)

<input class="form-control" type="text" placeholder="enter email"
        ngModel name="uemail" required email
        #x="ngModel"    <<<========
        ><br>
        <div *ngIf="!x.valid">     <<<======== all other ng-classes like .invalid, .dirty can be accessed as well
          <span class="help-block">Email is not valid</span>
        </div>
