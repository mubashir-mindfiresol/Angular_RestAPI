import { Component, OnInit } from '@angular/core';
import {TodosService} from './../services/todos/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public todos = [];
  constructor(private _todosService: TodosService) {
     
   }

  ngOnInit() {
   this._todosService.getTodos().subscribe( data => this.todos = data);
  }
}
