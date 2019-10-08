import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(private loginService: LoginService, private userService: UserService,
              private route: ActivatedRoute, private router: Router) {

    /**
     * ActivatedRoute permet de récuperer l'ID
     */
    this.route.params.subscribe(params => this.id = params.id);



    this.user = this.loginService.getUserData()
    .subscribe(data => {
      this.user = data['user'];
    },
    error => {
      /**
       * erreur 401 indique que le jwt est expiré
       * on redirige vers le login
       */
    /*  if (error === 401) {

        localStorage.removeItem('jwt');
        this.router.navigate(['login']);
      }*/

    });

  }

  id: any;
  user: any;

  ngOnInit() {

    /**
     * affichage des datas de l'utilisateur (pour test)
     */
    this.user = this.loginService.getUserData();

  }

  ngOnDestroy() {

    // this.user.unsubscribe();
  }
}
