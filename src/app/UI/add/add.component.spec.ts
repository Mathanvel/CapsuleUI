import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from  '@angular/forms';
import { AddComponent } from './add.component';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule, Routes  } from "@angular/router";

class mockRouter {

}

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientModule ],
      declarations: [ AddComponent ],
      providers: [{provide: Router, usevalue: mockRouter}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
