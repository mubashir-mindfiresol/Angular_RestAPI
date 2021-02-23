import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { ITodos } from './todos';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { constant } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private _url : string = constant.todos_url;

  constructor(private http: HttpClient) { }

  getTodos(): Observable<ITodos[]>{
    return this.http.get<ITodos[]>(this._url);
  }
  
  errorHandler(error: HttpErrorResponse){
    return throwError(new Error(error.message || "Server Error"));
  }
}
