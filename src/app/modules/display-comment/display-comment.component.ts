import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-comment',
  templateUrl: './display-comment.component.html',
  styleUrls: ['./display-comment.component.scss']
})
export class DisplayCommentComponent implements OnInit {

  @Input() comment:any;
  constructor() { }

  ngOnInit(): void {
  }

}
