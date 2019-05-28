import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss']
})
export class AddTasksComponent implements OnInit {
  description: string;
  finished: number;
  name: string;

  constructor(private service: TaskService) {}

  ngOnInit() {}

  addTask() {
    this.service.addTask({ name: this.name, description: this.description, finished: this.finished });
  }
}
