import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackpackItemService {
  constructor(private http: HttpClient) { }
  getBackpackItem(): Observable<any[]> {
    return this.http.get<any[]>('http://127.0.0.1:8000/api/backpack_items')
      .pipe(
        tap(data => data)
      )
  }
  getBackpackItemById(id): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/backpack_items/' + id)
      .pipe(
        tap(data => data)
      )
  }
  /**
 * 
 * @param backpackItem
 * @param id 
 * méthode pour mettre un employé par son ID
 */
  putBackpackItem(backpackItem, id): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/backpack_items/' + id;
    console.log(url);
    return this.http.put<any>(url, backpackItem, { responseType: 'json' })
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<any>('putBackpackItem'))
      );
  }

  /**
   * 
   * @param id 
   * méthode pour supprimer un employé par son ID
   */
  deleteBackpackItem(id): Observable<any> {
    const url = 'http://127.0.0.1:8000/backpackitem/' + id;
    console.log(url);
    return this.http.delete<any>(url, id)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<any>('deleteBackpackItem'))
      );
  }

  /**
   * 
   * @param backpackItem
   * méthode pour insérer un employé 
   */
  addBackpackItem(backpackItem, userId, backpackId): Observable<any> {
    let url = 'http://127.0.0.1:8000/backpackitem/new/'+userId+'/'+backpackId;
    return this.http.post<any>(url, backpackItem, { responseType: 'json' })
      .pipe(
        tap((data) => data),
        catchError(this.handleError<any>('addbackpackItem'))
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
