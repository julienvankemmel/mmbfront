import { Component, OnInit } from '@angular/core';
import { BackpackService } from '../backpack.service';
import {Router} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private userService: UserService, private router: Router ) { }

  ngOnInit() {

    // efface le jwt
    localStorage.removeItem('jwt');
  }
  onSubmit(form) {

    // envoi du formulaire
    this.userService.login(form.form.value)
    .subscribe();

    // redirection
    this.router.navigate(['backpack']);
      }


}
