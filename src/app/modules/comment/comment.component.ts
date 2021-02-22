import { Component, OnInit } from '@angular/core';
import {CommentsService} from './../../services/comments/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  public comments = []; //Store the comments after making API Call

  constructor(private _commentsService: CommentsService) {
     
   }

  //Initialization Life-Cycle Hook
  ngOnInit() {
   this._commentsService.getComments().subscribe( data => this.comments = data);
  }

}
