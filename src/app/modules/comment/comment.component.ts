import { Component, OnInit } from '@angular/core';
import {CommentsService} from './../../services/comments/comments.service';
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  componentDestroyed$: Subject<boolean> = new Subject();
  public comments = []; //Store the comments after making API Call

  constructor(private _commentsService: CommentsService) {
     
   }

  //Initialization Life-Cycle Hook
  ngOnInit() {
   this._commentsService.getComments().pipe(takeUntil(this.componentDestroyed$)).subscribe( data => this.comments = data);
  }

  //Ending the Life-Cycle Hook
  ngOnDestroy() {
    this.componentDestroyed$.next(true)
    this.componentDestroyed$.complete()
  }
}
