import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }
  /**
    *
    * @param email
    * méthode register utilisateur
    */
   sendEmail(email: any): Observable<any> {
    const url = 'http://127.0.0.1:8000/mail';
    return this.http.post<any>(url, email, { responseType: 'json' })
      .pipe(

        catchError(this.handleError<any>('login'))
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
