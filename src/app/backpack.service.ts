import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackpackService {

  constructor(private http: HttpClient) { }
  getBackpack(): Observable<any[]> {
    return this.http.get<any[]>('http://127.0.0.1:8000/api/backpacks')
      .pipe(
        tap(data => data)
      )
  }
  getBackpackById(id): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/backpacks/' + id)
      .pipe(
        tap(data => data)
      )
  }

  /**
 * 
 * @param backpack
 * @param id 
 * méthode pour mettre un employé par son ID
 */
  putBackpack(backpack, id): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/backpacks/' + id;
    console.log(url);
    return this.http.put<any>(url, backpack, { responseType: 'json' })
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<any>('putBackpack'))
      );
  }

  /**
   * 
   * @param id 
   * méthode pour supprimer un employé par son ID
   */
  deleteBackpack(id): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/backpacks/' + id;
    console.log(url);
    return this.http.delete<any>(url, id)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<any>('deleteBackpack'))
      );
  }

  /**
   * 
   * @param backpack
   * méthode pour insérer un employé 
   */
  addBackpack(backpack): Observable<any> {
    let url = 'http://127.0.0.1:8000/api/backpacks/';
    return this.http.post<any>(url, backpack, { responseType: 'json' })
      .pipe(
        tap((data) => console.log(data)),
        catchError(this.handleError<any>('addbackpack'))
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
