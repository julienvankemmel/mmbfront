import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

/**
 * Ce service gère :
<<<<<<< HEAD
 * la récupératio du jwt dans le localStorage
=======
 * la récupération du jwt dans le localStorage
>>>>>>> a643930319fe4c3e65b1d756982ce91794b176aa
 * la construction du header à inclure pour les requêtes
 * HTTP vers l'API
 */

/**
 * récupération du jwt dans le local storage
 */
const jwt = localStorage.getItem('jwt');

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

headerBuilder() {

  /**
   * création du header contenant le jwt
   */
  const httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${jwt}`
      })
  };

  return httpOptions;
}
}
