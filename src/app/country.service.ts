import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient) {}

  getCountry():Observable<any[]>{
    return this.http.get<any[]>('http://127.0.0.1:8000/api/countries')
    .pipe(
      tap(data => data)
    )
  }

  getCountryById(id): Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/api/countries'+id)
    .pipe(
      tap(data => data)
    )
  }

  /**
   * @param country
   * @param id
   */
  putCountry(country, id): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/countries' + id;
    console.log(url);
    return this.http.put<any>(url, country, { responseType: 'json' })
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<any>('putCountry'))
      );
}

  /**
   * @param id 
   */
  deleteCountry(id): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/countries' + id;
    console.log(url);
    return this.http.delete<any>(url, id)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<any>('deleteCountry'))
      );
  }

  /**
   * @param country 
   */
  addCountry(comment): Observable<any> {
    let url = 'http://127.0.0.1:8000/api/countries';
    return this.http.post<any>(url, comment, { responseType: 'json' })
      .pipe(
        tap((data) => console.log(data)),
        catchError(this.handleError<any>('addCountry'))
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
