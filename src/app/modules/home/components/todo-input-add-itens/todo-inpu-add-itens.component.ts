import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-inpu-add-itens',
  templateUrl: './todo-inpu-add-itens.component.html',
  styleUrls: ['./todo-inpu-add-itens.component.scss']
})
export class TodoInpuAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public AddItemTaskList: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList(){
    this.AddItemTaskList = this.AddItemTaskList.trim();
    if(this.AddItemTaskList){
      this.emitItemTaskList.emit(this.AddItemTaskList);
      this.AddItemTaskList = "";
    }
 
  }

}
