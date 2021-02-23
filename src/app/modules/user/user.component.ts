import { Component, OnDestroy, OnInit } from '@angular/core';
import {UsersService} from './../../services/users/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  public users = []; //Store the user names fetched from API
  subscription: Subscription;

  constructor(private _usersService: UsersService) {
     
   }

  //Initialization Life-Cycle Hook
  ngOnInit() {
    this.subscription = this._usersService.getUsers().subscribe( data => this.users = data);
  }
  
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}
}
