import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodos } from './todos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private _url : string = "http://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) { }

  getTodos(): Observable<ITodos[]>{
    return this.http.get<ITodos[]>(this._url);
  }

}
