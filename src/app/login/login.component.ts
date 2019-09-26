import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  data;

  constructor( private loginService: LoginService, private router: Router ) { }

  // récupération de la valeur des inputs

  get username() { return this.loginForm.get('username'); }

  get password() { return this.loginForm.get('password'); }

  loginForm: FormGroup;
  loading: boolean;
  error: string;

  ngOnInit() {

      // construction du formulaire
      this.loginForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', [
          Validators.required,
          ]),
      });

    // efface le jwt (pour test)
      localStorage.removeItem('jwt');
  }
  onSubmit() {

     this.loading = true;

     this.loginService.login(this.loginForm.value).subscribe(

      // traitement de la réponse HTTP, en cas d'erreur on affiche
      // l'erreur dans la vue
        users => {
          console.log('you\'re logged !');
          this.loading = false;
        },
        error => {
          this.error = error;

          this.loading = false;
        }
      );

    // redirection
    // this.router.navigate(['backpack']);
      }


    }



