//https://stackoverflow.com/questions/39623722/angular-2-final-release-router-unit-test
//not much is my code.

import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { fakeAsync, async, inject, TestBed, getTestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {AddProductComponent} from '../add-product/add-product.component';
// import {AppModule} from '../app.module';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// platformBrowserDynamic().bootstrapModule(AppModule);

//<router-outlet></router-outlet>
@Component({
  template: `
  `
})
class RoutingComponent { }

@Component({
  template: ''
})
class DummyComponent { }

@Component({
  template: ''
})
class DummyComponent2 { }

fdescribe('component: RoutingComponentxxx', () => {
  let location, router;

//1. beforeEach ends.
  beforeEach(() => {
  //console.log(  AddProductComponent.toString() );

    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        {path: 'home', component: DummyComponent},
        {path: 'home2', component: DummyComponent2},
        // {path: 'home3', component: AddProductComponent}
        // , {path: 'add-product', component: AddProductComponent }
      ])],
      declarations: [RoutingComponent, DummyComponent, DummyComponent2],
      // providers:[AddProductComponent]
    });
  });

  //2. beforeEach ends.
    //inject imported Router & Location and create instances of them.
    //assign the instances to 2 new vars, location and router which we will reuse in our tests
  beforeEach(inject([Router, Location], (_router: Router, _location: Location) => {
    location = _location;
    router = _router;
  }));

  it('should go home', async(() => {
    let fixture = TestBed.createComponent(RoutingComponent);  //This can be any component?
    fixture.detectChanges();

    router.navigate(['/home']).then(() => {
      //console.log(location.path()); //'/home'
      expect(location.path()).toBe('/home');
      expect(location.path()).toContain('home');
    });
  })); //it ends


  it("should goto home2", ()=>{
    let fixture = TestBed.createComponent(DummyComponent); //This can be any component?
    fixture.detectChanges();
    router.navigate(['/home2']).then(()=>{
      expect(location.path()).toBe('/home2');
      expect(location.path()).toContain('home2');
    });
  }); //it ends


});



/*
https://stackoverflow.com/questions/39062930/what-is-difference-between-declarations-providers-and-import-in-ngmodule
- imports:  makes the exported declarations of other modules available in the current module
- declarations: are to make directives (including components and pipes) from the current module available to other directives in the current module. Selectors of directives, components or pipes are only matched against the HTML if they are declared or imported.
- providers: are to make services and values known to DI. They are added to the root scope and they are injected to other services or directives that have them as dependency.
A special case for providers are lazy loaded modules that get their own child injector. providers of a lazy loaded module are only provided to this lazy loaded module by default (not the whole application as it is with other modules).
*/
