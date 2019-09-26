import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HeaderService } from './header.service';
import {Router} from '@angular/router';

/**
 * Ce service gère :
 * le login de l'utilisateur
 * la récupération des datas de l'utilisateur
 */

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient, private headerService: HeaderService, private router: Router ) {

   }

  /**
   * construction du header à envoyer avec la requête vers API
   */
    headerJwt = this.headerService.headerBuilder();

   /**
    *
    * @param user
    * méthode login utilisateur
    */
  login(user: any): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/login_check';
    return this.http.post<any>(url, user, { responseType: 'json' })
      .pipe(

        // enregistrement du jwt dans le localStorage
        tap((data) => localStorage.setItem('jwt', data.token)),

         catchError(this.handleLoginError)

      );

  }

   /**
    *
    * @param user
    * méthode register utilisateur
    */
   register(user: any): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/register';
    return this.http.post<any>(url, user, { responseType: 'json' })
      .pipe(

        catchError(this.handleRegisterError)

      );

  }

    /**
     * affichage liste utilisateurs (pour test)
     */
    getUserData(): Observable<any[]> {
  return this.http.get<any[]>('http://127.0.0.1:8000/api/userdata', this.headerJwt)
    .pipe(
      tap(data => data)
    );

    }


/**
 *
 * @param error
 * traitement des erreurs login
 */
handleLoginError(error) {

  let errorMessage = '';

  errorMessage = error.error.message;

  return throwError(errorMessage);
}

/**
 *
 * @param error
 * traitement des erreurs register
 */
handleRegisterError(error) {

  let errorMessage = '';

  errorMessage = error.error.violations[0].title;

  return throwError(errorMessage);
}

}

