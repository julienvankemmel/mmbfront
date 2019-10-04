import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private loginService: LoginService, private userService: UserService,
              private route: ActivatedRoute) {

    /**
     * ActivatedRoute permet de récuperer l'ID
     */
this.route.params.subscribe( params => this.id = params.id);
               }

id: any;
user: any;

  ngOnInit() {

    /**
     * affichage des datas de l'utilisateur (pour test)
     */
    this.user = this.loginService.getUserData()
    .subscribe(data => {
      this.user = data;
      console.log(data);
    });
  }

}
