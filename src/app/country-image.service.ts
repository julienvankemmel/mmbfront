import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryImageService {

  constructor(private http: HttpClient) { }
  
  getImageByCountry(name): Observable<any> {
    return this.http.get<any>('https://api.unsplash.com/search/photos?query=' + name + '&client_id=d5d5c5dbe07ca761c5c449e50e81dccbea8a8e7a3aa6d850e761aabbd51f959a')
      .pipe(
        tap(img => img),
        catchError(this.handleImgError),
      );
     
  }
  /**
   *
   * @param error
   * traitement des erreurs login
   */
  handleImgError(error) {

    let errorMessage = 'noImg';

    errorMessage = error;

    return throwError(errorMessage);
  }
}
