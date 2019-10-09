import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) {}

  getComment(id):Observable<any[]>{
    return this.http.get<any[]>('http://127.0.0.1:8000/comment/'+id)
    .pipe(
      tap(data => data)
    )
  }

  getCommentById(id): Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/api/comments'+id)
    .pipe(
      tap(data => data)
    )
  }

  /**
   * @param comment
   * @param id
   */
  putComment(comment, id): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/comments' + id;
    console.log(url);
    return this.http.put<any>(url, comment, { responseType: 'json' })
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<any>('putComment'))
      );
}

  /**
   * @param id 
   */
  deleteComment(id): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/comments' + id;
    console.log(url);
    return this.http.delete<any>(url, id)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<any>('deleteComment'))
      );
  }

  /**
   * @param comment 
   */
  addComment(comment): Observable<any> {
    let url = 'http://127.0.0.1:8000/api/comments';
    return this.http.post<any>(url, comment, { responseType: 'json' })
      .pipe(
        tap((data) => console.log(data)),
        catchError(this.handleError<any>('addComment'))
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
