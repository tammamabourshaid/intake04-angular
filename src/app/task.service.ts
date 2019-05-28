import { Task } from 'src/task';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = 'http://localhost:3000/tasks';
  private headers = { 'Content-Type': 'application/json' };

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(this.url);
  }
  addTask(task) {
    console.log(task);
    return this.http
      .post(this.url, JSON.stringify(task), { headers: new HttpHeaders(this.headers) })
      .subscribe(response => console.log(response));
  }
  deleteTask(task: Task) {
    this.http
      .delete(this.url, { params: new HttpParams().set('data', JSON.stringify(task)) })
      .subscribe(response => console.log(response));
  }
}
