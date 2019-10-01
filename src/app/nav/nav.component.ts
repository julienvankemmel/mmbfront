import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  /**
   * on déclare la variable isLoggedIn
   */
  isLoggedIn$: Observable<boolean>;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {

    /**
     * on vérifie l'état (true/false) de get isLoggedIn
     * de login.service.ts
     */
    this.isLoggedIn$ = this.loginService.isLoggedIn;


  }

  logOut() {

    this.loginService.logout();
  }

}
