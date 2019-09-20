import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryBackpackService {
  constructor(private http:HttpClient) { }
  getCategoryBackpack():Observable<any[]>{
    return this.http.get<any[]>('http://127.0.0.1:8000/api/category_backpacks')
    .pipe(
      tap(data => data)
    )
  }
  getCategoryBackpackById(id): Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/api/category_backpacks'+id)
    .pipe(
      tap(data => data)
    )
  }
  /**
 * 
 * @param categoryBackpack
 * @param id 
 * méthode pour mettre un employé par son ID
 */
putCategoryBackpack(categoryBackpack, id): Observable<any> {
  const url = 'http://127.0.0.1:8000/api/category_backpacks' + id;
  console.log(url);
  return this.http.put<any>(url, categoryBackpack, { responseType: 'json' })
    .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError<any>('putCategoryBackpack'))
    );
}

/**
 * 
 * @param id 
 * méthode pour supprimer un employé par son ID
 */
deleteCategoryBackpack(id): Observable<any> {
  const url = 'http://127.0.0.1:8000/api/category_backpacks' + id;
  console.log(url);
  return this.http.delete<any>(url, id)
    .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError<any>('deleteCategoryBackpack'))
    );
}

/**
 * 
 * @param categoryBackpack
 * méthode pour insérer un employé 
 */
addCategoryBackpack(categoryBackpack): Observable<any> {
  let url = 'http://127.0.0.1:8000/api/category_backpacks';
  return this.http.post<any>(url, categoryBackpack, { responseType: 'json' })
    .pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError<any>('addcategorybackpack'))
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
