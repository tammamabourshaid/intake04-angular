import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { ChildTaskmanagerComponent } from './child-taskmanager/child-taskmanager.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessBoardComponent,
    MyResumeComponent,
    TaskManagerComponent,
    MyProjectComponent,
    ChildTaskmanagerComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
