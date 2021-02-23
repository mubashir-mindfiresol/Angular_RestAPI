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

  public users = []; //Store the user names fetched from API
  
  componentDestroyed$: Subject<boolean> = new Subject()

  constructor(private _usersService: UsersService) {
     
   }

  //Initialization Life-Cycle Hook
  ngOnInit() {
   this._usersService.getUsers().pipe(takeUntil(this.componentDestroyed$)).subscribe( data => this.users = data);
  }
  
  //Destroy the Instance
  ngOnDestroy() {
    this.componentDestroyed$.next(true)
    this.componentDestroyed$.complete()
  }
}
