
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
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
    path: 'my-resume',
    component: MyResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
