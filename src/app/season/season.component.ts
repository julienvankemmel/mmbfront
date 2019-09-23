import { Component, OnInit } from '@angular/core';
import { SeasonService } from '../season.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {

  constructor(private seasonService : SeasonService) { }
  
  season;
  ngOnInit() {
    this.season = this.seasonService.getSeason()
    .subscribe(data =>{
      this.season=data;
    })
  }

}
