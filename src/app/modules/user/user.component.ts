import { Component, OnInit } from '@angular/core';
import {UsersService} from './../../services/users/users.service';
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  componentDestroyed$: Subject<boolean> = new Subject();
  public users = []; //Store the user names fetched from API

  constructor(private _usersService: UsersService) {
     
   }

  //Initialization Life-Cycle Hook
  ngOnInit() {
   this._usersService.getUsers().pipe(takeUntil(this.componentDestroyed$)).subscribe( data => this.users = data);
  }
  
  //Ending the Life-Cycle Hook
  ngOnDestroy() {
    this.componentDestroyed$.next(true)
    this.componentDestroyed$.complete()
  }
}
