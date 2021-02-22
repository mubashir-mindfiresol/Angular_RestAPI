import { Component, OnInit } from '@angular/core';
import {CommentsService} from './../services/comments/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  public comments = [];

  constructor(private _commentsService: CommentsService) {
     
   }

  ngOnInit() {
   this._commentsService.getComments().subscribe( data => this.comments = data);
  }

}
