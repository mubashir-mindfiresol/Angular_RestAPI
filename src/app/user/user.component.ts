import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public users = [];

  constructor(private _usersService: UsersService) {
     
   }

  ngOnInit() {
   this._usersService.getUsers().subscribe( data => this.users = data);
  }
  
}