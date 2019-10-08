import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { LoginService } from './login.service';

/**
 * Cette classe permet de contrôler l'accès aux pages
 * en ajoutant l'options canActivate: [AuthGuard] aux routes
 * dans app-routing, si l'utilisateur n'est pas logué
 * on le redirige vers une page qui lui indique de se loguer
 */

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    // tslint:disable-next-line: no-shadowed-variable
    private LoginService: LoginService,
    private router: Router
  ) {}

  /**
   *
   * @param next
   * @param state
   * on vérifie que la variable isLoggedIn de loginService
   * est true, si elle est false on renvoie sur la page login
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.LoginService.isLoggedIn
      .pipe(
        take(1),
        map((isLoggedIn: boolean) => {
          if (!isLoggedIn) {
            this.router.navigate(['/login']);
            return false;
          }
          return true;
        }));

  }
}
