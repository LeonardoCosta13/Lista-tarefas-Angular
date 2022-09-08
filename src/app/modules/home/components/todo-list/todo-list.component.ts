import { Component, DoCheck, OnInit } from '@angular/core';

// Interface
import { TaskListe } from '../../model/task-liste';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

    public taskList: Array<TaskListe> = JSON.parse(localStorage.getItem("list") || '[]');
    constructor() { }

      ngDoCheck() {
        this.setLovalStorate();
       
        
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

  public validadorInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm("Tarefa esta vazia, deseja deletar?")
      if(confirm){
        this.deleteItemTaskList(index)};
    }
  }

  public setLovalStorate(){
    if(this.taskList){
      this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked));
    localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}
