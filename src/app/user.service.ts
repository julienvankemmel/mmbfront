import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  getUser(): Observable<any[]> {
    return this.http.get<any[]>('http://127.0.0.1:8000/api/users')
      .pipe(
        tap(data => data)
      )
  }
  getUserById(id): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/users/' + id)
      .pipe(
        tap(data => data)
      )
  }

  /**
 * 
 * @param user
 * @param id 
 * méthode pour mettre un employé par son ID
 */
  putUser(user, id): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/users/' + id;
    console.log(url);
    return this.http.put<any>(url, user, { responseType: 'json' })
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<any>('putUser'))
      );
  }

  /**
   * 
   * @param id 
   * méthode pour supprimer un employé par son ID
   */
  deleteUser(id): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/users/' + id;
    console.log(url);
    return this.http.delete<any>(url, id)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<any>('deleteUser'))
      );
  }

  /**
   * 
   * @param user
   * méthode pour insérer un employé 
   */
  addUser(user): Observable<any> {
    let url = 'http://127.0.0.1:8000/api/users/';
    return this.http.post<any>(url, user, { responseType: 'json' })
      .pipe(
        tap((data) => console.log(data)),
        catchError(this.handleError<any>('addUser'))
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


