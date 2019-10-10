import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CountryListService } from '../country-list.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

constructor(public http: HttpClient, public router: Router, public countryListService: CountryListService) {}
liste;
countryFilter: any = {name: ''};

  ngOnInit() {
    this.liste = this.countryListService.getCountryList();
    console.log(this.liste);
  }

 search() {
    document.getElementById('btn').click();
}
  ngOnDestroy() {}
}
