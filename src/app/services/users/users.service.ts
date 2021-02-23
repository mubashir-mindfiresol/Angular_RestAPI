import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { IUsers } from './users';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { constant } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _url : string = constant.users_url;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUsers[]>{
    return this.http.get<IUsers[]>(this._url);
  }
  
  errorHandler(error: HttpErrorResponse){
    return throwError(new Error(error.message || "Server Error"));
  }
}