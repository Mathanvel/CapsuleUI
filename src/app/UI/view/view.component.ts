import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/Models/task-model';
import { TaskService } from 'src/app/task.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  Tasks: any;
  nameSearch: string;
  parentTaskSearch:string;
  priorityFromSearch:Number;
  priorityToSearch:Number;
  startDateSearch:string;
  endDateSearch:string;

  constructor(private service:TaskService, private router:Router) { 
    this.service.GetAllTasks()
                  .subscribe(data => {
                    this.Tasks = data
                    console.log(this.Tasks) ,err => console.log(err)
                  });
  }

  ngOnInit() {  }
  
   EndTask(taskId:Number)
   {
     this.service.EndTask(taskId)
     .subscribe(_ =>this.service.GetAllTasks()
     .subscribe(data => {
       this.Tasks = data
        ,err => console.log(err)
     },err => console.log(err)));
   }

   DisableButton(endTask:string)
   {
     if(endTask == 'Y')
     {
       return true;
     }
     return false;
   }

}
