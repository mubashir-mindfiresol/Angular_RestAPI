import { Component, OnInit } from '@angular/core';
import {TodosService} from './../../services/todos/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public todos = []; //Store the To-Dos list in an array after fetching from API
  constructor(private _todosService: TodosService) {
     
   }

  //Initialization Life-Cycle Hook
ngOnInit() {
   this._todosService.getTodos().subscribe( data => this.todos = data);
  }
}
