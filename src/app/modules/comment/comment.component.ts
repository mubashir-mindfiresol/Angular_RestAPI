import { Component, OnDestroy, OnInit } from '@angular/core';
import {CommentsService} from './../../services/comments/comments.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit, OnDestroy {

  public comments = []; //Store the comments after making API Call
  
  subscription: Subscription;

  constructor(private _commentsService: CommentsService) {
     
   }

  //Initialization Life-Cycle Hook
  ngOnInit() {
   this.subscription = this._commentsService.getComments().subscribe( data => this.comments = data);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}
}
