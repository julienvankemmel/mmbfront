import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { HeaderService } from './header.service';
import { Router } from '@angular/router';

/**
 * Ce service gère :
 * l'inscription utilisateur
 * le login de l'utilisateur
 * la gestion de la variable loggedIn
 * qui représente la connexion utilisateur (pour auth guard)
 * la récupération des datas de l'utilisateur
 */

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient, private headerService: HeaderService, private router: Router) {

  }
  data: any;
  user: any;

  /**
   * on crée une variable loggedIn qui va vérifier que l'utilisateur est
   * connecté
   */
  private loggedIn = new BehaviorSubject<boolean>(this.tokenAvailable());

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  /**
   * construction du header à envoyer avec la requête vers API
   */
  headerJwt = this.headerService.headerBuilder();

  /**
   * cette fonction permet de garder loogedIn à true
   * tant que le jwt est en mémoire
   */
  private tokenAvailable(): boolean {
    return !!localStorage.getItem('jwt');
  }

  /**
   *
   * @param user
   * méthode login utilisateur
   */
  login(user: any): Observable<any> {

    const url = 'http://127.0.0.1:8000/api/login_check';
    return this.http.post<any>(url, user, { responseType: 'json' })
      .pipe(

        tap((data) => {
          if (data) {
            /**
             * si on reçoit une réponse du serveur on enregistre le jwt et
             * on passe loggedIn à true
             */
            localStorage.setItem('jwt', data.token);
            this.loggedIn.next(true);

          }
        }),

        catchError(this.handleLoginError),
      );


  }

  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }

  /**
   *
   * @param user
   * méthode register utilisateur
   */
  register(user: any): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/register';
    return this.http.post<any>(url, user, { responseType: 'json' })
      .pipe(

      tap((data) => console.log(data)),

        catchError(this.handleRegisterError)

      );

  }

  /**
   * affichage liste utilisateurs (pour test)
   */
  getUserData(): Observable<any[]> {
    return this.http.get<any[]>('http://127.0.0.1:8000/api/userdata', this.headerJwt)
    .pipe(

          catchError(this.handleDeconnectionError),

      );


  }


  /**
   *
   * @param error
   * traitement des erreurs login
   */
  handleLoginError(error) {

    let errorMessage = '';

    errorMessage = error.error.message;

    return throwError(errorMessage);
  }

  /**
   *
   * @param error
   * traitement des erreurs register
   */
  handleRegisterError(error) {

    let errorMessage = '';

    errorMessage = error.error.violations[0].title;

    return throwError(errorMessage);
  }

  /**
   *
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

