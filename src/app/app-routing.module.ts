import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProjectComponent } from './my-project/my-project.component';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { ChildTaskmanagerComponent } from './task-manager/child-taskmanager/child-taskmanager.component';

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
    path: 'chess-board',
    component: ChessBoardComponent
  },
  {
    path: 'task-manager',
    component: TaskManagerComponent
  },
  {
    path: 'child-taskmanager',
    component: ChildTaskmanagerComponent
  },
  {
    path: 'my-resume',
    component: MyResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
