import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }
  getTrip(): Observable<any[]> {
    return this.http.get<any[]>('http://127.0.0.1:8000/api/trips')
      .pipe(
        tap(data => data)
      )
  }
  getTripById(id): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/trips/' + id)
      .pipe(
        tap(data => data)
      )
  }

  /**
 * 
 * @param trip
 * @param id 
 * méthode pour mettre un voyage par son ID
 */
  putTrip(trip, id): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/trips/' + id;
    console.log(url);
    return this.http.put<any>(url, trip, { responseType: 'json' })
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<any>('putTrip'))
      );
  }

  /**
   * 
   * @param id 
   * méthode pour supprimer un voyage par son ID
   */
  deleteTrip(id): Observable<any> {
    const url = 'http://127.0.0.1:8000/trip/delete/' + id;
    console.log(url);
    return this.http.delete<any>(url, id)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<any>('deleteTrip'))
      );
  }

  /**
   * 
   * @param trip
   * méthode pour insérer un voyage 
   */
  addTrip(trip, idCountry, idUser): Observable<any> {
    let url = 'http://127.0.0.1:8000/trip/new/' + idCountry + '/' + idUser;
    console.log(url);
    return this.http.post<any>(url, trip, { responseType: 'json' })
      .pipe(
        tap((data) => console.log(data)),
        catchError(this.handleError<any>('addTrip'))
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

