import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import { BackpackService } from '../backpack.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';



@Component({
  selector: 'app-backpackform',
  templateUrl: './backpackform.component.html',
  styleUrls: ['./backpackform.component.css']
})
export class BackpackformComponent implements OnInit {

    backpackForm: FormGroup;
    items: FormArray;
  error: any;
  response: any;
  idCountry;
  form: any[];
  titleForm: any;

    constructor(private loginService: LoginService, private userService: UserService,
                private route: ActivatedRoute, private formBuilder: FormBuilder, private backpackService: BackpackService) {

            // construction du formulaire
            this.backpackForm = this.formBuilder.group({

              title: '',
              idCountry: '',

              });

     /**
      * ActivatedRoute permet de récuperer l'ID
      */
            this.route.params.subscribe( params => this.id = params.id);
    }

  id: any;
  trip: any;
  user: any;
  public selectedTrip = '';

   /**
    * action quand l'utilisateur va choisir un pays dans le select
    */
selectChangeHandler(event: any) {

  /**
   * event handler pour récupérer le pays choisi
   */
  this.selectedTrip = event.target.value;
  console.log(this.selectedTrip);

}

  onSubmit() {


    this.titleForm = this.backpackForm.value.title;
    this.idCountry = this.trip['0'].countries['0'].id;
    this.form = {

      "title":this.titleForm,
      "idCountry":this.idCountry
    }

    console.log(this.form);

    this.backpackService.addBackpack(this.form, this.selectedTrip, this.id).subscribe(

      // traitement de la réponse HTTP, en cas d'erreur on affiche
      // l'erreur dans la vue
        response => {

          this.response = response.message;

        },
        error => {
          this.error = error;
          // console.log(error, 'ok composant');

        }
      );;
  }

    ngOnInit() {

      /**
       * affichage des datas de l'utilisateur (pour test)
       */
      this.trip = this.userService.getUserData()
      .subscribe(data => {
      this.trip = data['user'].trip;
      this.id;
      console.log(this.trip);
      });

  }
}
