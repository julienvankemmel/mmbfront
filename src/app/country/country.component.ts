import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../country.service';
import { BackpackService } from '../backpack.service';
import { CountryImageService } from '../country-image.service';
import { CommentService } from '../comment.service';
import { UserService } from '../user.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

/**
 * url pour récupérer le pays par nom choisi dans le select
 * on envoie le code alpha récupérer dans l'URL pour effectuer la recherche
 * récupérer ici dans params => this.name = params.name ligne 37
 */
const urlCountry = 'https://restcountries.eu/rest/v2/alpha/';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit, OnDestroy {

  name: any;
  resultat: any;
  id: any;
  country: any;
  backpack: any;
  error: any;
  image: any;
  comments: any;
  user: any;
  commentForm: FormGroup;
  loading: boolean;

  constructor(public http: HttpClient, private route: ActivatedRoute, public countryService: CountryService,
    public backpackService: BackpackService, public countryImageService: CountryImageService, private commentService: CommentService,
    private userService: UserService, public router: Router) {

    /**
     * ActivatedRoute permet de récuperer le nom du pays et l'id
     * params.name contient le code alpha du pays du pays pour la
     * recherche API, params.id contient l'id pour récuperer les datas
     * en db
     */
    this.route.params.subscribe(params => this.name = params.name);
    this.route.params.subscribe(params => this.id = params.id);
  }
  ngOnInit() {
    /**
     * retour des datas restcountries
     */
    this.resultat = this.getPays();
    /**
     * recuperation des datas en db (backpacks, items, etc...)
     * en argument l'id du pays récupérer ici dans params => this.id = params.id
     * ligne 38
     */
    this.country = this.countryService.getCountryById(this.id)
      .subscribe(data => {

        this.country = data.country;
        console.log(this.country);
        /**
         * On recherche l'image via le nom de la capital sur unsplash
         */
        this.image = this.countryImageService.getImageByCountry(this.resultat.capital)
          .subscribe(img => {
          this.image = img['results']['0'];

          });
      });
    /**
     * 
     * Récupération des commentaires
     */
    this.comments = this.commentService.getComment(this.id)
      .subscribe(comments => {
      this.comments = comments['comment'];
      });
    /**
     * recup user
     */
    this.user = this.userService.getUserData()
      .subscribe(data => {
        this.user = data['user'];
      });

    // construction du formulaire
    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.minLength(1)),
    });
  }

  // récupération des datas du form
  get text() { return this.commentForm.get('text'); }

  //envoie du formulaire
  onSubmit(){
    this.commentService.putComment(this.commentForm.value,this.user.id,this.country.id).subscribe(

      // traitement de la réponse HTTP, en cas d'erreur on affiche
      // l'erreur dans la vue
        value => {
          this.loading = false;
          
          document.getElementById("comment").value="";

          this.comments = this.commentService.getComment(this.id)
          .subscribe(comments => {
          this.comments = comments['comment'];
          });
        },
        error => {
          this.error = error;
          console.log(error);
  
          this.loading = false;
        }
      );
  }

scrollToElement($element): void {
  $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}
/**
 *
 * requete à l'API restcountries pour afficher les données du pays
 */
getPays() {
  return this.http.get(urlCountry + this.name).subscribe(data => {
    this.resultat = data;
  });
}

ngOnDestroy() {
  // this.backpack.unsubscribe();
}
}
