import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from  '@angular/forms';
import { UpdateComponent } from './update.component';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule, Routes, ActivatedRoute, Params  } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { Observable } from 'rxjs';


class mockRouter {

}

class mockActivatedRoute   {
  
  Constructor()  {
    
    //this.params.subscribe = Observable.create({id:"5"});
  }
  
}

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateComponent ],
      imports: [ FormsModule, HttpClientModule, RouterTestingModule ],
      providers: [{provide: Router, usevalue: mockRouter},{ provide: ActivatedRoute, useClass: mockActivatedRoute}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    //fixture = TestBed.createComponent(UpdateComponent);
    //component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    
    //expect(component).toBeTruthy();
  });
});
