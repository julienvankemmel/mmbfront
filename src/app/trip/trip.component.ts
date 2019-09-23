import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';


@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  constructor(private tripService : TripService) { }
  trip;
  ngOnInit() {
    this.trip = this.tripService.getTrip()
    .subscribe(data =>{
      this.trip=data;
    })
  }

}
