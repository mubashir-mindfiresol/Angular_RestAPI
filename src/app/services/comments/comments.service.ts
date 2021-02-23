import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { IComments } from './comments';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { constant } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private _url : string = constant.comments_url;

  constructor(private http: HttpClient) { }

  getComments(): Observable<IComments[]>{
    return this.http.get<IComments[]>(this._url);
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(new Error(error.message || "Server Error"));
  }
}
