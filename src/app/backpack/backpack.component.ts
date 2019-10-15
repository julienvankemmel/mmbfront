import { Component, OnInit } from '@angular/core';
import { BackpackService } from '../backpack.service';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backpack',
  templateUrl: './backpack.component.html',
  styleUrls: ['./backpack.component.css']
})
export class BackpackComponent implements OnInit {

  constructor( private backpackService: BackpackService, private loginService: LoginService,
               private router: Router, private userService: UserService) { }
  backpack;
  user;

  ngOnInit() {

    this.backpack = this.backpackService.getBackpack()
    .subscribe(data => {
      this.backpack = data;
      console.log(data);
    });

    /**
     * affichage des datas de l'utilisateur (pour test)
     */
    this.user = this.userService.getUserData()
    .subscribe(data => {
      this.user = data;
      console.log(data);
    },
    error => {
      /**
       * erreur 401 indique que le jwt est expiré
       * on redirige vers le login
       */
      if (error === 401) {
        localStorage.removeItem('jwt');
        this.router.navigate(['login']);

          }
        });
  }

}
