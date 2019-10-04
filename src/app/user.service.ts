import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  map,
  tap,
  catchError
} from 'rxjs/operators';
import {
  Observable,
  throwError
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUser(): Observable < any[] > {
    return this.http.get < any[] > ('http://127.0.0.1:8000/api/users')
      .pipe(
        tap(data => data)
      )
  }
  getUserById(id): Observable < any > {
    return this.http.get < any > ('http://127.0.0.1:8000/api/users/' + id)
      .pipe(
        tap(data => data)
      )
  }

  /**
   *
   * @param user
   * @param id
   * méthode pour mettre à jour un employé par son ID
   */
  putUser(user, id): Observable < any > {
    const url = 'http://127.0.0.1:8000/user/edit/' + id;

    return this.http.put < any > (url, user, {
        responseType: 'json'
      })
      .pipe(
        tap(data => data),

        catchError(this.handleUpdateUserError),

      );
  }

  /**
   *
   * @param id
   * méthode pour supprimer un employé par son ID
   */
  deleteUser(id): Observable < any > {
    const url = 'http://127.0.0.1:8000/api/users/' + id;
    console.log(url);
    return this.http.delete < any > (url, id)
      .pipe(
        tap(data => console.log(data)),

      );
  }

  /**
   * 
   * @param user
   * méthode pour insérer un employé
   */
  addUser(user): Observable < any > {
    const url = 'http://127.0.0.1:8000/api/users/';
    return this.http.post < any > (url, user, {
        responseType: 'json'
      })
      .pipe(
        tap((data) => console.log(data)),

      );
  }

  /**
   *
   * @param error
   * traitement des erreurs update user
   */
  handleUpdateUserError(error) {

    let errorMessage = '';

    errorMessage = error.error.message;

    return throwError(errorMessage);
  }

}
