import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/Models/task-model';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute , Params, Router} from '@angular/router/';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  TaskItem: any;
  Tasks:any;
  TaskId:any;

  constructor(private service:TaskService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
      
    this.service.GetAllTasks()
                  .subscribe(data => {
                    this.Tasks = data,err => console.log(err)
                  });

    this.route.params.subscribe((params:Params) =>{
      this.TaskId = params['id']
    });
    
    this.service.GetTaskById(this.TaskId)
    .subscribe(data => this.TaskItem = data ,err => console.log(err));
  }

  UpdateTask()
  {
    this.service.UpdateTask(this.TaskItem)
    .subscribe(_ =>this.router.navigateByUrl('view'),err => console.log(err));
    
  }

  Reset()
  {
    this.TaskItem.TaskName = '';
    this.TaskItem.Priority = 0;
    this.TaskItem.ParentId = '';
    this.TaskItem.StartDate = '';
    this.TaskItem.EndDate = '';
  }
}
