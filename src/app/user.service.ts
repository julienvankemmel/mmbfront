import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { HeaderService } from './header.service';

/**
 * Ce service gère :
 * l'affichage des datas de l'utilisateur
 * la mise à jour du profil
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private headerService: HeaderService) {}

  /**
   * affichage des datas utilisateur connecté
   */
  getUserData(): Observable<any[]> {
    return this.http.get<any[]>('http://127.0.0.1:8000/api/userdata')
    .pipe(map(data => data),

          catchError(this.handleDeconnectionError),

      );
  }

  /**
   * @param user
   * @param id
   * méthode pour mettre à jour son profil
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

  /**********************************  requêtes à voir si utiles ********************************************* */

  getUserById(id): Observable < any > {
    return this.http.get < any > ('http://127.0.0.1:8000/api/users/' + id)
      .pipe(
        tap(data => data)
      );
  }

  /**
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
 * Traitement des erreurs HTTP
 */

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

  /**
   * @param error
   * traitement des erreurs deconnexion
   * si l'utilisateur est deconnecté, jwt expiré,
   * une erreur 401 est renvoyée, on se basera
   * sur cela pour gérer la deconnexion
   */
  handleDeconnectionError(error) {

    let errorStatus: number;

    errorStatus = error.error.code;
    console.log(errorStatus);
    return throwError(errorStatus);

  }

}
