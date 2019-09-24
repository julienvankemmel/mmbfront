import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor(private countryService : CountryService) { }
  
  country;
  ngOnInit() {
    this.country = this.countryService.getCountry()
    .subscribe(data =>{
      this.country=data;
    })
  }

}
