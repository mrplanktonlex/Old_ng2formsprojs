import {RaddProductComponent} from './radd-product.component';
import {Injectable, OnInit} from '@angular/core';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';

fdescribe("Main suite#1.1", ()=>{
  let cricform: FormGroup ; // whenever it gets created, it should be of type FormGroup
  let xform = new FormBuilder();

  beforeEach(()=>{
  });

  it("xxx11", ()=>{
    expect(true).toBe(true);
  });
  it("xxx12", ()=>{
    expect(xform.group).toBeTruthy();
  });

    describe("Sub suite#1.2", ()=>{
      cricform = xform.group({
        cric_name: 'sachin',
        cric_city: [], //'' or [] both work fine
        cric_email: ['', [Validators.required, Validators.email]]
      });
      it("1.2.1", ()=>{
        // console.log(cricform.contains('cric_name').valueOf.name); //doesnt work. skip
        cricform.patchValue({'cric_name': 'anil kumble'});
        expect(cricform.value.cric_name).toContain('kumble');
      });
      it("1.2.2", ()=>{
        cricform.patchValue({'cric_name': 'kohli'});
        expect(cricform.value.cric_name).toEqual('kohli');
      });
      it("1.2.3", ()=>{
        cricform.patchValue({'cric_email': 'joker'});
        expect(cricform.controls.cric_email.errors).toBeTruthy(); //invalid email will make error = true
      });
      it("1.2.4", ()=>{
        cricform.patchValue({'cric_email': 'sherlock@bakerstreet'});
        expect(cricform.controls.cric_email.errors).toBeFalsy(); //correct email will make error = false
      });
    }); //suite#1.2 ends 

}); //suite #1.1 ends


// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { RaddProductComponent } from './radd-product.component';
//
// describe('RaddProductComponent', () => {
//   let component: RaddProductComponent;
//   let fixture: ComponentFixture<RaddProductComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ RaddProductComponent ]
//     })
//     .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(RaddProductComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should be created', () => {
//     expect(component).toBeTruthy();
//   });
// });
