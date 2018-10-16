import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AddComponent } from 'src/app/UI/add/add.component';
import { UpdateComponent } from 'src/app/UI/update/update.component';
import { ViewComponent } from 'src/app/UI/view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule} from '@angular/router/testing';
import { FormsModule } from  '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core'
import { TaskSearchPipe } from 'src/app/Pipe/filter.pipe';

@Pipe({
  name: 'taskSearch'
})
class MockPipe implements PipeTransform{
  transform(items: any[]){

  }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AddComponent,
        UpdateComponent,
        ViewComponent,
        TaskSearchPipe
      ],
      imports: [RouterTestingModule, FormsModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Task Manager'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Task Manager');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Task Manager');
  }));
});
