import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryItemService {
  
  constructor(private http:HttpClient) { }
  getCategoryItem():Observable<any[]>{
    return this.http.get<any[]>('http://127.0.0.1:8000/categoryitem')
    .pipe(
      tap(data => data)
    )
  }
  getCategoryItemById(id): Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/api/category_items'+id)
    .pipe(
      tap(data => data)
    )
  }
  /**
 * 
 * @param categoryItem
 * @param id 
 * méthode pour mettre un employé par son ID
 */
putCategoryItem(categoryItem, id): Observable<any> {
  const url = 'http://127.0.0.1:8000/api/category_items' + id;
  console.log(url);
  return this.http.put<any>(url, categoryItem, { responseType: 'json' })
    .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError<any>('putCategoryItem'))
    );
}

/**
 * @param id 
 */
deleteCategoryItem(id): Observable<any> {
  const url = 'http://127.0.0.1:8000/api/category_items' + id;
  console.log(url);
  return this.http.delete<any>(url, id)
    .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError<any>('deleteCategoryItem'))
    );
}

/**
 * @param categoryItem
 */
addCategoryItem(categoryItem): Observable<any> {
  let url = 'http://127.0.0.1:8000/api/category_items';
  return this.http.post<any>(url, categoryItem, { responseType: 'json' })
    .pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError<any>('addCategoryItem'))
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
