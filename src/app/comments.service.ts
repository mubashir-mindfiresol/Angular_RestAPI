import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { IComments } from './comments';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private _url : string = "http://jsonplaceholder.typicode.com/comments";

  constructor(private http: HttpClient) { }

  getComments(): Observable<IComments[]>{
    return this.http.get<IComments[]>(this._url);
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(new Error(error.message || "Server Error"));
  }
}
