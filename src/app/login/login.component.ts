import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { BackpackService } from '../backpack.service';
import {Router} from '@angular/router';
import { UserService } from '../user.service';
=======
import {Router} from '@angular/router';
import { LoginService } from '../login.service';
>>>>>>> a643930319fe4c3e65b1d756982ce91794b176aa

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  constructor( private userService: UserService, private router: Router ) { }

  ngOnInit() {

    // efface le jwt
=======
  constructor( private loginService: LoginService, private router: Router ) { }

  ngOnInit() {

    // efface le jwt (pour test)
>>>>>>> a643930319fe4c3e65b1d756982ce91794b176aa
    localStorage.removeItem('jwt');
  }
  onSubmit(form) {

    // envoi du formulaire
<<<<<<< HEAD
    this.userService.login(form.form.value)
    .subscribe();

    // redirection
    this.router.navigate(['backpack']);
=======
    this.loginService.login(form.form.value)
    .subscribe();

    // redirection
    // this.router.navigate(['backpack']);
>>>>>>> a643930319fe4c3e65b1d756982ce91794b176aa
      }


}
