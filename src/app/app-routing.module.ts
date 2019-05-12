
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { TaskMangerComponent } from './task-manger/task-manger.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  },
  {
    path: 'chess-board',
    component: ChessBoardComponent
  },
  {
    path: 'task-manager',
    component: TaskMangerComponent
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
