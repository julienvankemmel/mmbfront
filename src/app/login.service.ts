import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { HeaderService } from './header.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

/**
 * Ce service gère :
 * l'inscription utilisateur
 * le login de l'utilisateur
 * la gestion de la variable loggedIn
 * qui représente la connexion utilisateur (pour auth guard)
 */

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient, private headerService: HeaderService, private router: Router,
              private userService: UserService) {

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

        map((data) => {

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
/**
 * Deconnexion
 */
  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('jwt');
    this.router.navigate(['/home']);
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
 * Traitement des erreurs HTTP
 */

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

}

