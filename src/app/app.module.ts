import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { ChildTaskmanagerComponent } from './child-taskmanager/child-taskmanager.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChessBoardComponent,
    MyResumeComponent,
    TaskManagerComponent,
    MyProjectComponent,
    ChildTaskmanagerComponent,
    TaskFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
