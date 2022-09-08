import { Component, OnInit } from '@angular/core';

// Interface
import { TaskListe } from '../../model/task-liste';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

    public taskList: Array<TaskListe> = [];
    constructor() { }

    ngOnInit(): void {
    }

    public setEmiteTaskList(event: string){
      this.taskList.push({task: event, checked: false});
    }

    public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Realmente quer deletar tudo?");

    if(confirm){
      this.taskList = [];
    }
    
  }
}
