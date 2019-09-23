import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HeaderService } from './header.service';

/**
 * Ce service gère :
 * le login de l'utilisateur
 * la récupération des datas de l'utilisateur
 */

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor( private http: HttpClient, private headerService: HeaderService ) {

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
        catchError(this.handleError<any>('login'))
      );
}

getUserData(): Observable<any[]> {
  return this.http.get<any[]>('http://127.0.0.1:8000/apiuser/userdata', this.headerJwt)
    .pipe(
      tap(data => data)
    );
    }


 /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return (error);
  };
}
}
