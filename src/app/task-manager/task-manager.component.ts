import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Task } from 'src/task';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {
  tasks: Array<Task> = [{ name: 'text', description: '', type: 'event', finished: true }];
  rootElement: Object;
  constructor() {}

  @ViewChild('taskcontainer', { read: ViewContainerRef }) taskcontainer: ViewContainerRef;
  ngOnInit() {
    this.rootElement = this.taskcontainer.element.nativeElement;
  }

  addTaskToList(task: Task) {
    this.tasks.push(task);
  }
}
