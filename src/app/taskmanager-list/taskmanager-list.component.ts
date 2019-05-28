import { Task } from 'src/task';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-taskmanager-list',
  templateUrl: './taskmanager-list.component.html',
  styleUrls: ['./taskmanager-list.component.scss']
})
export class TaskmanagerListComponent implements OnInit {
  tasks: Observable<any>;

  constructor(private service: TaskService) {}

  ngOnInit() {
    this.tasks = this.service.getTasks();
  }

  delete(task: Task) {
    this.service.deleteTask(task);
  }
}
