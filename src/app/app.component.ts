import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'crazy-boo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
<<<<<<< HEAD

  masterTaskList: Task[] =[
  new Task('Finish weekend Angular homework for Epicodus course', 3),
  new Task('Begin brainstorming possible JavaScript group projects', 2),
  new Task('Add README file to last few Angular repos on GitHub', 1),
  ];

  selectedTask = null;

  editTask(clickedTask){
    this.selectedTask = clickedTask;
  }

=======
  selectedTask = null;

  masterTaskList: Task[] =[
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 2),
    ];
  
  editTask(clickedTask){
    this.selectedTask = clickedTask;
  }
  
>>>>>>> f7f5fc16ab454333fbb2e687c7a22d5851cdad15
  finishedEditing(){
    this.selectedTask = null;
  }
  }
