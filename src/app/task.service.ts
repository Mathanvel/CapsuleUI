import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TaskModel } from 'src/Models/task-model';
import { RequestMethod } from '@angular/http/src/enums';
import { RequestOptions } from '@angular/http';
import { RequestOptionsArgs } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  GetAllTasks()
  {
    return this.http.get('http://localhost/TaskManager.API/GetAllTasks')
  }
  
  AddTask(task:TaskModel) : Observable<any>
  {
      var body = JSON.stringify(task);
      var httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
      return this.http.post('http://localhost/TaskManager.API/AddTask',task,httpOptions);
  }

  UpdateTask(task:TaskModel) : Observable<any>
  {
      var body = JSON.stringify(task);
      var httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
      return this.http.put('http://localhost/TaskManager.API/UpdateTask',task,httpOptions);
  }

  GetTaskById(taskId:Number)
  {
    return this.http.get('http://localhost/TaskManager.API/GetTaskById?taskId=' + taskId);
  }

  EndTask(taskId:Number) : Observable<any>
  {
    var httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.delete('http://localhost/TaskManager.API/EndTask?taskId=' + taskId,httpOptions);
  }
}
