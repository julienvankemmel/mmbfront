import { Component, OnInit } from '@angular/core';
import { NotationService } from '../notation.service';

@Component({
  selector: 'app-notation',
  templateUrl: './notation.component.html',
  styleUrls: ['./notation.component.css']
})
export class NotationComponent implements OnInit {

  constructor(private notationService : NotationService) { }
  
  notation;
  ngOnInit() {
    this.notation = this.notationService.getNotation()
    .subscribe(data =>{
      this.notation=data;
    })
  }

}
