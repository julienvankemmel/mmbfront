import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private loginService: LoginService, private router: Router ) { }

  ngOnInit() {

    // efface le jwt
    localStorage.removeItem('jwt');
  }
  onSubmit(form) {

    // envoi du formulaire
    this.loginService.login(form.form.value)
    .subscribe();

    // redirection
    // this.router.navigate(['backpack']);
      }


}
