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

  constructor( private loginService: LoginService, private router: Router ) { }

  // récupération de la valeur des inputs

  get username() { return this.loginForm.get('username'); }

  get password() { return this.loginForm.get('password'); }

  loginForm: FormGroup;

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

    // envoi du formulaire
    this.loginService.login(this.loginForm.value)
    .subscribe(data => console.log(data.message));

    // redirection
    // this.router.navigate(['backpack']);
      }


}
