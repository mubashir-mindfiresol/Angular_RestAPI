import { Component, OnInit } from '@angular/core';
import {TodosService} from './../../services/todos/todos.service';
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  
  componentDestroyed$: Subject<boolean> = new Subject();

  public todos = []; //Store the To-Dos list in an array after fetching from API
  constructor(private _todosService: TodosService) {
     
   }

  //Initialization Life-Cycle Hook
  ngOnInit() {
   this._todosService.getTodos().pipe(takeUntil(this.componentDestroyed$)).subscribe( data => this.todos = data);
  }

  //Ending the Life-Cycle Hook
  ngOnDestroy() {
    this.componentDestroyed$.next(true)
    this.componentDestroyed$.complete()
  }
}
