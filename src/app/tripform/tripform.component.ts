import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../country.service';
import { TripService } from '../trip.service';
import { Router } from '@angular/router';
import { CountryListService } from '../country-list.service';


/**
 * url pour récupérer le pays par nom choisi dans le select
 */
const urlPays = 'https://restcountries.eu/rest/v2/name/';


@Component({
  selector: 'app-tripform',
  templateUrl: './tripform.component.html',
  styleUrls: ['./tripform.component.css']
})
export class TripformComponent implements OnInit {

  /**
   * déclaration des variables
  */



  public liste: any;

  public selectedPays = '';

  

  /**
 * action quand l'utilisateur va choisir un pays dans le select
 */
  selectChangeHandler(event: any) {

  /**
   * event handler pour récupérer le pays choisi
   */
  this.selectedPays = event.target.value;
  console.log(this.selectedPays);

}
  
  constructor( private loginService: LoginService, private userService: UserService,
    private route: ActivatedRoute, public http: HttpClient, public router: Router,
     public countryService: CountryService, public tripService: TripService,
     public countryListService:CountryListService) {

      // construction du formulaire
      this.tripForm = new FormGroup({
        name: new FormControl('', Validators.minLength(2)),
        startDate: new FormControl('', ),
        endDate: new FormControl('', ),
        content: new FormControl('', )
        });
      
/**
* ActivatedRoute permet de récuperer l'ID
*/
this.route.params.subscribe( params => this.id = params.id);

}


// récupération de la valeur des inputs

get name() { return this.tripForm.get('name'); }

get startDate() { return this.tripForm.get('startDate'); }

get endDate() { return this.tripForm.get('endDate'); }

get content() { return this.tripForm.get('content'); }


tripForm: FormGroup;
loading: boolean;
error: string;
user: any;
id: any;


ngOnInit() {

  this.liste = this.countryListService.getCountryList();
/**
* affichage des datas de l'utilisateur (pour test)
*/
/*this.user = this.loginService.getUserData()
.subscribe(data => {
this.user = data.user;
console.log(data.user.id);
});*/

}

onSubmit() {

  this.tripService.addTrip(this.tripForm.value, this.selectedPays, this.id).subscribe(

    // traitement de la réponse HTTP, en cas d'erreur on affiche
    // l'erreur dans la vue
      trip => {
        console.log(trip);
        this.loading = false;

         // redirection
      this.router.navigate(['trippage/'+this.id]);
      },
      error => {
        this.error = error;
        console.log(error);

        this.loading = false;
      }
    );



}

}
