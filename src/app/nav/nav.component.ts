import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  /**
   * on va vérifier l'état de la variable isLoggedIn
   * de loginService pour modifier la navbar en fonction de son état
   */

  /**
   * on déclare la variable isLoggedIn
   */
  isLoggedIn$: Observable<boolean>;

  constructor(private loginService: LoginService, private router: Router, private userService: UserService) { }
  user;
  ngOnInit() {
    /**
     * on vérifie l'état (true/false) de get isLoggedIn
     * de login.service.ts
     */
    this.isLoggedIn$ = this.loginService.isLoggedIn;

    /**
     * on get les data utilisateurs
     */
    this.user = this.userService.getUserData()
    .subscribe(data => {
      this.user = data['user'];
    });
  }

  logOut() {
    this.loginService.logout();
  }
}
