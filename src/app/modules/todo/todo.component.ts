import { Component, OnInit,OnDestroy } from '@angular/core';
import {TodosService} from './../../services/todos/todos.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {

  public todos = []; //Store the To-Dos list in an array after fetching from API

  subscription: Subscription;

  constructor(private _todosService: TodosService) {
     
   }

  //Initialization Life-Cycle Hook
  ngOnInit() {
    this.subscription = this._todosService.getTodos().subscribe( data => this.todos = data);
  }

 
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}
}
