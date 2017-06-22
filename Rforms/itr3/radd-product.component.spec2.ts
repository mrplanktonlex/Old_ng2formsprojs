import {RaddProductComponent} from './radd-product.component';
import {Injectable, OnInit} from '@angular/core';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';

fdescribe("Main suite#1.1", ()=>{
  let playerform: FormGroup ; // whenever it gets created, it should be of type FormGroup
  let formbuilderObj = new FormBuilder();

  beforeEach(()=>{
  });

  it("xxx11", ()=>{
    expect(true).toBe(true);
  });
  it("xxx12", ()=>{
    expect(formbuilderObj.group).toBeTruthy();
  });

    describe("Sub suite#1.2", ()=>{
      playerform = formbuilderObj.group({
        player_name: 'federer',
        player_city: [], //'' or [] both work fine
        player_email: ['', [Validators.required, Validators.email]]
      });

      //VIMP . check these out !!!
      it("1.2.0", ()=>{
        let status = playerform instanceof FormGroup ? true : false; //VIMP Check!!!
        expect(status).toBe(true);
      });

      it("1.2.1", ()=>{
        // console.log(playerform.contains('player_name').valueOf.name); //doesnt work. skip
        playerform.patchValue({'player_name': 'rafael nadal'});
        expect(playerform.value.player_name).toContain('nadal');
      });
      it("1.2.2", ()=>{
        playerform.patchValue({'player_name': 'djokovic'});
        expect(playerform.value.player_name).toEqual('djokovic');
      });

      //VIMP . check these out !!!
      // use *.controls.ctrlname.* and *.value.ctrlname.* on instances of FormGroup
      it("1.2.3", ()=>{
        playerform.patchValue({'player_email': 'joker'});
        expect(playerform.controls.player_email.errors).toBeTruthy(); //invalid email will make error = true
      });
      it("1.2.4", ()=>{
        playerform.patchValue({'player_email': 'sherlock@bakerstreet'});
        expect(playerform.controls.player_email.errors).toBeFalsy(); //correct email will make error = false
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
