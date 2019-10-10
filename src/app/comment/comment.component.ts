import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private commentService : CommentService) { }
  
  comment;
  ngOnInit() {
    // this.comment = this.commentService.getComment()
    // .subscribe(data =>{
    //   this.comment=data;
    // })
  }

}
