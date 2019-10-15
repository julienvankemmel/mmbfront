import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Observable, interval } from 'rxjs';
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
  user: any;
 

  constructor(private loginService: LoginService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    /**
     * on vérifie l'état (true/false) de get isLoggedIn
     * de login.service.ts
     */
    this.isLoggedIn$ = this.loginService.isLoggedIn;


    /**
     * on get les data utilisateurs
     */
    if (this.isLoggedIn$) {
      this.user = this.userService.getUserData()
      .subscribe(data => {
        this.user = data['user'];
      });
    }

  }

  logOut() {
    this.loginService.logout();
  }
}
