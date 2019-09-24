import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private loginService: LoginService, private router: Router ) { }

  ngOnInit() {
  }

  onSubmit(form) {

    // envoi du formulaire
    this.loginService.register(form.form.value)
    .subscribe(data => window.alert(data.message));

    // redirection
    this.router.navigate(['']);
      }

}
