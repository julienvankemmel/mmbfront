import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-backpackform',
  templateUrl: './backpackform.component.html',
  styleUrls: ['./backpackform.component.css']
})
export class BackpackformComponent implements OnInit {

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
        this.user = data.user;
        console.log(data);
      });
    }
  
}
