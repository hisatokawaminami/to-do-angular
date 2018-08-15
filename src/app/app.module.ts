import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
<<<<<<< HEAD
import { EditTaskComponent } from './edit-task/edit-task.component';
=======
>>>>>>> f7f5fc16ab454333fbb2e687c7a22d5851cdad15


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    TaskListComponent,
    EditTaskComponent
=======
    TaskListComponent
>>>>>>> f7f5fc16ab454333fbb2e687c7a22d5851cdad15
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
