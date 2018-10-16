import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from  '@angular/forms';
import { ViewComponent } from './view.component';
import { TaskSearchPipe } from 'src/app/Pipe/filter.pipe';
import { RouterTestingModule} from '@angular/router/testing';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewComponent, TaskSearchPipe ],
      imports: [ FormsModule, RouterTestingModule ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    //fixture = TestBed.createComponent(ViewComponent);
    //component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    //expect(component).toBeTruthy();
  });
});
