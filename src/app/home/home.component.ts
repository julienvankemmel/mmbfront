import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../country.service';

/**
 * url pour récupérer le pays par nom choisi dans le select
 */
const urlPays = 'https://restcountries.eu/rest/v2/name/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

/**
 * déclaration des variables
 */
public liste: any;

public selectedPays = '';

constructor(public http: HttpClient, public router: Router, public countryService: CountryService) {}


selectChangeHandler(event: any) {

  /**
   * event handler pour récupérer le pays choisi
   * this.selectedPays contient le code alpha du
   * pays pour la requête API et l'id du pays pour
   * retrouver ses datas en db
   */
  this.selectedPays = event.target.value;
  this.router.navigate(['/country/' + this.selectedPays]);
  console.log(this.selectedPays);

}

  ngOnInit() {

    /**
     * appel dans la db pour afficher la liste des pays
     */
    this.liste = this.countryService.getCountry()

    .subscribe(data => {
      this.liste = data.countries;
      console.log(data);
    });
  }

  ngOnDestroy() {}
}
