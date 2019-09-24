import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
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

  err: any;

  /**
   * construction du header à envoyer avec la requête vers API
   */
    headerJwt = this.headerService.headerBuilder();

 /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */

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

        catchError(this.handleError<any>('login'))
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

        catchError(this.handleError<any>('login'))
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
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {


    // TODO: send the error to remote logging infrastructure
    // console.error(error); // log to console instead
     window.alert(error.error.violations[0].title);

    // TODO: better job of transforming error for user consumption
    // console.log(`${operation} failed: ${error.message}`);



    // Let the app keep running by returning an empty result.
     return (error);
  };
}
}
