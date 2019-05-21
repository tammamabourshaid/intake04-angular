import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProjectComponent } from './my-project/my-project.component';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TaskmanagerListComponent } from './taskmanager-list/taskmanager-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/my-project',
    pathMatch: 'full'
  },
  {
    path: 'my-project',
    component: MyProjectComponent
  },
  {
    path: 'my-resume',
    component: MyResumeComponent
  },
  {
    path: 'chess-board',
    component: ChessBoardComponent
  },
  {
    path: 'task-manager',
    component: TaskManagerComponent
  },
  {
    path: 'taskmanager-list',
    component: TaskmanagerListComponent
  },
  {
    path: 'task-form',
    component: TaskFormComponent
  },
  {
    path: 'add-tasks',
    component: AddTasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
