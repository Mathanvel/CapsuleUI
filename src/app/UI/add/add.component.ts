import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/Models/task-model';
import { FormsModule } from  '@angular/forms';
import { TaskService } from 'src/app/task.service';
import { Router } from '@angular/router/';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  TaskItem: TaskModel;
  Tasks:any;
  constructor(private service:TaskService, private router:Router) {
    this.TaskItem = new TaskModel();
    this.service.GetAllTasks()
                  .subscribe(data => {
                    console.log(data)
                    this.Tasks = data,err => console.log(err)
                  });
   }

  ngOnInit() {  }

  AddTask()
  {
    this.service.AddTask(this.TaskItem)
    .subscribe(_ =>this.router.navigateByUrl('view'),err => console.log(err));;
  }

  Reset()
  {
    this.TaskItem = new TaskModel();
  }  
}
