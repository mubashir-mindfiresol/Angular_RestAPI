import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { IComments } from './comments';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private _url : string = environment.comments_url;

  constructor(private http: HttpClient) { }

  getComments(): Observable<IComments[]>{
    return this.http.get<IComments[]>(this._url);
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(new Error(error.message || "Server Error"));
  }
}
