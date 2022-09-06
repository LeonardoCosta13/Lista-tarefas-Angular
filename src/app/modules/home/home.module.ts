import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Components
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDelleteAllComponent } from './components/todo-button-dellete-all/todo-button-dellete-all.component';
import { TodoInpuAddItensComponent } from './components/todo-input-add-itens/todo-inpu-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

// Pages
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDelleteAllComponent,
    TodoInpuAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
