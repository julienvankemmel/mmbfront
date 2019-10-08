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

  }

  id: any;
  user: any;

  ngOnInit() {

    this.user = this.userService.getUserData()
  .subscribe(data => {
    this.user = data['user'];
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


  ngOnDestroy() {

    // this.user.unsubscribe();
  }
}
